import { useState, useEffect, useCallback, useMemo, type FormEvent, type ChangeEvent } from 'react'
import { type DragEndEvent } from '@dnd-kit/core'
import {
  type Lead,
  type TeamMember,
  type Task,
  type Brand,
  type LeadStatus,
  type StatusFilter,
  type AssignedFilter,
  type ServiceFilter,
  type ViewMode,
  STATUS_OPTIONS,
} from '../types/admin'
import {
  normalizeLead,
  normalizeTeamMember,
  leadNeedsAttention,
  compareByUrgency,
  formatDate,
} from '../utils/adminUtils'

export function useAdminLogic() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [tasks, setTasks] = useState<Task[]>([])
  const [brands, setBrands] = useState<Brand[]>([])
  const [loading, setLoading] = useState(false)
  const [membersLoading, setMembersLoading] = useState(false)
  const [tasksLoading, setTasksLoading] = useState(false)
  const [brandsLoading, setBrandsLoading] = useState(false)
  const [teamMemberSaving, setTeamMemberSaving] = useState(false)
  const [username, setUsername] = useState('admin')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState<string | null>(null)
  const [currentUser, setCurrentUser] = useState<TeamMember | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState('')
  const [notification, setNotification] = useState('')
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('Todos')
  const [assignedFilter, setAssignedFilter] = useState<AssignedFilter>('Todos')
  const [serviceFilter, setServiceFilter] = useState<ServiceFilter>('Todos')
  const [tagFilter, setTagFilter] = useState<string>('Todos')
  const [brandFilter, setBrandFilter] = useState<string>('Todos')
  const [showAttentionOnly, setShowAttentionOnly] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [activeLeadId, setActiveLeadId] = useState<number | null>(null)
  const [noteDraft, setNoteDraft] = useState('')
  const [viewMode, setViewMode] = useState<ViewMode>('table')
  const [taskViewMode, setTaskViewMode] = useState<'list' | 'board' | 'calendar'>('list')
  const [teamMemberForm, setTeamMemberForm] = useState<{
    name: string
    email: string
    role: string
    canManageLeads: boolean
    canManageTasks: boolean
    isAdmin: boolean
    password?: string
    photo: File | null
  }>({
    name: '',
    email: '',
    role: '',
    canManageLeads: true,
    canManageTasks: true,
    isAdmin: false,
    password: '',
    photo: null
  })
  const [editingMemberId, setEditingMemberId] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<'leads' | 'team' | 'tasks' | 'brands'>('leads')

  const resetTeamMemberForm = () => {
    setTeamMemberForm({ 
      name: '', 
      email: '', 
      role: '', 
      canManageLeads: true, 
      canManageTasks: true, 
      isAdmin: false,
      password: '',
      photo: null 
    })
    setEditingMemberId(null)
  }

  const showNotification = useCallback((msg: string) => {
    setNotification(msg)
    setTimeout(() => setNotification(''), 3000)
  }, [])

  const copyToClipboard = async (text: string) => {
    if (!text) {
      showNotification('No hay información para copiar')
      return
    }

    try {
      await navigator.clipboard.writeText(text)
      showNotification('Copiado al portapapeles')
    } catch {
      showNotification('No se pudo copiar')
    }
  }

  const getEmails = (source: Lead[]) => source.map((lead) => lead.email).filter(Boolean).join(',')

  const sortTeamMembers = useCallback(
    (source: TeamMember[]) => [...source].sort((a, b) => a.name.localeCompare(b.name)),
    [],
  )

  const fetchTeamMembers = useCallback(
    async (authToken: string) => {
      setMembersLoading(true)
      try {
        const apiBase = import.meta.env.VITE_API_BASE || '/api'
        const response = await fetch(`${apiBase}/team-members`, {
          headers: {
            'Authorization': `Bearer ${authToken}`,
          },
        })

        if (!response.ok) {
          throw new Error('Respuesta inválida del servidor')
        }

        const data = await response.json()
        const parsed = (Array.isArray(data) ? data : [])
          .map(normalizeTeamMember)
          .filter((member) => member.name.trim().length > 0)

        setTeamMembers(sortTeamMembers(parsed))
      } catch (err) {
        console.error(err)
        showNotification('No se pudieron cargar los responsables')
      } finally {
        setMembersLoading(false)
      }
    },
    [showNotification, sortTeamMembers],
  )

  const fetchLeads = useCallback(
    async (authToken: string) => {
      setLoading(true)
      setError('')

      try {
        const apiBase = import.meta.env.VITE_API_BASE || '/api'
        const response = await fetch(`${apiBase}/leads`, {
          headers: {
            'Authorization': `Bearer ${authToken}`,
          },
        })

        if (response.ok) {
          const data = await response.json()
          const parsedLeads = (Array.isArray(data) ? data : []).map(normalizeLead)

          setLeads(parsedLeads)
          await fetchTeamMembers(authToken)
        } else {
          setError('Error de autenticación')
          if (response.status === 401) {
            localStorage.removeItem('auth_token')
            setIsAuthenticated(false)
          }
        }
      } catch (err) {
        console.error(err)
        setError('Error al cargar los datos')
      } finally {
        setLoading(false)
      }
    },
    [fetchTeamMembers],
  )

  useEffect(() => {
    const savedToken = localStorage.getItem('auth_token')
    if (savedToken) {
      setToken(savedToken)
      setIsAuthenticated(true)
      void fetchLeads(savedToken)
      
      const apiBase = import.meta.env.VITE_API_BASE || '/api'
      fetch(`${apiBase}/auth/me`, {
        headers: { 'Authorization': `Bearer ${savedToken}` }
      })
      .then(res => res.ok ? res.json() : null)
      .then(user => {
        if (user) {
          setCurrentUser(normalizeTeamMember(user))
        } else {
           localStorage.removeItem('auth_token')
           setIsAuthenticated(false)
        }
      })
      .catch(() => {})
    }
  }, [fetchLeads])

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    setError('')

    try {
      const apiBase = import.meta.env.VITE_API_BASE || '/api'
      const response = await fetch(`${apiBase}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: username, password }),
      })

      if (response.ok) {
        const data = await response.json()
        setToken(data.token)
        const normalizedUser = normalizeTeamMember(data.user)
        setCurrentUser(normalizedUser)
        setIsAuthenticated(true)
        localStorage.setItem('auth_token', data.token)
        
        await fetchLeads(data.token)
      } else {
        setError('Credenciales inválidas')
        setIsAuthenticated(false)
      }
    } catch (err) {
      console.error(err)
      setError('Error de conexión')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('auth_token')
    setIsAuthenticated(false)
    setToken(null)
    setCurrentUser(null)
    setPassword('')
    setLeads([])
    setTeamMembers([])
    setMembersLoading(false)
    setTeamMemberSaving(false)
    resetTeamMemberForm()
  }

  const handleStatusChange = (leadId: number, newStatus: LeadStatus) => {
    const targetLead = leads.find((lead) => lead.id === leadId)
    const previousStatus = targetLead?.status ?? 'Nuevo'
    const previousLastContact = targetLead?.lastContactAt ?? null
    const shouldUpdateLastContact = newStatus === 'Contactado' || newStatus === 'En seguimiento'
    const newLastContact = shouldUpdateLastContact ? new Date().toISOString() : undefined

    setLeads((prev) =>
      prev.map((lead) =>
        lead.id === leadId
          ? {
              ...lead,
              status: newStatus,
              lastContactAt: newLastContact ?? lead.lastContactAt,
            }
          : lead,
      ),
    )

    const apiBase = import.meta.env.VITE_API_BASE || '/api'
    fetch(`${apiBase}/leads/${leadId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(
        newLastContact
          ? { status: newStatus, lastContactAt: newLastContact }
          : { status: newStatus },
      ),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Respuesta inválida del servidor')
        }
        return response.json()
      })
      .then((updatedLead) => {
        if (updatedLead) {
          setLeads((prev) => prev.map((lead) => (lead.id === leadId ? normalizeLead(updatedLead) : lead)))
        }
        showNotification('Estado actualizado')
      })
      .catch((err) => {
        console.error(err)
        setLeads((prev) =>
          prev.map((lead) =>
            lead.id === leadId
              ? {
                  ...lead,
                  status: previousStatus,
                  lastContactAt: previousLastContact,
                }
              : lead,
          ),
        )
        showNotification('No se pudo guardar el estado')
      })
  }

  const handleAssignLead = (leadId: number, assignedToValue: string) => {
    const sanitized = assignedToValue.trim()
    const targetLead = leads.find((lead) => lead.id === leadId)
    const previousAssigned = targetLead?.assignedTo ?? ''

    if (sanitized === previousAssigned.trim()) {
      return
    }

    setLeads((prev) =>
      prev.map((lead) => (lead.id === leadId ? { ...lead, assignedTo: sanitized } : lead)),
    )

    const apiBase = import.meta.env.VITE_API_BASE || '/api'
    fetch(`${apiBase}/leads/${leadId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ assignedTo: sanitized }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Respuesta inválida del servidor')
        }
        return response.json()
      })
      .then((updatedLead) => {
        if (updatedLead) {
          setLeads((prev) => prev.map((lead) => (lead.id === leadId ? normalizeLead(updatedLead) : lead)))
        }
        showNotification('Responsable actualizado')
      })
      .catch((err) => {
        console.error(err)
        setLeads((prev) => prev.map((lead) => (lead.id === leadId ? { ...lead, assignedTo: previousAssigned } : lead)))
        showNotification('No se pudo asignar el lead')
      })
  }

  const handleDeleteLead = (leadId: number) => {
    if (!token) {
      showNotification('Debes iniciar sesión nuevamente')
      return
    }

    const lead = leads.find((item) => item.id === leadId)
    if (!lead) {
      return
    }

    const confirmation = window.confirm(`¿Eliminar el lead "${lead.name || `#${lead.id}`}"? Esta acción no se puede deshacer.`)
    if (!confirmation) {
      return
    }

    const snapshot = [...leads]
    setLeads((prev) => prev.filter((item) => item.id !== leadId))

    const apiBase = import.meta.env.VITE_API_BASE || '/api'
    fetch(`${apiBase}/leads/${leadId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Respuesta inválida del servidor')
        }
        return response.json()
      })
      .then(() => {
        showNotification('Lead eliminado')
      })
      .catch((err) => {
        console.error(err)
        setLeads(snapshot)
        showNotification('No se pudo eliminar el lead')
      })
  }

  const handleTeamMemberFieldChange = (field: 'name' | 'email' | 'role' | 'password') => (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setTeamMemberForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleTeamMemberCheckboxChange = (field: 'canManageLeads' | 'canManageTasks' | 'isAdmin') => (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked
    setTeamMemberForm((prev) => ({ ...prev, [field]: checked }))
  }

  const handleTeamMemberPhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setTeamMemberForm((prev) => ({ ...prev, photo: event.target.files![0] }))
    }
  }

  const handleEditTeamMember = (member: TeamMember) => {
    setEditingMemberId(member.id)
    setTeamMemberForm({
      name: member.name,
      email: member.email ?? '',
      role: member.role ?? '',
      canManageLeads: member.canManageLeads,
      canManageTasks: member.canManageTasks,
      isAdmin: member.isAdmin,
      password: '',
      photo: null,
    })
  }

  const handleTeamMemberSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (teamMemberSaving) return

    if (!token) {
      showNotification('Debes iniciar sesión nuevamente')
      return
    }

    const trimmedName = teamMemberForm.name.trim()
    const trimmedEmail = teamMemberForm.email.trim()
    const trimmedRole = teamMemberForm.role.trim()

    if (!trimmedName) {
      showNotification('El nombre del responsable es obligatorio')
      return
    }

    const apiBase = import.meta.env.VITE_API_BASE || '/api'
    const isEditing = editingMemberId !== null
    const endpoint = isEditing ? `${apiBase}/team-members/${editingMemberId}` : `${apiBase}/team-members`
    const method = isEditing ? 'PATCH' : 'POST'
    
    const formData = new FormData()
    formData.append('name', trimmedName)
    formData.append('email', trimmedEmail)
    formData.append('role', trimmedRole)
    formData.append('canManageLeads', String(teamMemberForm.canManageLeads))
    formData.append('canManageTasks', String(teamMemberForm.canManageTasks))
    formData.append('isAdmin', String(teamMemberForm.isAdmin))
    
    if (teamMemberForm.password) {
      formData.append('password', teamMemberForm.password)
    }

    if (teamMemberForm.photo) {
      formData.append('photo', teamMemberForm.photo)
    }

    setTeamMemberSaving(true)

    try {
      const response = await fetch(endpoint, {
        method,
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Respuesta inválida del servidor')
      }

      const savedMember = await response.json()
      if (!savedMember) {
        throw new Error('Respuesta vacía del servidor')
      }

      const normalized = normalizeTeamMember(savedMember)
      if (!normalized.name.trim()) {
        throw new Error('Datos inválidos del responsable')
      }

      setTeamMembers((prev) => {
        if (isEditing) {
          return sortTeamMembers(prev.map((member) => (member.id === normalized.id ? normalized : member)))
        }
        return sortTeamMembers([...prev, normalized])
      })

      resetTeamMemberForm()
      showNotification(isEditing ? 'Responsable actualizado' : 'Responsable agregado')
    } catch (err) {
      console.error(err)
      showNotification('No se pudo guardar el responsable')
    } finally {
      setTeamMemberSaving(false)
    }
  }

  const handleCancelTeamMemberEdit = () => {
    resetTeamMemberForm()
  }

  const handleDeleteTeamMember = async (memberId: number) => {
    if (!token) {
      showNotification('Debes iniciar sesión nuevamente')
      return
    }

    const member = teamMembers.find((m) => m.id === memberId)
    if (!member) return

    const confirmation = window.confirm(`¿Eliminar a "${member.name}" del equipo?`)
    if (!confirmation) return

    const snapshot = [...teamMembers]
    setTeamMembers((prev) => prev.filter((m) => m.id !== memberId))

    const apiBase = import.meta.env.VITE_API_BASE || '/api'
    try {
      const response = await fetch(`${apiBase}/team-members/${memberId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        throw new Error('Error al eliminar')
      }
      showNotification('Miembro eliminado')
    } catch (err) {
      console.error(err)
      setTeamMembers(snapshot)
      showNotification('No se pudo eliminar el miembro')
    }
  }

  const handleMarkContact = (leadId: number) => {
    const targetLead = leads.find((lead) => lead.id === leadId)
    if (!targetLead) return
    if (!token) {
      showNotification('Debes iniciar sesión nuevamente')
      return
    }

    const previousStatus = targetLead.status
    const previousLastContact = targetLead.lastContactAt ?? null
    const nowIso = new Date().toISOString()
    const promoteToContactado = targetLead.status === 'Nuevo'

    setLeads((prev) =>
      prev.map((lead) =>
        lead.id === leadId
          ? {
              ...lead,
              lastContactAt: nowIso,
              status: promoteToContactado ? 'Contactado' : lead.status,
            }
          : lead,
      ),
    )

    const apiBase = import.meta.env.VITE_API_BASE || '/api'
    const payload: Record<string, unknown> = { lastContactAt: nowIso }
    if (promoteToContactado) {
      payload.status = 'Contactado'
    }

    fetch(`${apiBase}/leads/${leadId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Respuesta inválida del servidor')
        }
        return response.json()
      })
      .then((updatedLead) => {
        if (updatedLead) {
          setLeads((prev) => prev.map((lead) => (lead.id === leadId ? normalizeLead(updatedLead) : lead)))
        }
        showNotification('Seguimiento registrado')
      })
      .catch((err) => {
        console.error(err)
        setLeads((prev) =>
          prev.map((lead) =>
            lead.id === leadId
              ? {
                  ...lead,
                  status: previousStatus,
                  lastContactAt: previousLastContact,
                }
              : lead,
          ),
        )
        showNotification('No se pudo registrar el contacto')
      })
  }

  const handleAssignmentSelect = (leadId: number, value: string) => {
    if (value === '__custom__') {
      const custom = window.prompt('Nombre del responsable')
      if (custom === null) {
        return
      }
      handleAssignLead(leadId, custom)
      return
    }

    handleAssignLead(leadId, value)
  }

  const handleOpenNotes = (leadId: number) => {
    setActiveLeadId(leadId)
    const lead = leads.find((item) => item.id === leadId)
    setNoteDraft(lead?.note ?? '')
  }

  const handleSaveNote = () => {
    if (!activeLeadId) return

    const leadId = activeLeadId
    const previousNote = leads.find((lead) => lead.id === leadId)?.note ?? ''
    setLeads((prev) => prev.map((lead) => (lead.id === leadId ? { ...lead, note: noteDraft } : lead)))

    const apiBase = import.meta.env.VITE_API_BASE || '/api'
    fetch(`${apiBase}/leads/${leadId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ note: noteDraft }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Respuesta inválida del servidor')
        }
        return response.json()
      })
      .then((updatedLead) => {
        if (updatedLead) {
          setLeads((prev) => prev.map((lead) => (lead.id === leadId ? normalizeLead(updatedLead) : lead)))
        }
        showNotification('Nota guardada')
        setActiveLeadId(null)
        setNoteDraft('')
      })
      .catch((err) => {
        console.error(err)
        setLeads((prev) => prev.map((lead) => (lead.id === leadId ? { ...lead, note: previousNote } : lead)))
        setNoteDraft(previousNote)
        showNotification('No se pudo guardar la nota')
      })
  }

  const updateLeadTags = (leadId: number, newTags: string[], previousTags: string[]) => {
    setLeads((prev) => prev.map((lead) => (lead.id === leadId ? { ...lead, tags: newTags } : lead)))

    const apiBase = import.meta.env.VITE_API_BASE || '/api'
    fetch(`${apiBase}/leads/${leadId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ tags: newTags }),
    })
      .then((response) => {
        if (!response.ok) throw new Error('Error al actualizar tags')
        return response.json()
      })
      .then((updatedLead) => {
        if (updatedLead) {
          setLeads((prev) => prev.map((lead) => (lead.id === leadId ? normalizeLead(updatedLead) : lead)))
        }
      })
      .catch((err) => {
        console.error(err)
        setLeads((prev) => prev.map((lead) => (lead.id === leadId ? { ...lead, tags: previousTags } : lead)))
        showNotification('No se pudieron actualizar las etiquetas')
      })
  }

  const handleAddTag = (leadId: number, newTag: string) => {
    const tag = newTag.trim()
    if (!tag) return

    const targetLead = leads.find((lead) => lead.id === leadId)
    if (!targetLead) return
    if (targetLead.tags && targetLead.tags.includes(tag)) return

    const currentTags = targetLead.tags || []
    const newTags = [...currentTags, tag]
    updateLeadTags(leadId, newTags, currentTags)
  }

  const handleRemoveTag = (leadId: number, tagToRemove: string) => {
    const targetLead = leads.find((lead) => lead.id === leadId)
    if (!targetLead) return

    const currentTags = targetLead.tags || []
    const newTags = currentTags.filter((t) => t !== tagToRemove)
    updateLeadTags(leadId, newTags, currentTags)
  }

  const filteredLeads = useMemo(() => {
    const search = searchTerm.trim().toLowerCase()

    return leads.filter((lead) => {
      const statusMatches = statusFilter === 'Todos' || lead.status === statusFilter
      if (!statusMatches) return false

      const assignedMatches =
        assignedFilter === 'Todos' ||
        (assignedFilter === 'Sin asignar' && !lead.assignedTo) ||
        lead.assignedTo?.trim().toLowerCase() === assignedFilter.trim().toLowerCase()

      if (!assignedMatches) return false

      const serviceMatches =
        serviceFilter === 'Todos' || lead.services.map((service) => service.toLowerCase()).includes(serviceFilter.toLowerCase())

      if (!serviceMatches) return false

      const tagMatches =
        tagFilter === 'Todos' || (lead.tags && lead.tags.includes(tagFilter))

      if (!tagMatches) return false

      if (showAttentionOnly && !leadNeedsAttention(lead)) return false

      if (!search) return true

      const haystack = [lead.name, lead.email, lead.phone, lead.company, lead.message, lead.assignedTo]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()

      return haystack.includes(search)
    })
  }, [leads, statusFilter, assignedFilter, serviceFilter, tagFilter, searchTerm, showAttentionOnly])

  const handleExportCSV = () => {
    const header = [
      'Fecha',
      'Nombre',
      'Email',
      'Teléfono',
      'Empresa',
      'Servicios',
      'Presupuesto',
      'Asignado',
      'Último contacto',
      'Estado',
      'Nota',
      'Mensaje',
    ]
    const rows = filteredLeads.map((lead) => {
      const values = [
        formatDate(lead.created_at),
        lead.name,
        lead.email,
        lead.phone,
        lead.company,
        lead.services.join(' | '),
        lead.budget_range,
        lead.assignedTo,
        lead.lastContactAt ? formatDate(lead.lastContactAt) : '',
        lead.status,
        lead.note,
        lead.message,
      ]

      return values
        .map((value) => {
          const safe = value ? value.toString() : ''
          const needsEscape = safe.includes(',') || safe.includes('"') || safe.includes('\n')
          if (needsEscape) {
            return `"${safe.replace(/"/g, '""')}"`
          }
          return safe
        })
        .join(',')
    })

    const csvContent = [header.join(','), ...rows].join('\n')
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `leads-${new Date().toISOString()}.csv`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
    showNotification('CSV descargado')
  }

  const metrics = useMemo(() => {
    const totalsByStatus = STATUS_OPTIONS.reduce<Record<LeadStatus, number>>((acc, status) => {
      acc[status] = 0
      return acc
    }, {} as Record<LeadStatus, number>)

    leads.forEach((lead) => {
      totalsByStatus[lead.status] = (totalsByStatus[lead.status] ?? 0) + 1
    })

    const totalLeads = leads.length
    const converted = totalsByStatus.Convertido ?? 0
    const conversionRate = totalLeads === 0 ? 0 : Math.round((converted / totalLeads) * 1000) / 10

    const weekAgo = new Date()
    weekAgo.setDate(weekAgo.getDate() - 7)
    const leadsThisWeek = leads.filter((lead) => new Date(lead.created_at) >= weekAgo).length
    const contactsThisWeek = leads.filter((lead) => lead.lastContactAt && new Date(lead.lastContactAt) >= weekAgo).length

    const unassigned = leads.filter((lead) => !lead.assignedTo?.trim()).length
    const needingFollowUp = leads.filter((lead) => leadNeedsAttention(lead)).length

    const serviceCount = leads.reduce<Record<string, number>>((acc, lead) => {
      lead.services.forEach((service) => {
        const key = service.trim()
        if (!key) return
        acc[key] = (acc[key] ?? 0) + 1
      })
      return acc
    }, {})

    return {
      totalLeads,
      converted,
      conversionRate,
      leadsThisWeek,
      contactsThisWeek,
      unassigned,
      needingFollowUp,
      totalsByStatus,
      serviceCount,
    }
  }, [leads])

  const leadsByStatus = useMemo(() => {
    return STATUS_OPTIONS.reduce<Record<LeadStatus, Lead[]>>((acc, status) => {
      acc[status] = filteredLeads.filter((lead) => lead.status === status)
      return acc
    }, {} as Record<LeadStatus, Lead[]>)
  }, [filteredLeads])

  const attentionLeads = useMemo(() => {
    return leads.filter((lead) => leadNeedsAttention(lead)).sort(compareByUrgency).slice(0, 6)
  }, [leads])

  const assignmentStats = useMemo(() => {
    const totals = new Map<string, number>()
    leads.forEach((lead) => {
      const key = lead.assignedTo?.trim() || 'Sin asignar'
      totals.set(key, (totals.get(key) ?? 0) + 1)
    })
    return Array.from(totals.entries()).sort((a, b) => b[1] - a[1])
  }, [leads])

  const recentLeads = useMemo(() => {
    return [...leads]
      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
      .slice(0, 6)
  }, [leads])

  const assignmentOptions = useMemo(() => {
    const options = new Set<string>()
    teamMembers.forEach((member) => {
      if (member.canManageLeads) {
        const value = member.name.trim()
        if (value) options.add(value)
      }
    })
    // Keep existing assignments even if permission removed, to avoid UI bugs
    leads.forEach((lead) => {
      const value = lead.assignedTo?.trim()
      if (value) options.add(value)
    })
    return Array.from(options).sort((a, b) => a.localeCompare(b))
  }, [leads, teamMembers])

  const taskAssignmentOptions = useMemo(() => {
    return teamMembers
      .filter(m => m.canManageTasks)
      .sort((a, b) => a.name.localeCompare(b.name))
  }, [teamMembers])

  const fetchBrands = useCallback(async (authToken: string) => {
    setBrandsLoading(true)
    try {
      const apiBase = import.meta.env.VITE_API_BASE || '/api'
      const response = await fetch(`${apiBase}/brands`, {
        headers: { 'Authorization': `Bearer ${authToken}` },
      })
      if (!response.ok) throw new Error('Error al cargar marcas')
      const data = await response.json()
      setBrands(data)
    } catch (err) {
      console.error(err)
      showNotification('No se pudieron cargar las marcas')
    } finally {
      setBrandsLoading(false)
    }
  }, [showNotification])

  const handleCreateBrand = async (name: string, color: string, pkg: string, contactInfo: string) => {
    if (!token) return

    const apiBase = import.meta.env.VITE_API_BASE || '/api'
    try {
      const response = await fetch(`${apiBase}/brands`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ name, color, package: pkg, contactInfo }),
      })
      if (!response.ok) throw new Error('Error al crear marca')
      const newBrand = await response.json()
      setBrands(prev => [...prev, newBrand].sort((a, b) => a.name.localeCompare(b.name)))
      showNotification('Marca creada')
    } catch (err) {
      console.error(err)
      showNotification('No se pudo crear la marca')
    }
  }

  const handleDeleteBrand = async (brandId: number) => {
    if (!token) return

    if (!window.confirm('¿Eliminar esta marca? Las tareas asociadas perderán la marca.')) return

    setBrands(prev => prev.filter(b => b.id !== brandId))

    const apiBase = import.meta.env.VITE_API_BASE || '/api'
    try {
      await fetch(`${apiBase}/brands/${brandId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
      })
      showNotification('Marca eliminada')
    } catch (err) {
      console.error(err)
      showNotification('Error al eliminar marca')
    }
  }

  const fetchTasks = useCallback(async (authToken: string) => {
    setTasksLoading(true)
    try {
      const apiBase = import.meta.env.VITE_API_BASE || '/api'
      const response = await fetch(`${apiBase}/tasks`, {
        headers: { 'Authorization': `Bearer ${authToken}` },
      })
      if (!response.ok) throw new Error('Error al cargar tareas')
      const data = await response.json()
      setTasks(data)
    } catch (err) {
      console.error(err)
      showNotification('No se pudieron cargar las tareas')
    } finally {
      setTasksLoading(false)
    }
  }, [showNotification])

  const handleCreateTask = async (title: string, assignedToId: number | null, brandId: number | null, dueDate: string | null, startDate: string | null) => {
    if (!token) return

    const apiBase = import.meta.env.VITE_API_BASE || '/api'
    try {
      const response = await fetch(`${apiBase}/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ title, assignedToId, brandId, dueDate, startDate }),
      })
      if (!response.ok) throw new Error('Error al crear tarea')
      const newTask = await response.json()
      setTasks(prev => [newTask, ...prev])
      showNotification('Tarea creada')
    } catch (err) {
      console.error(err)
      showNotification('No se pudo crear la tarea')
    }
  }

  const handleUpdateTaskStatus = async (taskId: number, newStatus: Task['status']) => {
    if (!token) return

    setTasks(prev => prev.map(t => t.id === taskId ? { ...t, status: newStatus } : t))

    const apiBase = import.meta.env.VITE_API_BASE || '/api'
    try {
      await fetch(`${apiBase}/tasks/${taskId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      })
    } catch (err) {
      console.error(err)
      showNotification('Error al actualizar tarea')
    }
  }

  const handleDeleteTask = async (taskId: number) => {
    if (!token) return

    if (!window.confirm('¿Eliminar esta tarea?')) return

    setTasks(prev => prev.filter(t => t.id !== taskId))

    const apiBase = import.meta.env.VITE_API_BASE || '/api'
    try {
      await fetch(`${apiBase}/tasks/${taskId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
      })
      showNotification('Tarea eliminada')
    } catch (err) {
      console.error(err)
      showNotification('Error al eliminar tarea')
    }
  }

  const handleAssignTask = async (taskId: number, assignedToId: number | null) => {
    if (!token) return

    setTasks(prev => prev.map(t => t.id === taskId ? { ...t, assignedToId } : t))

    const apiBase = import.meta.env.VITE_API_BASE || '/api'
    try {
      await fetch(`${apiBase}/tasks/${taskId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ assignedToId }),
      })
    } catch (err) {
      console.error(err)
      showNotification('Error al asignar tarea')
    }
  }

  const handleTaskDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over) return

    const taskId = Number(active.id.toString().replace('task-', ''))
    const overId = over.id.toString()
    
    // If dropping over a column
    if (overId.startsWith('column-')) {
      const newStatus = overId.replace('column-', '') as Task['status']
      const task = tasks.find(t => t.id === taskId)
      if (task && task.status !== newStatus) {
        handleUpdateTaskStatus(taskId, newStatus)
      }
    }
  }

  useEffect(() => {
    if (isAuthenticated && token) {
      if (activeTab === 'tasks') {
        fetchTasks(token)
        fetchBrands(token)
      } else if (activeTab === 'brands') {
        fetchBrands(token)
      }
    }
  }, [isAuthenticated, activeTab, fetchTasks, fetchBrands, token])

  const serviceOptions = useMemo(() => {
    const options = new Set<string>()
    leads.forEach((lead) => {
      lead.services.forEach((service) => {
        const value = service.trim()
        if (value) options.add(value)
      })
    })
    return Array.from(options).sort((a, b) => a.localeCompare(b))
  }, [leads])

  const tagOptions = useMemo(() => {
    const options = new Set<string>()
    leads.forEach((lead) => {
      if (lead.tags) {
        lead.tags.forEach((tag) => {
          const value = tag.trim()
          if (value) options.add(value)
        })
      }
    })
    return Array.from(options).sort((a, b) => a.localeCompare(b))
  }, [leads])

  const handleDragEnd = (event: DragEndEvent) => {
    const leadId = Number(event.active.id)
    const overId = event.over?.id

    if (Number.isNaN(leadId) || !overId) {
      return
    }

    if (!STATUS_OPTIONS.includes(overId as LeadStatus)) {
      return
    }

    const newStatus = overId as LeadStatus
    const lead = leads.find((item) => item.id === leadId)

    if (lead && lead.status !== newStatus) {
      handleStatusChange(leadId, newStatus)
    }
  }

  const activeLead = activeLeadId ? leads.find((lead) => lead.id === activeLeadId) : null

  return {
    leads,
    teamMembers,
    currentUser,
    loading,
    membersLoading,
    teamMemberSaving,
    username,
    password,
    isAuthenticated,
    error,
    notification,
    statusFilter,
    assignedFilter,
    serviceFilter,
    tagFilter,
    showAttentionOnly,
    searchTerm,
    activeLeadId,
    noteDraft,
    viewMode,
    teamMemberForm,
    editingMemberId,
    activeTab,
    filteredLeads,
    metrics,
    leadsByStatus,
    attentionLeads,
    assignmentStats,
    recentLeads,
    assignmentOptions,
    serviceOptions,
    tagOptions,
    activeLead,
    setUsername,
    setPassword,
    setStatusFilter,
    setAssignedFilter,
    setServiceFilter,
    setTagFilter,
    setShowAttentionOnly,
    setSearchTerm,
    setActiveLeadId,
    setNoteDraft,
    setViewMode,
    setActiveTab,
    handleLogin,
    handleLogout,
    handleStatusChange,
    handleAssignLead,
    handleDeleteLead,
    handleTeamMemberFieldChange,
    handleTeamMemberCheckboxChange,
    handleTeamMemberPhotoChange,
    handleEditTeamMember,
    handleTeamMemberSubmit,
    handleCancelTeamMemberEdit,
    handleDeleteTeamMember,
    handleMarkContact,
    handleAssignmentSelect,
    handleOpenNotes,
    handleSaveNote,
    handleAddTag,
    handleRemoveTag,
    handleExportCSV,
    copyToClipboard,
    getEmails,
    fetchLeads,
    fetchTasks,
    fetchBrands,
    tasks,
    brands,
    tasksLoading,
    brandsLoading,
    taskAssignmentOptions,
    handleCreateTask,
    handleUpdateTaskStatus,
    handleDeleteTask,
    handleAssignTask,
    handleTaskDragEnd,
    handleDragEnd,
    handleCreateBrand,
    handleDeleteBrand,
    brandFilter,
    setBrandFilter,
    taskViewMode,
    setTaskViewMode,
  }
}
