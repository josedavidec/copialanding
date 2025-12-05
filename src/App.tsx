import { Navigate, Route, Routes } from 'react-router-dom'
import CursoHotmart from './examples/CursoHotmart'
import MarcaPersonal from './examples/MarcaPersonal'
import RestauranteBarrio from './examples/RestauranteBarrio'
import AgenciaMarketing from './examples/AgenciaMarketing'
import FunnelVentas from './examples/FunnelVentas'
import FunnelProductividad from './examples/FunnelMembresia'
import HomePage from './pages/HomePage'
import AdminPage from './pages/AdminPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/examples/restaurante-barrio" element={<RestauranteBarrio />} />
      <Route path="/examples/marca-personal" element={<MarcaPersonal />} />
      <Route path="/examples/curso-hotmart" element={<CursoHotmart />} />
      <Route path="/examples/agencia-marketing" element={<AgenciaMarketing />} />
      <Route path="/examples/funnel-ventas" element={<FunnelVentas />} />
      <Route path="/examples/funnel-productividad" element={<FunnelProductividad />} />

      <Route path="/examples/restaurante-barrio.html" element={<Navigate to="/examples/restaurante-barrio" replace />} />
      <Route path="/examples/marca-personal.html" element={<Navigate to="/examples/marca-personal" replace />} />
      <Route path="/examples/curso-hotmart.html" element={<Navigate to="/examples/curso-hotmart" replace />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
