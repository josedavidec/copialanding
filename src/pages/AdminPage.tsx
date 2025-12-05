import { useState } from 'react'
import { DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { MetricCard } from '../components/admin/MetricCard'
import { BoardColumn } from '../components/admin/BoardColumn'
import { TaskBoardColumn } from '../components/admin/TaskBoardColumn'
import { useAdminLogic } from '../hooks/useAdminLogic'
import {
  STATUS_OPTIONS,
  STATUS_STYLES,
  type LeadStatus,
  type TaskStatus,
  type StatusFilter,
  type ServiceFilter,
  type AssignedFilter,
  ATTENTION_THRESHOLD_DAYS,
} from '../types/admin'
import { formatDate, formatRelativeFromNow, leadNeedsAttention } from '../utils/adminUtils'

import { BrandManager } from '../components/admin/BrandManager'
import { TaskCalendar } from '../components/admin/TaskCalendar'
import { useTheme } from '../hooks/useTheme'

export default function AdminPage() {
  const {
    teamMembers,
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
    brandFilter,
    showAttentionOnly,
    searchTerm,
    noteDraft,
    viewMode,
    taskViewMode,
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
    setBrandFilter,
    setShowAttentionOnly,
    setSearchTerm,
    setActiveLeadId,
    setNoteDraft,
    setViewMode,
    setTaskViewMode,
    setActiveTab,
    handleLogin,
    handleLogout,
    handleStatusChange,
    handleDeleteLead,
    handleTeamMemberFieldChange,
    handleEditTeamMember,
    handleTeamMemberSubmit,
    handleCancelTeamMemberEdit,
    handleDeleteTeamMember,
    handleMarkContact,
    handleAssignmentSelect,
    handleOpenNotes,
    handleSaveNote,
    handleExportCSV,
    handleDragEnd,
    copyToClipboard,
    getEmails,
    fetchLeads,
    handleAddTag,
    handleRemoveTag,
    handleTeamMemberCheckboxChange,
    handleTeamMemberPhotoChange,
    tasks,
    brands,
    brandsLoading,
    taskAssignmentOptions,
    handleCreateTask,
    handleUpdateTaskStatus,
    handleAssignTask,
    handleTaskDragEnd,
    handleDeleteTask,
    handleCreateBrand,
    handleDeleteBrand,
    currentUser,
  } = useAdminLogic()

  const { theme, toggleTheme } = useTheme()
  const [tagInput, setTagInput] = useState('')
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 8 } }))
  const isBoardView = viewMode === 'board'

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4 transition-colors duration-200">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg max-w-md w-full transition-colors duration-200">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="admin-username">
                Correo electrónico
              </label>
              <input
                id="admin-username"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                autoComplete="username"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="admin@ejemplo.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="current-password"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                placeholder="Ingresa tu contraseña"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors disabled:opacity-50"
            >
              {loading ? 'Verificando...' : 'Ingresar'}
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 md:p-8 transition-colors duration-200">
      <div className="mx-auto max-w-[1920px]">
        <div className="flex flex-col gap-6 lg:flex-row">
          <aside className="flex flex-col gap-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm lg:w-64 shrink-0 transition-colors duration-200">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">Navegación</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">Panel admin</h2>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Gestiona leads, notas internas y el equipo comercial.</p>
            </div>
            <nav className="space-y-2">
              <button
                type="button"
                onClick={() => setActiveTab('leads')}
                className={`w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition-colors ${activeTab === 'leads' ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'}`}
              >
                Leads
                <span
                  className={`block text-xs font-normal lg:hidden ${activeTab === 'leads' ? 'text-white/80' : 'text-gray-500'}`}
                >
                  Métricas, filtros y pipeline
                </span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('team')}
                className={`w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition-colors ${activeTab === 'team' ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'}`}
              >
                Equipo
                <span
                  className={`block text-xs font-normal lg:hidden ${activeTab === 'team' ? 'text-white/80' : 'text-gray-500'}`}
                >
                  Roles y contactos del equipo
                </span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('tasks')}
                className={`w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition-colors ${activeTab === 'tasks' ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'}`}
              >
                Tareas
                <span
                  className={`block text-xs font-normal lg:hidden ${activeTab === 'tasks' ? 'text-white/80' : 'text-gray-500'}`}
                >
                  Gestor de tareas del equipo
                </span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('brands')}
                className={`w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition-colors ${activeTab === 'brands' ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'}`}
              >
                Marcas
                <span
                  className={`block text-xs font-normal lg:hidden ${activeTab === 'brands' ? 'text-white/80' : 'text-gray-500'}`}
                >
                  Gestión de clientes y paquetes
                </span>
              </button>
            </nav>
            <div className="mt-auto flex flex-col gap-2">
              {currentUser && (
                <div className="mb-2 flex items-center gap-3 rounded-xl bg-gray-50 p-3 dark:bg-gray-700/50">
                  {currentUser.photoUrl ? (
                    <img
                      src={currentUser.photoUrl}
                      alt={currentUser.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                      {currentUser.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-gray-900 dark:text-white">
                      {currentUser.name}
                    </p>
                    <p className="truncate text-xs text-gray-500 dark:text-gray-400">
                      {currentUser.role || 'Sin rol'}
                    </p>
                  </div>
                </div>
              )}
              <button
                onClick={toggleTheme}
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-600 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                {theme === 'light' ? '🌙 Modo Oscuro' : '☀️ Modo Claro'}
              </button>
              <button
                onClick={handleLogout}
                className="inline-flex items-center justify-center rounded-xl border border-red-200 px-4 py-2 text-sm font-semibold text-red-600 transition-colors hover:bg-red-50 dark:border-red-900/30 dark:hover:bg-red-900/20"
              >
                Cerrar sesión
              </button>
            </div>
          </aside>
          <div className="flex-1 space-y-8 min-w-0">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {activeTab === 'leads' ? 'Panel de Leads' : activeTab === 'team' ? 'Gestión de Equipo' : activeTab === 'brands' ? 'Gestión de Marcas' : 'Gestor de Tareas'}
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {activeTab === 'leads' 
                    ? 'Gestiona contactos, notas internas y métricas clave en tiempo real.'
                    : activeTab === 'team'
                    ? 'Administra los miembros del equipo y sus permisos.'
                    : activeTab === 'brands'
                    ? 'Administra las marcas o clientes para organizar las tareas.'
                    : 'Organiza y asigna tareas pendientes al equipo.'}
                </p>
              </div>
              {activeTab === 'leads' && (
                <div className="flex flex-wrap items-center justify-end gap-3">
                  <div className="flex overflow-hidden rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium shadow-sm">
                    <button
                      type="button"
                      onClick={() => setViewMode('table')}
                      className={`px-3 py-1.5 transition-colors ${viewMode === 'table' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'}`}
                    >
                      Vista tabla
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewMode('board')}
                      className={`px-3 py-1.5 transition-colors ${viewMode === 'board' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'}`}
                    >
                      Vista Kanban
                    </button>
                  </div>
                  <button
                    onClick={() => fetchLeads(password)}
                    disabled={loading}
                    className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm disabled:opacity-60"
                  >
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" aria-hidden />
                    Actualizar
                  </button>
                </div>
              )}
              {activeTab === 'tasks' && (
                <div className="flex flex-wrap items-center justify-end gap-3">
                  <div className="flex overflow-hidden rounded-lg border border-gray-300 bg-white text-sm font-medium shadow-sm">
                    <button
                      type="button"
                      onClick={() => setTaskViewMode('list')}
                      className={`px-3 py-1.5 transition-colors ${taskViewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'}`}
                    >
                      Lista
                    </button>
                    <button
                      type="button"
                      onClick={() => setTaskViewMode('board')}
                      className={`px-3 py-1.5 transition-colors ${taskViewMode === 'board' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'}`}
                    >
                      Kanban
                    </button>
                    <button
                      type="button"
                      onClick={() => setTaskViewMode('calendar')}
                      className={`px-3 py-1.5 transition-colors ${taskViewMode === 'calendar' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'}`}
                    >
                      Calendario
                    </button>
                  </div>
                </div>
              )}
            </div>

            {activeTab === 'leads' ? (
              <>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
                  <MetricCard label="Leads totales" value={metrics.totalLeads.toString()} />
                  <MetricCard label="Leads últimos 7 días" value={metrics.leadsThisWeek.toString()} />
                  <MetricCard label="Convertidos" value={metrics.converted.toString()} sublabel="Basado en estado 'Convertido'" />
                  <MetricCard label="Tasa de conversión" value={`${metrics.conversionRate.toFixed(1)}%`} sublabel="Convertidos / Leads totales" />
                  <MetricCard
                    label="Seguimientos pendientes"
                    value={metrics.needingFollowUp.toString()}
                    sublabel={`Más de ${ATTENTION_THRESHOLD_DAYS} días sin contacto`}
                  />
                  <MetricCard label="Sin responsable" value={metrics.unassigned.toString()} sublabel="Leads sin asignación" />
                  <MetricCard label="Contactos semana" value={metrics.contactsThisWeek.toString()} sublabel="Últimos 7 días" />
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm rounded-xl p-5 space-y-4">
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex flex-wrap gap-3 items-center">
                      <div className="relative">
                        <input
                          type="text"
                          value={searchTerm}
                          onChange={(event) => setSearchTerm(event.target.value)}
                          className="w-full md:w-64 lg:w-72 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800"
                          placeholder="Buscar por nombre, correo, empresa..."
                        />
                      </div>

                      <select
                        value={statusFilter}
                        onChange={(event) => setStatusFilter(event.target.value as StatusFilter)}
                        className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-sm text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800"
                      >
                        <option value="Todos">Todos los estados</option>
                        {STATUS_OPTIONS.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>

                      <select
                        value={serviceFilter}
                        onChange={(event) => setServiceFilter(event.target.value as ServiceFilter)}
                        className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-sm text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800"
                      >
                        <option value="Todos">Todos los servicios</option>
                        {serviceOptions.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>

                      <select
                        value={tagFilter}
                        onChange={(event) => setTagFilter(event.target.value)}
                        className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-sm text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800"
                      >
                        <option value="Todos">Todas las etiquetas</option>
                        {tagOptions.map((tag) => (
                          <option key={tag} value={tag}>
                            {tag}
                          </option>
                        ))}
                      </select>

                      <select
                        value={assignedFilter}
                        onChange={(event) => setAssignedFilter(event.target.value as AssignedFilter)}
                        className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-sm text-gray-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800"
                      >
                        <option value="Todos">Todos los responsables</option>
                        <option value="Sin asignar">Sin asignar</option>
                        {assignmentOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>

                      <label className="inline-flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <input
                          type="checkbox"
                          checked={showAttentionOnly}
                          onChange={(event) => setShowAttentionOnly(event.target.checked)}
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        Solo pendientes de seguimiento
                      </label>

                      <button
                        onClick={() => copyToClipboard(getEmails(filteredLeads))}
                        className="inline-flex items-center gap-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                        </svg>
                        Copiar correos
                      </button>
                      <a
                        href={`mailto:?bcc=${getEmails(filteredLeads)}`}
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                        </svg>
                        Redactar a todos
                      </a>
                    </div>

                    <button
                      onClick={handleExportCSV}
                      className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 20h16"/><path d="M7 10v4"/><path d="M12 4v10"/><path d="M17 7v7"/><path d="M7 14l-3-3 3-3"/><path d="m17 14 3-3-3-3"/>
                      </svg>
                      Exportar CSV
                    </button>
                  </div>

                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="rounded-lg border border-dashed border-gray-200 p-4">
                      <h2 className="text-sm font-semibold text-gray-700 mb-2">Estado de leads</h2>
                      <div className="space-y-2">
                        {STATUS_OPTIONS.map((status) => {
                          const value = metrics.totalsByStatus[status] ?? 0
                          const percentage = metrics.totalLeads === 0 ? 0 : Math.round((value / metrics.totalLeads) * 100)
                          return (
                            <div key={status} className="flex items-center justify-between text-sm">
                              <div className="flex items-center gap-2">
                                <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${STATUS_STYLES[status]}`}>
                                  {status}
                                </span>
                                <span className="text-gray-600">{value}</span>
                              </div>
                              <span className="text-xs text-gray-400">{percentage}%</span>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    <div className="rounded-lg border border-dashed border-gray-200 p-4">
                      <h2 className="text-sm font-semibold text-gray-700 mb-2">Servicios más solicitados</h2>
                      {Object.keys(metrics.serviceCount).length === 0 ? (
                        <p className="text-xs text-gray-400">Aún no hay datos de servicios.</p>
                      ) : (
                        <div className="space-y-2">
                          {Object.entries(metrics.serviceCount)
                            .sort(([, a], [, b]) => Number(b) - Number(a))
                            .slice(0, 6)
                            .map(([service, count]) => (
                              <div key={service} className="flex items-center justify-between text-sm">
                                <span className="text-gray-600 truncate pr-3">{service}</span>
                                <span className="text-gray-500">{count}</span>
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 xl:grid-cols-3">
                  <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <h2 className="text-sm font-semibold text-gray-700">Alertas de seguimiento</h2>
                      <span className="text-xs text-gray-400">{metrics.needingFollowUp} pendientes</span>
                    </div>
                    {attentionLeads.length === 0 ? (
                      <p className="text-xs text-gray-400">Todo al día. No hay leads sin seguimiento reciente.</p>
                    ) : (
                      <ul className="space-y-3">
                        {attentionLeads.map((lead) => {
                          const relative = lead.lastContactAt ? formatRelativeFromNow(lead.lastContactAt) : 'Sin contacto'
                          return (
                            <li key={lead.id} className="flex items-start justify-between gap-3 rounded-lg border border-amber-100 bg-amber-50/60 p-3">
                              <div className="min-w-0">
                                <p className="text-sm font-semibold text-amber-700 truncate">{lead.name}</p>
                                <p className="text-xs text-amber-600">{lead.assignedTo ? `Asignado a ${lead.assignedTo}` : 'Sin responsable'}</p>
                                <p className="text-xs text-amber-600">Último contacto: {relative}</p>
                              </div>
                              <div className="flex flex-col items-end gap-2 text-xs">
                                <button
                                  type="button"
                                  onClick={() => handleMarkContact(lead.id)}
                                  className="rounded-md border border-emerald-200 px-2 py-1 font-semibold text-emerald-600 hover:bg-emerald-50"
                                >
                                  Registrar
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleOpenNotes(lead.id)}
                                  className="rounded-md border border-blue-200 px-2 py-1 font-semibold text-blue-600 hover:bg-blue-50"
                                >
                                  Nota
                                </button>
                              </div>
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </div>

                  <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                    <h2 className="text-sm font-semibold text-gray-700 mb-4">Distribución por responsable</h2>
                    {assignmentStats.length === 0 ? (
                      <p className="text-xs text-gray-400">Aún no hay leads asignados.</p>
                    ) : (
                      <ul className="space-y-3">
                        {assignmentStats.map(([owner, count]) => {
                          const percentage = metrics.totalLeads === 0 ? 0 : Math.round((count / metrics.totalLeads) * 100)
                          return (
                            <li key={owner} className="space-y-1">
                              <div className="flex items-center justify-between text-sm text-gray-600">
                                <span className="truncate pr-3">{owner}</span>
                                <span className="font-semibold text-gray-900">{count}</span>
                              </div>
                              <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                                <div className="h-full rounded-full bg-blue-500" style={{ width: `${percentage}%` }} />
                              </div>
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </div>

                  <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                    <h2 className="text-sm font-semibold text-gray-700 mb-4">Actividad reciente</h2>
                    {recentLeads.length === 0 ? (
                      <p className="text-xs text-gray-400">Aún no llegan leads.</p>
                    ) : (
                      <ul className="space-y-3">
                        {recentLeads.map((lead) => (
                          <li key={lead.id} className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <p className="text-sm font-semibold text-gray-800 truncate">{lead.name}</p>
                              <p className="text-xs text-gray-500">{formatDate(lead.created_at)}</p>
                              <p className="text-xs text-gray-500">{lead.status}</p>
                            </div>
                            <div className="text-right text-xs text-gray-500">
                              <p>{lead.assignedTo || 'Sin responsable'}</p>
                              <p>{lead.lastContactAt ? formatRelativeFromNow(lead.lastContactAt) : 'Sin contacto'}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {isBoardView ? (
                  <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
                    <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4">
                      <div className="flex gap-4 overflow-x-auto pb-2">
                        {STATUS_OPTIONS.map((status) => (
                          <BoardColumn
                            key={status}
                            status={status}
                            leads={leadsByStatus[status] ?? []}
                            onOpenNotes={handleOpenNotes}
                            onCopyEmail={copyToClipboard}
                            onMarkContact={handleMarkContact}
                            onDeleteLead={handleDeleteLead}
                          />
                        ))}
                      </div>
                      {filteredLeads.length === 0 && (
                        <p className="py-10 text-center text-sm text-gray-500">
                          No hay leads para mostrar con los filtros actuales.
                        </p>
                      )}
                    </div>
                  </DndContext>
                ) : (
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm text-gray-600">
                        <thead className="bg-gray-50 text-gray-900 font-semibold border-b border-gray-200">
                          <tr>
                            <th className="px-5 py-4">Fecha</th>
                            <th className="px-5 py-4">Nombre</th>
                            <th className="px-5 py-4">Email</th>
                            <th className="px-5 py-4">Teléfono</th>
                            <th className="px-5 py-4">Empresa</th>
                            <th className="px-5 py-4">Servicios</th>
                            <th className="px-5 py-4">Presupuesto</th>
                            <th className="px-5 py-4">Asignado</th>
                            <th className="px-5 py-4">Último contacto</th>
                            <th className="px-5 py-4">Estado</th>
                            <th className="px-5 py-4">Nota</th>
                            <th className="px-5 py-4">Mensaje</th>
                            <th className="px-5 py-4 text-right">Acciones</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {filteredLeads.map((lead) => {
                            const attention = leadNeedsAttention(lead)
                            const relativeContact = lead.lastContactAt ? formatRelativeFromNow(lead.lastContactAt) : 'Sin contacto'

                            return (
                              <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-5 py-4 whitespace-nowrap text-gray-500">{formatDate(lead.created_at)}</td>
                                <td className="px-5 py-4 font-medium text-gray-900">{lead.name}</td>
                                <td className="px-5 py-4">
                                  <div className="flex items-center gap-2">
                                    <a href={`mailto:${lead.email}`} className="text-blue-600 hover:text-blue-800 hover:underline">
                                      {lead.email}
                                    </a>
                                    <button
                                      onClick={() => copyToClipboard(lead.email)}
                                      className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-100 transition-colors"
                                      title="Copiar correo"
                                    >
                                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                                      </svg>
                                    </button>
                                  </div>
                                </td>
                                <td className="px-5 py-4">{lead.phone || '-'}</td>
                                <td className="px-5 py-4">{lead.company || '-'}</td>
                                <td className="px-5 py-4">
                                  <div className="flex flex-wrap gap-1">
                                    {lead.services.length === 0 ? (
                                      <span className="text-xs text-gray-400">Sin datos</span>
                                    ) : (
                                      lead.services.map((service) => (
                                        <span key={service} className="inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600">
                                          {service}
                                        </span>
                                      ))
                                    )}
                                  </div>
                                </td>
                                <td className="px-5 py-4">{lead.budget_range || '-'}</td>
                                <td className="px-5 py-4">
                                  <select
                                    value={lead.assignedTo || ''}
                                    onChange={(event) => handleAssignmentSelect(lead.id, event.target.value)}
                                    className="rounded-md border border-gray-300 bg-white px-2 py-1 text-xs focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
                                  >
                                    <option value="">Sin asignar</option>
                                    {assignmentOptions.map((option) => (
                                      <option key={option} value={option}>
                                        {option}
                                      </option>
                                    ))}
                                    <option value="__custom__">Agregar responsable…</option>
                                  </select>
                                </td>
                                <td className="px-5 py-4">
                                  <div className="flex items-center gap-2 text-xs">
                                    <span
                                      className={`${attention ? 'text-amber-600 font-medium' : 'text-gray-500'}`}
                                      title={lead.lastContactAt ? formatDate(lead.lastContactAt) : 'Sin registros'}
                                    >
                                      {relativeContact}
                                    </span>
                                    <button
                                      type="button"
                                      onClick={() => handleMarkContact(lead.id)}
                                      className="text-emerald-600 hover:text-emerald-700"
                                    >
                                      Registrar
                                    </button>
                                  </div>
                                </td>
                                <td className="px-5 py-4">
                                  <select
                                    value={lead.status}
                                    onChange={(event) => handleStatusChange(lead.id, event.target.value as LeadStatus)}
                                    className="rounded-md border border-gray-300 bg-white px-2 py-1 text-xs focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
                                  >
                                    {STATUS_OPTIONS.map((option) => (
                                      <option key={option} value={option}>
                                        {option}
                                      </option>
                                    ))}
                                  </select>
                                </td>
                                <td className="px-5 py-4">
                                  <button
                                    onClick={() => handleOpenNotes(lead.id)}
                                    className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                                  >
                                    {lead.note ? 'Ver nota' : 'Agregar nota'}
                                  </button>
                                </td>
                                <td className="px-5 py-4 max-w-xs truncate" title={lead.message}>
                                  {lead.message || '-'}
                                </td>
                                <td className="px-5 py-4 text-right">
                                  <button
                                    type="button"
                                    onClick={() => handleDeleteLead(lead.id)}
                                    className="text-sm font-semibold text-red-600 hover:text-red-700"
                                  >
                                    Eliminar
                                  </button>
                                </td>
                              </tr>
                            )
                          })}
                          {filteredLeads.length === 0 && (
                            <tr>
                              <td colSpan={13} className="px-6 py-12 text-center text-gray-500">
                                No hay leads para los filtros seleccionados.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                    {loading && <p className="px-5 pb-5 text-sm text-gray-400">Cargando leads...</p>}
                  </div>
                )}
              </>
            ) : activeTab === 'team' ? (
              <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm rounded-xl p-5 space-y-5">
                <div>
                  <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Equipo de seguimiento</h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    Define quién puede recibir leads y asigna roles de seguimiento para el equipo comercial.
                  </p>
                </div>

                <form onSubmit={handleTeamMemberSubmit} className="space-y-4">
                  <div className="grid gap-3 md:grid-cols-[2fr_2fr_2fr] md:items-start">
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-semibold text-gray-600 dark:text-gray-400" htmlFor="member-name">
                        Nombre completo
                      </label>
                      <input
                        id="member-name"
                        type="text"
                        value={teamMemberForm.name}
                        onChange={handleTeamMemberFieldChange('name')}
                        autoComplete="name"
                        className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800"
                        placeholder="Ej. Ana López"
                        required
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-semibold text-gray-600 dark:text-gray-400" htmlFor="member-email">
                        Correo (opcional)
                      </label>
                      <input
                        id="member-email"
                        type="email"
                        value={teamMemberForm.email}
                        onChange={handleTeamMemberFieldChange('email')}
                        autoComplete="email"
                        className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800"
                        placeholder="ana@empresa.com"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-semibold text-gray-600 dark:text-gray-400" htmlFor="member-role">
                        Rol (opcional)
                      </label>
                      <input
                        id="member-role"
                        type="text"
                        value={teamMemberForm.role}
                        onChange={handleTeamMemberFieldChange('role')}
                        autoComplete="organization-title"
                        className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800"
                        placeholder="Ej. Ejecutivo comercial"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-semibold text-gray-600 dark:text-gray-400" htmlFor="member-password">
                        Contraseña {editingMemberId ? '(opcional)' : ''}
                      </label>
                      <input
                        id="member-password"
                        type="password"
                        value={teamMemberForm.password || ''}
                        onChange={handleTeamMemberFieldChange('password')}
                        autoComplete="new-password"
                        className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800"
                        placeholder={editingMemberId ? 'Dejar en blanco para no cambiar' : 'Contraseña de acceso'}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-gray-600 dark:text-gray-400" htmlFor="member-photo">
                      Foto (opcional)
                    </label>
                    <input
                      id="member-photo"
                      type="file"
                      accept="image/*"
                      onChange={handleTeamMemberPhotoChange}
                      className="block w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 dark:file:bg-blue-900/30 file:text-blue-700 dark:file:text-blue-400 hover:file:bg-blue-100 dark:hover:file:bg-blue-900/50"
                    />
                  </div>
                  
                  <div className="flex flex-wrap gap-4 items-center">
                    <label className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <input
                        type="checkbox"
                        checked={teamMemberForm.canManageLeads}
                        onChange={handleTeamMemberCheckboxChange('canManageLeads')}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      Gestiona Leads
                    </label>
                    <label className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <input
                        type="checkbox"
                        checked={teamMemberForm.canManageTasks}
                        onChange={handleTeamMemberCheckboxChange('canManageTasks')}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      Gestiona Tareas
                    </label>
                    <label className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <input
                        type="checkbox"
                        checked={teamMemberForm.isAdmin}
                        onChange={handleTeamMemberCheckboxChange('isAdmin')}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      Es Administrador
                    </label>
                  </div>

                  <div className="flex items-center gap-2">
                    {editingMemberId && (
                      <button
                        type="button"
                        onClick={handleCancelTeamMemberEdit}
                        className="hidden md:inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Cancelar
                      </button>
                    )}
                    <button
                      type="submit"
                      disabled={teamMemberSaving}
                      className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors disabled:opacity-60"
                    >
                      {teamMemberSaving ? 'Guardando…' : editingMemberId ? 'Guardar cambios' : 'Agregar miembro'}
                    </button>
                    {editingMemberId && (
                      <button
                        type="button"
                        onClick={handleCancelTeamMemberEdit}
                        className="md:hidden inline-flex items-center justify-center rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        Cancelar edición
                      </button>
                    )}
                  </div>
                </form>

                <div className="overflow-x-auto">
                  <table className="min-w-full text-left text-sm text-gray-600 dark:text-gray-400">
                    <thead className="bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold border border-gray-200 dark:border-gray-700">
                      <tr>
                        <th className="px-4 py-3">Nombre</th>
                        <th className="px-4 py-3">Correo</th>
                        <th className="px-4 py-3">Rol</th>
                        <th className="px-4 py-3">Permisos</th>
                        <th className="px-4 py-3 text-right">Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {teamMembers.map((member) => (
                        <tr key={member.id}>
                          <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">
                            <div className="flex items-center gap-3">
                              {member.photoUrl ? (
                                <img src={member.photoUrl} alt={member.name} className="w-8 h-8 rounded-full object-cover" />
                              ) : (
                                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 text-xs font-bold">
                                  {member.name.charAt(0).toUpperCase()}
                                </div>
                              )}
                              {member.name}
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            {member.email ? (
                              <a href={`mailto:${member.email}`} className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:underline">
                                {member.email}
                              </a>
                            ) : (
                              <span className="text-xs text-gray-400 dark:text-gray-500">Sin correo</span>
                            )}
                          </td>
                          <td className="px-4 py-3">{member.role ?? <span className="text-xs text-gray-400 dark:text-gray-500">Sin rol</span>}</td>
                          <td className="px-4 py-3">
                            <div className="flex gap-2">
                              {member.canManageLeads && (
                                <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/30 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-400 ring-1 ring-inset ring-blue-700/10 dark:ring-blue-400/30">
                                  Leads
                                </span>
                              )}
                              {member.canManageTasks && (
                                <span className="inline-flex items-center rounded-full bg-purple-50 dark:bg-purple-900/30 px-2 py-1 text-xs font-medium text-purple-700 dark:text-purple-400 ring-1 ring-inset ring-purple-700/10 dark:ring-purple-400/30">
                                  Tareas
                                </span>
                              )}
                              {member.isAdmin && (
                                <span className="inline-flex items-center rounded-full bg-red-50 dark:bg-red-900/30 px-2 py-1 text-xs font-medium text-red-700 dark:text-red-400 ring-1 ring-inset ring-red-700/10 dark:ring-red-400/30">
                                  Admin
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="px-4 py-3 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                type="button"
                                onClick={() => handleEditTeamMember(member)}
                                className="inline-flex items-center rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-1.5 text-xs font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                              >
                                Editar
                              </button>
                              <button
                                type="button"
                                onClick={() => handleDeleteTeamMember(member.id)}
                                className="inline-flex items-center rounded-lg border border-red-200 dark:border-red-900/30 px-3 py-1.5 text-xs font-semibold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
                              >
                                Eliminar
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                      {teamMembers.length === 0 && !membersLoading && (
                        <tr>
                          <td colSpan={4} className="px-4 py-6 text-center text-sm text-gray-400 dark:text-gray-500">
                            Aún no hay integrantes registrados. Agrega el primero para comenzar.
                          </td>
                        </tr>
                      )}
                      {membersLoading && (
                        <tr>
                          <td colSpan={4} className="px-4 py-6 text-center text-sm text-gray-400 dark:text-gray-500">
                            Cargando equipo...
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : activeTab === 'brands' ? (
              <BrandManager 
                brands={brands} 
                loading={brandsLoading} 
                onCreate={handleCreateBrand} 
                onDelete={handleDeleteBrand} 
              />
            ) : (
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Nueva Tarea</h2>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      const form = e.currentTarget
                      const title = (form.elements.namedItem('title') as HTMLInputElement).value
                      const assignedTo = (form.elements.namedItem('assignedTo') as HTMLSelectElement).value
                      const brandId = (form.elements.namedItem('brandId') as HTMLSelectElement).value
                      const dueDate = (form.elements.namedItem('dueDate') as HTMLInputElement).value
                      const startDate = (form.elements.namedItem('startDate') as HTMLInputElement).value
                      
                      if (title.trim()) {
                        handleCreateTask(
                          title.trim(), 
                          assignedTo ? Number(assignedTo) : null, 
                          brandId ? Number(brandId) : null,
                          dueDate || null,
                          startDate || null
                        )
                        form.reset()
                      }
                    }}
                    className="flex flex-col gap-4 md:flex-row md:items-end"
                  >
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Título</label>
                      <input
                        name="title"
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="¿Qué hay que hacer?"
                        required
                      />
                    </div>
                    <div className="w-full md:w-48">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Marca</label>
                      <select
                        name="brandId"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-gray-700 dark:text-white"
                      >
                        <option value="">Sin marca</option>
                        {brands.map(brand => (
                          <option key={brand.id} value={brand.id}>{brand.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="w-full md:w-48">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Asignar a</label>
                      <select
                        name="assignedTo"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-gray-700 dark:text-white"
                      >
                        <option value="">Sin asignar</option>
                        {taskAssignmentOptions.map(member => (
                          <option key={member.id} value={member.id}>{member.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="w-full md:w-40">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Inicio</label>
                      <input
                        name="startDate"
                        type="date"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                    <div className="w-full md:w-40">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Vencimiento</label>
                      <input
                        name="dueDate"
                        type="date"
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Crear
                    </button>
                  </form>
                </div>

                {/* Filters */}
                <div className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filtrar por marca:</span>
                  <div className="flex gap-2 overflow-x-auto pb-1">
                    <button
                      onClick={() => setBrandFilter('Todos')}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                        brandFilter === 'Todos' 
                          ? 'bg-gray-800 dark:bg-gray-600 text-white' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      Todas
                    </button>
                    {brands.map(brand => (
                      <button
                        key={brand.id}
                        onClick={() => setBrandFilter(String(brand.id))}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors whitespace-nowrap flex items-center gap-2 ${
                          brandFilter === String(brand.id)
                            ? 'text-white ring-2 ring-offset-1 dark:ring-offset-gray-800'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                        style={brandFilter === String(brand.id) ? { backgroundColor: brand.color, borderColor: brand.color } : {}}
                      >
                        <span className="w-2 h-2 rounded-full bg-current" style={{ color: brandFilter === String(brand.id) ? 'white' : brand.color }} />
                        {brand.name}
                      </button>
                    ))}
                  </div>
                </div>

                {taskViewMode === 'calendar' ? (
                  <TaskCalendar 
                    tasks={tasks.filter(t => brandFilter === 'Todos' || String(t.brandId) === brandFilter)} 
                  />
                ) : taskViewMode === 'board' ? (
                  <DndContext sensors={sensors} onDragEnd={handleTaskDragEnd}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full overflow-x-auto pb-4">
                      {(['pending', 'in_progress', 'completed'] as const).map(status => (
                        <TaskBoardColumn
                          key={status}
                          status={status}
                          tasks={tasks.filter(t => 
                            t.status === status && 
                            (brandFilter === 'Todos' || String(t.brandId) === brandFilter)
                          )}
                          assignmentOptions={taskAssignmentOptions}
                          onDelete={handleDeleteTask}
                          onUpdateStatus={handleUpdateTaskStatus}
                          onAssign={handleAssignTask}
                        />
                      ))}
                    </div>
                  </DndContext>
                ) : (
                  <div className="space-y-8">
                    {(brandFilter === 'Todos' ? [...brands, { id: 0, name: 'Sin Marca', color: '#9ca3af' }] : brands.filter(b => String(b.id) === brandFilter)).map(brand => {
                      const brandTasks = tasks.filter(t => (t.brandId || 0) === brand.id)
                      if (brandTasks.length === 0 && brandFilter === 'Todos') return null

                      return (
                        <div key={brand.id} className="space-y-3">
                          <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: brand.color }}></span>
                            {brand.name}
                            <span className="text-xs font-normal text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                              {brandTasks.length}
                            </span>
                          </h3>
                          <div className="grid gap-3">
                            {brandTasks.map(task => (
                              <div key={task.id} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
                                <div className="flex items-center gap-4">
                                  <div className={`w-2 h-2 rounded-full ${
                                    task.status === 'completed' ? 'bg-green-500' : 
                                    task.status === 'in_progress' ? 'bg-blue-500' : 'bg-gray-300'
                                  }`} />
                                  <div>
                                    <p className={`font-medium ${task.status === 'completed' ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                                      {task.title}
                                    </p>
                                    <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                                      {task.assignedToName && (
                                        <span className="flex items-center gap-1 bg-gray-50 px-1.5 py-0.5 rounded">
                                          👤 {task.assignedToName}
                                        </span>
                                      )}
                                      {task.dueDate && (
                                        <span className={`flex items-center gap-1 px-1.5 py-0.5 rounded ${
                                          new Date(task.dueDate) < new Date() && task.status !== 'completed' 
                                            ? 'bg-red-50 text-red-600' 
                                            : 'bg-gray-50'
                                        }`}>
                                          📅 {new Date(task.dueDate).toLocaleDateString()}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <select
                                    value={task.status}
                                    onChange={(e) => handleUpdateTaskStatus(task.id, e.target.value as TaskStatus)}
                                    className="text-xs border-gray-200 rounded-lg bg-gray-50 py-1.5 px-2"
                                  >
                                    <option value="pending">Pendiente</option>
                                    <option value="in_progress">En Progreso</option>
                                    <option value="completed">Completada</option>
                                  </select>
                                  <button
                                    onClick={() => handleDeleteTask(task.id)}
                                    className="text-gray-400 hover:text-red-500 p-1"
                                  >
                                    ×
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {notification && (
          <div className="fixed bottom-4 right-4 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg">
            {notification}
          </div>
        )}

        {activeLead && (
          <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/40 p-4">
            <div className="w-full max-w-lg rounded-xl bg-white shadow-xl">
              <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Nota interna</h2>
                  <p className="text-xs text-gray-500">
                    {activeLead.name} · {activeLead.email}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setActiveLeadId(null)
                    setNoteDraft('')
                  }}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Cerrar
                </button>
              </div>
              <div className="px-6 py-5 space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-2">Etiquetas</label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {activeLead.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 border border-indigo-100"
                      >
                        {tag}
                        <button
                          onClick={() => handleRemoveTag(activeLead.id, tag)}
                          className="text-indigo-400 hover:text-indigo-600 ml-1"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault()
                          handleAddTag(activeLead.id, tagInput)
                          setTagInput('')
                        }
                      }}
                      placeholder="Nueva etiqueta..."
                      className="flex-1 rounded-lg border border-gray-300 px-3 py-1.5 text-sm text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                    />
                    <button
                      onClick={() => {
                        handleAddTag(activeLead.id, tagInput)
                        setTagInput('')
                      }}
                      disabled={!tagInput.trim()}
                      className="rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-200 disabled:opacity-50"
                    >
                      Agregar
                    </button>
                  </div>
                </div>

                <textarea
                  value={noteDraft}
                  onChange={(event) => setNoteDraft(event.target.value)}
                  rows={6}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  placeholder="Añade contexto sobre conversaciones, próximos pasos o recordatorios para el equipo."
                />
                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => {
                      setActiveLeadId(null)
                      setNoteDraft('')
                    }}
                    className="rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSaveNote}
                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
                  >
                    Guardar nota
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
