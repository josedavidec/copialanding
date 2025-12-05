import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ExampleLayoutProps = {
  title: string
  description?: string
  accent?: 'brand' | 'amber' | 'emerald' | 'fuchsia'
  children: ReactNode
}

const accentMap: Record<NonNullable<ExampleLayoutProps['accent']>, string> = {
  brand: 'from-brand-400 via-brand-500 to-sky-500',
  amber: 'from-amber-400 via-amber-500 to-orange-500',
  emerald: 'from-emerald-400 via-emerald-500 to-lime-400',
  fuchsia: 'from-fuchsia-400 via-pink-500 to-rose-400',
}

function ExampleLayout({ title, description, accent = 'brand', children }: ExampleLayoutProps) {
  const gradient = accentMap[accent]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="relative isolate overflow-hidden">
        <div className={`absolute inset-0 bg-linear-to-r ${gradient} opacity-95`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.18),_transparent_55%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-slate-50 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-8">
          <div className="space-y-1 sm:space-y-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-100/80 sm:text-xs sm:tracking-[0.45em]">Demo en vivo</p>
            <h1 className="text-xl font-semibold leading-snug sm:text-3xl">{title}</h1>
            {description ? <p className="max-w-2xl text-xs font-medium text-slate-100/85 sm:text-sm sm:text-base">{description}</p> : null}
          </div>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white shadow-glow transition hover:bg-white/20 sm:px-6 sm:py-3 sm:text-sm"
          >
            Volver al sitio principal
          </Link>
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default ExampleLayout
