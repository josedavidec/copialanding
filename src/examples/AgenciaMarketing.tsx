import ExampleLayout from './ExampleLayout'

const agenciaStyles = `
.agencia-marketing {
  color-scheme: dark;
  margin: 0;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: #0f172a;
  color: #e2e8f0;
  line-height: 1.6;
}
.agencia-marketing a {
  color: inherit;
}
.agencia-marketing img {
  max-width: 100%;
  display: block;
}
.agencia-marketing header {
  position: relative;
  padding: 3rem 1.2rem 2.5rem;
  background: linear-gradient(180deg, rgba(139, 92, 246, 0.2) 0%, rgba(15, 23, 42, 0.85) 70%),
    url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80') center/cover;
}
@media (min-width: 768px) {
  .agencia-marketing header {
    padding: 4.5rem 1.5rem 3.5rem;
  }
}
.agencia-marketing header::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0) 0%, rgba(15, 23, 42, 0.85) 65%);
  z-index: 0;
}
.agencia-marketing .container {
  position: relative;
  z-index: 1;
  max-width: 1120px;
  margin: 0 auto;
}
.agencia-marketing nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  color: #f8fafc;
}
@media (min-width: 640px) {
  .agencia-marketing nav {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 3rem;
  }
}
.agencia-marketing nav .logo {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.agencia-marketing nav .logo img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid rgba(139, 92, 246, 0.6);
}
.agencia-marketing nav .logo strong {
  letter-spacing: 0.25em;
  text-transform: uppercase;
  font-size: 0.78rem;
  color: #a78bfa;
  display: block;
}
.agencia-marketing nav .menu {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.5rem;
  font-size: 0.9rem;
  color: #f8fafc;
}
.agencia-marketing .hero {
  text-align: center;
  max-width: 760px;
  margin: 0 auto;
}
.agencia-marketing .hero h1 {
  font-size: clamp(2.2rem, 6vw, 3.8rem);
  margin-bottom: 1rem;
  color: #f8fafc;
}
.agencia-marketing .hero p {
  color: #e0f2fe;
  margin-bottom: 2rem;
}
.agencia-marketing .hero-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.95rem 2.1rem;
  border-radius: 9999px;
  font-weight: 600;
  text-decoration: none;
  background: linear-gradient(135deg, #a78bfa, #7c3aed);
  color: #f8fafc;
  box-shadow: 0 20px 45px rgba(139, 92, 246, 0.3);
}
.agencia-marketing .stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;
}
@media (min-width: 720px) {
  .agencia-marketing .stats {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.5rem;
    margin-top: 3rem;
  }
}
.agencia-marketing .stat {
  backdrop-filter: blur(12px);
  border-radius: 1rem;
  padding: 1rem;
  border: 1px solid rgba(139, 92, 246, 0.25);
  background: rgba(15, 23, 42, 0.45);
  text-align: center;
}
.agencia-marketing .stat strong {
  font-size: 1.4rem;
  color: #a78bfa;
  display: block;
}
.agencia-marketing section {
  padding: 3rem 1.2rem;
}
@media (min-width: 768px) {
  .agencia-marketing section {
    padding: 4.2rem 1.5rem;
  }
}
.agencia-marketing h2 {
  font-size: clamp(1.6rem, 3vw, 2.3rem);
  margin-bottom: 1rem;
  color: #f8fafc;
}
.agencia-marketing .tagline {
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-size: 0.75rem;
  color: #a78bfa;
  margin-bottom: 1.4rem;
}
.agencia-marketing .card {
  background: rgba(15, 23, 42, 0.78);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 1.6rem;
  padding: 1.9rem;
}
.agencia-marketing .grid {
  display: grid;
  gap: 1.75rem;
}
@media (min-width: 960px) {
  .agencia-marketing .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .agencia-marketing .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
.agencia-marketing ul.checklist {
  padding-left: 1.1rem;
  color: #e2e8f0;
  margin: 0;
}
.agencia-marketing ul.checklist li + li {
  margin-top: 0.75rem;
}
.agencia-marketing .services-grid {
  display: grid;
  gap: 1.1rem;
}
@media (min-width: 720px) {
  .agencia-marketing .services-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
.agencia-marketing .service-card {
  border-radius: 1.3rem;
  padding: 1.5rem;
  background: linear-gradient(145deg, rgba(30, 41, 59, 0.95), rgba(17, 24, 39, 0.85));
  border: 1px solid rgba(139, 92, 246, 0.2);
}
.agencia-marketing .service-card h3 {
  margin-top: 0;
  margin-bottom: 0.4rem;
  font-size: 1.18rem;
  color: #a78bfa;
}
.agencia-marketing .service-card strong {
  color: #a78bfa;
  display: block;
  margin-bottom: 0.6rem;
  font-size: 0.85rem;
}
.agencia-marketing .service-card small {
  display: block;
  color: #94a3b8;
  margin-top: 0.35rem;
  font-size: 0.85rem;
}
.agencia-marketing .testimonial {
  background: rgba(17, 24, 39, 0.85);
  border: 1px solid rgba(139, 92, 246, 0.18);
  border-radius: 1.5rem;
  padding: 1.7rem;
  font-size: 0.95rem;
  color: #cbd5f5;
}
.agencia-marketing .testimonial span {
  display: block;
  margin-top: 1rem;
  font-weight: 600;
  color: #f8fafc;
}
.agencia-marketing .testimonials {
  display: grid;
  gap: 1.5rem;
}
@media (min-width: 900px) {
  .agencia-marketing .testimonials {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
.agencia-marketing .portfolio-grid {
  display: grid;
  gap: 1rem;
}
@media (min-width: 900px) {
  .agencia-marketing .portfolio-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
.agencia-marketing .portfolio-item {
  border-radius: 1.4rem;
  border: 1px solid rgba(139, 92, 246, 0.18);
  object-fit: cover;
  height: 240px;
  width: 100%;
  background: rgba(139, 92, 246, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  color: #a78bfa;
}
.agencia-marketing .process-step {
  background: rgba(17, 24, 39, 0.85);
  border: 1px solid rgba(139, 92, 246, 0.25);
  border-radius: 1.5rem;
  padding: 1.7rem;
}
.agencia-marketing .process-step strong {
  color: #a78bfa;
  font-size: 1.3rem;
}
.agencia-marketing .process-steps {
  display: grid;
  gap: 1.5rem;
}
@media (min-width: 900px) {
  .agencia-marketing .process-steps {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
.agencia-marketing .medios {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 1.5rem;
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.82rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}
.agencia-marketing .contact-card {
  background: rgba(17, 24, 39, 0.88);
  border-radius: 1.6rem;
  border: 1px solid rgba(139, 92, 246, 0.35);
  padding: 1.9rem;
}
.agencia-marketing form label {
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #cbd5f5;
  display: block;
  margin-bottom: 0.5rem;
}
.agencia-marketing form input,
.agencia-marketing form textarea,
.agencia-marketing form select {
  width: 100%;
  padding: 0.78rem 0.85rem;
  border-radius: 0.95rem;
  border: 1px solid rgba(148, 163, 184, 0.28);
  background: rgba(15, 23, 42, 0.7);
  color: #f8fafc;
  font-size: 0.95rem;
}
.agencia-marketing form textarea {
  resize: vertical;
  min-height: 120px;
}
.agencia-marketing form button {
  margin-top: 1.1rem;
  width: 100%;
  padding: 0.95rem 1.2rem;
  border-radius: 9999px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  background: linear-gradient(135deg, #a78bfa, #7c3aed);
  color: #f8fafc;
  box-shadow: 0 18px 35px rgba(139, 92, 246, 0.2);
}
.agencia-marketing iframe {
  border: 0;
  border-radius: 1.6rem;
  width: 100%;
  height: 320px;
}
.agencia-marketing footer {
  padding: 2.8rem 1.5rem 4rem;
  text-align: center;
  color: #cbd5f5;
}
.agencia-marketing footer a {
  color: #a78bfa;
  text-decoration: none;
}
`

export default function AgenciaMarketing() {
  return (
    <ExampleLayout
      title="Agencia de Marketing Digital"
      description="Transformamos tu negocio con estrategias digitales que generan resultados medibles"
      accent="fuchsia"
    >
      <style>{agenciaStyles}</style>
      <div className="agencia-marketing">
        <section className="bg-gradient-to-b from-slate-900/50 to-slate-950/80">
          <div className="container">
            <div className="hero">
              <h1>Crece tu Negocio Digitalmente</h1>
              <p>Somos una agencia de marketing digital especializada en potenciar marcas en redes sociales, publicidad pagada y posicionamiento SEO. Trabajamos con empresas que quieren crecer sin límites.</p>
              <a href="https://wa.me/573001234567?text=Hola,%20quiero%20saber%20más%20sobre%20tus%20servicios" className="hero-cta">
                Solicitar consultoría
              </a>

              <div className="stats">
                <div className="stat">
                  <strong>150+</strong>
                  <p>Clientes Activos</p>
                </div>
                <div className="stat">
                  <strong>2.5M</strong>
                  <p>Alcance Mensual</p>
                </div>
                <div className="stat">
                  <strong>340%</strong>
                  <p>ROI Promedio</p>
                </div>
                <div className="stat">
                  <strong>8 años</strong>
                  <p>Experiencia</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Servicios Principales</h2>
            <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#cbd5f5' }}>Ofrecemos soluciones integrales para potenciar tu presencia digital</p>

            <div className="services-grid">
              <div className="service-card">
                <h3>Social Media</h3>
                <strong>Gestión de Redes Sociales</strong>
                <p>Creación de contenido, community management y estrategia integral en Instagram, TikTok y Facebook</p>
                <small>✓ 3 redes incluidas • ✓ Reportes semanales</small>
              </div>

              <div className="service-card">
                <h3>Google Ads</h3>
                <strong>Publicidad Pagada</strong>
                <p>Campañas de Google Ads y Facebook optimizadas para generar leads de calidad y conversiones</p>
                <small>✓ Setup + 3 meses • ✓ Optimización diaria</small>
              </div>

              <div className="service-card">
                <h3>SEO</h3>
                <strong>Posicionamiento en Buscadores</strong>
                <p>Estrategia SEO integral para posicionar tu sitio en primeros lugares de Google</p>
                <small>✓ Análisis técnico • ✓ Linkbuilding</small>
              </div>
            </div>
          </div>
        </section>

        <section style={{ background: 'rgba(139, 92, 246, 0.05)' }}>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Nuestro Proceso</h2>
            <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#cbd5f5' }}>Metodología probada en cientos de campañas exitosas</p>

            <div className="process-steps">
              <div className="process-step">
                <strong>1. Diagnóstico</strong>
                <p style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: '#cbd5f5' }}>Análisis profundo de tu negocio, competencia y oportunidades en el mercado</p>
              </div>
              <div className="process-step">
                <strong>2. Estrategia</strong>
                <p style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: '#cbd5f5' }}>Diseño de plan personalizado con objetivos, canales y KPIs claros</p>
              </div>
              <div className="process-step">
                <strong>3. Ejecución</strong>
                <p style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: '#cbd5f5' }}>Implementación profesional con creativos de alto impacto</p>
              </div>
              <div className="process-step">
                <strong>4. Optimización</strong>
                <p style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: '#cbd5f5' }}>Monitoreo continuo y ajustes para maximizar resultados</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Portfolio de Casos</h2>
            <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#cbd5f5' }}>Algunos de nuestros proyectos más exitosos</p>

            <div className="portfolio-grid">
              <div className="portfolio-item">Ecommerce Deportivo</div>
              <div className="portfolio-item">Startup SaaS</div>
              <div className="portfolio-item">Agencia Inmobiliaria</div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Lo Dicen Nuestros Clientes</h2>
            <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#cbd5f5' }}>Historias reales de negocios que crecieron con nosotros</p>

            <div className="testimonials">
              <div className="testimonial">
                <p>"Aumentamos nuestras ventas en un 280% en 6 meses. Profesionales al máximo."</p>
                <span>Carlos Mendoza - Ecommerce Deportivo</span>
              </div>

              <div className="testimonial">
                <p>"El mejor equipo con el que hemos trabajado. Recomendados 100%"</p>
                <span>Sofía Rodríguez - Startup Tech</span>
              </div>

              <div className="testimonial">
                <p>"Excelente ROI. Cada peso invertido retorna multiplicado."</p>
                <span>Juan Pablo Torres - Inmobiliaria</span>
              </div>
            </div>
          </div>
        </section>

        <section style={{ background: 'rgba(139, 92, 246, 0.05)' }}>
          <div className="container">
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Paquetes de Inversión</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card">
                <h3 style={{ color: '#a78bfa', marginBottom: '1rem' }}>Starter</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Para pequeños negocios que inician</p>
                <strong style={{ fontSize: '1.8rem', color: '#a78bfa' }}>$1,200/mes</strong>
                <ul className="checklist" style={{ marginTop: '1.5rem' }}>
                  <li>1 red social gestionada</li>
                  <li>8 posts semanales</li>
                  <li>Reporte mensual</li>
                  <li>Soporte por email</li>
                </ul>
              </div>

              <div className="card" style={{ border: '2px solid #a78bfa' }}>
                <h3 style={{ color: '#a78bfa', marginBottom: '1rem' }}>Professional</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Más popular - Lo recomendamos</p>
                <strong style={{ fontSize: '1.8rem', color: '#a78bfa' }}>$2,500/mes</strong>
                <ul className="checklist" style={{ marginTop: '1.5rem' }}>
                  <li>3 redes sociales</li>
                  <li>16 posts semanales</li>
                  <li>1 campaña Google Ads</li>
                  <li>Reportes semanales</li>
                  <li>Soporte prioritario</li>
                </ul>
              </div>

              <div className="card">
                <h3 style={{ color: '#a78bfa', marginBottom: '1rem' }}>Enterprise</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Solución completa personalizada</p>
                <strong style={{ fontSize: '1.8rem', color: '#a78bfa' }}>Personalizado</strong>
                <ul className="checklist" style={{ marginTop: '1.5rem' }}>
                  <li>Estrategia completa</li>
                  <li>Múltiples canales</li>
                  <li>SEO + Ads + Social</li>
                  <li>Equipo dedicado</li>
                  <li>Soporte 24/7</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
              <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Comienza Tu Transformación Digital</h2>
              <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#cbd5f5' }}>Agendar una consulta gratuita de 30 minutos</p>

              <div className="contact-card">
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div>
                    <label>Nombre Completo</label>
                    <input type="text" placeholder="Tu nombre" required />
                  </div>
                  <div>
                    <label>Email Empresarial</label>
                    <input type="email" placeholder="tu@empresa.com" required />
                  </div>
                  <div>
                    <label>Teléfono</label>
                    <input type="tel" placeholder="+57 300 1234567" />
                  </div>
                  <div>
                    <label>Tipo de Negocio</label>
                    <select required>
                      <option value="">Selecciona una opción</option>
                      <option value="ecommerce">Ecommerce</option>
                      <option value="servicios">Servicios</option>
                      <option value="saas">SaaS</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  <div>
                    <label>Mensaje</label>
                    <textarea placeholder="Cuéntanos sobre tu objetivo..." />
                  </div>
                  <button type="submit">Agendar Consulta Gratis</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <p>© 2024 Agencia Digital Pro. Todos los derechos reservados.</p>
          <p>
            Síguenos en
            <a href="#" style={{ marginLeft: '0.5rem' }}>
              Instagram
            </a>
            {' • '}
            <a href="#" style={{ marginLeft: '0.5rem' }}>
              LinkedIn
            </a>
            {' • '}
            <a href="#" style={{ marginLeft: '0.5rem' }}>
              TikTok
            </a>
          </p>
        </footer>
      </div>
    </ExampleLayout>
  )
}
