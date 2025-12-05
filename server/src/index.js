import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import rateLimit from 'express-rate-limit'
import { createPool } from 'mysql2/promise'
import { z } from 'zod'
import multer from 'multer'
import path from 'path'
import fs from 'fs'

const app = express()

app.set('trust proxy', 1) // Confiar en el proxy (nginx)

// Ensure uploads directory exists
const uploadDir = path.join(process.cwd(), 'uploads')
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true })
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + path.extname(file.originalname))
  }
})

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true)
    } else {
      cb(new Error('Solo se permiten imágenes'))
    }
  }
})

const config = {
  port: Number.parseInt(process.env.PORT ?? '4000', 10),
  env: process.env.NODE_ENV ?? 'production',
  allowedOrigins: (process.env.ALLOWED_ORIGINS ?? '').split(',').map((origin) => origin.trim()).filter(Boolean),
  db: {
    host: process.env.DB_HOST ?? 'localhost',
    port: Number.parseInt(process.env.DB_PORT ?? '3306', 10),
    user: process.env.DB_USER ?? 'root',
    password: process.env.DB_PASSWORD ?? '',
    name: process.env.DB_NAME ?? 'tulandingya',
    connectionLimit: Number.parseInt(process.env.DB_CONNECTION_LIMIT ?? '10', 10),
  },
}

const pool = createPool({
  host: config.db.host,
  port: config.db.port,
  user: config.db.user,
  password: config.db.password,
  database: config.db.name,
  connectionLimit: config.db.connectionLimit,
  waitForConnections: true,
  namedPlaceholders: true,
  timezone: 'Z',
})

const corsWhitelist = new Set(config.allowedOrigins)

app.use((req, res, next) => {
  res.setHeader('X-Powered-By', 'TuLandingYa')
  next()
})

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || corsWhitelist.size === 0 || corsWhitelist.has(origin)) {
        callback(null, true)
      } else {
        callback(new Error('Origin not allowed by CORS'))
      }
    },
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'x-admin-password', 'Authorization'],
  }),
)
app.use(express.json({ limit: '1mb' }))
app.use('/uploads', express.static(uploadDir))
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginResourcePolicy: { policy: 'cross-origin' },
}))
app.use(
  rateLimit({
    windowMs: 60 * 1000,
    limit: 60,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
  }),
)
app.use(morgan(config.env === 'production' ? 'combined' : 'dev'))

const STATUS_OPTIONS = ['Nuevo', 'Contactado', 'En seguimiento', 'Convertido', 'Descartado']

const optionalEmail = z.preprocess(
  (value) => {
    if (value === undefined || value === null) return null
    const trimmed = String(value).trim()
    return trimmed === '' ? null : trimmed
  },
  z.string().email().max(160).nullable(),
)

const optionalRole = z.preprocess(
  (value) => {
    if (value === undefined || value === null) return null
    const trimmed = String(value).trim()
    return trimmed === '' ? null : trimmed
  },
  z.string().max(120).nullable(),
)

function toMySQLDateTime(input) {
  const date = input instanceof Date ? input : new Date(input)
  if (Number.isNaN(date.getTime())) {
    return null
  }

  const pad = (value) => value.toString().padStart(2, '0')

  const year = date.getUTCFullYear()
  const month = pad(date.getUTCMonth() + 1)
  const day = pad(date.getUTCDate())
  const hours = pad(date.getUTCHours())
  const minutes = pad(date.getUTCMinutes())
  const seconds = pad(date.getUTCSeconds())

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

const leadSchema = z.object({
  name: z.string().min(3).max(120),
  email: z.string().email().max(160),
  phone: z.string().max(60).optional().transform((value) => value ?? ''),
  company: z.string().max(160).optional().transform((value) => value ?? ''),
  services: z.array(z.string().min(3)).min(1).max(6),
  budgetRange: z.string().max(80),
  message: z.string().max(1200).optional().transform((value) => value ?? ''),
})

const leadUpdateSchema = z
  .object({
    status: z.string().max(60).optional(),
    note: z.string().max(4000).optional(),
    assignedTo: z.string().max(160).optional(),
    tags: z.array(z.string()).optional(),
    lastContactAt: z.string().datetime().optional(),
  })
  .refine((payload) => Object.keys(payload).length > 0, {
    message: 'Debe enviar al menos un campo para actualizar',
  })

const teamMemberSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: optionalEmail,
  role: optionalRole,
  canManageLeads: z.boolean().optional().default(true),
  canManageTasks: z.boolean().optional().default(true),
})

const teamMemberUpdateSchema = teamMemberSchema
  .partial()
  .refine((payload) => Object.keys(payload).length > 0, {
    message: 'Debe enviar al menos un campo para actualizar',
  })

const taskSchema = z.object({
  title: z.string().trim().min(1).max(255),
  description: z.string().optional(),
  status: z.enum(['pending', 'in_progress', 'completed']).default('pending'),
  assignedToId: z.number().int().positive().nullable().optional(),
  brandId: z.number().int().positive().nullable().optional(),
  dueDate: z.string().nullable().optional(),
  startDate: z.string().nullable().optional(),
})

const taskUpdateSchema = taskSchema.partial()

const brandSchema = z.object({
  name: z.string().trim().min(1).max(120),
  color: z.string().max(20).optional().default('#3b82f6'),
  package: z.string().max(120).optional().default(''),
  contactInfo: z.string().max(500).optional().default(''),
})

const brandUpdateSchema = brandSchema.partial()

const newsletterSchema = z.object({
  email: z.string().email().max(160),
})

app.get('/api/health', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT 1 as ok')
    res.json({ status: 'ok', db: rows[0].ok === 1 })
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message })
  }
})

app.get('/api/leads', async (req, res, next) => {
  try {
    const adminPassword = req.headers['x-admin-password']
    if (adminPassword !== (process.env.ADMIN_PASSWORD || 'admin123')) {
      return res.status(401).json({ message: 'No autorizado' })
    }

    const [rows] = await pool.query('SELECT * FROM leads ORDER BY created_at DESC LIMIT 100')
    res.json(rows)
  } catch (error) {
    next(error)
  }
})

app.post('/api/leads', async (req, res, next) => {
  try {
    const payload = leadSchema.parse(req.body)

    await pool.query(
      `INSERT INTO leads (name, email, phone, company, services, budget_range, message, source_ip, status)
       VALUES (:name, :email, :phone, :company, :services, :budgetRange, :message, :sourceIp, :status)`,
      {
        ...payload,
        services: JSON.stringify(payload.services),
        sourceIp: (req.headers['x-forwarded-for'] ?? req.socket.remoteAddress ?? '').toString().slice(0, 60),
        status: 'Nuevo',
      },
    )

    res.status(201).json({ message: 'Lead recibido. Te contactaremos pronto.' })
  } catch (error) {
    next(error)
  }
})

app.patch('/api/leads/:id', async (req, res, next) => {
  try {
    const leadId = Number.parseInt(req.params.id, 10)
    if (!Number.isInteger(leadId) || leadId <= 0) {
      return res.status(400).json({ message: 'Identificador inválido' })
    }

    const adminPassword = req.headers['x-admin-password']
    if (adminPassword !== (process.env.ADMIN_PASSWORD || 'admin123')) {
      return res.status(401).json({ message: 'No autorizado' })
    }

    const payload = leadUpdateSchema.parse(req.body)

    const updates = []
    const bindings = { id: leadId }

    if (payload.status !== undefined) {
      const trimmedStatus = payload.status.trim()
      if (!STATUS_OPTIONS.includes(trimmedStatus)) {
        return res.status(400).json({ message: 'Estado inválido' })
      }
      updates.push('status = :status')
      bindings.status = trimmedStatus
    }

    if (payload.note !== undefined) {
      updates.push('note = :note')
      bindings.note = payload.note
    }

    if (payload.assignedTo !== undefined) {
      updates.push('assigned_to = :assignedTo')
      bindings.assignedTo = payload.assignedTo
    }

    if (payload.tags !== undefined) {
      updates.push('tags = :tags')
      bindings.tags = JSON.stringify(payload.tags)
    }

    if (payload.lastContactAt !== undefined) {
      const formatted = toMySQLDateTime(payload.lastContactAt)
      if (!formatted) {
        return res.status(400).json({ message: 'Fecha inválida para último contacto' })
      }
      updates.push('last_contact_at = :lastContactAt')
      bindings.lastContactAt = formatted
    }

    if (updates.length === 0) {
      return res.status(400).json({ message: 'Sin cambios por aplicar' })
    }

    const [result] = await pool.query(
      `UPDATE leads SET ${updates.join(', ')}, updated_at = CURRENT_TIMESTAMP WHERE id = :id`,
      bindings,
    )

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Lead no encontrado' })
    }

    const [rows] = await pool.query('SELECT * FROM leads WHERE id = :id LIMIT 1', { id: leadId })
    return res.json(rows[0] ?? null)
  } catch (error) {
    next(error)
  }
})

app.delete('/api/leads/:id', async (req, res, next) => {
  try {
    const leadId = Number.parseInt(req.params.id, 10)
    if (!Number.isInteger(leadId) || leadId <= 0) {
      return res.status(400).json({ message: 'Identificador inválido' })
    }

    const adminPassword = req.headers['x-admin-password']
    if (adminPassword !== (process.env.ADMIN_PASSWORD || 'admin123')) {
      return res.status(401).json({ message: 'No autorizado' })
    }

    const [result] = await pool.query('DELETE FROM leads WHERE id = :id', { id: leadId })

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Lead no encontrado' })
    }

    return res.json({ message: 'Lead eliminado' })
  } catch (error) {
    next(error)
  }
})

app.get('/api/team-members', async (req, res, next) => {
  try {
    const adminPassword = req.headers['x-admin-password']
    if (adminPassword !== (process.env.ADMIN_PASSWORD || 'admin123')) {
      return res.status(401).json({ message: 'No autorizado' })
    }

    const [rows] = await pool.query(
      'SELECT id, name, email, role, photo_url, can_manage_leads, can_manage_tasks FROM team_members ORDER BY name ASC',
    )

    return res.json(rows.map(row => ({
      ...row,
      photoUrl: row.photo_url,
      canManageLeads: Boolean(row.can_manage_leads),
      canManageTasks: Boolean(row.can_manage_tasks)
    })))
  } catch (error) {
    next(error)
  }
})

app.post('/api/team-members', upload.single('photo'), async (req, res, next) => {
  try {
    const adminPassword = req.headers['x-admin-password']
    if (adminPassword !== (process.env.ADMIN_PASSWORD || 'admin123')) {
      return res.status(401).json({ message: 'No autorizado' })
    }

    // Convert strings to booleans for multipart/form-data
    const body = { ...req.body }
    if (body.canManageLeads === 'true') body.canManageLeads = true
    if (body.canManageLeads === 'false') body.canManageLeads = false
    if (body.canManageTasks === 'true') body.canManageTasks = true
    if (body.canManageTasks === 'false') body.canManageTasks = false

    const payload = teamMemberSchema.parse(body)
    const photoUrl = req.file ? `/uploads/${req.file.filename}` : null

    const [result] = await pool.query(
      'INSERT INTO team_members (name, email, role, photo_url, can_manage_leads, can_manage_tasks) VALUES (:name, :email, :role, :photoUrl, :canManageLeads, :canManageTasks)',
      {
        name: payload.name,
        email: payload.email,
        role: payload.role,
        photoUrl: photoUrl,
        canManageLeads: payload.canManageLeads,
        canManageTasks: payload.canManageTasks,
      },
    )

    const insertedId = result.insertId
    const [rows] = await pool.query(
      'SELECT id, name, email, role, photo_url, can_manage_leads, can_manage_tasks FROM team_members WHERE id = :id LIMIT 1',
      { id: insertedId },
    )

    const row = rows[0]
    return res.status(201).json(row ? {
      ...row,
      photoUrl: row.photo_url,
      canManageLeads: Boolean(row.can_manage_leads),
      canManageTasks: Boolean(row.can_manage_tasks)
    } : null)
  } catch (error) {
    next(error)
  }
})

app.patch('/api/team-members/:id', upload.single('photo'), async (req, res, next) => {
  try {
    const memberId = Number.parseInt(req.params.id, 10)
    if (!Number.isInteger(memberId) || memberId <= 0) {
      return res.status(400).json({ message: 'Identificador inválido' })
    }

    const adminPassword = req.headers['x-admin-password']
    if (adminPassword !== (process.env.ADMIN_PASSWORD || 'admin123')) {
      return res.status(401).json({ message: 'No autorizado' })
    }

    // Convert strings to booleans for multipart/form-data
    const body = { ...req.body }
    if (body.canManageLeads === 'true') body.canManageLeads = true
    if (body.canManageLeads === 'false') body.canManageLeads = false
    if (body.canManageTasks === 'true') body.canManageTasks = true
    if (body.canManageTasks === 'false') body.canManageTasks = false

    const payload = teamMemberUpdateSchema.parse(body)

    const updates = []
    const bindings = { id: memberId }

    if (payload.name !== undefined) {
      updates.push('name = :name')
      bindings.name = payload.name
    }

    if (payload.email !== undefined) {
      updates.push('email = :email')
      bindings.email = payload.email
    }

    if (payload.role !== undefined) {
      updates.push('role = :role')
      bindings.role = payload.role
    }

    if (payload.canManageLeads !== undefined) {
      updates.push('can_manage_leads = :canManageLeads')
      bindings.canManageLeads = payload.canManageLeads
    }

    if (payload.canManageTasks !== undefined) {
      updates.push('can_manage_tasks = :canManageTasks')
      bindings.canManageTasks = payload.canManageTasks
    }

    if (req.file) {
      updates.push('photo_url = :photoUrl')
      bindings.photoUrl = `/uploads/${req.file.filename}`
    }

    if (updates.length === 0) {
      return res.status(400).json({ message: 'Sin cambios por aplicar' })
    }

    const [result] = await pool.query(
      `UPDATE team_members SET ${updates.join(', ')}, updated_at = CURRENT_TIMESTAMP WHERE id = :id`,
      bindings,
    )

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Miembro no encontrado' })
    }

    const [rows] = await pool.query(
      'SELECT id, name, email, role, photo_url, can_manage_leads, can_manage_tasks FROM team_members WHERE id = :id LIMIT 1',
      { id: memberId },
    )

    const row = rows[0]
    return res.json(row ? {
      ...row,
      photoUrl: row.photo_url,
      canManageLeads: Boolean(row.can_manage_leads),
      canManageTasks: Boolean(row.can_manage_tasks)
    } : null)
  } catch (error) {
    next(error)
  }
})

app.delete('/api/team-members/:id', async (req, res, next) => {
  try {
    const memberId = Number.parseInt(req.params.id, 10)
    if (!Number.isInteger(memberId) || memberId <= 0) {
      return res.status(400).json({ message: 'Identificador inválido' })
    }

    const adminPassword = req.headers['x-admin-password']
    if (adminPassword !== (process.env.ADMIN_PASSWORD || 'admin123')) {
      return res.status(401).json({ message: 'No autorizado' })
    }

    const [result] = await pool.query('DELETE FROM team_members WHERE id = :id', { id: memberId })

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Miembro no encontrado' })
    }

    return res.json({ message: 'Miembro eliminado' })
  } catch (error) {
    next(error)
  }
})

// Tasks Endpoints
app.get('/api/tasks', async (req, res, next) => {
  try {
    const adminPassword = req.headers['x-admin-password']
    if (adminPassword !== (process.env.ADMIN_PASSWORD || 'admin123')) {
      return res.status(401).json({ message: 'No autorizado' })
    }

    const [rows] = await pool.query(`
      SELECT t.*, tm.name as assigned_to_name, b.name as brand_name, b.color as brand_color
      FROM tasks t 
      LEFT JOIN team_members tm ON t.assigned_to = tm.id 
      LEFT JOIN brands b ON t.brand_id = b.id
      ORDER BY t.created_at DESC
    `)
    
    res.json(rows.map(row => ({
      id: row.id,
      title: row.title,
      description: row.description,
      status: row.status,
      assignedToId: row.assigned_to,
      assignedToName: row.assigned_to_name,
      brandId: row.brand_id,
      brandName: row.brand_name,
      brandColor: row.brand_color,
      dueDate: row.due_date,
      startDate: row.start_date,
      createdAt: row.created_at
    })))
  } catch (error) {
    next(error)
  }
})

app.post('/api/tasks', async (req, res, next) => {
  try {
    const adminPassword = req.headers['x-admin-password']
    if (adminPassword !== (process.env.ADMIN_PASSWORD || 'admin123')) {
      return res.status(401).json({ message: 'No autorizado' })
    }

    const payload = taskSchema.parse(req.body)

    const [result] = await pool.query(
      `INSERT INTO tasks (title, description, status, assigned_to, brand_id, due_date, start_date)
       VALUES (:title, :description, :status, :assignedToId, :brandId, :dueDate, :startDate)`,
      {
        title: payload.title,
        description: payload.description,
        status: payload.status,
        assignedToId: payload.assignedToId,
        brandId: payload.brandId,
        dueDate: payload.dueDate ? toMySQLDateTime(payload.dueDate) : null,
        startDate: payload.startDate ? toMySQLDateTime(payload.startDate) : null,
      },
    )

    const insertedId = result.insertId
    const [rows] = await pool.query(`
      SELECT t.*, tm.name as assigned_to_name, b.name as brand_name, b.color as brand_color
      FROM tasks t 
      LEFT JOIN team_members tm ON t.assigned_to = tm.id 
      LEFT JOIN brands b ON t.brand_id = b.id
      WHERE t.id = :id LIMIT 1
    `, { id: insertedId })

    const row = rows[0]
    res.status(201).json(row ? {
      id: row.id,
      title: row.title,
      description: row.description,
      status: row.status,
      assignedToId: row.assigned_to,
      assignedToName: row.assigned_to_name,
      brandId: row.brand_id,
      brandName: row.brand_name,
      brandColor: row.brand_color,
      dueDate: row.due_date,
      startDate: row.start_date,
      createdAt: row.created_at
    } : null)
  } catch (error) {
    next(error)
  }
})

app.patch('/api/tasks/:id', async (req, res, next) => {
  try {
    const taskId = Number.parseInt(req.params.id, 10)
    if (!Number.isInteger(taskId) || taskId <= 0) {
      return res.status(400).json({ message: 'Identificador inválido' })
    }

    const adminPassword = req.headers['x-admin-password']
    if (adminPassword !== (process.env.ADMIN_PASSWORD || 'admin123')) {
      return res.status(401).json({ message: 'No autorizado' })
    }

    const payload = taskUpdateSchema.parse(req.body)
    const updates = []
    const bindings = { id: taskId }

    if (payload.title !== undefined) {
      updates.push('title = :title')
      bindings.title = payload.title
    }
    if (payload.description !== undefined) {
      updates.push('description = :description')
      bindings.description = payload.description
    }
    if (payload.status !== undefined) {
      updates.push('status = :status')
      bindings.status = payload.status
    }
    if (payload.assignedToId !== undefined) {
      updates.push('assigned_to = :assignedToId')
      bindings.assignedToId = payload.assignedToId
    }
    if (payload.brandId !== undefined) {
      updates.push('brand_id = :brandId')
      bindings.brandId = payload.brandId
    }
    if (payload.dueDate !== undefined) {
      updates.push('due_date = :dueDate')
      bindings.dueDate = payload.dueDate ? toMySQLDateTime(payload.dueDate) : null
    }
    if (payload.startDate !== undefined) {
      updates.push('start_date = :startDate')
      bindings.startDate = payload.startDate ? toMySQLDateTime(payload.startDate) : null
    }

    if (updates.length === 0) {
      return res.status(400).json({ message: 'Sin cambios' })
    }

    const [result] = await pool.query(
      `UPDATE tasks SET ${updates.join(', ')}, updated_at = CURRENT_TIMESTAMP WHERE id = :id`,
      bindings,
    )
    const [rows] = await pool.query(`
      SELECT t.*, tm.name as assigned_to_name, b.name as brand_name, b.color as brand_color
      FROM tasks t 
      LEFT JOIN team_members tm ON t.assigned_to = tm.id 
      LEFT JOIN brands b ON t.brand_id = b.id
      WHERE t.id = :id LIMIT 1
    `, { id: taskId })

    const row = rows[0]
    res.json(row ? {
      id: row.id,
      title: row.title,
      description: row.description,
      status: row.status,
      assignedToId: row.assigned_to,
      assignedToName: row.assigned_to_name,
      brandId: row.brand_id,
      brandName: row.brand_name,
      brandColor: row.brand_color,
      dueDate: row.due_date,
      startDate: row.start_date,
      createdAt: row.created_at
    } : null)
  } catch (error) {
    next(error)
  }
})

app.delete('/api/tasks/:id', async (req, res, next) => {
  try {
    const taskId = Number.parseInt(req.params.id, 10)
    if (!Number.isInteger(taskId) || taskId <= 0) {
      return res.status(400).json({ message: 'Identificador inválido' })
    }

    const adminPassword = req.headers['x-admin-password']
    if (adminPassword !== (process.env.ADMIN_PASSWORD || 'admin123')) {
      return res.status(401).json({ message: 'No autorizado' })
    }

    const [result] = await pool.query('DELETE FROM tasks WHERE id = :id', { id: taskId })

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Tarea no encontrada' })
    }

    res.json({ message: 'Tarea eliminada' })
  } catch (error) {
    next(error)
  }
})

app.get('/api/brands', async (req, res, next) => {
  try {
    const adminPassword = req.headers['x-admin-password']
    if (adminPassword !== (process.env.ADMIN_PASSWORD || 'admin123')) {
      return res.status(401).json({ message: 'No autorizado' })
    }

    const [rows] = await pool.query('SELECT * FROM brands ORDER BY name ASC')
    res.json(rows)
  } catch (error) {
    next(error)
  }
})

app.post('/api/brands', async (req, res, next) => {
  try {
    const adminPassword = req.headers['x-admin-password']
    if (adminPassword !== (process.env.ADMIN_PASSWORD || 'admin123')) {
      return res.status(401).json({ message: 'No autorizado' })
    }

    const payload = brandSchema.parse(req.body)
    const [result] = await pool.query(
      'INSERT INTO brands (name, color, package, contact_info) VALUES (:name, :color, :package, :contactInfo)',
      payload
    )

    const [rows] = await pool.query('SELECT * FROM brands WHERE id = :id', { id: result.insertId })
    res.status(201).json(rows[0])
  } catch (error) {
    next(error)
  }
})

app.delete('/api/brands/:id', async (req, res, next) => {
  try {
    const brandId = Number.parseInt(req.params.id, 10)
    if (!Number.isInteger(brandId) || brandId <= 0) {
      return res.status(400).json({ message: 'Identificador inválido' })
    }

    const adminPassword = req.headers['x-admin-password']
    if (adminPassword !== (process.env.ADMIN_PASSWORD || 'admin123')) {
      return res.status(401).json({ message: 'No autorizado' })
    }

    const [result] = await pool.query('DELETE FROM brands WHERE id = :id', { id: brandId })

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Marca no encontrada' })
    }

    res.json({ message: 'Marca eliminada' })
  } catch (error) {
    next(error)
  }
})

app.post('/api/newsletter', async (req, res, next) => {
  try {
    const payload = newsletterSchema.parse(req.body)

    await pool.query(
      `INSERT INTO newsletter_subscribers (email)
       VALUES (:email)
       ON DUPLICATE KEY UPDATE email = VALUES(email)`,
      payload,
    )

    res.status(201).json({ message: 'Suscripción confirmada.' })
  } catch (error) {
    next(error)
  }
})

app.use((req, res) => {
  console.log(`[404] Ruta no encontrada: ${req.method} ${req.originalUrl}`)
  res.status(404).json({ message: 'Ruta no encontrada', path: req.originalUrl })
})

app.use((error, _req, res, _next) => {
  if (error instanceof z.ZodError) {
    return res.status(400).json({ message: 'Datos inválidos', errors: error.flatten() })
  }

  if (error instanceof Error && error.message === 'Origin not allowed by CORS') {
    return res.status(403).json({ message: 'Origen no permitido' })
  }

  console.error('[API ERROR]', error)
  return res.status(500).json({ message: 'Error interno. Inténtalo más tarde.' })
})

async function ensureTables() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS leads (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(120) NOT NULL,
      email VARCHAR(160) NOT NULL,
      phone VARCHAR(60) NULL,
      company VARCHAR(160) NULL,
      services JSON NOT NULL,
      budget_range VARCHAR(80) NOT NULL,
      message TEXT NULL,
      source_ip VARCHAR(60) NULL,
      status VARCHAR(60) NOT NULL DEFAULT 'Nuevo',
      note TEXT NULL,
      assigned_to VARCHAR(160) NULL,
      last_contact_at DATETIME NULL,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_email (email),
      INDEX idx_created_at (created_at),
      INDEX idx_status (status)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  `)

  const databaseName = config.db.name

  const addColumnIfMissing = async (columnName, columnDefinition) => {
    const [rows] = await pool.query(
      `SELECT COUNT(*) AS total FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = :schema AND TABLE_NAME = 'leads' AND COLUMN_NAME = :column`,
      { schema: databaseName, column: columnName },
    )

    if (rows[0]?.total === 0) {
      await pool.query(`ALTER TABLE leads ADD COLUMN ${columnDefinition}`)
    }
  }

  const addIndexIfMissing = async (indexName, indexDefinition) => {
    const [rows] = await pool.query(
      `SELECT COUNT(*) AS total FROM information_schema.STATISTICS WHERE TABLE_SCHEMA = :schema AND TABLE_NAME = 'leads' AND INDEX_NAME = :indexName`,
      { schema: databaseName, indexName },
    )

    if (rows[0]?.total === 0) {
      await pool.query(`ALTER TABLE leads ADD ${indexDefinition}`)
    }
  }

  await addColumnIfMissing('status', "status VARCHAR(60) NOT NULL DEFAULT 'Nuevo'")
  await addColumnIfMissing('note', 'note TEXT NULL')
  await addColumnIfMissing('assigned_to', 'assigned_to VARCHAR(160) NULL')
  await addColumnIfMissing('tags', 'tags JSON NULL')
  await addColumnIfMissing('last_contact_at', 'last_contact_at DATETIME NULL')
  await addColumnIfMissing(
    'updated_at',
    'updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP',
  )
  await addIndexIfMissing('idx_status', 'INDEX idx_status (status)')

  await pool.query(`
    CREATE TABLE IF NOT EXISTS newsletter_subscribers (
      id INT AUTO_INCREMENT PRIMARY KEY,
      email VARCHAR(160) NOT NULL UNIQUE,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  `)

  await pool.query(`
    CREATE TABLE IF NOT EXISTS team_members (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(120) NOT NULL,
      email VARCHAR(160) NULL,
      role VARCHAR(120) NULL,
      photo_url VARCHAR(255) NULL,
      can_manage_leads BOOLEAN NOT NULL DEFAULT TRUE,
      can_manage_tasks BOOLEAN NOT NULL DEFAULT TRUE,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      UNIQUE KEY unique_email (email)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  `)

  const addTeamMemberColumnIfMissing = async (columnName, columnDefinition) => {
    const [rows] = await pool.query(
      `SELECT COUNT(*) AS total FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = :schema AND TABLE_NAME = 'team_members' AND COLUMN_NAME = :column`,
      { schema: databaseName, column: columnName },
    )

    if (rows[0]?.total === 0) {
      await pool.query(`ALTER TABLE team_members ADD COLUMN ${columnDefinition}`)
    }
  }

  await addTeamMemberColumnIfMissing('can_manage_leads', 'can_manage_leads BOOLEAN NOT NULL DEFAULT TRUE')
  await addTeamMemberColumnIfMissing('can_manage_tasks', 'can_manage_tasks BOOLEAN NOT NULL DEFAULT TRUE')
  await addTeamMemberColumnIfMissing('photo_url', 'photo_url VARCHAR(255) NULL')

  await pool.query(`
    CREATE TABLE IF NOT EXISTS brands (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(120) NOT NULL,
      color VARCHAR(20) NOT NULL DEFAULT '#3b82f6',
      package VARCHAR(120) NULL,
      contact_info TEXT NULL,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  `)

  const addBrandColumnIfMissing = async (columnName, columnDefinition) => {
    const [rows] = await pool.query(
      `SELECT COUNT(*) AS total FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = :schema AND TABLE_NAME = 'brands' AND COLUMN_NAME = :column`,
      { schema: databaseName, column: columnName },
    )

    if (rows[0]?.total === 0) {
      await pool.query(`ALTER TABLE brands ADD COLUMN ${columnDefinition}`)
    }
  }

  await addBrandColumnIfMissing('package', 'package VARCHAR(120) NULL')
  await addBrandColumnIfMissing('contact_info', 'contact_info TEXT NULL')

  await pool.query(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT NULL,
      status ENUM('pending', 'in_progress', 'completed') NOT NULL DEFAULT 'pending',
      assigned_to INT NULL,
      brand_id INT NULL,
      due_date DATETIME NULL,
      start_date DATETIME NULL,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      FOREIGN KEY (assigned_to) REFERENCES team_members(id) ON DELETE SET NULL,
      FOREIGN KEY (brand_id) REFERENCES brands(id) ON DELETE SET NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
  `)

  const addTaskColumnIfMissing = async (columnName, columnDefinition) => {
    const [rows] = await pool.query(
      `SELECT COUNT(*) AS total FROM information_schema.COLUMNS WHERE TABLE_SCHEMA = :schema AND TABLE_NAME = 'tasks' AND COLUMN_NAME = :column`,
      { schema: databaseName, column: columnName },
    )

    if (rows[0]?.total === 0) {
      await pool.query(`ALTER TABLE tasks ADD COLUMN ${columnDefinition}`)
    }
  }

  await addTaskColumnIfMissing('brand_id', 'brand_id INT NULL')
  await addTaskColumnIfMissing('start_date', 'start_date DATETIME NULL')
  
  // Add foreign key if missing (simple check, might need more robust check in prod)
  try {
    await pool.query(`ALTER TABLE tasks ADD CONSTRAINT fk_tasks_brand FOREIGN KEY (brand_id) REFERENCES brands(id) ON DELETE SET NULL`)
  } catch (e) {
    // Ignore if constraint already exists
  }
}

async function bootstrap() {
  try {
    await ensureTables()
    app.listen(config.port, () => {
      console.log(`API escuchando en puerto ${config.port}`)
    })
  } catch (error) {
    console.error('No se pudo iniciar la API:', error)
    process.exit(1)
  }
}

bootstrap()
