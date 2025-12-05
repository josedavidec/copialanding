import ExampleLayout from './ExampleLayout'

const cursoStyles = `
.curso-hotmart {
  color-scheme: dark;
  margin: 0;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: linear-gradient(180deg, rgba(10, 38, 71, 0.55) 0%, rgba(2, 6, 23, 1) 16%, rgba(2, 6, 23, 1) 100%);
  color: #e2e8f0;
  line-height: 1.65;
}
.curso-hotmart a {
  color: inherit;
}
.curso-hotmart img {
  max-width: 100%;
  display: block;
}
.curso-hotmart header {
  position: relative;
  padding: 3rem 1.2rem 2.5rem;
  background: linear-gradient(135deg, rgba(34, 211, 238, 0.22), rgba(56, 189, 248, 0.18)),
    url('https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80') center/cover;
}
@media (min-width: 768px) {
  .curso-hotmart header {
    padding: 5rem 1.5rem 3.8rem;
  }
}
.curso-hotmart header::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(2, 6, 23, 0.7);
  z-index: 0;
}
.curso-hotmart .container {
  position: relative;
  z-index: 1;
  max-width: 1140px;
  margin: 0 auto;
}
.curso-hotmart nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 2rem;
  color: #f8fafc;
}
@media (min-width: 640px) {
  .curso-hotmart nav {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
  }
}
.curso-hotmart nav .brand {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.curso-hotmart nav .brand img {
  width: 54px;
  height: 54px;
  border-radius: 12px;
  border: 2px solid rgba(34, 211, 238, 0.45);
}
.curso-hotmart nav .brand strong {
  letter-spacing: 0.28em;
  font-size: 0.78rem;
  text-transform: uppercase;
  color: #22d3ee;
  display: block;
}
.curso-hotmart nav .links {
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  font-size: 0.92rem;
  color: #cbd5f5;
}
.curso-hotmart .hero {
  display: grid;
  gap: 2.5rem;
  align-items: center;
}
@media (min-width: 980px) {
  .curso-hotmart .hero {
    grid-template-columns: 1.1fr 0.9fr;
  }
}
.curso-hotmart .hero-copy h1 {
  font-size: clamp(2.2rem, 5.7vw, 3.9rem);
  margin-bottom: 1rem;
  color: #f8fafc;
}
.curso-hotmart .hero-copy p {
  color: #e0f2fe;
  margin-bottom: 2.1rem;
}
.curso-hotmart .tagline {
  letter-spacing: 0.32em;
  text-transform: uppercase;
  font-size: 0.75rem;
  color: #22d3ee;
  margin-bottom: 1.2rem;
}
.curso-hotmart .hero-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.96rem 2.4rem;
  border-radius: 9999px;
  font-weight: 600;
  text-decoration: none;
  background: linear-gradient(135deg, #22d3ee, #0ea5e9);
  color: #020617;
  box-shadow: 0 20px 45px rgba(34, 211, 238, 0.32);
}
.curso-hotmart .hero-card {
  background: rgba(15, 23, 42, 0.82);
  border-radius: 1.8rem;
  padding: 2rem;
  border: 1px solid rgba(56, 189, 248, 0.32);
}
.curso-hotmart .hero-card h2 {
  margin-top: 0;
  font-size: 1.55rem;
  margin-bottom: 1rem;
  color: #f8fafc;
}
.curso-hotmart .hero-card ul {
  margin: 0;
  padding-left: 1.1rem;
  font-size: 0.95rem;
  color: #cbd5f5;
}
.curso-hotmart .hero-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;
}
@media (min-width: 720px) {
  .curso-hotmart .hero-stats {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.4rem;
    margin-top: 2.5rem;
  }
}
.curso-hotmart .stat {
  backdrop-filter: blur(12px);
  border-radius: 1rem;
  padding: 1rem;
  border: 1px solid rgba(56, 189, 248, 0.3);
  background: rgba(15, 23, 42, 0.4);
  text-align: center;
}
.curso-hotmart .stat strong {
  font-size: 1.4rem;
  color: #38bdf8;
  display: block;
}
.curso-hotmart section {
  padding: 3rem 1.2rem;
}
@media (min-width: 768px) {
  .curso-hotmart section {
    padding: 4.5rem 1.5rem;
  }
}
.curso-hotmart h2 {
  font-size: clamp(1.7rem, 3vw, 2.4rem);
  margin-bottom: 1rem;
  color: #f8fafc;
}
.curso-hotmart .grid {
  display: grid;
  gap: 1.75rem;
}
@media (min-width: 960px) {
  .curso-hotmart .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .curso-hotmart .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
.curso-hotmart .card {
  background: rgba(15, 23, 42, 0.82);
  border: 1px solid rgba(14, 165, 233, 0.28);
  border-radius: 1.7rem;
  padding: 2rem;
}
.curso-hotmart ul.checklist {
  padding-left: 1.1rem;
  margin: 0;
  color: #e2e8f0;
}
.curso-hotmart ul.checklist li + li {
  margin-top: 0.75rem;
}
.curso-hotmart .video-wrapper {
  position: relative;
  border-radius: 1.6rem;
  overflow: hidden;
  border: 1px solid rgba(34, 211, 238, 0.28);
}
.curso-hotmart .video-wrapper iframe {
  border: 0;
  width: 100%;
  height: 320px;
}
@media (min-width: 720px) {
  .curso-hotmart .video-wrapper iframe {
    height: 400px;
  }
}
.curso-hotmart .modules {
  display: grid;
  gap: 1.25rem;
}
@media (min-width: 980px) {
  .curso-hotmart .modules {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
.curso-hotmart .module {
  background: rgba(2, 6, 23, 0.75);
  border: 1px solid rgba(14, 165, 233, 0.26);
  border-radius: 1.5rem;
  padding: 1.8rem;
}
.curso-hotmart .module strong {
  display: block;
  color: #22d3ee;
  margin-bottom: 0.35rem;
}
.curso-hotmart .module span {
  display: block;
  font-size: 0.85rem;
  color: #94a3b8;
  margin-bottom: 0.8rem;
}
.curso-hotmart .module ul {
  margin: 0;
  padding-left: 1.1rem;
  color: #cbd5f5;
  font-size: 0.92rem;
}
.curso-hotmart .module ul li + li {
  margin-top: 0.5rem;
}
.curso-hotmart .instructor {
  display: grid;
  gap: 1.8rem;
  align-items: center;
}
@media (min-width: 900px) {
  .curso-hotmart .instructor {
    grid-template-columns: 0.9fr 1.1fr;
  }
}
.curso-hotmart .instructor img {
  border-radius: 1.6rem;
  border: 1px solid rgba(14, 165, 233, 0.28);
  width: 100%;
  height: auto;
}
.curso-hotmart .bonuses {
  display: grid;
  gap: 1.6rem;
}
@media (min-width: 960px) {
  .curso-hotmart .bonuses {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
.curso-hotmart .bonus {
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(94, 234, 212, 0.25);
  border-radius: 1.5rem;
  padding: 1.8rem;
}
.curso-hotmart .results {
  display: grid;
  gap: 1.5rem;
}
@media (min-width: 960px) {
  .curso-hotmart .results {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
.curso-hotmart .result-card {
  background: rgba(15, 23, 42, 0.85);
  border: 1px solid rgba(59, 130, 246, 0.28);
  border-radius: 1.6rem;
  padding: 1.8rem;
}
.curso-hotmart .result-card strong {
  font-size: 1.8rem;
  color: #38bdf8;
  display: block;
  margin-bottom: 0.5rem;
}
.curso-hotmart .testimonials {
  display: grid;
  gap: 1.6rem;
}
@media (min-width: 960px) {
  .curso-hotmart .testimonials {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
.curso-hotmart .testimonial {
  background: rgba(15, 23, 42, 0.82);
  border: 1px solid rgba(45, 212, 191, 0.24);
  border-radius: 1.6rem;
  padding: 1.9rem;
  font-size: 0.95rem;
  color: #cbd5f5;
}
.curso-hotmart .testimonial header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.1rem;
  background: transparent;
  padding: 0;
}
.curso-hotmart .testimonial header img {
  width: 52px;
  height: 52px;
  border-radius: 999px;
  border: 2px solid rgba(45, 212, 191, 0.35);
}
.curso-hotmart .testimonial span {
  display: block;
  margin-top: 1rem;
  font-weight: 600;
  color: #f8fafc;
}
.curso-hotmart .pricing {
  display: grid;
  gap: 1.6rem;
}
@media (min-width: 980px) {
  .curso-hotmart .pricing {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
.curso-hotmart .plan {
  background: rgba(15, 23, 42, 0.85);
  border: 1px solid rgba(14, 165, 233, 0.3);
  border-radius: 1.7rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.curso-hotmart .plan strong {
  font-size: 2rem;
  color: #38bdf8;
}
.curso-hotmart .plan ul {
  margin: 0;
  padding-left: 1.2rem;
  font-size: 0.92rem;
  color: #cbd5f5;
}
.curso-hotmart .plan ul li + li {
  margin-top: 0.6rem;
}
.curso-hotmart .plan a {
  margin-top: auto;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.9rem 1.3rem;
  border-radius: 9999px;
  text-decoration: none;
  background: rgba(14, 165, 233, 0.3);
  color: #f8fafc;
  font-weight: 600;
}
.curso-hotmart .plan.secondary {
  background: rgba(15, 23, 42, 0.92);
  border-color: rgba(34, 211, 238, 0.45);
  box-shadow: 0 25px 55px rgba(34, 211, 238, 0.15);
}
.curso-hotmart .cta-bar {
  margin-top: 2rem;
  display: grid;
  gap: 1rem;
}
@media (min-width: 720px) {
  .curso-hotmart .cta-bar {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: center;
  }
}
.curso-hotmart .cta-secondary {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  padding: 0.9rem 1.6rem;
  border-radius: 9999px;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(125, 211, 252, 0.3);
  color: #f8fafc;
  text-decoration: none;
  font-weight: 600;
}
.curso-hotmart .faq {
  display: grid;
  gap: 1rem;
}
.curso-hotmart details {
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(14, 165, 233, 0.28);
  border-radius: 1.4rem;
  padding: 1.3rem 1.5rem;
}
.curso-hotmart summary {
  cursor: pointer;
  font-weight: 600;
  color: #f8fafc;
}
.curso-hotmart footer {
  padding: 2.8rem 1.5rem 4rem;
  text-align: center;
  color: #cbd5f5;
}
.curso-hotmart footer a {
  color: #22d3ee;
  text-decoration: none;
  font-weight: 600;
}
`

const cursoMarkup = `<style>${cursoStyles}</style>
<header>
  <div class="container">
    <nav>
      <div class="brand">
        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=200&q=80" alt="Logo del programa Growth 30D" loading="lazy" />
        <div>
          <strong>Growth 30D</strong>
          <span style="font-size: 0.85rem; color: #f8fafc;">Lanza campañas rentables sin agencia</span>
        </div>
      </div>
      <div class="links">
        <a href="#programa">Programa</a>
        <a href="#bonos">Bonos</a>
        <a href="#resultados">Resultados</a>
        <a href="#testimonios">Testimonios</a>
        <a href="#checkout">Inscripción</a>
      </div>
    </nav>
    <div class="hero">
      <div class="hero-copy">
        <p class="tagline">Caso de uso · Curso digital</p>
        <h1>Landing lista para Hotmart: programa completo, prueba social creíble y CTA rastreables</h1>
        <p>
          Construida para creadores que venden productos digitales desde Colombia y LATAM. Presenta promesa, módulos, video, bonos, resultados y
          urgencia real sin scripts pesados. Todos los botones llevan seguimiento UTM hacia Hotmart.
        </p>
        <a href="#checkout" class="hero-cta">Inscríbete ahora</a>
      </div>
      <div class="hero-card">
        <h2>Oferta válida hasta el 15 de diciembre</h2>
        <ul>
          <li>Precio congelado a $349.000 COP antes del aumento de enero.</li>
          <li>Bono extra: checklist de auditoría de campañas valorado en $120.000 COP.</li>
          <li>Soporte intensivo por WhatsApp durante 60 días.</li>
          <li>Actualizaciones y replays incluidos sin costo adicional.</li>
        </ul>
      </div>
    </div>
    <div class="hero-stats">
      <div class="stat">
        <strong>+3.800</strong>
        <span>Alumnos activos en 12 países.</span>
      </div>
      <div class="stat">
        <strong>4.9 ★</strong>
        <span>Valoración promedio en Hotmart (1.420 reseñas).</span>
      </div>
      <div class="stat">
        <strong>45%</strong>
        <span>Promedio de reducción en costo por lead en 30 días.</span>
      </div>
      <div class="stat">
        <strong>72 h</strong>
        <span>Tiempo de implementación promedio del funnel.</span>
      </div>
    </div>
  </div>
</header>

<section id="video">
  <div class="container">
    <p class="tagline">Mira cómo funciona</p>
    <div class="grid grid-cols-2">
      <div class="video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/_R29XcX0L3w"
          title="Previsualización del curso Growth 30D"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="card">
        <h2 style="margin-top: 0;">Presentación rápida</h2>
        <ul class="checklist">
          <li>Demostración del dashboard en Google Sheets que usamos para optimizar campañas.</li>
          <li>Tour por la librería de anuncios y creativos listos para personalizar.</li>
          <li>Información sobre el soporte y la comunidad privada en Telegram.</li>
          <li>Vista previa del módulo de analítica con GA4 y eventos de conversión.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section id="programa">
  <div class="container">
    <p class="tagline">Programa completo</p>
    <h2>Módulos con entregables reales, plantillas y retos prácticos</h2>
    <p style="color: #cbd5f5; margin-bottom: 2rem;">
      Cada etapa libera recursos descargables, plantillas en Notion, dashboards en Google Sheets y checklists de ejecución. Puedes habilitar dripping en
      Hotmart para abrir módulos semanalmente.
    </p>
    <div class="modules">
      <div class="module">
        <strong>Módulo 1 · Fundamentos</strong>
        <span>Duración: 3 h · Video + PDF estratégico</span>
        <ul>
          <li>Define promesa y oferta irresistible.</li>
          <li>Worksheet para perfilar buyer persona y mensaje central.</li>
          <li>Plantilla de estructura para landing page y checkout.</li>
        </ul>
      </div>
      <div class="module">
        <strong>Módulo 2 · Implementación</strong>
        <span>Duración: 4 h · Video + tablero Notion</span>
        <ul>
          <li>Configuración de campañas Meta Ads paso a paso.</li>
          <li>Set de creativos probados + assets editables en Canva.</li>
          <li>Automatizaciones con Zapier, Make y formularios.</li>
        </ul>
      </div>
      <div class="module">
        <strong>Módulo 3 · Optimización</strong>
        <span>Duración: 2.5 h · Video + dashboard Sheets</span>
        <ul>
          <li>Métricas clave y diagnóstico de campañas en 15 minutos.</li>
          <li>Checklists de pruebas A/B y cambios rápidos.</li>
          <li>Activación de eventos GA4 y Meta CAPI para atribución.</li>
        </ul>
      </div>
      <div class="module">
        <strong>Módulo 4 · Escalamiento</strong>
        <span>Duración: 2 h · Video + sesión en vivo</span>
        <ul>
          <li>Estrategias para duplicar inversión sin perder ROAS.</li>
          <li>Framework para contratar y delegar sin perder control.</li>
          <li>Plantilla de planning mensual y forecast de ventas.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section id="instructor">
  <div class="container instructor">
    <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80" alt="Instructor del curso dando una charla" loading="lazy" />
    <div>
      <p class="tagline">Tu mentor</p>
      <h2>Cristóbal Mejía · Head of Growth en SaaS LATAM</h2>
      <p style="color: #cbd5f5;">
        Responsable de crecimiento en dos startups que alcanzaron series A y B. Ha gestionado presupuestos anuales de +USD 2M en campañas digitales y
        acompaña a equipos en sectores fintech, e-learning y e-commerce. Creador del newsletter “Growth al tablero”.
      </p>
      <div class="media-logos" style="display: flex; flex-wrap: wrap; gap: 1.5rem; margin-top: 1.4rem; color: rgba(226, 232, 240, 0.6); font-size: 0.82rem; letter-spacing: 0.2em; text-transform: uppercase;">
        <span>Hubspot</span>
        <span>Hotmart Black</span>
        <span>Meta Elevate</span>
        <span>Platzi Live</span>
      </div>
    </div>
  </div>
</section>

<section id="bonos">
  <div class="container">
    <p class="tagline">Bonos incluidos</p>
    <h2>Recursos que multiplican el valor del programa</h2>
    <div class="bonuses">
      <div class="bonus">
        <h3 style="margin-top: 0;">Biblioteca de creativos</h3>
        <p>50 anuncios de alto desempeño con copy, imágenes y estructura editable. Incluye versión para Meta, TikTok y Google Discovery.</p>
      </div>
      <div class="bonus">
        <h3 style="margin-top: 0;">Comunidad premium</h3>
        <p>Grupo en Telegram moderado por el equipo de growth. Respuestas en menos de 12 horas hábiles y accountability semanal.</p>
      </div>
      <div class="bonus">
        <h3 style="margin-top: 0;">Clases en vivo mensuales</h3>
        <p>Revisión de campañas reales, auditorías en vivo y biblioteca de replays para ver cuando quieras.</p>
      </div>
    </div>
  </div>
</section>

<section id="resultados">
  <div class="container">
    <p class="tagline">Resultados verificados</p>
    <h2>Indicadores clave de nuestros alumnos</h2>
    <div class="results">
      <div class="result-card">
        <strong>2.8x</strong>
        <span>Retorno promedio en lanzamientos de infoproductos</span>
      </div>
      <div class="result-card">
        <strong>-58%</strong>
        <span>Reducción media del CPL en 30 días</span>
      </div>
      <div class="result-card">
        <strong>72%</strong>
        <span>Alumnos que lanzan campaña completa en menos de dos semanas</span>
      </div>
    </div>
  </div>
</section>

<section id="testimonios">
  <div class="container">
    <p class="tagline">Casos reales</p>
    <h2>Historias de alumnos que ya aplicaron la metodología</h2>
    <div class="testimonials">
      <article class="testimonial">
        <header>
          <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80" alt="Laura Cárdenas" loading="lazy" />
          <div>
            <strong>Laura Cárdenas</strong>
            <span style="display: block; font-size: 0.85rem; color: #94a3b8;">Fundadora · Ecommerce artesanías</span>
          </div>
        </header>
        <p>“Invertimos 600.000 COP y recuperamos 2.8 millones en la primera semana. Las plantillas y el dashboard hicieron toda la diferencia para saber qué ajustar.”</p>
        <span>ROAS 4.7 · Ventas x3</span>
      </article>
      <article class="testimonial">
        <header>
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80" alt="Julián Pérez" loading="lazy" />
          <div>
            <strong>Julián Pérez</strong>
            <span style="display: block; font-size: 0.85rem; color: #94a3b8;">Director · Agencia de lanzamientos</span>
          </div>
        </header>
        <p>“El módulo de optimización me ayudó a bajar el CPL de 12.500 a 4.200 COP. El equipo responde en menos de 24 horas y los SOP nos ahorran horas.”</p>
        <span>CPL -66% · Pipeline constante</span>
      </article>
      <article class="testimonial">
        <header>
          <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80" alt="Daniela Rojas" loading="lazy" />
          <div>
            <strong>Daniela Rojas</strong>
            <span style="display: block; font-size: 0.85rem; color: #94a3b8;">Coach de bienestar · Medellín</span>
          </div>
        </header>
        <p>“Vendí mi primer curso digital sin agencia. El embudo evergreen con WhatsApp automatizado me da ventas semanales mientras sigo atendiendo clientes.”</p>
        <span>Ventas recurrentes · Comunidad +480%</span>
      </article>
    </div>
  </div>
</section>

<section id="checkout">
  <div class="container">
    <p class="tagline">Inscríbete hoy</p>
    <h2>CTA directo al checkout con urgencia y garantía clara</h2>
    <div class="pricing">
      <div class="plan">
        <h3>Acceso individual</h3>
        <strong>$349.000 COP</strong>
        <p>Ideal si estás lanzando tu primer infoproducto o quieres profesionalizar campañas existentes.</p>
        <ul>
          <li>Acceso inmediato a los 4 módulos y actualizaciones futuras.</li>
          <li>Comunidad privada con soporte diario por 60 días.</li>
          <li>Garantía de devolución de 14 días gestionada desde Hotmart.</li>
        </ul>
        <a href="https://www.hotmart.com" target="_blank" rel="noopener noreferrer">Comprar con Hotmart</a>
      </div>
      <div class="plan secondary">
        <h3>Pack equipos</h3>
        <strong>$899.000 COP</strong>
        <p>Para agencias o squads internos que desean escalar usando la misma metodología.</p>
        <ul>
          <li>3 licencias en Hotmart + usuarios adicionales con descuento.</li>
          <li>Sesión de onboarding 1:1 de 45 minutos para el equipo.</li>
          <li>Plan de implementación de 30 días en Notion y soporte extendido.</li>
        </ul>
        <a href="https://www.hotmart.com" target="_blank" rel="noopener noreferrer">Reservar cupo para equipos</a>
      </div>
    </div>
    <div class="cta-bar">
      <a href="https://www.hotmart.com" target="_blank" rel="noopener noreferrer" class="hero-cta">Ir al checkout seguro</a>
      <a href="#faq" class="cta-secondary">Garantía y preguntas frecuentes</a>
    </div>
    <p style="margin-top: 1.5rem; color: #94a3b8; font-size: 0.9rem;">
      Aceptamos pagos con tarjetas, PSE, Nequi, Daviplata y transferencias bancarias. Emitimos factura electrónica automáticamente tras la compra.
    </p>
  </div>
</section>

<section id="faq">
  <div class="container">
    <p class="tagline">Resuelve tus dudas</p>
    <h2>Preguntas frecuentes antes de inscribirte</h2>
    <div class="faq">
      <details>
        <summary>¿Qué sucede después de pagar?</summary>
        <p>Recibes correo inmediato con credenciales de Hotmart, enlace a la comunidad privada y acceso al primer módulo. También puedes descargar factura e instrucciones de onboarding.</p>
      </details>
      <details>
        <summary>¿Necesito experiencia previa en anuncios?</summary>
        <p>No es obligatorio. Empezamos desde fundamentos y cada módulo incluye plantillas y SOP para ejecutar sin agencia. Recomendamos dedicar 6 horas semanales.</p>
      </details>
      <details>
        <summary>¿Cómo funciona la garantía?</summary>
        <p>Tienes 14 días para solicitar devolución completa desde tu cuenta de Hotmart si el curso no se ajusta a tus expectativas. Sin preguntas.</p>
      </details>
      <details>
        <summary>¿Qué soporte recibo?</summary>
        <p>Acceso al grupo privado con respuestas en menos de 12 horas hábiles, sesiones grupales semanales e inbox dedicado para dudas técnicas.</p>
      </details>
      <details>
        <summary>¿Ofrecen certificación?</summary>
        <p>Sí. Al completar todos los módulos y aprobar el proyecto final recibes certificado digital verificable emitido por Growth 30D | Hotmart Black.</p>
      </details>
    </div>
  </div>
</section>

<footer>
  <div class="container">
    <p>
      Este es un ejemplo funcional creado por TuLandingYa para creadores de cursos digitales que necesitan una landing enfocada en conversiones, lista para integrarse con Hotmart y herramientas de automatización.
      <br />
      <a href="/">Volver al sitio principal</a>
    </p>
  </div>
</footer>
`

function CursoHotmart() {
  return (
    <ExampleLayout
      title="Landing de ejemplo · Curso digital en Hotmart"
      description="Demostración completa del funnel con video, módulos, bonos y CTAs con seguimiento listos para tus lanzamientos."
      accent="brand"
    >
      <div className="curso-hotmart" dangerouslySetInnerHTML={{ __html: cursoMarkup }} />
    </ExampleLayout>
  )
}

export default CursoHotmart
