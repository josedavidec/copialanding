import ExampleLayout from './ExampleLayout'

const marcaStyles = `
.marca-personal {
  color-scheme: dark;
  margin: 0;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: linear-gradient(180deg, rgba(0, 91, 150, 0.35) 0%, rgba(2, 6, 23, 1) 18%, rgba(2, 6, 23, 1) 100%);
  color: #e2e8f0;
  line-height: 1.65;
}
.marca-personal a {
  color: inherit;
}
.marca-personal img {
  max-width: 100%;
  display: block;
}
.marca-personal header {
  position: relative;
  padding: 3rem 1.2rem 2.5rem;
  background: linear-gradient(130deg, rgba(56, 189, 248, 0.35), rgba(168, 85, 247, 0.25)),
    url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80') center/cover;
}
@media (min-width: 768px) {
  .marca-personal header {
    padding: 5rem 1.5rem 3.5rem;
  }
}
.marca-personal header::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(2, 6, 23, 0.7);
  z-index: 0;
}
.marca-personal .container {
  position: relative;
  z-index: 1;
  max-width: 1140px;
  margin: 0 auto;
}
.marca-personal nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
  color: #f8fafc;
}
@media (min-width: 640px) {
  .marca-personal nav {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
  }
}
.marca-personal nav .brand {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.marca-personal nav .brand img {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid rgba(56, 189, 248, 0.6);
}
.marca-personal nav .brand strong {
  letter-spacing: 0.3em;
  font-size: 0.78rem;
  text-transform: uppercase;
  color: #38bdf8;
  display: block;
}
.marca-personal nav .links {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  font-size: 0.92rem;
  color: #cbd5f5;
}
.marca-personal .hero {
  display: grid;
  gap: 2.5rem;
  align-items: center;
}
@media (min-width: 960px) {
  .marca-personal .hero {
    grid-template-columns: 1.1fr 0.9fr;
  }
}
.marca-personal .hero-copy {
  text-align: left;
}
.marca-personal .hero-copy h1 {
  font-size: clamp(2.2rem, 5.5vw, 3.9rem);
  margin-bottom: 1.2rem;
  color: #f8fafc;
}
.marca-personal .hero-copy p {
  color: #e0f2fe;
  margin-bottom: 2rem;
  max-width: 640px;
}
.marca-personal .hero-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.95rem 2.2rem;
  border-radius: 9999px;
  font-weight: 600;
  text-decoration: none;
  background: linear-gradient(135deg, #38bdf8, #a855f7);
  color: #020617;
  box-shadow: 0 18px 45px rgba(168, 85, 247, 0.3);
}
.marca-personal .hero-card {
  background: rgba(15, 23, 42, 0.82);
  border-radius: 1.8rem;
  padding: 2rem;
  border: 1px solid rgba(99, 102, 241, 0.28);
  text-align: left;
}
.marca-personal .hero-card h2 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.6rem;
}
.marca-personal .hero-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;
}
@media (min-width: 720px) {
  .marca-personal .hero-stats {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.4rem;
  }
}
.marca-personal .stat {
  backdrop-filter: blur(12px);
  border-radius: 1rem;
  padding: 1rem;
  border: 1px solid rgba(56, 189, 248, 0.3);
  background: rgba(15, 23, 42, 0.45);
  text-align: center;
}
.marca-personal .stat strong {
  font-size: 1.4rem;
  color: #38bdf8;
  display: block;
}
.marca-personal section {
  padding: 3rem 1.2rem;
}
@media (min-width: 768px) {
  .marca-personal section {
    padding: 4.5rem 1.5rem;
  }
}
.marca-personal h2 {
  font-size: clamp(1.7rem, 3vw, 2.4rem);
  margin-bottom: 1rem;
  color: #f8fafc;
}
.marca-personal .tagline {
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-size: 0.75rem;
  color: #38bdf8;
  margin-bottom: 1.4rem;
}
.marca-personal .grid {
  display: grid;
  gap: 1.75rem;
}
@media (min-width: 960px) {
  .marca-personal .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .marca-personal .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
.marca-personal .card {
  background: rgba(15, 23, 42, 0.82);
  border: 1px solid rgba(56, 189, 248, 0.22);
  border-radius: 1.7rem;
  padding: 2rem;
}
.marca-personal ul.checklist {
  padding-left: 1.1rem;
  margin: 0;
  color: #e2e8f0;
}
.marca-personal ul.checklist li + li {
  margin-top: 0.75rem;
}
.marca-personal .pill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.6rem;
}
.marca-personal .pill {
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: rgba(168, 85, 247, 0.2);
  color: #f8fafc;
}
.marca-personal .timeline {
  display: grid;
  gap: 1.5rem;
  margin-top: 1.8rem;
}
.marca-personal .milestone {
  border-left: 3px solid rgba(168, 85, 247, 0.4);
  padding-left: 1.2rem;
}
.marca-personal .milestone strong {
  display: block;
  color: #a855f7;
  margin-bottom: 0.3rem;
}
.marca-personal .media-logos {
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem;
  margin-top: 1.6rem;
  color: rgba(226, 232, 240, 0.65);
  font-size: 0.82rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}
.marca-personal .services {
  display: grid;
  gap: 1.6rem;
}
@media (min-width: 960px) {
  .marca-personal .services {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
.marca-personal .service {
  background: rgba(15, 23, 42, 0.78);
  border: 1px solid rgba(99, 102, 241, 0.28);
  border-radius: 1.6rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.marca-personal .service strong {
  font-size: 1.55rem;
  color: #38bdf8;
}
.marca-personal .service ul {
  margin: 0;
  padding-left: 1.2rem;
  color: #cbd5f5;
  font-size: 0.92rem;
}
.marca-personal .resources {
  display: grid;
  gap: 1.5rem;
}
@media (min-width: 900px) {
  .marca-personal .resources {
    grid-template-columns: 2fr 3fr;
  }
}
.marca-personal .resource-list {
  display: grid;
  gap: 1.4rem;
}
.marca-personal .resource-card {
  background: rgba(15, 23, 42, 0.78);
  border-radius: 1.5rem;
  border: 1px solid rgba(56, 189, 248, 0.25);
  padding: 1.75rem;
}
.marca-personal .resource-card h3 {
  margin-top: 0;
  margin-bottom: 0.6rem;
}
.marca-personal .resource-card p {
  margin: 0;
  color: #cbd5f5;
}
.marca-personal .video-thumb {
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  border: 1px solid rgba(56, 189, 248, 0.22);
}
.marca-personal .video-thumb iframe {
  border: 0;
  width: 100%;
  height: 320px;
}
.marca-personal .testimonials {
  display: grid;
  gap: 1.6rem;
}
@media (min-width: 960px) {
  .marca-personal .testimonials {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
.marca-personal .testimonial {
  background: rgba(15, 23, 42, 0.82);
  border: 1px solid rgba(168, 85, 247, 0.2);
  border-radius: 1.6rem;
  padding: 1.8rem;
  font-size: 0.95rem;
  color: #cbd5f5;
}
.marca-personal .testimonial header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.2rem;
  background: transparent;
  padding: 0;
}
.marca-personal .testimonial header img {
  width: 52px;
  height: 52px;
  border-radius: 999px;
  border: 2px solid rgba(168, 85, 247, 0.35);
}
.marca-personal .testimonial span {
  display: block;
  margin-top: 1rem;
  font-weight: 600;
  color: #f8fafc;
}
.marca-personal .agenda {
  display: grid;
  gap: 1.8rem;
  align-items: flex-start;
}
@media (min-width: 1024px) {
  .marca-personal .agenda {
    grid-template-columns: 1fr 1fr;
  }
}
.marca-personal .form-card {
  background: rgba(15, 23, 42, 0.85);
  border: 1px solid rgba(99, 102, 241, 0.32);
  border-radius: 1.7rem;
  padding: 2rem;
}
.marca-personal form label {
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #cbd5f5;
  display: block;
  margin-bottom: 0.5rem;
}
.marca-personal form input,
.marca-personal form textarea,
.marca-personal form select {
  width: 100%;
  padding: 0.78rem 0.9rem;
  border-radius: 0.95rem;
  border: 1px solid rgba(148, 163, 184, 0.28);
  background: rgba(2, 6, 23, 0.7);
  color: #f8fafc;
  font-size: 0.95rem;
}
.marca-personal form textarea {
  resize: vertical;
  min-height: 140px;
}
.marca-personal form button {
  margin-top: 1.1rem;
  width: 100%;
  padding: 0.95rem 1.2rem;
  border-radius: 9999px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  background: linear-gradient(135deg, #6366f1, #a855f7);
  color: #020617;
  box-shadow: 0 22px 40px rgba(99, 102, 241, 0.32);
}
.marca-personal iframe {
  border: 0;
  border-radius: 1.6rem;
  width: 100%;
  min-height: 480px;
}
.marca-personal .newsletter {
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.18), rgba(168, 85, 247, 0.18));
  border-radius: 1.8rem;
  padding: 2.5rem;
  border: 1px solid rgba(56, 189, 248, 0.28);
  text-align: center;
}
.marca-personal .newsletter form {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
@media (min-width: 720px) {
  .marca-personal .newsletter form {
    flex-direction: row;
    align-items: center;
  }
  .marca-personal .newsletter form input {
    flex: 1;
  }
}
.marca-personal footer {
  padding: 2.8rem 1.5rem 4rem;
  text-align: center;
  color: #cbd5f5;
}
.marca-personal footer a {
  color: #38bdf8;
  text-decoration: none;
  font-weight: 600;
}
`

const marcaMarkup = `<style>${marcaStyles}</style>
<header>
  <div class="container">
    <nav>
      <div class="brand">
        <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80" alt="Fotografía profesional de Laura Méndez" loading="lazy" />
        <div>
          <strong>Laura Méndez</strong>
          <span style="font-size: 0.85rem; color: #f8fafc;">Consultora en posicionamiento de marca</span>
        </div>
      </div>
      <div class="links">
        <a href="#sobre">Sobre mí</a>
        <a href="#servicios">Servicios</a>
        <a href="#recursos">Recursos</a>
        <a href="#testimonios">Casos</a>
        <a href="#agenda">Agenda</a>
      </div>
    </nav>
    <div class="hero">
      <div class="hero-copy">
        <p class="tagline">Caso de uso · Marca personal</p>
        <h1>Diseña tu presencia como autoridad, vende asesorías premium y escala con un solo enlace</h1>
        <p>
          Landing estática basada en resultados reales: storytelling claro, servicios ordenados, prueba social contundente y embudo de reservas
          conectado a WhatsApp, email y tu CRM ligero.
        </p>
        <a href="#agenda" class="hero-cta">Agenda una consultoría</a>
      </div>
      <div class="hero-card">
        <h2>Informe de impacto 2025</h2>
        <ul class="checklist">
          <li>StartupSaaS, Platzi, iNNpulsa y Forbes LATAM ya confiaron en la metodología.</li>
          <li>Más de 4.2 millones de visualizaciones orgánicas en LinkedIn y Reels.</li>
          <li>Retorno promedio de 5.4x en ventas de servicios premium después del relanzamiento.</li>
          <li>Stack conectado a Notion, Calendly, Make y ConvertKit para automatizar seguimiento.</li>
        </ul>
      </div>
    </div>
    <div class="hero-stats">
      <div class="stat">
        <strong>+120</strong>
        <span>Mentorías 1:1 completadas con founders y ejecutivos.</span>
      </div>
      <div class="stat">
        <strong>15K</strong>
        <span>Suscriptores activos en newsletter semanal.</span>
      </div>
      <div class="stat">
        <strong>9.6/10</strong>
        <span>Satisfacción promedio en NPS.</span>
      </div>
      <div class="stat">
        <strong>3X</strong>
        <span>Incremento de leads calificados en 90 días.</span>
      </div>
    </div>
  </div>
</header>

<section id="sobre">
  <div class="container">
    <p class="tagline">Sobre mí</p>
    <div class="grid grid-cols-2">
      <div>
        <h2>Storytelling con credenciales reales y datos accionables</h2>
        <p style="color: #cbd5f5;">
          La landing se alimenta desde Notion: puedes sumar podcasts, artículos, conferencias y artículos de prensa sin tocar código. Toda la
          información está escrita pensando en clientes corporativos de Colombia y LATAM.
        </p>
        <div class="pill-list">
          <span class="pill">+8 años asesorando startups</span>
          <span class="pill">Columnista Forbes</span>
          <span class="pill">Speaker Webcon Latam</span>
          <span class="pill">Mentora iNNpulsa</span>
        </div>
        <div class="media-logos">
          <span>Forbes</span>
          <span>Bloomberg</span>
          <span>Platzi</span>
          <span>Endeavor</span>
        </div>
      </div>
      <div class="card">
        <h3 style="margin-top: 0;">Línea de tiempo</h3>
        <div class="timeline">
          <div class="milestone">
            <strong>2025</strong>
            <span>Autora del libro “Autoridad sin freelancers” (Planeta).</span>
          </div>
          <div class="milestone">
            <strong>2023</strong>
            <span>Co-creadora del programa de marca personal para founders en Platzi.</span>
          </div>
          <div class="milestone">
            <strong>2021</strong>
            <span>Head of Personal Branding en aceleradora con 60 startups.</span>
          </div>
          <div class="milestone">
            <strong>2018</strong>
            <span>Lanzamiento de consultora boutique para comunidades tech.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="servicios">
  <div class="container">
    <p class="tagline">Oferta de valor</p>
    <h2>Programas diseñados para distintos niveles de acompañamiento</h2>
    <div class="services">
      <div class="service">
        <h3>Sesión estratégica</h3>
        <strong>$290.000 COP</strong>
        <p>Diagnóstico de posicionamiento de 60 minutos con entregables accionables en 48 horas.</p>
        <ul>
          <li>Benchmark de tu narrativa frente a referentes de la industria.</li>
          <li>Guion para 4 formatos de contenido (LinkedIn, Reels, newsletter, pitch).</li>
          <li>Plantilla editable para los próximos 30 días.</li>
        </ul>
      </div>
      <div class="service" style="background: rgba(30, 41, 59, 0.9); border-color: rgba(99, 102, 241, 0.5);">
        <h3>Mentoría 6 semanas</h3>
        <strong>$1.450.000 COP</strong>
        <p>Programa intensivo con sesiones semanales, tablero de ejecución y seguimiento personalizado.</p>
        <ul>
          <li>Sesiones en vivo + soporte ilimitado por WhatsApp.</li>
          <li>Tablero compartido en Notion con prioridades y deadlines.</li>
          <li>Auditoría de marca visual, web y funnel de captura.</li>
        </ul>
      </div>
      <div class="service">
        <h3>Retainer trimestral</h3>
        <strong>$2.850.000 COP</strong>
        <p>Squad aliado para founders y directivos que buscan crecer con presencia constante.</p>
        <ul>
          <li>Producción de contenido premium y apariciones en medios.</li>
          <li>Media kit, pitch personal y automatizaciones de seguimiento.</li>
          <li>Reportes quincenales de métricas y pipeline de oportunidades.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section id="recursos">
  <div class="container resources">
    <div>
      <p class="tagline">Recursos gratuitos</p>
      <h2>Biblioteca conectada para nutrir leads y demostrar autoridad</h2>
      <p style="color: #cbd5f5;">
        Cada recurso se descarga previo registro y alimenta automáticamente tu sistema de newsletters. Puedes medir el rendimiento por tag y
        enviar secuencias personalizadas en ConvertKit o MailerLite.
      </p>
      <div class="resource-list">
        <div class="resource-card">
          <h3>Guía LinkedIn Growth 2025</h3>
          <p>Framework actualizado para founders y ejecutivos con ejemplos locales y calendario editable.</p>
        </div>
        <div class="resource-card">
          <h3>Media kit editable</h3>
          <p>Plantilla en Canva + versión PDF para enviar a conferencias, prensa y sponsors.</p>
        </div>
        <div class="resource-card">
          <h3>Starter kit pitch personal</h3>
          <p>Scripts para reuniones comerciales, webinars y mensajes de seguimiento.</p>
        </div>
      </div>
    </div>
    <div class="video-thumb">
      <iframe
        src="https://www.youtube.com/embed/gZ8s3mGcx18"
        title="Masterclass gratuita de marca personal"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</section>

<section id="testimonios">
  <div class="container">
    <p class="tagline">Casos reales</p>
    <h2>Historias de crecimiento con resultados cuantificables</h2>
    <div class="testimonials">
      <article class="testimonial">
        <header>
          <img src="https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=200&q=80" alt="Cliente Camilo Rojas" loading="lazy" />
          <div>
            <strong>Camilo Rojas</strong>
            <span style="display: block; font-size: 0.85rem; color: #94a3b8;">Consultor fintech · Bogotá</span>
          </div>
        </header>
        <p>“La estructura de narrativa y los assets que construimos ayudaron a cerrar tres consultorías corporativas en la primera semana. El playbook me ahorra cuatro horas semanales.”</p>
        <span>Ventas +210% · CPL -48%</span>
      </article>
      <article class="testimonial">
        <header>
          <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80" alt="Cliente Mariángela Ortiz" loading="lazy" />
          <div>
            <strong>Mariángela Ortiz</strong>
            <span style="display: block; font-size: 0.85rem; color: #94a3b8;">Coach de carrera · Medellín</span>
          </div>
        </header>
        <p>“El tablero en Notion me permitió producir contenido consistente. En 45 días pasé de 800 a 4.500 seguidores calificados y llené mi agenda de mentorías individuales.”</p>
        <span>Seguidores +5x · Agenda al 90%</span>
      </article>
      <article class="testimonial">
        <header>
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80" alt="Cliente Felipe Mora" loading="lazy" />
          <div>
            <strong>Felipe Mora</strong>
            <span style="display: block; font-size: 0.85rem; color: #94a3b8;">Speaker y autor · Ciudad de México</span>
          </div>
        </header>
        <p>“El media kit, la automatización de correos y la guía de prensa multiplicaron las invitaciones a charlas pagas. Ahora tengo pipeline organizado y cierres semanales.”</p>
        <span>Invitaciones +320% · Fee promedio +65%</span>
      </article>
    </div>
  </div>
</section>

<section id="agenda">
  <div class="container agenda">
    <div>
      <p class="tagline">Agenda tu sesión</p>
      <h2>Embudo conectado con Calendly y automatizaciones</h2>
      <p style="color: #cbd5f5;">
        Después de completar el formulario, la landing redirige a Calendly con slots disponibles. También activa secuencias de recordatorios por
        email y WhatsApp automatizados con Make.
      </p>
      <div class="card" style="margin-top: 1.5rem;">
        <h3 style="margin-top: 0;">Cómo trabajaremos</h3>
        <ul class="checklist">
          <li>Diagnóstico express de 10 minutos con prioridad de objetivos.</li>
          <li>Selección de indicadores clave y canales para medir impacto.</li>
          <li>Entrega de tablero compartido con backlog de contenido y guías.</li>
          <li>Revisión a los 7 y 21 días para validar implementación.</li>
        </ul>
      </div>
    </div>
    <div class="form-card">
      <form>
        <label for="nombre">Nombre completo</label>
        <input id="nombre" name="nombre" type="text" placeholder="Andrea Torres" />

        <label for="email">Correo</label>
        <input id="email" name="email" type="email" placeholder="andrea@startup.com" />

        <label for="objetivo">Objetivo principal</label>
        <select id="objetivo" name="objetivo">
          <option>Construir marca personal desde cero</option>
          <option>Relanzar oferta de consultoría premium</option>
          <option>Aumentar autoridad y demanda en LinkedIn</option>
          <option>Optimizar media kit y apariciones en prensa</option>
        </select>

        <label for="industria">Industria</label>
        <input id="industria" name="industria" type="text" placeholder="Fintech, SaaS, salud, educación..." />

        <label for="mensaje">Contexto adicional</label>
        <textarea id="mensaje" name="mensaje" placeholder="Cuéntame sobre tu público, productos actuales y resultados esperados."></textarea>

        <button type="submit">Solicitar diagnóstico</button>
      </form>
      <p style="font-size: 0.8rem; color: #94a3b8; margin-top: 1rem;">
        Recibirás un correo con el enlace a Calendly y un briefing descargable para preparar la sesión. Respondemos en menos de 12 horas hábiles.
      </p>
    </div>
  </div>
</section>

<section id="newsletter">
  <div class="container newsletter">
    <h2 style="margin: 0;">Newsletter quincenal “Autoridad que convierte”</h2>
    <p style="color: #dbeafe; margin-top: 0.6rem;">
      Estrategias, frameworks y casos reales desde el ecosistema colombiano y latino. Nada de spam, solo tácticas accionables.
    </p>
    <form>
      <input type="email" placeholder="tu@email.com" />
      <button type="submit">Unirme gratis</button>
    </form>
    <p style="font-size: 0.78rem; color: #94a3b8; margin-top: 0.8rem;">
      Puedes darte de baja cuando quieras. Incluimos resumen de herramientas, plantillas y métricas clave.
    </p>
  </div>
</section>

<footer>
  <div class="container">
    <p>
      Este es un ejemplo funcional creado por TuLandingYa para profesionales que quieren consolidar su marca personal con una landing estática, automatizada y lista para vender.
      <br />
      <a href="/">Volver al sitio principal</a>
    </p>
  </div>
</footer>
`

function MarcaPersonal() {
  return (
    <ExampleLayout
      title="Landing de ejemplo · Marca personal premium"
      description="Referente para consultores y speakers que buscan un funnel listo para captar leads, mostrar autoridad y agendar sesiones."
      accent="fuchsia"
    >
      <div className="marca-personal" dangerouslySetInnerHTML={{ __html: marcaMarkup }} />
    </ExampleLayout>
  )
}

export default MarcaPersonal
