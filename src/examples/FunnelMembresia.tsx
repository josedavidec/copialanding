import ExampleLayout from './ExampleLayout'

const funnelStyles = `
.creator-funnel {
  background: #0f1729;
  color: #e2e8f0;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
.creator-funnel a {
  color: inherit;
}
.creator-funnel img {
  border-radius: 18px;
  width: 100%;
  display: block;
}
.creator-funnel .layout-wrapper {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
.creator-funnel .site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(16px);
  background: rgba(15, 23, 41, 0.75);
  border-bottom: 1px solid rgba(148, 163, 184, 0.2);
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.creator-funnel .site-header nav {
  display: flex;
  gap: 1.5rem;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.85;
}
@media (max-width: 900px) {
  .creator-funnel .site-header nav {
    display: none;
  }
}
.creator-funnel .logo {
  font-weight: 800;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}
.creator-funnel .logo span {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  opacity: 0.55;
}
.creator-funnel section {
  padding: 5rem 0;
}
.creator-funnel .hero {
  position: relative;
  padding: 6rem 0 4rem 0;
}
.creator-funnel .hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top, rgba(56, 189, 248, 0.25), transparent 60%),
    radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.3), transparent 55%);
  opacity: 0.9;
  pointer-events: none;
}
.creator-funnel .hero-content {
  position: relative;
  display: grid;
  gap: 3rem;
}
@media (min-width: 960px) {
  .creator-funnel .hero-content {
    grid-template-columns: 1.1fr 0.9fr;
    align-items: center;
  }
}
.creator-funnel .hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1.2rem;
  border-radius: 999px;
  background: rgba(56, 189, 248, 0.16);
  border: 1px solid rgba(56, 189, 248, 0.35);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: 1.8rem;
}
.creator-funnel h1 {
  font-size: clamp(2.4rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
}
.creator-funnel .gradient-text {
  background: linear-gradient(135deg, #38bdf8, #a855f7);
  -webkit-background-clip: text;
  color: transparent;
}
.creator-funnel .hero-description {
  color: rgba(226, 232, 240, 0.8);
  font-size: 1.05rem;
  margin-bottom: 2.5rem;
  max-width: 520px;
}
.creator-funnel .hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.creator-funnel .btn-primary {
  padding: 0.95rem 2.6rem;
  border-radius: 50px;
  background: linear-gradient(135deg, #38bdf8, #3b82f6);
  font-weight: 700;
  color: #0f1729;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 25px 60px -15px rgba(56, 189, 248, 0.5);
}
.creator-funnel .btn-primary:hover {
  transform: translateY(-4px);
  box-shadow: 0 30px 65px -12px rgba(56, 189, 248, 0.7);
}
.creator-funnel .btn-ghost {
  padding: 0.95rem 2.6rem;
  border-radius: 50px;
  border: 1px solid rgba(226, 232, 240, 0.35);
  background: transparent;
  color: inherit;
  font-weight: 600;
}
.creator-funnel .hero-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 3rem;
}
.creator-funnel .hero-stats div {
  padding: 1.2rem 1.4rem;
  border-radius: 20px;
  background: rgba(15, 23, 41, 0.75);
  border: 1px solid rgba(148, 163, 184, 0.2);
}
.creator-funnel .hero-stats h3 {
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0;
}
.creator-funnel .hero-media {
  position: relative;
  padding: 1.5rem;
  background: rgba(15, 23, 41, 0.65);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 28px;
  box-shadow: 0 30px 80px -30px rgba(15, 23, 41, 0.9);
}
.creator-funnel .hero-media::after {
  content: '';
  position: absolute;
  inset: 12px;
  border-radius: 20px;
  border: 1px solid rgba(56, 189, 248, 0.25);
  pointer-events: none;
}
.creator-funnel .social-proof {
  padding: 3rem 0;
  border-top: 1px solid rgba(148, 163, 184, 0.15);
  border-bottom: 1px solid rgba(148, 163, 184, 0.15);
  background: rgba(15, 23, 41, 0.6);
}
.creator-funnel .social-proof .logos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1.5rem;
  opacity: 0.6;
}
.creator-funnel .pill-title {
  display: inline-block;
  padding: 0.4rem 1.1rem;
  border-radius: 999px;
  background: rgba(226, 232, 240, 0.08);
  border: 1px solid rgba(148, 163, 184, 0.2);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  margin-bottom: 1.5rem;
}
.creator-funnel .stacked-card {
  background: linear-gradient(160deg, rgba(15, 23, 41, 0.65), rgba(15, 23, 41, 0.35));
  border-radius: 28px;
  border: 1px solid rgba(148, 163, 184, 0.18);
  padding: 2.5rem;
  box-shadow: 0 25px 60px -35px rgba(15, 23, 41, 1);
}
.creator-funnel .modules-grid {
  display: grid;
  gap: 1.5rem;
}
@media (min-width: 960px) {
  .creator-funnel .modules-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.creator-funnel .module-card {
  background: rgba(15, 23, 41, 0.8);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 20px;
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
.creator-funnel .module-card h3 {
  font-size: 1.1rem;
  margin: 0;
}
.creator-funnel .module-card p {
  color: rgba(226, 232, 240, 0.75);
  margin: 0;
  font-size: 0.95rem;
}
.creator-funnel .module-card .label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: rgba(56, 189, 248, 0.8);
}
.creator-funnel .experience {
  display: grid;
  gap: 2rem;
  align-items: center;
}
@media (min-width: 960px) {
  .creator-funnel .experience {
    grid-template-columns: 1.1fr 0.9fr;
  }
}
.creator-funnel .success-grid {
  display: grid;
  gap: 1.5rem;
}
@media (min-width: 900px) {
  .creator-funnel .success-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
.creator-funnel .success-card {
  background: rgba(15, 23, 41, 0.78);
  border: 1px solid rgba(148, 163, 184, 0.22);
  border-radius: 24px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.creator-funnel .success-card img {
  height: 240px;
  object-fit: cover;
}
.creator-funnel .success-card .info {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.creator-funnel .success-card .info span {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: rgba(56, 189, 248, 0.8);
}
.creator-funnel .pricing {
  background: rgba(15, 23, 41, 0.8);
}
.creator-funnel .plans {
  display: grid;
  gap: 1.5rem;
}
@media (min-width: 900px) {
  .creator-funnel .plans {
    grid-template-columns: repeat(2, 1fr);
  }
}
.creator-funnel .plan-card {
  background: rgba(15, 23, 41, 0.78);
  border: 1px solid rgba(56, 189, 248, 0.25);
  border-radius: 26px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  box-shadow: 0 30px 80px -35px rgba(56, 189, 248, 0.35);
}
.creator-funnel .plan-price {
  font-size: 2.5rem;
  font-weight: 800;
}
.creator-funnel .plan-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.9rem;
  color: rgba(226, 232, 240, 0.8);
  font-size: 0.95rem;
}
.creator-funnel .plan-card ul li::before {
  content: '✦';
  margin-right: 0.6rem;
  color: #38bdf8;
}
.creator-funnel .plan-card .cta {
  margin-top: 1rem;
  display: inline-flex;
  justify-content: center;
  padding: 0.95rem 2.4rem;
  border-radius: 999px;
  background: linear-gradient(135deg, #38bdf8, #a855f7);
  color: #0f1729;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
}
.creator-funnel .faq {
  display: grid;
  gap: 1.4rem;
}
.creator-funnel .faq details {
  background: rgba(15, 23, 41, 0.75);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 18px;
  padding: 1.3rem 1.6rem;
}
.creator-funnel .faq summary {
  cursor: pointer;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.creator-funnel .faq p {
  margin-top: 1rem;
  color: rgba(226, 232, 240, 0.75);
  font-size: 0.95rem;
}
.creator-funnel .final-cta {
  text-align: center;
  padding: 5rem 0 6rem;
}
.creator-funnel .final-cta .guarantee {
  margin-top: 2rem;
  display: inline-flex;
  gap: 0.8rem;
  align-items: center;
  padding: 0.85rem 1.4rem;
  border-radius: 999px;
  background: rgba(56, 189, 248, 0.14);
  border: 1px solid rgba(56, 189, 248, 0.35);
  font-size: 0.9rem;
  color: rgba(226, 232, 240, 0.85);
}
.creator-funnel footer {
  padding: 3rem 0;
  border-top: 1px solid rgba(148, 163, 184, 0.2);
  text-align: center;
  font-size: 0.85rem;
  color: rgba(148, 163, 184, 0.7);
}
.creator-funnel footer a {
  color: #38bdf8;
  text-decoration: none;
}
`

export default function FunnelMembresia() {
  return (
    <ExampleLayout
      title="Club de Creadores Élite"
      description="Un funnel de alto impacto inspirado en lanzamientos de creadores top"
      accent="brand"
    >
      <style>{funnelStyles}</style>
      <div className="creator-funnel">
        <header className="site-header">
          <div className="logo">
            CreadorX
            <span>Producción Premium</span>
          </div>
          <nav>
            <a href="#inicio">Inicio</a>
            <a href="#framework">Framework</a>
            <a href="#modulos">Módulos</a>
            <a href="#casos">Casos</a>
            <a href="#planes">Planes</a>
          </nav>
        </header>

        <section className="hero" id="inicio">
          <div className="layout-wrapper hero-content">
            <div>
              <div className="hero-badge">Nuevo lanzamiento privado</div>
              <h1>
                Construye tu <span className="gradient-text">comunidad premium</span> y monetiza tu expertise con un funnel probado.
              </h1>
              <p className="hero-description">
                Accede al sistema completo que utilizan los creadores top de Latinoamérica para escalar su impacto, multiplicar su alcance y cerrar ventas recurrentes sin sentirse "en modo vendedor".
              </p>
              <div className="hero-actions">
                <a className="btn-primary" href="https://wa.me/573128225056?text=Quiero%20el%20Club%20de%20Creadores">
                  Reservar entrevista
                </a>
                <a className="btn-ghost" href="#planes">
                  Descargar syllabus
                </a>
              </div>
              <div className="hero-stats">
                <div>
                  <h3>$520K</h3>
                  <p>Lanzamientos producidos 2024</p>
                </div>
                <div>
                  <h3>42</h3>
                  <p>Creadores en nuestro mastermind</p>
                </div>
                <div>
                  <h3>19.4%</h3>
                  <p>Ratio de conversión promedio</p>
                </div>
              </div>
            </div>
            <div className="hero-media">
              <img
                src="https://images.pexels.com/photos/3202235/pexels-photo-3202235.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Estudio de creador premium"
              />
            </div>
          </div>
        </section>

        <section className="social-proof">
          <div className="layout-wrapper">
            <p className="pill-title">Confían en nosotros</p>
            <div className="logos">
              <span>Mastermind Creativo</span>
              <span>Creator Summit</span>
              <span>Hotmart Diamond</span>
              <span>Spotify Studios</span>
              <span>Meta Creators Lab</span>
            </div>
          </div>
        </section>

        <section id="framework">
          <div className="layout-wrapper">
            <div className="stacked-card">
              <p className="pill-title">Nuestro método</p>
              <h2>Del contenido gratuito a un ecosistema de suscripción premium</h2>
              <p style={{ color: 'rgba(226, 232, 240, 0.78)', maxWidth: '760px' }}>
                Desbloquea el framework de 6 etapas que acompaña a creadores a profesionalizar su negocio. Desde la estrategia editorial que genera demanda, hasta el cierre y el onboarding que retiene a tus miembros.
              </p>
              <div className="modules-grid" style={{ marginTop: '2rem' }}>
                <div className="module-card">
                  <span className="label">Fase 01</span>
                  <h3>Posicionamiento magnético</h3>
                  <p>Define tu narrativa, tu promesa transformadora y la identidad visual que te diferencia en tu nicho.</p>
                </div>
                <div className="module-card">
                  <span className="label">Fase 02</span>
                  <h3>Motor de atracción</h3>
                  <p>Arquitectamos un calendario de contenidos multiplataforma que nutre la demanda y crece tu audiencia base.</p>
                </div>
                <div className="module-card">
                  <span className="label">Fase 03</span>
                  <h3>Oferta & funnel premium</h3>
                  <p>Construimos la experiencia de funnel de alto ticket, con automatizaciones, eventos en vivo y cierre personalizado.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="modulos">
          <div className="layout-wrapper experience">
            <div>
              <p className="pill-title">Experiencia inmersiva</p>
              <h2>Una producción 360° creada para elevar tu marca</h2>
              <p style={{ color: 'rgba(226, 232, 240, 0.75)', marginBottom: '1.6rem' }}>
                Producción audiovisual, copywriting de conversión, automatizaciones y diseño UI adaptado a web, móvil y community. Todo orquestado para que solo te enfoques en entregar valor.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '1rem', fontSize: '0.95rem' }}>
                <li>✦ Sesiones de estrategia 1:1 con directores creativos</li>
                <li>✦ Lanzamientos trimestrales con backstage documentado</li>
                <li>✦ Base de datos de plantillas y automatizaciones probadas</li>
                <li>✦ Equipo on-demand de ads, edición y community growth</li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/5720568/pexels-photo-5720568.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Sesión de mastermind con creadores"
              />
            </div>
          </div>
        </section>

        <section id="casos">
          <div className="layout-wrapper">
            <p className="pill-title">Casos en portada</p>
            <h2>Historias reales de creadores que escalaron su impacto</h2>
            <div className="success-grid">
              <div className="success-card">
                <img
                  src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Creadora de bienestar"
                />
                <div className="info">
                  <span>Wellness & Mindset</span>
                  <h3>Laura M.</h3>
                  <p>Pasó de lanzar cursos de $97 a un membership de $79/mes con 640 miembros activos y eventos híbridos agotados.</p>
                </div>
              </div>
              <div className="success-card">
                <img
                  src="https://images.pexels.com/photos/5710755/pexels-photo-5710755.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Creador de finanzas"
                />
                <div className="info">
                  <span>Finanzas personales</span>
                  <h3>Andrés V.</h3>
                  <p>Duplicó su MRR en 74 días lanzando un funnel evergreen con webinars en vivo y campañas de referidos.</p>
                </div>
              </div>
              <div className="success-card">
                <img
                  src="https://images.pexels.com/photos/6953737/pexels-photo-6953737.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Creadora de productividad"
                />
                <div className="info">
                  <span>Productividad & negocios</span>
                  <h3>Majo R.</h3>
                  <p>Cerró un lanzamiento boutique de $148K con 120 miembros fundadores. Retención promedio 93% en 6 meses.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing" id="planes">
          <div className="layout-wrapper">
            <p className="pill-title">Planes diseñados para crecer contigo</p>
            <h2>Tu funnel, tu producción y tu comunidad, orquestados por expertos</h2>
            <div className="plans">
              <div className="plan-card">
                <span className="label">Programa intensivo 12 semanas</span>
                <div className="plan-price">$3,400 USD</div>
                <p style={{ color: 'rgba(226, 232, 240, 0.75)' }}>
                  Ideal para creadores que desean su primer lanzamiento premium acompañado de nuestro equipo.
                </p>
                <ul>
                  <li>Arquitectura completa del funnel + copywriting</li>
                  <li>Diseño web, branding y assets listos para ads</li>
                  <li>Campaña en vivo de 21 días + métricas en dashboard</li>
                  <li>Acompañamiento en cierres y soporte en onboarding</li>
                </ul>
                <a className="cta" href="https://wa.me/573128225056?text=Programa%2012%20semanas">
                  Agendar diagnóstico
                </a>
              </div>
              <div className="plan-card" style={{ borderColor: 'rgba(168, 85, 247, 0.4)', boxShadow: '0 35px 90px -35px rgba(168, 85, 247, 0.45)' }}>
                <span className="label">Club CreadorX (Anual)</span>
                <div className="plan-price">$590 USD / mes</div>
                <p style={{ color: 'rgba(226, 232, 240, 0.75)' }}>
                  Perfecto para creadores que buscan escala constante, producción mensual y comunidad de peers top.
                </p>
                <ul>
                  <li>Producción mensual de assets + estrategia editorial</li>
                  <li>Lanzamientos trimestrales + funnels evergreen optimizados</li>
                  <li>Acceso a masterminds privados y research de mercado</li>
                  <li>Equipo on-demand para soporte técnico, tráfico y community</li>
                </ul>
                <a className="cta" href="https://wa.me/573128225056?text=Club%20CreadorX">
                  Aplicar al club
                </a>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="layout-wrapper">
            <p className="pill-title">Resolvemos tus dudas</p>
            <div className="faq">
              <details>
                <summary>¿Qué tipo de creadores aceptan?</summary>
                <p>Seleccionamos creadores con comunidad activa y una promesa transformadora clara. Revisamos tu posicionamiento y vemos si el programa es la mejor opción para ti en esta etapa.</p>
              </details>
              <details>
                <summary>¿Necesito un equipo interno?</summary>
                <p>No es necesario. Nos encargamos de la producción, tecnología y tráfico junto a nuestro squad. Si ya tienes equipo, trabajamos en conjunto para integrarlo al framework.</p>
              </details>
              <details>
                <summary>¿Qué resultados puedo esperar?</summary>
                <p>Nuestros clientes ven incrementos del 3x al 7x en ingresos comparado con lanzamientos anteriores. Todo depende de tu consistencia con el plan de acción y participación en las sesiones.</p>
              </details>
              <details>
                <summary>¿Incluye gestión de comunidad?</summary>
                <p>Incluimos la estructura, automatizaciones y lineamientos. Puedes sumar a nuestro equipo de community managers por un fee adicional si deseas delegarlo completamente.</p>
              </details>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="layout-wrapper" style={{ maxWidth: '720px' }}>
            <h2 style={{ fontSize: '2.4rem', marginBottom: '1rem' }}>
              Este es el funnel que tu comunidad merece.
            </h2>
            <p style={{ color: 'rgba(226, 232, 240, 0.75)', fontSize: '1.05rem', marginBottom: '2.2rem' }}>
              Reserva una entrevista estratégica y construyamos juntos la experiencia premium que eleva tu marca, fideliza a tu audiencia y multiplica tus ingresos.
            </p>
            <div className="hero-actions" style={{ justifyContent: 'center' }}>
              <a className="btn-primary" href="https://wa.me/573128225056?text=Quiero%20mi%20funnel%20premium">
                Aplicar ahora
              </a>
              <a className="btn-ghost" href="#planes">
                Revisar planes
              </a>
            </div>
            <div className="guarantee">
              <span>⚡</span>
              Programa con cupos limitados. Garantía de satisfacción de 30 días.
            </div>
          </div>
        </section>

        <footer>
          <p>© 2024 CreadorX Studio. Todos los derechos reservados.</p>
          <p>
            <a href="#">Términos</a> • <a href="#">Aviso de Privacidad</a> • <a href="mailto:hola@creadorx.studio">Contacto</a>
          </p>
        </footer>
      </div>
    </ExampleLayout>
  )
}
