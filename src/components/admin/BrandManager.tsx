import { useState } from 'react'
import { type Brand } from '../../types/admin'

type BrandManagerProps = {
  brands: Brand[]
  loading: boolean
  onCreate: (name: string, color: string, pkg: string, contactInfo: string) => void
  onDelete: (id: number) => void
}

export function BrandManager({ brands, loading, onCreate, onDelete }: BrandManagerProps) {
  const [name, setName] = useState('')
  const [color, setColor] = useState('#3b82f6')
  const [pkg, setPkg] = useState('')
  const [contactInfo, setContactInfo] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      onCreate(name.trim(), color, pkg.trim(), contactInfo.trim())
      setName('')
      setColor('#3b82f6')
      setPkg('')
      setContactInfo('')
    }
  }

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Gestionar Marcas</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre de la marca</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Ej. Cliente A"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Paquete Contratado</label>
            <input
              type="text"
              value={pkg}
              onChange={(e) => setPkg(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Ej. Plan Premium"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Info de Contacto</label>
            <input
              type="text"
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Ej. Juan Pérez - juan@empresa.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="h-10 w-full p-1 border border-gray-300 rounded-lg cursor-pointer"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 h-10"
          >
            {loading ? 'Guardando...' : 'Agregar Marca'}
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {brands.map((brand) => (
          <div key={brand.id} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col gap-3">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-sm"
                  style={{ backgroundColor: brand.color }}
                >
                  {brand.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{brand.name}</h3>
                  {brand.package && (
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                      {brand.package}
                    </span>
                  )}
                </div>
              </div>
              <button
                onClick={() => onDelete(brand.id)}
                className="text-gray-400 hover:text-red-500 transition-colors p-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 6h18"></path>
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
              </button>
            </div>
            
            {brand.contactInfo && (
              <div className="text-sm text-gray-600 border-t border-gray-100 pt-2 mt-1">
                <p className="font-medium text-xs text-gray-500 uppercase mb-1">Contacto</p>
                {brand.contactInfo}
              </div>
            )}
          </div>
        ))}
        {brands.length === 0 && (
          <div className="col-span-full text-center py-10 text-gray-500">
            No hay marcas registradas.
          </div>
        )}
      </div>
    </div>
  )
}
