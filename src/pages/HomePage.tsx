import type { FormEvent } from 'react'
import { useMemo, useRef, useState } from 'react'
import type { MotionProps } from 'motion/react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

type LeadForm = {
  name: string
  email: string
  phone: string
  company: string
  message: string
}

const MotionLink = motion(Link)

const heroReveal: MotionProps = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' },
}

const navMotion: MotionProps = {
  initial: { opacity: 0, y: -16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut', delay: 0.15 },
}

const heroItemMotion = (index = 0): MotionProps => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: 'easeOut', delay: 0.25 + index * 0.08 },
})

const sectionReveal: MotionProps = {
  initial: { opacity: 0, y: 48 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: 'easeOut' },
  viewport: { once: true, amount: 0.25 },
}

const cardMotion = (index = 0): MotionProps => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut', delay: index * 0.08 },
  viewport: { once: true, amount: 0.2 },
})

function HomePage() {
  const apiBase = import.meta.env.VITE_API_BASE ?? ''
  const [leadForm, setLeadForm] = useState<LeadForm>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })
  const [leadState, setLeadState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [leadError, setLeadError] = useState<string | null>(null)

  const contactSectionRef = useRef<HTMLElement | null>(null)

  const metrics = useMemo(
    () => [
      { label: 'Landings publicadas', value: '90+' },
      { label: 'Precio fijo', value: '$400k' },
      { label: 'Tiempo de entrega', value: '48h' },
      { label: 'Satisfacción', value: '100%' },
    ],
    [],
  )

  const differentiators = useMemo(
    () => [
      {
        title: 'Precio Único y Transparente',
        description:
          'Pagas $400.000 una sola vez. Incluye dominio y hosting por un año. Sin sorpresas ni mensualidades.',
        icon: QuickIcon,
      },
      {
        title: 'Sin Mensualidades',
        description:
          'Tu página es tuya. No dependes de plataformas costosas como Wix o Squarespace que te cobran mes a mes.',
        icon: OptimizeIcon,
      },
      {
        title: 'Lista para Vender',
        description:
          'Diseño profesional optimizado para cargar rápido y convertir visitantes en clientes por WhatsApp.',
        icon: AutomationIcon,
      },
    ],
    [],
  )

  const examples = useMemo(
    () => [
      {
        name: 'Restaurante de barrio',
        summary: 'Menú, reservas y promociones en una página ligera.',
        highlights: ['Carta del día y combos', 'Botón directo a WhatsApp', 'Mapa y horarios embebidos'],
        link: '/examples/restaurante-barrio',
        linkLabel: 'Ver ejemplo restaurante',
      },
      {
        name: 'Marca personal',
        summary: 'Portfolio y servicios para profesionales independientes.',
        highlights: ['Sección de testimonios', 'Integración con Calendly', 'Descarga de media kit'],
        link: '/examples/marca-personal',
        linkLabel: 'Ver ejemplo marca personal',
      },
      {
        name: 'Curso Digital',
        summary: 'Landing para promocionar un producto o curso.',
        highlights: ['Beneficios y temario', 'Video de presentación', 'Botón de compra directo'],
        link: '/examples/curso-hotmart',
        linkLabel: 'Ver ejemplo curso',
      },
      {
        name: 'Agencia de Marketing',
        summary: 'Presenta tus servicios y casos de éxito.',
        highlights: ['Sección de servicios', 'Casos de estudio', 'Formulario de contacto'],
        link: '/examples/agencia-marketing',
        linkLabel: 'Ver ejemplo agencia',
      },
      {
        name: 'Funnel de Ventas',
        summary: 'Estructura optimizada para conversión máxima y venta directa.',
        highlights: ['Problema-Solución-Acción', 'Presión de urgencia (timer)', 'Garantía 100%'],
        link: '/examples/funnel-ventas',
        linkLabel: 'Ver ejemplo funnel',
      },
      {
        name: 'Funnel de Membresía',
        summary: 'Convierte visitantes en miembros recurrentes.',
        highlights: ['Beneficios claros', 'Llamados a la acción', 'Testimonios de usuarios'],
        link: '/examples/funnel-productividad',
        linkLabel: 'Ver ejemplo membresía',
      },
    ],
    [],
  )

  const process = useMemo(
    () => [
      {
        title: '1. Envías tu información',
        description:
          'Nos cuentas qué vendes y nos pasas tus textos y fotos. Si no tienes fotos, usamos de stock profesional.',
      },
      {
        title: '2. Construimos tu página',
        description:
          'Diseñamos y programamos tu landing page estática. Sin plantillas pesadas, código limpio y rápido.',
      },
      {
        title: '3. Lanzamiento',
        description:
          'Conectamos tu dominio .com o .co, configuramos el hosting y quedas en línea en 48 horas.',
      },
    ],
    [],
  )

  const testimonials = useMemo(
    () => [
      {
        name: 'María Cifuentes',
        role: 'Emprendedora',
        quote:
          'Necesitaba algo rápido y barato para vender mis postres. En dos días ya tenía la página lista y recibiendo pedidos al WhatsApp.',
      },
      {
        name: 'Diego Rodríguez',
        role: 'Consultor',
        quote:
          'No quería pagar mensualidades en Wix. Aquí pagué una vez y me olvidé de los cobros mensuales. La página vuela.',
      },
      {
        name: 'Valentina Mora',
        role: 'Agente Inmobiliaria',
        quote:
          'Excelente servicio. Me incluyeron el dominio y el hosting, así que no tuve que configurar nada técnico.',
      },
    ],
    [],
  )

  const plans = useMemo(
    () => [
      {
        name: 'Plan Único Todo Incluido',
        price: '$400.000 COP',
        recurrence: 'Pago único',
        highlighted: true,
        description: 'Todo lo que necesitas para tener tu landing page profesional en línea.',
        features: [
          'Dominio .com o .co incluido (1 año)',
          'Hosting de alta velocidad incluido (1 año)',
          'Diseño profesional (no plantillas genéricas)',
          'Botón de WhatsApp y Formulario de contacto',
          'Optimización para móviles y carga rápida',
          'Lista para pauta (Google/Meta Ads)',
          'Certificado SSL (Candado de seguridad)',
        ],
      },
    ],
    [],
  )

  const renewals = useMemo(
    () => [
      {
        name: 'Renovación Anual',
        price: '$180.000 COP/año',
        accent: 'bg-sky-500',
        features: [
          'Renovación de Dominio',
          'Renovación de Hosting',
          'Certificado SSL',
          'Soporte técnico básico',
          'Monitoreo de seguridad',
        ],
      },
    ],
    [],
  )

  const faqs = useMemo(
    () => [
      {
        question: '¿Qué incluye exactamente los $400.000?',
        answer:
          'Incluye el diseño y desarrollo de la landing page, el dominio (.com o .co) por un año, y el hosting por un año. No hay costos ocultos.',
      },
      {
        question: '¿Tengo que pagar mensualidades?',
        answer:
          'No. El pago es único. Solo debes renovar el dominio y hosting anualmente (aprox $180.000 COP) para mantener tu página en línea.',
      },
      {
        question: '¿Puedo editar la página yo mismo?',
        answer:
          'Son páginas estáticas para garantizar velocidad y seguridad, por lo que no tienen panel de administración (CMS). Si necesitas cambios, puedes contactarnos para una actualización puntual.',
      },
      {
        question: '¿Necesito algo más complejo como un CMS?',
        answer:
          'Si necesitas un blog, tienda en línea con carrito o autoadministración, escríbenos para cotizar un desarrollo a medida. Este plan es para landings informativas y de venta directa.',
      },
    ],
    [],
  )

  const handleLeadChange = (key: keyof LeadForm, value: string) => {
    setLeadForm((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const handleLeadSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLeadState('loading')
    setLeadError(null)

    try {
      const response = await fetch(`${apiBase}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...leadForm,
          services: ['Plan Único $400k'],
          budgetRange: '$400.000 COP',
        }),
      })

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { message?: string } | null
        throw new Error(data?.message ?? 'No pudimos enviar tu solicitud. Inténtalo más tarde.')
      }

      setLeadState('success')
      
      // Redirección a WhatsApp
      const message = `Hola, acabo de llenar el formulario en la web de TuLandingYa.com. Mi nombre es ${leadForm.name} y quiero iniciar mi proyecto de $400k.`
      const whatsappUrl = `https://wa.me/573128225056?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, '_blank')

      setLeadForm({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      })
    } catch (error) {
      setLeadState('error')
      setLeadError(error instanceof Error ? error.message : 'Error inesperado. Vuelve a intentarlo más tarde.')
    }
  }

  const scrollToContact = () => {
    contactSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-full bg-slate-950">
      <motion.header {...heroReveal} className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(32,155,255,0.24),_transparent_55%)]" />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-900 via-transparent" />
        </div>
        <motion.nav {...navMotion} className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
          <div className="flex items-center gap-3">
            <img src="/logotulandingya.png" alt="TuLandingYa Logo" className="h-12 w-12 rounded-xl" />
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-brand-200">TuLandingYa</p>
              <p className="hidden text-sm text-slate-400 sm:block">Landing pages profesionales a precio único</p>
            </div>
          </div>
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-200 sm:flex">
            <motion.button
              {...heroItemMotion(0)}
              onClick={scrollToContact}
              className="transition hover:text-brand-300"
              type="button"
            >
              Pedir mi landing
            </motion.button>
            <motion.a {...heroItemMotion(0)} href="#plans" className="transition hover:text-brand-300">
              Qué incluye
            </motion.a>
            <motion.a {...heroItemMotion(0)} href="#testimonials" className="transition hover:text-brand-300">
              Ejemplos
            </motion.a>
          </div>
          <motion.button
            type="button"
            onClick={scrollToContact}
            className="hidden rounded-full bg-brand-600 px-6 py-2.5 text-sm font-bold text-white shadow-[0_0_20px_-5px_rgba(32,155,255,0.5)] transition-transform hover:scale-105 hover:bg-brand-500 hover:shadow-[0_0_25px_-5px_rgba(32,155,255,0.7)] sm:inline-flex"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            {...heroItemMotion(1)}
          >
            Empezar ahora
          </motion.button>
        </motion.nav>

        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 pb-20 pt-10 text-center sm:pb-24">
          <motion.span
            {...heroItemMotion(0)}
            className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-slate-200"
          >
            Precio único $400.000 COP
          </motion.span>
          <motion.h1
            {...heroItemMotion(1)}
            className="max-w-3xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Tu landing page profesional por un{' '}
            <span className="text-gradient">precio único</span>
          </motion.h1>
          <motion.p {...heroItemMotion(2)} className="max-w-2xl text-lg text-slate-300 md:text-xl">
            Todo incluido: Diseño, Dominio y Hosting. Un solo pago de $400.000. Tu página es tuya para siempre, sin mensualidades.
          </motion.p>
          <motion.div {...heroItemMotion(3)} className="flex flex-col items-center gap-4 sm:flex-row">
            <motion.button
              type="button"
              onClick={scrollToContact}
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 px-8 py-4 text-lg font-bold text-white shadow-[0_0_40px_-10px_rgba(32,155,255,0.6)] ring-1 ring-white/20 transition-all hover:scale-105 hover:shadow-[0_0_60px_-15px_rgba(32,155,255,0.8)] hover:ring-white/40"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Quiero mi landing</span>
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-md" />
              <ChevronRightIcon className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>

          <motion.div {...heroItemMotion(4)} className="relative w-full max-w-5xl px-4">
            <div className="absolute left-1/2 top-1/2 -z-10 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/15 blur-[90px]" />
            <img
              src="/landings.png"
              alt="Ejemplos de landing pages de alta conversión"
              className="w-full drop-shadow-2xl"
            />
          </motion.div>

          <div className="grid w-full max-w-3xl grid-cols-2 gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur">
            {metrics.map((metric, index) => (
              <motion.div key={metric.label} {...heroItemMotion(5 + index)} className="px-2 text-left">
                <p className="text-2xl font-semibold text-white sm:text-3xl">{metric.value}</p>
                <p className="text-sm text-slate-400">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.header>

      <main className="relative">
        <motion.section id="features" {...sectionReveal} className="relative py-24">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(46,148,255,0.18),_transparent_60%)]" />
          <div className="mx-auto max-w-6xl px-6">
            <motion.div {...cardMotion(0)} className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand-200">Por qué elegirnos</p>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">La forma más inteligente de tener tu web</h2>
              <p className="mt-4 text-base text-slate-300">
                Olvídate de constructores web lentos, plugins que fallan y mensualidades eternas. Te entregamos una web profesional, rápida y tuya para siempre.
              </p>
            </motion.div>
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {differentiators.map((item, index) => (
                <motion.div
                  key={item.title}
                  {...cardMotion(index)}
                  className="tilt-card group relative overflow-hidden rounded-2xl border border-white/5 p-[1px]"
                >
                  <div className="relative z-10 flex h-full flex-col gap-6 rounded-2xl border border-white/5 bg-slate-900/60 p-8 backdrop-blur">
                    <motion.div
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-500/10 text-brand-300 ring-1 ring-brand-500/40"
                      initial={{ scale: 0.85, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 + index * 0.08 }}
                      viewport={{ once: true, amount: 0.4 }}
                    >
                      <item.icon className="h-6 w-6" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-3 text-sm text-slate-300">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section id="examples" {...sectionReveal} className="border-y border-white/5 bg-slate-950/85 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div {...cardMotion(0)} className="mx-auto max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.4em] text-brand-200">Ejemplos</p>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Diseños que venden</h2>
              <p className="mt-4 text-base text-slate-300">
                Adaptamos el diseño a tu negocio. Ya sea un restaurante, un servicio profesional o un producto digital.
              </p>
            </motion.div>
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {examples.map((example, index) => (
                <MotionLink
                  key={example.name}
                  to={example.link}
                  className="group flex h-full flex-col gap-5 rounded-3xl border border-white/5 bg-slate-900/60 p-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
                  {...cardMotion(index)}
                  whileHover={{ y: -6, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <h3 className="text-lg font-semibold text-white">{example.name}</h3>
                  <p className="text-sm text-slate-300">{example.summary}</p>
                  <ul className="mt-2 space-y-3 text-sm text-slate-300">
                    {example.highlights.map((item) => (
                      <motion.li key={item} className="flex items-start gap-2" initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, ease: 'easeOut' }} viewport={{ once: true, amount: 0.4 }}>
                        <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand-500/20 text-brand-200">
                          <CheckIcon className="h-2.5 w-2.5" />
                        </span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-brand-200 transition group-hover:text-brand-100">
                    {example.linkLabel}
                    <ChevronRightIcon className="h-4 w-4" />
                  </span>
                </MotionLink>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section id="process" {...sectionReveal} className="border-y border-white/5 bg-slate-950/80 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div {...cardMotion(0)} className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-start">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-brand-200">Cómo funciona</p>
                <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Tu página lista en 3 pasos</h2>
                <p className="mt-4 max-w-2xl text-base text-slate-300">
                  Simplificamos el proceso para que no pierdas tiempo. Tú nos das la información, nosotros hacemos el resto.
                </p>
              </div>
              <motion.div
                className="rounded-3xl border border-white/5 bg-slate-900/50 p-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <p className="text-sm font-medium text-brand-200">Garantía de satisfacción</p>
                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                  <li>• Si no te gusta el diseño, lo ajustamos hasta que estés feliz.</li>
                  <li>• Soporte técnico incluido por 30 días después del lanzamiento.</li>
                  <li>• Te entregamos todos los accesos a tu dominio y hosting.</li>
                </ul>
              </motion.div>
            </motion.div>
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {process.map((step, index) => (
                <motion.div
                  key={step.title}
                  {...cardMotion(index)}
                  className="relative overflow-hidden rounded-2xl border border-white/5 bg-slate-900/60 p-6"
                >
                  <motion.span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/20 text-base font-semibold text-brand-100"
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.45, ease: 'easeOut', delay: 0.12 + index * 0.06 }}
                    viewport={{ once: true, amount: 0.4 }}
                  >
                    {index + 1}
                  </motion.span>
                  <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm text-slate-300">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section id="testimonials" {...sectionReveal} className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div {...cardMotion(0)} className="mx-auto max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.4em] text-brand-200">Testimonios</p>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Lo que dicen nuestros clientes</h2>
              <p className="mt-4 text-base text-slate-300">
                Emprendedores y profesionales que ya tienen su landing page funcionando y vendiendo.
              </p>
            </motion.div>
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.article
                  key={testimonial.name}
                  {...cardMotion(index)}
                  className="relative flex h-full flex-col gap-6 rounded-2xl border border-white/5 bg-slate-900/60 p-8"
                >
                  <motion.svg
                    className="h-8 w-8 text-brand-400"
                    viewBox="0 0 32 32"
                    fill="none"
                    initial={{ rotate: -6, opacity: 0 }}
                    whileInView={{ rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 + index * 0.08 }}
                    viewport={{ once: true, amount: 0.4 }}
                  >
                    <path
                      d="M12.444 15.556H7.111c0-5.111 2.667-8.889 6.667-10.667v3.778c-1.778.889-3.111 2.667-3.333 4.889h2v2zm12.444 0h-5.333c0-5.111 2.666-8.889 6.666-10.667v3.778c-1.777.889-3.11 2.667-3.333 4.889h2v2z"
                      fill="currentColor"
                    />
                  </motion.svg>
                  <p className="text-base text-slate-300">{testimonial.quote}</p>
                  <div className="mt-auto text-sm">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-slate-400">{testimonial.role}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section id="plans" {...sectionReveal} className="border-y border-white/5 bg-slate-950/85 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div {...cardMotion(0)} className="mx-auto max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.4em] text-brand-200">Precio Único</p>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Sin mensualidades, sin sorpresas</h2>
              <p className="mt-4 text-base text-slate-300">Un solo pago. Todo incluido por un año.</p>
            </motion.div>
            <div className="mt-16 flex justify-center">
              {plans.map((plan, index) => (
                <motion.article
                  key={plan.name}
                  {...cardMotion(index)}
                  whileHover={{ y: -10, scale: 1.01 }}
                  className={`relative flex w-full max-w-md flex-col overflow-hidden rounded-3xl border border-white/5 bg-slate-900/60 p-8 ${
                    plan.highlighted ? 'shadow-glow ring-1 ring-brand-400/40' : ''
                  }`}
                >
                  {plan.highlighted ? (
                    <motion.span
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.35, ease: 'easeOut', delay: 0.2 + index * 0.05 }}
                      viewport={{ once: true, amount: 0.4 }}
                      className="absolute right-6 top-6 rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-slate-950"
                    >
                      Todo incluido
                    </motion.span>
                  ) : null}
                  <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                  <p className="mt-2 text-sm text-slate-400">{plan.description}</p>
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-3xl font-semibold text-white">{plan.price}</span>
                    <span className="text-sm text-slate-400">{plan.recurrence}</span>
                  </div>
                  <ul className="mt-6 space-y-3 text-sm text-slate-300">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 + featureIndex * 0.05 }}
                        viewport={{ once: true, amount: 0.4 }}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-500/20 text-brand-200">
                          <CheckIcon className="h-3 w-3" />
                        </span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.94 }}
                    onClick={scrollToContact}
                    className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-sm font-bold transition-all ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-brand-400 to-brand-600 text-white shadow-[0_0_30px_-5px_rgba(32,155,255,0.5)] hover:shadow-[0_0_40px_-5px_rgba(32,155,255,0.7)]'
                        : 'border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-brand-400/50'
                    }`}
                  >
                    Quiero mi landing
                  </motion.button>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section id="renewals" {...sectionReveal} className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <motion.div {...cardMotion(0)} className="mx-auto max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.4em] text-brand-200">Mantenimiento</p>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">¿Qué pasa después del primer año?</h2>
              <p className="mt-4 text-base text-slate-300">
                Solo pagas la renovación anual de tu dominio y hosting para mantener tu página en línea.
              </p>
            </motion.div>
            <div className="mt-16 flex justify-center">
              {renewals.map((renewal, index) => (
                <motion.article
                  key={renewal.name}
                  {...cardMotion(index)}
                  whileHover={{ y: -8 }}
                  className="relative flex w-full max-w-md flex-col gap-6 overflow-hidden rounded-3xl border border-white/5 bg-slate-900/60 p-8"
                >
                  <motion.span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl text-sm font-semibold text-slate-950 ${renewal.accent}`}
                    initial={{ scale: 0.75, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, ease: 'easeOut', delay: 0.12 + index * 0.08 }}
                    viewport={{ once: true, amount: 0.4 }}
                  >
                    ●
                  </motion.span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{renewal.name}</h3>
                    <p className="mt-2 text-sm text-slate-400">{renewal.price}</p>
                  </div>
                  <ul className="mt-2 space-y-3 text-sm text-slate-300">
                    {renewal.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.35, ease: 'easeOut', delay: 0.1 + featureIndex * 0.05 }}
                        viewport={{ once: true, amount: 0.35 }}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-500/15 text-brand-200">
                          <CheckIcon className="h-3 w-3" />
                        </span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section {...sectionReveal} className="py-24" ref={contactSectionRef}>
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
              <motion.div {...cardMotion(0)} className="space-y-8">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-brand-200">Empieza ahora</p>
                  <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">¿Listo para tener tu landing page?</h2>
                  <p className="mt-4 text-base text-slate-300">
                    Déjanos tus datos y te contactaremos para iniciar el proceso. Sin compromisos.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/5 bg-slate-900/60 p-6">
                  <h3 className="text-lg font-semibold text-white">Recuerda que incluye:</h3>
                  <ul className="mt-4 space-y-3 text-sm text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-500/20 text-brand-200">
                        <CheckIcon className="h-3 w-3" />
                      </span>
                      <span>Dominio .com o .co y Hosting por 1 año.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-500/20 text-brand-200">
                        <CheckIcon className="h-3 w-3" />
                      </span>
                      <span>Diseño profesional y carga rápida.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-500/20 text-brand-200">
                        <CheckIcon className="h-3 w-3" />
                      </span>
                      <span>Botón de WhatsApp y Formulario de contacto.</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.form
                {...cardMotion(1)}
                onSubmit={handleLeadSubmit}
                className="relative overflow-hidden rounded-3xl border border-white/5 bg-slate-900/60 p-8 backdrop-blur"
              >
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,_rgba(32,155,255,0.24),_transparent_60%)]" />
                <h3 className="text-xl font-semibold text-white">Solicita tu landing</h3>
                <p className="mt-2 text-sm text-slate-300">Te responderemos en menos de 24 horas.</p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                      Nombre
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      value={leadForm.name}
                      onChange={(event) => handleLeadChange('name', event.target.value)}
                      className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-400/60 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={leadForm.email}
                      onChange={(event) => handleLeadChange('email', event.target.value)}
                      className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-400/60 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                      WhatsApp
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      value={leadForm.phone}
                      onChange={(event) => handleLeadChange('phone', event.target.value)}
                      className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-400/60 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
                      placeholder="+57 300 000 0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                      Empresa (Opcional)
                    </label>
                    <input
                      id="company"
                      name="company"
                      value={leadForm.company}
                      onChange={(event) => handleLeadChange('company', event.target.value)}
                      className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-400/60 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
                      placeholder="Nombre de tu negocio"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                    ¿Qué necesitas? (Opcional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={leadForm.message}
                    onChange={(event) => handleLeadChange('message', event.target.value)}
                    placeholder="Cuéntanos brevemente sobre tu proyecto..."
                    className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-400/60 focus:outline-none focus:ring-2 focus:ring-brand-500/30"
                  />
                </div>

                {leadState === 'error' && leadError ? (
                  <p className="mt-4 rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">{leadError}</p>
                ) : null}

                {leadState === 'success' ? (
                  <p className="mt-4 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                    ¡Recibido! Te contactaremos muy pronto.
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={leadState === 'loading'}
                  className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 px-8 py-4 text-base font-bold text-white shadow-[0_0_30px_-5px_rgba(32,155,255,0.5)] ring-1 ring-white/20 transition-all hover:scale-[1.02] hover:shadow-[0_0_50px_-10px_rgba(32,155,255,0.7)] disabled:cursor-wait disabled:opacity-70"
                >
                  {leadState === 'loading' ? 'Enviando...' : 'Solicitar mi landing'}
                  <ChevronRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.form>
            </div>
          </div>
        </motion.section>

        <motion.section id="faq" {...sectionReveal} className="py-24">
          <div className="mx-auto max-w-5xl px-6">
            <motion.div {...cardMotion(0)} className="mx-auto max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.4em] text-brand-200">Preguntas frecuentes</p>
              <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">Resuelve tus dudas</h2>
            </motion.div>
            <div className="mt-16 space-y-6">
              {faqs.map((faq, index) => (
                <motion.div key={faq.question} {...cardMotion(index)}>
                  <details className="group rounded-3xl border border-white/5 bg-slate-900/60 p-6">
                    <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-lg font-semibold text-white">
                      {faq.question}
                      <span className="text-brand-300 transition group-open:rotate-45">
                        <PlusIcon className="h-5 w-5" />
                      </span>
                    </summary>
                    <p className="mt-4 text-sm text-slate-300">{faq.answer}</p>
                  </details>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>

      <motion.footer {...sectionReveal} className="border-t border-white/5 bg-slate-950/90 py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <motion.div {...cardMotion(0)}>
            <p className="text-base font-semibold text-white">TuLandingYa</p>
            <p className="text-xs text-slate-500">Landing pages estáticas listas para publicar en Colombia.</p>
          </motion.div>
          <motion.div {...cardMotion(1)} className="flex flex-col items-start gap-2 text-xs text-slate-500 md:flex-row md:items-center md:gap-6">
            <a href="#plans" className="transition hover:text-brand-200">
              Planes
            </a>
            <a href="#process" className="transition hover:text-brand-200">
              Cómo trabajamos
            </a>
            <a href="#faq" className="transition hover:text-brand-200">
              FAQ
            </a>
            <p>© {new Date().getFullYear()} TuLandingYa. Todos los derechos reservados.</p>
          </motion.div>
        </div>
      </motion.footer>
      <FloatingWhatsApp />
    </div>
  )
}

type IconProps = {
  className?: string
}

function QuickIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m5.25 12.75 3.5 3.5 10-10"
      />
    </svg>
  )
}

function OptimizeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <circle cx="12" cy="12" r="8" />
      <path strokeLinecap="round" d="M12 8v4l2.5 2.5" />
    </svg>
  )
}

function AutomationIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 4.5h9l2 3.5-2 3.5h-9l-2-3.5 2-3.5zM7.5 12.5h9l2 3.5-2 3.5h-9l-2-3.5 2-3.5z"
      />
    </svg>
  )
}

function CheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 0 1 0 1.414l-7.5 7.5a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L8.5 12.086l6.793-6.793a1 1 0 0 1 1.414 0Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function ChevronRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 0 1 0-1.414L10.586 10 7.293 6.707a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function PlusIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path d="M9 9V4a1 1 0 1 1 2 0v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H4a1 1 0 1 1 0-2h5z" />
    </svg>
  )
}

function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/573128225056" // Reemplazar con el número real
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-slate-950"
      aria-label="Chat en WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    </a>
  )
}

export default HomePage
