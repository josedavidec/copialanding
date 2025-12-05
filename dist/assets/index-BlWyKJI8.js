import{a as e,c as t,d as n,i as r,l as i,n as a,o,r as s,s as c,t as l}from"./ui-DZSQOaf9.js";import{a as u,i as d,n as f,o as p,r as m,t as ee}from"./vendor-dqespyzI.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var h=p(),g=n(),_=i(),v={brand:`from-brand-400 via-brand-500 to-sky-500`,amber:`from-amber-400 via-amber-500 to-orange-500`,emerald:`from-emerald-400 via-emerald-500 to-lime-400`,fuchsia:`from-fuchsia-400 via-pink-500 to-rose-400`};function y({title:e,description:t,accent:n=`brand`,children:r}){let i=v[n];return(0,_.jsxs)(`div`,{className:`min-h-screen bg-slate-950 text-slate-100`,children:[(0,_.jsxs)(`header`,{className:`relative isolate overflow-hidden`,children:[(0,_.jsx)(`div`,{className:`absolute inset-0 bg-linear-to-r ${i} opacity-95`}),(0,_.jsx)(`div`,{className:`absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.18),_transparent_55%)]`}),(0,_.jsxs)(`div`,{className:`relative mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-slate-50 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-8`,children:[(0,_.jsxs)(`div`,{className:`space-y-1 sm:space-y-2`,children:[(0,_.jsx)(`p`,{className:`text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-100/80 sm:text-xs sm:tracking-[0.45em]`,children:`Demo en vivo`}),(0,_.jsx)(`h1`,{className:`text-xl font-semibold leading-snug sm:text-3xl`,children:e}),t?(0,_.jsx)(`p`,{className:`max-w-2xl text-xs font-medium text-slate-100/85 sm:text-sm sm:text-base`,children:t}):null]}),(0,_.jsx)(f,{to:`/`,className:`inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white shadow-glow transition hover:bg-white/20 sm:px-6 sm:py-3 sm:text-sm`,children:`Volver al sitio principal`})]})]}),(0,_.jsx)(`main`,{children:r})]})}var b=y,te=`<style>
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
</style>
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
`;function x(){return(0,_.jsx)(b,{title:`Landing de ejemplo · Curso digital en Hotmart`,description:`Demostración completa del funnel con video, módulos, bonos y CTAs con seguimiento listos para tus lanzamientos.`,accent:`brand`,children:(0,_.jsx)(`div`,{className:`curso-hotmart`,dangerouslySetInnerHTML:{__html:te}})})}var S=x,C=`<style>
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
</style>
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
`;function w(){return(0,_.jsx)(b,{title:`Landing de ejemplo · Marca personal premium`,description:`Referente para consultores y speakers que buscan un funnel listo para captar leads, mostrar autoridad y agendar sesiones.`,accent:`fuchsia`,children:(0,_.jsx)(`div`,{className:`marca-personal`,dangerouslySetInnerHTML:{__html:C}})})}var T=w,E=`<style>
.restaurante-landing {
  color-scheme: dark;
  margin: 0;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: #0f172a;
  color: #e2e8f0;
  line-height: 1.6;
}
.restaurante-landing a {
  color: inherit;
}
.restaurante-landing img {
  max-width: 100%;
  display: block;
}
.restaurante-landing header {
  position: relative;
  padding: 3rem 1.2rem 2.5rem;
  background: linear-gradient(180deg, rgba(250, 204, 21, 0.18) 0%, rgba(15, 23, 42, 0.85) 70%),
    url('https://images.unsplash.com/flagged/photo-1573166675921-13624c3caa57?auto=format&fit=crop&w=1600&q=80') center/cover;
}
@media (min-width: 768px) {
  .restaurante-landing header {
    padding: 4.5rem 1.5rem 3.5rem;
  }
}
.restaurante-landing header::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0) 0%, rgba(15, 23, 42, 0.85) 65%);
  z-index: 0;
}
.restaurante-landing .container {
  position: relative;
  z-index: 1;
  max-width: 1120px;
  margin: 0 auto;
}
.restaurante-landing nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  color: #f8fafc;
}
@media (min-width: 640px) {
  .restaurante-landing nav {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 3rem;
  }
}
.restaurante-landing nav .logo {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.restaurante-landing nav .logo img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid rgba(250, 204, 21, 0.6);
}
.restaurante-landing nav .logo strong {
  letter-spacing: 0.25em;
  text-transform: uppercase;
  font-size: 0.78rem;
  color: #facc15;
  display: block;
}
.restaurante-landing nav .menu {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.5rem;
  font-size: 0.9rem;
  color: #f8fafc;
}
.restaurante-landing .hero {
  text-align: center;
  max-width: 760px;
  margin: 0 auto;
}
.restaurante-landing .hero h1 {
  font-size: clamp(2.2rem, 6vw, 3.8rem);
  margin-bottom: 1rem;
  color: #f8fafc;
}
.restaurante-landing .hero p {
  color: #e0f2fe;
  margin-bottom: 2rem;
}
.restaurante-landing .hero-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.95rem 2.1rem;
  border-radius: 9999px;
  font-weight: 600;
  text-decoration: none;
  background: linear-gradient(135deg, #facc15, #f97316);
  color: #0f172a;
  box-shadow: 0 20px 45px rgba(250, 204, 21, 0.2);
}
.restaurante-landing .stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;
}
@media (min-width: 720px) {
  .restaurante-landing .stats {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.5rem;
    margin-top: 3rem;
  }
}
.restaurante-landing .stat {
  backdrop-filter: blur(12px);
  border-radius: 1rem;
  padding: 1rem;
  border: 1px solid rgba(248, 204, 21, 0.25);
  background: rgba(15, 23, 42, 0.45);
  text-align: center;
}
.restaurante-landing .stat strong {
  font-size: 1.4rem;
  color: #facc15;
  display: block;
}
.restaurante-landing section {
  padding: 3rem 1.2rem;
}
@media (min-width: 768px) {
  .restaurante-landing section {
    padding: 4.2rem 1.5rem;
  }
}
.restaurante-landing h2 {
  font-size: clamp(1.6rem, 3vw, 2.3rem);
  margin-bottom: 1rem;
  color: #f8fafc;
}
.restaurante-landing .tagline {
  letter-spacing: 0.3em;
  text-transform: uppercase;
  font-size: 0.75rem;
  color: #facc15;
  margin-bottom: 1.4rem;
}
.restaurante-landing .card {
  background: rgba(15, 23, 42, 0.78);
  border: 1px solid rgba(248, 196, 46, 0.2);
  border-radius: 1.6rem;
  padding: 1.9rem;
}
.restaurante-landing .grid {
  display: grid;
  gap: 1.75rem;
}
@media (min-width: 960px) {
  .restaurante-landing .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .restaurante-landing .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
.restaurante-landing ul.checklist {
  padding-left: 1.1rem;
  color: #e2e8f0;
  margin: 0;
}
.restaurante-landing ul.checklist li + li {
  margin-top: 0.75rem;
}
.restaurante-landing .menu-board {
  display: grid;
  gap: 1.1rem;
}
@media (min-width: 720px) {
  .restaurante-landing .menu-board {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
.restaurante-landing .menu-item {
  border-radius: 1.3rem;
  padding: 1.5rem;
  background: linear-gradient(145deg, rgba(30, 41, 59, 0.95), rgba(17, 24, 39, 0.85));
  border: 1px solid rgba(248, 113, 113, 0.2);
}
.restaurante-landing .menu-item h3 {
  margin-top: 0;
  margin-bottom: 0.4rem;
  font-size: 1.18rem;
}
.restaurante-landing .menu-item strong {
  color: #fbbf24;
}
.restaurante-landing .menu-item small {
  display: block;
  color: #94a3b8;
  margin-top: 0.35rem;
}
.restaurante-landing .gallery {
  display: grid;
  gap: 1rem;
}
@media (min-width: 900px) {
  .restaurante-landing .gallery {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
.restaurante-landing .gallery img {
  border-radius: 1.4rem;
  border: 1px solid rgba(248, 204, 21, 0.18);
  object-fit: cover;
  height: 240px;
  width: 100%;
}
.restaurante-landing .testimonial {
  background: rgba(17, 24, 39, 0.85);
  border: 1px solid rgba(248, 196, 46, 0.18);
  border-radius: 1.5rem;
  padding: 1.7rem;
  font-size: 0.95rem;
  color: #cbd5f5;
}
.restaurante-landing .testimonial span {
  display: block;
  margin-top: 1rem;
  font-weight: 600;
  color: #f8fafc;
}
.restaurante-landing .testimonials {
  display: grid;
  gap: 1.5rem;
}
@media (min-width: 900px) {
  .restaurante-landing .testimonials {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
.restaurante-landing .medios {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 1.5rem;
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.82rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}
.restaurante-landing .info-grid {
  display: grid;
  gap: 1.75rem;
}
@media (min-width: 960px) {
  .restaurante-landing .info-grid {
    grid-template-columns: 1.1fr 0.9fr;
  }
}
.restaurante-landing .contact-card {
  background: rgba(17, 24, 39, 0.88);
  border-radius: 1.6rem;
  border: 1px solid rgba(59, 130, 246, 0.35);
  padding: 1.9rem;
}
.restaurante-landing form label {
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #cbd5f5;
  display: block;
  margin-bottom: 0.5rem;
}
.restaurante-landing form input,
.restaurante-landing form textarea,
.restaurante-landing form select {
  width: 100%;
  padding: 0.78rem 0.85rem;
  border-radius: 0.95rem;
  border: 1px solid rgba(148, 163, 184, 0.28);
  background: rgba(15, 23, 42, 0.7);
  color: #f8fafc;
  font-size: 0.95rem;
}
.restaurante-landing form textarea {
  resize: vertical;
  min-height: 120px;
}
.restaurante-landing form button {
  margin-top: 1.1rem;
  width: 100%;
  padding: 0.95rem 1.2rem;
  border-radius: 9999px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: #0b1120;
  box-shadow: 0 18px 35px rgba(34, 197, 94, 0.2);
}
.restaurante-landing iframe {
  border: 0;
  border-radius: 1.6rem;
  width: 100%;
  height: 320px;
}
.restaurante-landing footer {
  padding: 2.8rem 1.5rem 4rem;
  text-align: center;
  color: #cbd5f5;
}
.restaurante-landing footer a {
  color: #facc15;
  text-decoration: none;
  font-weight: 600;
}
.restaurante-landing .info-table {
  margin-top: 1.5rem;
  border-collapse: collapse;
  width: 100%;
  font-size: 0.92rem;
}
.restaurante-landing .info-table tr {
  border-bottom: 1px solid rgba(148, 163, 184, 0.18);
}
.restaurante-landing .info-table td {
  padding: 0.7rem 0.2rem;
}
.restaurante-landing .info-table td:first-child {
  color: #facc15;
  font-weight: 600;
}
.restaurante-landing .cta-whatsapp {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 1.5rem;
  border-radius: 9999px;
  background: rgba(34, 197, 94, 0.18);
  border: 1px solid rgba(34, 197, 94, 0.4);
  color: #bbf7d0;
  text-decoration: none;
  font-weight: 600;
}
</style>
<header>
  <div class="container">
    <nav>
      <div class="logo">
        <img src="https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=200&q=80" alt="Logotipo artesanal La Bendita Arepa" loading="lazy" />
        <div>
          <strong>La Bendita Arepa</strong>
          <span style="color: #f8fafc; font-size: 0.85rem;">Sabor casero en Chapinero</span>
        </div>
      </div>
      <div class="menu">
        <a href="#menu">Menú digital</a>
        <a href="#promos">Promociones</a>
        <a href="#galeria">Galería</a>
        <a href="#reseñas">Reseñas</a>
        <a href="#reserva">Reservas</a>
      </div>
    </nav>
    <div class="hero">
      <p class="tagline">Caso de uso · Restaurante</p>
      <h1>Menú actualizado, reservas confirmadas y ventas por WhatsApp en tiempo real</h1>
      <p>
        Así luce una landing estática construida para un restaurante de barrio que quiere vender sin depender de apps. Publicamos carta, combos,
        testimonios y mapa en un solo enlace rápido de compartir.
      </p>
      <a href="https://wa.me/573125559988" class="hero-cta" target="_blank" rel="noopener noreferrer">Reservar mesa ahora</a>
      <div class="stats">
        <div class="stat">
          <strong>4.8 ★</strong>
          <span>Valoración en Google con 320 reseñas verificadas</span>
        </div>
        <div class="stat">
          <strong>+1.200</strong>
          <span>Pedidos al mes gestionados vía landing + WhatsApp</span>
        </div>
        <div class="stat">
          <strong>12 h</strong>
          <span>Promedio de actualización del menú diario en Google Sheets</span>
        </div>
        <div class="stat">
          <strong>98%</strong>
          <span>Reservas confirmadas con respuesta automática</span>
        </div>
      </div>
    </div>
  </div>
</header>

<section id="highlight">
  <div class="container grid grid-cols-3">
    <div class="card">
      <h2>Bloques esenciales</h2>
      <ul class="checklist">
        <li>Hero con foto destacada, horarios y CTA doble: Reservar y Ver menú.</li>
        <li>Menú conectado a Google Sheets editable por el administrador.</li>
        <li>Sección de prueba social con reseñas y logos de apps de delivery.</li>
        <li>Mapa embebido, contactos y botones persistentes para WhatsApp.</li>
      </ul>
    </div>
    <div class="card" style="background: rgba(22, 163, 74, 0.12); border-color: rgba(34, 197, 94, 0.35);">
      <h2>Promociones en vivo</h2>
      <ul class="checklist">
        <li>Destacado semanal con combos de almuerzo y precio en tiempo real.</li>
        <li>Banner con código QR para fidelización y tarjetas prepago.</li>
        <li>Botón de "Pedir para llevar" con mensaje prellenado en WhatsApp.</li>
        <li>Bloque de catering empresarial con agenda de degustaciones.</li>
      </ul>
    </div>
    <div class="card">
      <h2>Datos de confianza</h2>
      <ul class="checklist">
        <li>Indicadores de reseñas y reconocimiento en Guía Bogotá Eats 2025.</li>
        <li>Clientes corporativos: Rappi Aliados, Colectivo Salvio, WeWork.</li>
        <li>Testimonios con cargos y fotos reales de comensales.</li>
        <li>FAQ sobre métodos de pago, parqueadero y catering.</li>
      </ul>
    </div>
  </div>
</section>

<section id="menu">
  <div class="container">
    <p class="tagline">Menú digital</p>
    <h2>Cartas dinámicas y secciones pensadas para vender en segundos</h2>
    <p style="max-width: 760px; color: #cbd5f5; margin-bottom: 2.2rem;">
      Este módulo se alimenta de Google Sheets: la administradora modifica platos, fotos y precios sin depender de soporte técnico. Los cambios se
      publican en menos de dos minutos gracias al despliegue estático.
    </p>
    <div class="menu-board">
      <div class="menu-item">
        <h3>Combo Ejecutivo</h3>
        <strong>$18.900</strong>
        <p>Pechuga al ajillo, arroz con coco, ensalada fresca y limonada natural.</p>
        <small>Disponible lunes a viernes · Incluye opción vegetariana.</small>
      </div>
      <div class="menu-item">
        <h3>Hamburguesa de la Casa</h3>
        <strong>$22.500</strong>
        <p>Pan artesano, carne angus, queso doble crema, tocineta crocante y papas criollas.</p>
        <small>Agrega cerveza artesanal +$8.000.</small>
      </div>
      <div class="menu-item">
        <h3>Bowl Vegetariano</h3>
        <strong>$19.800</strong>
        <p>Quinua, falafel, hummus, vegetales al grill y vinagreta de la casa.</p>
        <small>Sin gluten · Ingredientes locales certificados.</small>
      </div>
      <div class="menu-item">
        <h3>Arepa Bendita</h3>
        <strong>$12.500</strong>
        <p>Masa de maíz, queso costeño, guiso criollo y toque de aguacate hass.</p>
        <small>Combo con bebida natural por $16.500.</small>
      </div>
      <div class="menu-item">
        <h3>Limonada Cerezada</h3>
        <strong>$7.500</strong>
        <p>Bebida artesanal con limón mandarino, cereza natural y soda.</p>
        <small>Happy hour 2x1 de 4:00 p. m. a 6:00 p. m.</small>
      </div>
      <div class="menu-item">
        <h3>Postre de Panela</h3>
        <strong>$9.900</strong>
        <p>Cheesecake casero con crocante de panela y helado de vainilla artesanal.</p>
        <small>Incluye opción vegana con leche de coco.</small>
      </div>
    </div>
  </div>
</section>

<section id="promos">
  <div class="container grid grid-cols-2">
    <div class="card">
      <h2>Promociones activas</h2>
      <ul class="checklist">
        <li>Club Bendita: cada reserva se registra y acumula puntos para obtener postres gratis.</li>
        <li>Menú ejecutivo corporativo con facturación mensual y entrega en oficinas.</li>
        <li>Live ticker con platos agotados y reposiciones en tiempo real.</li>
        <li>Integración opcional con Rappi y Uber Eats para delivery express.</li>
      </ul>
      <a href="https://wa.me/573125559988?text=Hola,%20quiero%20información%20del%20Club%20Bendita" class="cta-whatsapp" target="_blank" rel="noopener noreferrer">Solicitar código promocional</a>
    </div>
    <div class="card">
      <h2>Eventos y catering</h2>
      <ul class="checklist">
        <li>Agenda editable con disponibilidad de salones privados y terrazas.</li>
        <li>Galería de montajes para desayunos corporativos, brunch y cenas temáticas.</li>
        <li>Formato descargable con propuestas de menú para 20, 40 o 80 personas.</li>
        <li>Botón de WhatsApp con mensaje prellenado para cotizar eventos.</li>
      </ul>
      <a href="https://wa.me/573004568712?text=Quiero%20cotizar%20un%20evento%20privado" class="cta-whatsapp" target="_blank" rel="noopener noreferrer">Cotizar evento privado</a>
    </div>
  </div>
</section>

<section id="galeria">
  <div class="container">
    <p class="tagline">Experiencia visual</p>
    <h2>Galería optimizada para móviles y escritorio</h2>
    <div class="gallery">
      <img src="https://images.unsplash.com/photo-1555992336-cbf3d61f4f14?auto=format&fit=crop&w=900&q=80" alt="Platos tradicionales del restaurante" loading="lazy" />
      <img src="https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=900&q=80" alt="Interior cálido del restaurante con comensales" loading="lazy" />
      <img src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80" alt="Chef preparando arepas artesanales" loading="lazy" />
    </div>
  </div>
</section>

<section id="reseñas">
  <div class="container">
    <p class="tagline">Lo que dicen nuestros clientes</p>
    <h2>Testimonios reales y métricas verificadas</h2>
    <p style="color: #cbd5f5; max-width: 760px; margin-bottom: 2rem;">
      Las reseñas se sincronizan con Google Maps y TripAdvisor una vez al día. La landing muestra citas cortas y métricas clave para reforzar la confianza de nuevos visitantes.
    </p>
    <div class="testimonials">
      <div class="testimonial">
        “Reservamos todos los almuerzos corporativos con La Bendita Arepa. Responden rápido y el menú cambia cada semana.”
        <span>Catalina Gómez · Office Manager · Rating 4.9/5</span>
      </div>
      <div class="testimonial">
        “El botón de pedidos nos permite preparar domicilios sin filas en la tienda. La landing avisa cuando un plato se agota.”
        <span>Juan Ruiz · Administrador de turnos</span>
      </div>
      <div class="testimonial">
        “La sección de eventos nos ayudó a vender catering para cumpleaños y despedidas. Todo queda en un solo enlace fácil de compartir.”
        <span>Valeria Pérez · Chef propietaria</span>
      </div>
    </div>
    <div class="medios">
      <span>Guía Bogotá Eats</span>
      <span>Canal 13</span>
      <span>Rappi Aliados</span>
      <span>El Gourmet</span>
    </div>
  </div>
</section>

<section id="reserva">
  <div class="container info-grid">
    <div>
      <p class="tagline">Reservas en un clic</p>
      <h2>Formularios conectados a Google Sheets y confirmación automática</h2>
      <p style="color: #cbd5f5; margin-bottom: 1.5rem;">
        El formulario envia notificación a WhatsApp Business, correo y actualiza una hoja de cálculo compartida. También activa un recordatorio
        automático dos horas antes de la reserva.
      </p>
      <table class="info-table">
        <tr>
          <td>Horario</td>
          <td>Lun - Sáb: 11:30 a. m. - 10:30 p. m. · Dom: 11:00 a. m. - 6:00 p. m.</td>
        </tr>
        <tr>
          <td>Dirección</td>
          <td>Cl. 63 #9-45, Chapinero · Bogotá D.C.</td>
        </tr>
        <tr>
          <td>Contacto</td>
          <td>WhatsApp: +57 312 555 9988 · Tel: (601) 456 8712</td>
        </tr>
        <tr>
          <td>Pagos</td>
          <td>Efectivo, tarjetas, Nequi, Daviplata, datáfono inalámbrico.</td>
        </tr>
        <tr>
          <td>Parqueadero</td>
          <td>Aliado con Parqueadero 63: descuento del 30% presentando reserva.</td>
        </tr>
      </table>
      <div style="margin-top: 2rem;">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.765930478146!2d-74.06227832503488!3d4.642579342115068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a5b57fbc4d7%3A0x7abcb878c8bdc0f0!2sCarrera%2011%20%2363-45%2C%20Bogot%C3%A1!5e0!3m2!1ses-419!2sco!4v1733352000000"
          loading="lazy"
          allowfullscreen
          title="Mapa del restaurante"
        ></iframe>
      </div>
    </div>
    <div class="contact-card">
      <form>
        <label for="nombre">Nombre completo</label>
        <input id="nombre" name="nombre" type="text" placeholder="Andrea Martínez" />

        <label for="personas">Cantidad de personas</label>
        <select id="personas" name="personas">
          <option>2 personas</option>
          <option>3 personas</option>
          <option>4 personas</option>
          <option>5-6 personas</option>
          <option>7+ personas</option>
        </select>

        <label for="fecha">Fecha de la reserva</label>
        <input id="fecha" name="fecha" type="date" />

        <label for="hora">Hora</label>
        <input id="hora" name="hora" type="time" />

        <label for="notas">Notas especiales</label>
        <textarea id="notas" name="notas" placeholder="Alergias, celebración especial, solicitudes..."></textarea>

        <button type="submit">Confirmar reserva</button>
      </form>
      <p style="font-size: 0.8rem; color: #94a3b8; margin-top: 1rem;">
        Después de enviar, recibirás un mensaje automático en WhatsApp con el resumen y un enlace para modificar tu reserva.
      </p>
    </div>
  </div>
</section>

<footer>
  <div class="container">
    <p>
      Este es un ejemplo funcional creado por TuLandingYa para restaurantes que necesitan una landing estática, editable y conectada con sus canales de atención.
      <br />
      <a href="/">Volver al sitio principal</a>
    </p>
  </div>
</footer>
`;function D(){return(0,_.jsx)(b,{title:`Landing de ejemplo · Restaurante de barrio`,description:`Usa este layout como referencia de cómo presentamos menús, promociones y reservas integradas en un solo sprint estático.`,accent:`amber`,children:(0,_.jsx)(`div`,{className:`restaurante-landing`,dangerouslySetInnerHTML:{__html:E}})})}var ne=D,O=`
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
`;function re(){return(0,_.jsxs)(b,{title:`Agencia de Marketing Digital`,description:`Transformamos tu negocio con estrategias digitales que generan resultados medibles`,accent:`fuchsia`,children:[(0,_.jsx)(`style`,{children:O}),(0,_.jsxs)(`div`,{className:`agencia-marketing`,children:[(0,_.jsx)(`section`,{className:`bg-gradient-to-b from-slate-900/50 to-slate-950/80`,children:(0,_.jsx)(`div`,{className:`container`,children:(0,_.jsxs)(`div`,{className:`hero`,children:[(0,_.jsx)(`h1`,{children:`Crece tu Negocio Digitalmente`}),(0,_.jsx)(`p`,{children:`Somos una agencia de marketing digital especializada en potenciar marcas en redes sociales, publicidad pagada y posicionamiento SEO. Trabajamos con empresas que quieren crecer sin límites.`}),(0,_.jsx)(`a`,{href:`https://wa.me/573001234567?text=Hola,%20quiero%20saber%20más%20sobre%20tus%20servicios`,className:`hero-cta`,children:`Solicitar consultoría`}),(0,_.jsxs)(`div`,{className:`stats`,children:[(0,_.jsxs)(`div`,{className:`stat`,children:[(0,_.jsx)(`strong`,{children:`150+`}),(0,_.jsx)(`p`,{children:`Clientes Activos`})]}),(0,_.jsxs)(`div`,{className:`stat`,children:[(0,_.jsx)(`strong`,{children:`2.5M`}),(0,_.jsx)(`p`,{children:`Alcance Mensual`})]}),(0,_.jsxs)(`div`,{className:`stat`,children:[(0,_.jsx)(`strong`,{children:`340%`}),(0,_.jsx)(`p`,{children:`ROI Promedio`})]}),(0,_.jsxs)(`div`,{className:`stat`,children:[(0,_.jsx)(`strong`,{children:`8 años`}),(0,_.jsx)(`p`,{children:`Experiencia`})]})]})]})})}),(0,_.jsx)(`section`,{children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsx)(`h2`,{style:{textAlign:`center`,marginBottom:`1rem`},children:`Servicios Principales`}),(0,_.jsx)(`p`,{style:{textAlign:`center`,marginBottom:`2rem`,color:`#cbd5f5`},children:`Ofrecemos soluciones integrales para potenciar tu presencia digital`}),(0,_.jsxs)(`div`,{className:`services-grid`,children:[(0,_.jsxs)(`div`,{className:`service-card`,children:[(0,_.jsx)(`h3`,{children:`Social Media`}),(0,_.jsx)(`strong`,{children:`Gestión de Redes Sociales`}),(0,_.jsx)(`p`,{children:`Creación de contenido, community management y estrategia integral en Instagram, TikTok y Facebook`}),(0,_.jsx)(`small`,{children:`✓ 3 redes incluidas • ✓ Reportes semanales`})]}),(0,_.jsxs)(`div`,{className:`service-card`,children:[(0,_.jsx)(`h3`,{children:`Google Ads`}),(0,_.jsx)(`strong`,{children:`Publicidad Pagada`}),(0,_.jsx)(`p`,{children:`Campañas de Google Ads y Facebook optimizadas para generar leads de calidad y conversiones`}),(0,_.jsx)(`small`,{children:`✓ Setup + 3 meses • ✓ Optimización diaria`})]}),(0,_.jsxs)(`div`,{className:`service-card`,children:[(0,_.jsx)(`h3`,{children:`SEO`}),(0,_.jsx)(`strong`,{children:`Posicionamiento en Buscadores`}),(0,_.jsx)(`p`,{children:`Estrategia SEO integral para posicionar tu sitio en primeros lugares de Google`}),(0,_.jsx)(`small`,{children:`✓ Análisis técnico • ✓ Linkbuilding`})]})]})]})}),(0,_.jsx)(`section`,{style:{background:`rgba(139, 92, 246, 0.05)`},children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsx)(`h2`,{style:{textAlign:`center`,marginBottom:`1rem`},children:`Nuestro Proceso`}),(0,_.jsx)(`p`,{style:{textAlign:`center`,marginBottom:`2rem`,color:`#cbd5f5`},children:`Metodología probada en cientos de campañas exitosas`}),(0,_.jsxs)(`div`,{className:`process-steps`,children:[(0,_.jsxs)(`div`,{className:`process-step`,children:[(0,_.jsx)(`strong`,{children:`1. Diagnóstico`}),(0,_.jsx)(`p`,{style:{marginTop:`0.75rem`,fontSize:`0.9rem`,color:`#cbd5f5`},children:`Análisis profundo de tu negocio, competencia y oportunidades en el mercado`})]}),(0,_.jsxs)(`div`,{className:`process-step`,children:[(0,_.jsx)(`strong`,{children:`2. Estrategia`}),(0,_.jsx)(`p`,{style:{marginTop:`0.75rem`,fontSize:`0.9rem`,color:`#cbd5f5`},children:`Diseño de plan personalizado con objetivos, canales y KPIs claros`})]}),(0,_.jsxs)(`div`,{className:`process-step`,children:[(0,_.jsx)(`strong`,{children:`3. Ejecución`}),(0,_.jsx)(`p`,{style:{marginTop:`0.75rem`,fontSize:`0.9rem`,color:`#cbd5f5`},children:`Implementación profesional con creativos de alto impacto`})]}),(0,_.jsxs)(`div`,{className:`process-step`,children:[(0,_.jsx)(`strong`,{children:`4. Optimización`}),(0,_.jsx)(`p`,{style:{marginTop:`0.75rem`,fontSize:`0.9rem`,color:`#cbd5f5`},children:`Monitoreo continuo y ajustes para maximizar resultados`})]})]})]})}),(0,_.jsx)(`section`,{children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsx)(`h2`,{style:{textAlign:`center`,marginBottom:`1rem`},children:`Portfolio de Casos`}),(0,_.jsx)(`p`,{style:{textAlign:`center`,marginBottom:`2rem`,color:`#cbd5f5`},children:`Algunos de nuestros proyectos más exitosos`}),(0,_.jsxs)(`div`,{className:`portfolio-grid`,children:[(0,_.jsx)(`div`,{className:`portfolio-item`,children:`Ecommerce Deportivo`}),(0,_.jsx)(`div`,{className:`portfolio-item`,children:`Startup SaaS`}),(0,_.jsx)(`div`,{className:`portfolio-item`,children:`Agencia Inmobiliaria`})]})]})}),(0,_.jsx)(`section`,{children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsx)(`h2`,{style:{textAlign:`center`,marginBottom:`1rem`},children:`Lo Dicen Nuestros Clientes`}),(0,_.jsx)(`p`,{style:{textAlign:`center`,marginBottom:`2rem`,color:`#cbd5f5`},children:`Historias reales de negocios que crecieron con nosotros`}),(0,_.jsxs)(`div`,{className:`testimonials`,children:[(0,_.jsxs)(`div`,{className:`testimonial`,children:[(0,_.jsx)(`p`,{children:`"Aumentamos nuestras ventas en un 280% en 6 meses. Profesionales al máximo."`}),(0,_.jsx)(`span`,{children:`Carlos Mendoza - Ecommerce Deportivo`})]}),(0,_.jsxs)(`div`,{className:`testimonial`,children:[(0,_.jsx)(`p`,{children:`"El mejor equipo con el que hemos trabajado. Recomendados 100%"`}),(0,_.jsx)(`span`,{children:`Sofía Rodríguez - Startup Tech`})]}),(0,_.jsxs)(`div`,{className:`testimonial`,children:[(0,_.jsx)(`p`,{children:`"Excelente ROI. Cada peso invertido retorna multiplicado."`}),(0,_.jsx)(`span`,{children:`Juan Pablo Torres - Inmobiliaria`})]})]})]})}),(0,_.jsx)(`section`,{style:{background:`rgba(139, 92, 246, 0.05)`},children:(0,_.jsxs)(`div`,{className:`container`,children:[(0,_.jsx)(`h2`,{style:{textAlign:`center`,marginBottom:`2rem`},children:`Paquetes de Inversión`}),(0,_.jsxs)(`div`,{className:`grid grid-cols-1 md:grid-cols-3 gap-6`,children:[(0,_.jsxs)(`div`,{className:`card`,children:[(0,_.jsx)(`h3`,{style:{color:`#a78bfa`,marginBottom:`1rem`},children:`Starter`}),(0,_.jsx)(`p`,{style:{fontSize:`0.9rem`,marginBottom:`1rem`},children:`Para pequeños negocios que inician`}),(0,_.jsx)(`strong`,{style:{fontSize:`1.8rem`,color:`#a78bfa`},children:`$1,200/mes`}),(0,_.jsxs)(`ul`,{className:`checklist`,style:{marginTop:`1.5rem`},children:[(0,_.jsx)(`li`,{children:`1 red social gestionada`}),(0,_.jsx)(`li`,{children:`8 posts semanales`}),(0,_.jsx)(`li`,{children:`Reporte mensual`}),(0,_.jsx)(`li`,{children:`Soporte por email`})]})]}),(0,_.jsxs)(`div`,{className:`card`,style:{border:`2px solid #a78bfa`},children:[(0,_.jsx)(`h3`,{style:{color:`#a78bfa`,marginBottom:`1rem`},children:`Professional`}),(0,_.jsx)(`p`,{style:{fontSize:`0.9rem`,marginBottom:`1rem`},children:`Más popular - Lo recomendamos`}),(0,_.jsx)(`strong`,{style:{fontSize:`1.8rem`,color:`#a78bfa`},children:`$2,500/mes`}),(0,_.jsxs)(`ul`,{className:`checklist`,style:{marginTop:`1.5rem`},children:[(0,_.jsx)(`li`,{children:`3 redes sociales`}),(0,_.jsx)(`li`,{children:`16 posts semanales`}),(0,_.jsx)(`li`,{children:`1 campaña Google Ads`}),(0,_.jsx)(`li`,{children:`Reportes semanales`}),(0,_.jsx)(`li`,{children:`Soporte prioritario`})]})]}),(0,_.jsxs)(`div`,{className:`card`,children:[(0,_.jsx)(`h3`,{style:{color:`#a78bfa`,marginBottom:`1rem`},children:`Enterprise`}),(0,_.jsx)(`p`,{style:{fontSize:`0.9rem`,marginBottom:`1rem`},children:`Solución completa personalizada`}),(0,_.jsx)(`strong`,{style:{fontSize:`1.8rem`,color:`#a78bfa`},children:`Personalizado`}),(0,_.jsxs)(`ul`,{className:`checklist`,style:{marginTop:`1.5rem`},children:[(0,_.jsx)(`li`,{children:`Estrategia completa`}),(0,_.jsx)(`li`,{children:`Múltiples canales`}),(0,_.jsx)(`li`,{children:`SEO + Ads + Social`}),(0,_.jsx)(`li`,{children:`Equipo dedicado`}),(0,_.jsx)(`li`,{children:`Soporte 24/7`})]})]})]})]})}),(0,_.jsx)(`section`,{children:(0,_.jsx)(`div`,{className:`container`,children:(0,_.jsxs)(`div`,{style:{maxWidth:`600px`,margin:`0 auto`},children:[(0,_.jsx)(`h2`,{style:{textAlign:`center`,marginBottom:`0.5rem`},children:`Comienza Tu Transformación Digital`}),(0,_.jsx)(`p`,{style:{textAlign:`center`,marginBottom:`2rem`,color:`#cbd5f5`},children:`Agendar una consulta gratuita de 30 minutos`}),(0,_.jsx)(`div`,{className:`contact-card`,children:(0,_.jsxs)(`form`,{style:{display:`flex`,flexDirection:`column`,gap:`1rem`},children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`label`,{children:`Nombre Completo`}),(0,_.jsx)(`input`,{type:`text`,placeholder:`Tu nombre`,required:!0})]}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`label`,{children:`Email Empresarial`}),(0,_.jsx)(`input`,{type:`email`,placeholder:`tu@empresa.com`,required:!0})]}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`label`,{children:`Teléfono`}),(0,_.jsx)(`input`,{type:`tel`,placeholder:`+57 300 1234567`})]}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`label`,{children:`Tipo de Negocio`}),(0,_.jsxs)(`select`,{required:!0,children:[(0,_.jsx)(`option`,{value:``,children:`Selecciona una opción`}),(0,_.jsx)(`option`,{value:`ecommerce`,children:`Ecommerce`}),(0,_.jsx)(`option`,{value:`servicios`,children:`Servicios`}),(0,_.jsx)(`option`,{value:`saas`,children:`SaaS`}),(0,_.jsx)(`option`,{value:`otro`,children:`Otro`})]})]}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`label`,{children:`Mensaje`}),(0,_.jsx)(`textarea`,{placeholder:`Cuéntanos sobre tu objetivo...`})]}),(0,_.jsx)(`button`,{type:`submit`,children:`Agendar Consulta Gratis`})]})})]})})}),(0,_.jsxs)(`footer`,{children:[(0,_.jsx)(`p`,{children:`© 2024 Agencia Digital Pro. Todos los derechos reservados.`}),(0,_.jsxs)(`p`,{children:[`Síguenos en`,(0,_.jsx)(`a`,{href:`#`,style:{marginLeft:`0.5rem`},children:`Instagram`}),` • `,(0,_.jsx)(`a`,{href:`#`,style:{marginLeft:`0.5rem`},children:`LinkedIn`}),` • `,(0,_.jsx)(`a`,{href:`#`,style:{marginLeft:`0.5rem`},children:`TikTok`})]})]})]})]})}var k=`
.funnel-ventas {
  color-scheme: dark;
  margin: 0;
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: #0f172a;
  color: #e2e8f0;
  line-height: 1.6;
}
.funnel-ventas a {
  color: inherit;
}
.funnel-ventas img {
  max-width: 100%;
  display: block;
}
.funnel-ventas .hero-section {
  position: relative;
  padding: 2rem 1.2rem;
  background: linear-gradient(180deg, rgba(16, 185, 129, 0.15) 0%, rgba(15, 23, 42, 0.95) 80%),
    url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80') center/cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (min-width: 768px) {
  .funnel-ventas .hero-section {
    padding: 3rem 1.5rem;
  }
}
.funnel-ventas .hero-section::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(15, 23, 42, 0) 0%, rgba(15, 23, 42, 0.9) 100%);
  z-index: 0;
}
.funnel-ventas .hero-content {
  position: relative;
  z-index: 1;
  max-width: 700px;
  text-align: center;
  margin: 0 auto;
}
.funnel-ventas .hero-content h1 {
  font-size: clamp(2rem, 6vw, 3.5rem);
  margin-bottom: 1.2rem;
  color: #f8fafc;
  font-weight: 700;
}
.funnel-ventas .hero-content .subheading {
  font-size: 1.2rem;
  color: #10b981;
  margin-bottom: 1.5rem;
  font-weight: 600;
}
.funnel-ventas .hero-content p {
  font-size: 1.05rem;
  color: #cbd5f5;
  margin-bottom: 2rem;
  line-height: 1.7;
}
.funnel-ventas .hero-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2.5rem;
  border-radius: 9999px;
  font-weight: 700;
  text-decoration: none;
  background: linear-gradient(135deg, #10b981, #059669);
  color: #f8fafc;
  box-shadow: 0 25px 50px rgba(16, 185, 129, 0.3);
  font-size: 1.05rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}
.funnel-ventas .hero-cta:hover {
  transform: scale(1.05);
  box-shadow: 0 30px 60px rgba(16, 185, 129, 0.4);
}
.funnel-ventas .secondary-cta {
  display: inline-block;
  margin-top: 1rem;
  color: #10b981;
  text-decoration: underline;
  font-weight: 600;
  transition: color 0.3s ease;
}
.funnel-ventas .secondary-cta:hover {
  color: #059669;
}
.funnel-ventas section {
  padding: 3rem 1.2rem;
}
@media (min-width: 768px) {
  .funnel-ventas section {
    padding: 4rem 1.5rem;
  }
}
.funnel-ventas .section-container {
  max-width: 1000px;
  margin: 0 auto;
}
.funnel-ventas h2 {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  margin-bottom: 1.5rem;
  color: #f8fafc;
  font-weight: 700;
}
.funnel-ventas .two-column {
  display: grid;
  gap: 2rem;
}
@media (min-width: 960px) {
  .funnel-ventas .two-column {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
}
.funnel-ventas .benefit-item {
  display: flex;
  gap: 1.2rem;
  margin-bottom: 1.5rem;
}
.funnel-ventas .benefit-icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(16, 185, 129, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #10b981;
  font-size: 1.3rem;
  margin-top: 0.2rem;
}
.funnel-ventas .benefit-text h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #f8fafc;
  margin: 0 0 0.4rem 0;
}
.funnel-ventas .benefit-text p {
  margin: 0;
  color: #cbd5f5;
  font-size: 0.95rem;
}
.funnel-ventas .testimonial-box {
  background: rgba(16, 185, 129, 0.1);
  border: 2px solid rgba(16, 185, 129, 0.3);
  border-radius: 1.5rem;
  padding: 2rem;
  margin: 2rem 0;
}
.funnel-ventas .testimonial-box p {
  font-size: 1.05rem;
  color: #cbd5f5;
  margin: 0 0 1rem 0;
  font-style: italic;
  line-height: 1.8;
}
.funnel-ventas .testimonial-author {
  color: #10b981;
  font-weight: 600;
  margin: 0;
}
.funnel-ventas .price-highlight {
  background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(16, 185, 129, 0.05));
  border: 2px solid rgba(16, 185, 129, 0.3);
  border-radius: 1.5rem;
  padding: 2rem;
  text-align: center;
  margin: 2rem 0;
}
.funnel-ventas .price-highlight strong {
  display: block;
  font-size: 0.9rem;
  color: #10b981;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.funnel-ventas .price-highlight .amount {
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: #10b981;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.funnel-ventas .price-highlight p {
  margin: 0;
  color: #cbd5f5;
  font-size: 0.95rem;
}
.funnel-ventas .objection-section {
  background: rgba(15, 23, 42, 0.8);
  border-radius: 1.5rem;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 4px solid #10b981;
}
.funnel-ventas .objection-section h3 {
  color: #10b981;
  margin-top: 0;
  font-size: 1.1rem;
}
.funnel-ventas .objection-section p {
  margin: 0;
  color: #cbd5f5;
}
.funnel-ventas .guarantee-box {
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(16, 185, 129, 0.1));
  border: 2px solid rgba(34, 197, 94, 0.3);
  border-radius: 1.5rem;
  padding: 2rem;
  text-align: center;
  margin: 2rem 0;
}
.funnel-ventas .guarantee-box h3 {
  color: #22c55e;
  margin-top: 0;
  font-size: 1.3rem;
  margin-bottom: 1rem;
}
.funnel-ventas .guarantee-box p {
  margin: 0.5rem 0;
  color: #cbd5f5;
}
.funnel-ventas .final-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.2rem 3rem;
  border-radius: 9999px;
  font-weight: 700;
  text-decoration: none;
  background: linear-gradient(135deg, #10b981, #059669);
  color: #f8fafc;
  box-shadow: 0 25px 50px rgba(16, 185, 129, 0.4);
  font-size: 1.1rem;
  transition: all 0.3s ease;
  width: 100%;
  border: 2px solid transparent;
  margin-top: 2rem;
}
@media (min-width: 768px) {
  .funnel-ventas .final-cta {
    width: auto;
  }
}
.funnel-ventas .final-cta:hover {
  transform: scale(1.05);
  box-shadow: 0 30px 60px rgba(16, 185, 129, 0.5);
}
.funnel-ventas .cta-text {
  display: block;
  text-align: center;
  color: #94a3b8;
  margin-top: 1.5rem;
  font-size: 0.9rem;
}
.funnel-ventas .risk-free {
  text-align: center;
  color: #10b981;
  font-weight: 600;
  margin-top: 1rem;
}
.funnel-ventas .timer {
  background: linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(239, 68, 68, 0.1));
  border: 2px solid rgba(239, 68, 68, 0.4);
  border-radius: 1rem;
  padding: 1rem;
  text-align: center;
  margin: 1.5rem 0;
  color: #ef4444;
  font-weight: 700;
}
.funnel-ventas footer {
  padding: 2rem 1.2rem;
  text-align: center;
  color: #64748b;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}
`;function ie(){return(0,_.jsxs)(b,{title:`Funnel de Ventas - Curso Online`,description:`Ejemplo de estructura de funnel diseñado para convertir visitantes en clientes`,accent:`emerald`,children:[(0,_.jsx)(`style`,{children:k}),(0,_.jsxs)(`div`,{className:`funnel-ventas`,children:[(0,_.jsx)(`section`,{className:`hero-section`,children:(0,_.jsxs)(`div`,{className:`hero-content`,children:[(0,_.jsx)(`span`,{className:`subheading`,children:`⏰ Oferta limitada - Finaliza en 24 horas`}),(0,_.jsx)(`h1`,{children:`Aprende a Ganar Dinero Creando Contenido en Redes Sociales`}),(0,_.jsx)(`p`,{children:`Descubre el sistema que miles de creators usan para generar $3,000 - $10,000 USD mensuales trabajando desde cualquier lugar`}),(0,_.jsx)(`a`,{href:`#formulario`,className:`hero-cta`,children:`Sí, quiero aprender ahora`}),(0,_.jsxs)(`div`,{style:{marginTop:`1.5rem`,color:`#10b981`},children:[`✓ Sin experiencia previa`,(0,_.jsx)(`br`,{}),`✓ Resultados en 30 días`,(0,_.jsx)(`br`,{}),`✓ Acceso de por vida`]})]})}),(0,_.jsx)(`section`,{style:{background:`rgba(15, 23, 42, 0.8)`},children:(0,_.jsxs)(`div`,{className:`section-container`,children:[(0,_.jsx)(`h2`,{style:{textAlign:`center`,marginBottom:`2rem`},children:`¿Te suena familiar?`}),(0,_.jsxs)(`div`,{className:`two-column`,children:[(0,_.jsxs)(`div`,{children:[(0,_.jsxs)(`div`,{className:`benefit-item`,children:[(0,_.jsx)(`div`,{className:`benefit-icon`,children:`❌`}),(0,_.jsxs)(`div`,{className:`benefit-text`,children:[(0,_.jsx)(`h3`,{children:`No sabes cómo empezar`}),(0,_.jsx)(`p`,{children:`Ves a otros creators ganando pero no sabes por dónde comenzar`})]})]}),(0,_.jsxs)(`div`,{className:`benefit-item`,children:[(0,_.jsx)(`div`,{className:`benefit-icon`,children:`❌`}),(0,_.jsxs)(`div`,{className:`benefit-text`,children:[(0,_.jsx)(`h3`,{children:`Creas contenido pero no ganas dinero`}),(0,_.jsx)(`p`,{children:`Publicas constantemente pero tus seguidores no se convierten en clientes`})]})]}),(0,_.jsxs)(`div`,{className:`benefit-item`,children:[(0,_.jsx)(`div`,{className:`benefit-icon`,children:`❌`}),(0,_.jsxs)(`div`,{className:`benefit-text`,children:[(0,_.jsx)(`h3`,{children:`Los algoritmos te ignoran`}),(0,_.jsx)(`p`,{children:`No entiendes por qué algunos videos explotan y otros no`})]})]})]}),(0,_.jsxs)(`div`,{children:[(0,_.jsxs)(`div`,{className:`benefit-item`,children:[(0,_.jsx)(`div`,{className:`benefit-icon`,children:`❌`}),(0,_.jsxs)(`div`,{className:`benefit-text`,children:[(0,_.jsx)(`h3`,{children:`Te sientes abrumado`}),(0,_.jsx)(`p`,{children:`Tanto contenido y tanta información que no sabes qué hacer`})]})]}),(0,_.jsxs)(`div`,{className:`benefit-item`,children:[(0,_.jsx)(`div`,{className:`benefit-icon`,children:`❌`}),(0,_.jsxs)(`div`,{className:`benefit-text`,children:[(0,_.jsx)(`h3`,{children:`Inviertes tiempo pero sin retorno`}),(0,_.jsx)(`p`,{children:`Dedicas horas al día pero no ves resultados económicos reales`})]})]}),(0,_.jsxs)(`div`,{className:`benefit-item`,children:[(0,_.jsx)(`div`,{className:`benefit-icon`,children:`❌`}),(0,_.jsxs)(`div`,{className:`benefit-text`,children:[(0,_.jsx)(`h3`,{children:`Necesitas ingresos ahora`}),(0,_.jsx)(`p`,{children:`Quieres un negocio escalable que genere dinero sin invertir mucho`})]})]})]})]})]})}),(0,_.jsx)(`section`,{children:(0,_.jsxs)(`div`,{className:`section-container`,children:[(0,_.jsx)(`h2`,{style:{textAlign:`center`,marginBottom:`2rem`},children:`La solución ya existe`}),(0,_.jsx)(`p`,{style:{textAlign:`center`,marginBottom:`2rem`,fontSize:`1.1rem`,color:`#cbd5f5`},children:`Existe un sistema probado que hemos perfeccionado durante 2 años trabajando con más de 500 creators exitosos.`}),(0,_.jsxs)(`div`,{className:`testimonial-box`,children:[(0,_.jsx)(`p`,{children:`"Hace 6 meses no tenía ni 100 seguidores. Seguí el sistema exactamente como está en el curso y ahora genero $5,000 mensuales en mi tiempo libre. Nunca creí que fuera posible."`}),(0,_.jsx)(`p`,{className:`testimonial-author`,children:`— María García, Microinfluencer`})]}),(0,_.jsx)(`h2`,{style:{marginTop:`2rem`,marginBottom:`1.5rem`},children:`Lo que aprenderás:`}),(0,_.jsxs)(`div`,{className:`two-column`,children:[(0,_.jsxs)(`div`,{children:[(0,_.jsxs)(`div`,{className:`benefit-item`,children:[(0,_.jsx)(`div`,{className:`benefit-icon`,children:`📱`}),(0,_.jsxs)(`div`,{className:`benefit-text`,children:[(0,_.jsx)(`h3`,{children:`Fórmula de Contenido Viral`}),(0,_.jsx)(`p`,{children:`El patrón exacto que usan los creadores de 1M+ seguidores (funciona en TikTok, Reels, Shorts)`})]})]}),(0,_.jsxs)(`div`,{className:`benefit-item`,children:[(0,_.jsx)(`div`,{className:`benefit-icon`,children:`💰`}),(0,_.jsxs)(`div`,{className:`benefit-text`,children:[(0,_.jsx)(`h3`,{children:`5 Formas de Monetizar`}),(0,_.jsx)(`p`,{children:`Elige la que mejor se adapte a ti: Afiliados, Productos Digitales, Servicios, Coaching, Ads`})]})]}),(0,_.jsxs)(`div`,{className:`benefit-item`,children:[(0,_.jsx)(`div`,{className:`benefit-icon`,children:`🎯`}),(0,_.jsxs)(`div`,{className:`benefit-text`,children:[(0,_.jsx)(`h3`,{children:`Estrategia de Nicho`}),(0,_.jsx)(`p`,{children:`Cómo elegir tu nicho perfecto y dominar la competencia (sin ser un experto)`})]})]})]}),(0,_.jsxs)(`div`,{children:[(0,_.jsxs)(`div`,{className:`benefit-item`,children:[(0,_.jsx)(`div`,{className:`benefit-icon`,children:`📊`}),(0,_.jsxs)(`div`,{className:`benefit-text`,children:[(0,_.jsx)(`h3`,{children:`Sistema de Análisis`}),(0,_.jsx)(`p`,{children:`Los datos que debes revisar cada semana para optimizar tus videos`})]})]}),(0,_.jsxs)(`div`,{className:`benefit-item`,children:[(0,_.jsx)(`div`,{className:`benefit-icon`,children:`🔐`}),(0,_.jsxs)(`div`,{className:`benefit-text`,children:[(0,_.jsx)(`h3`,{children:`Scripts y Plantillas`}),(0,_.jsx)(`p`,{children:`20+ plantillas de scripts listos para grabar y publicar (copia y pega)`})]})]}),(0,_.jsxs)(`div`,{className:`benefit-item`,children:[(0,_.jsx)(`div`,{className:`benefit-icon`,children:`🚀`}),(0,_.jsxs)(`div`,{className:`benefit-text`,children:[(0,_.jsx)(`h3`,{children:`Plan de Acción 30 Días`}),(0,_.jsx)(`p`,{children:`Día a día qué hacer, qué crear y cómo monetizar desde el primer mes`})]})]})]})]})]})}),(0,_.jsx)(`section`,{style:{background:`rgba(15, 23, 42, 0.8)`},children:(0,_.jsxs)(`div`,{className:`section-container`,children:[(0,_.jsx)(`h2`,{style:{textAlign:`center`,marginBottom:`2rem`},children:`Resultados reales de nuestros estudiantes`}),(0,_.jsxs)(`div`,{className:`two-column`,style:{marginTop:`2rem`},children:[(0,_.jsxs)(`div`,{className:`testimonial-box`,children:[(0,_.jsx)(`p`,{children:`"Los scripts del curso me ahorraron meses de prueba y error. Implementé el sistema en 2 semanas y ya tengo 15,000 seguidores. La venta de mi primer producto digital fue el mes siguiente."`}),(0,_.jsx)(`p`,{className:`testimonial-author`,children:`— David López, Copywriter`})]}),(0,_.jsxs)(`div`,{className:`testimonial-box`,children:[(0,_.jsx)(`p`,{children:`"Creía que necesitaba ser famosa para ganar dinero. Resulta que NO. El sistema funciona incluso con 500 seguidores reales. Hice $2,300 en mi primer mes."`}),(0,_.jsx)(`p`,{className:`testimonial-author`,children:`— Sofía Martínez, Emprendedora`})]})]}),(0,_.jsx)(`div`,{style:{marginTop:`2rem`},children:(0,_.jsxs)(`div`,{className:`testimonial-box`,children:[(0,_.jsx)(`p`,{children:`"Lo que más me gustó fue el plan de 30 días. Es tan específico que solo necesita saber QUÉ hacer, no necesito pensar en la estrategia. En 45 días generé mis primeros $800 dólares."`}),(0,_.jsx)(`p`,{className:`testimonial-author`,children:`— Carlos Ruiz, Estudiante de Ingeniería`})]})})]})}),(0,_.jsx)(`section`,{children:(0,_.jsxs)(`div`,{className:`section-container`,children:[(0,_.jsx)(`h2`,{style:{textAlign:`center`,marginBottom:`2rem`},children:`¿Tienes dudas?`}),(0,_.jsxs)(`div`,{className:`objection-section`,children:[(0,_.jsx)(`h3`,{children:`¿Necesito experiencia previa?`}),(0,_.jsx)(`p`,{children:`No. El 40% de nuestros estudiantes nunca habían subido un video. El sistema funciona incluso si estás empezando de cero.`})]}),(0,_.jsxs)(`div`,{className:`objection-section`,children:[(0,_.jsx)(`h3`,{children:`¿Funciona en todas las plataformas?`}),(0,_.jsx)(`p`,{children:`Sí. Los principios funcionan en TikTok, Instagram Reels, YouTube Shorts, Pinterest y Facebook. Te mostramos estrategias específicas para cada una.`})]}),(0,_.jsxs)(`div`,{className:`objection-section`,children:[(0,_.jsx)(`h3`,{children:`¿Cuánto tiempo necesito invertir?`}),(0,_.jsx)(`p`,{children:`Mínimo 1 hora diaria. La mayoría de estudiantes invierte 2-3 horas grabando contenido y dejando que el sistema trabaje el resto del día.`})]}),(0,_.jsxs)(`div`,{className:`objection-section`,children:[(0,_.jsx)(`h3`,{children:`¿Y si no me funciona?`}),(0,_.jsx)(`p`,{children:`Tenemos garantía de 60 días. Si no ves progreso en tu primer mes, reembolsamos tu dinero. Sin preguntas. Sin justificaciones.`})]})]})}),(0,_.jsx)(`section`,{style:{background:`rgba(16, 185, 129, 0.05)`},children:(0,_.jsxs)(`div`,{className:`section-container`,style:{maxWidth:`600px`},children:[(0,_.jsx)(`h2`,{style:{textAlign:`center`,marginBottom:`1rem`},children:`Oportunidad limitada`}),(0,_.jsx)(`p`,{style:{textAlign:`center`,marginBottom:`2rem`,color:`#cbd5f5`},children:`Solo abrimos el curso cada 6 meses y solo tenemos 50 spots disponibles por cohorte.`}),(0,_.jsxs)(`div`,{className:`timer`,children:[`⏱️ OFERTA ESPECIAL DE LANZAMIENTO`,(0,_.jsx)(`br`,{}),`Acaba en: 24 horas`]}),(0,_.jsxs)(`div`,{className:`price-highlight`,children:[(0,_.jsx)(`strong`,{children:`Precio normal`}),(0,_.jsx)(`p`,{style:{textDecoration:`line-through`,marginBottom:`1rem`,color:`#94a3b8`},children:`$197 USD`}),(0,_.jsx)(`strong`,{style:{color:`#ef4444`},children:`HPER HOY SOLO`}),(0,_.jsx)(`div`,{className:`amount`,children:`$49 USD`}),(0,_.jsx)(`p`,{children:`Después de las 24 horas, el precio sube a $197`})]}),(0,_.jsxs)(`div`,{className:`guarantee-box`,children:[(0,_.jsx)(`h3`,{children:`✓ Garantía 100% de Satisfacción`}),(0,_.jsx)(`p`,{children:`No te funciona? Reembolso total en 60 días`}),(0,_.jsx)(`p`,{style:{fontSize:`0.85rem`,marginTop:`0.5rem`},children:`Acceso inmediato al curso después del pago`})]})]})}),(0,_.jsx)(`section`,{id:`formulario`,children:(0,_.jsxs)(`div`,{className:`section-container`,style:{maxWidth:`700px`},children:[(0,_.jsx)(`h2`,{style:{textAlign:`center`,marginBottom:`1rem`},children:`¿Estás listo para cambiar tu vida?`}),(0,_.jsx)(`p`,{style:{textAlign:`center`,marginBottom:`2rem`,fontSize:`1.05rem`,color:`#cbd5f5`},children:`Los spots se están llenando rápido. En la cohorte anterior se vendieron en 3 días.`}),(0,_.jsxs)(`div`,{style:{background:`rgba(15, 23, 42, 0.8)`,border:`2px solid rgba(16, 185, 129, 0.3)`,borderRadius:`1.5rem`,padding:`2rem`,textAlign:`center`},children:[(0,_.jsx)(`p`,{style:{color:`#10b981`,fontWeight:`700`,margin:`0 0 1rem 0`},children:`Haz clic abajo para acceder al curso`}),(0,_.jsx)(`a`,{href:`https://wa.me/573128225056?text=Hola, quiero el curso de creators`,className:`final-cta`,children:`SÍ, QUIERO EL ACCESO AHORA`}),(0,_.jsx)(`p`,{className:`risk-free`,children:`✓ Sin riesgo - 100% garantía de devolución de dinero`}),(0,_.jsx)(`p`,{className:`cta-text`,children:`Haz clic en el botón. Confirmaremos tu acceso en menos de 5 minutos.`})]}),(0,_.jsx)(`p`,{style:{textAlign:`center`,marginTop:`2rem`,color:`#64748b`,fontSize:`0.9rem`},children:`Preguntas? Contáctanos por WhatsApp arriba o responde a tu email de confirmación`})]})}),(0,_.jsx)(`section`,{style:{background:`rgba(15, 23, 42, 0.6)`},children:(0,_.jsxs)(`div`,{className:`section-container`,style:{maxWidth:`800px`,textAlign:`center`},children:[(0,_.jsxs)(`p`,{style:{marginBottom:`1.5rem`,color:`#94a3b8`},children:[`🔒 Transacción segura con SSL | 📱 Acceso inmediato después del pago`,(0,_.jsx)(`br`,{}),`✓ Garantía de satisfacción 60 días | 💬 Soporte por WhatsApp`]}),(0,_.jsxs)(`p`,{style:{fontSize:`0.85rem`,color:`#64748b`},children:[`© 2024 CreatorsAcademy. Todos los derechos reservados. |`,(0,_.jsx)(`a`,{href:`#`,style:{color:`#10b981`,textDecoration:`none`,marginLeft:`0.5rem`},children:`Términos y Condiciones`})]})]})})]})]})}var A=`
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
`;function ae(){return(0,_.jsxs)(b,{title:`Club de Creadores Élite`,description:`Un funnel de alto impacto inspirado en lanzamientos de creadores top`,accent:`brand`,children:[(0,_.jsx)(`style`,{children:A}),(0,_.jsxs)(`div`,{className:`creator-funnel`,children:[(0,_.jsxs)(`header`,{className:`site-header`,children:[(0,_.jsxs)(`div`,{className:`logo`,children:[`CreadorX`,(0,_.jsx)(`span`,{children:`Producción Premium`})]}),(0,_.jsxs)(`nav`,{children:[(0,_.jsx)(`a`,{href:`#inicio`,children:`Inicio`}),(0,_.jsx)(`a`,{href:`#framework`,children:`Framework`}),(0,_.jsx)(`a`,{href:`#modulos`,children:`Módulos`}),(0,_.jsx)(`a`,{href:`#casos`,children:`Casos`}),(0,_.jsx)(`a`,{href:`#planes`,children:`Planes`})]})]}),(0,_.jsx)(`section`,{className:`hero`,id:`inicio`,children:(0,_.jsxs)(`div`,{className:`layout-wrapper hero-content`,children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`div`,{className:`hero-badge`,children:`Nuevo lanzamiento privado`}),(0,_.jsxs)(`h1`,{children:[`Construye tu `,(0,_.jsx)(`span`,{className:`gradient-text`,children:`comunidad premium`}),` y monetiza tu expertise con un funnel probado.`]}),(0,_.jsx)(`p`,{className:`hero-description`,children:`Accede al sistema completo que utilizan los creadores top de Latinoamérica para escalar su impacto, multiplicar su alcance y cerrar ventas recurrentes sin sentirse "en modo vendedor".`}),(0,_.jsxs)(`div`,{className:`hero-actions`,children:[(0,_.jsx)(`a`,{className:`btn-primary`,href:`https://wa.me/573128225056?text=Quiero%20el%20Club%20de%20Creadores`,children:`Reservar entrevista`}),(0,_.jsx)(`a`,{className:`btn-ghost`,href:`#planes`,children:`Descargar syllabus`})]}),(0,_.jsxs)(`div`,{className:`hero-stats`,children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`h3`,{children:`$520K`}),(0,_.jsx)(`p`,{children:`Lanzamientos producidos 2024`})]}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`h3`,{children:`42`}),(0,_.jsx)(`p`,{children:`Creadores en nuestro mastermind`})]}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`h3`,{children:`19.4%`}),(0,_.jsx)(`p`,{children:`Ratio de conversión promedio`})]})]})]}),(0,_.jsx)(`div`,{className:`hero-media`,children:(0,_.jsx)(`img`,{src:`https://images.pexels.com/photos/3202235/pexels-photo-3202235.jpeg?auto=compress&cs=tinysrgb&w=900`,alt:`Estudio de creador premium`})})]})}),(0,_.jsx)(`section`,{className:`social-proof`,children:(0,_.jsxs)(`div`,{className:`layout-wrapper`,children:[(0,_.jsx)(`p`,{className:`pill-title`,children:`Confían en nosotros`}),(0,_.jsxs)(`div`,{className:`logos`,children:[(0,_.jsx)(`span`,{children:`Mastermind Creativo`}),(0,_.jsx)(`span`,{children:`Creator Summit`}),(0,_.jsx)(`span`,{children:`Hotmart Diamond`}),(0,_.jsx)(`span`,{children:`Spotify Studios`}),(0,_.jsx)(`span`,{children:`Meta Creators Lab`})]})]})}),(0,_.jsx)(`section`,{id:`framework`,children:(0,_.jsx)(`div`,{className:`layout-wrapper`,children:(0,_.jsxs)(`div`,{className:`stacked-card`,children:[(0,_.jsx)(`p`,{className:`pill-title`,children:`Nuestro método`}),(0,_.jsx)(`h2`,{children:`Del contenido gratuito a un ecosistema de suscripción premium`}),(0,_.jsx)(`p`,{style:{color:`rgba(226, 232, 240, 0.78)`,maxWidth:`760px`},children:`Desbloquea el framework de 6 etapas que acompaña a creadores a profesionalizar su negocio. Desde la estrategia editorial que genera demanda, hasta el cierre y el onboarding que retiene a tus miembros.`}),(0,_.jsxs)(`div`,{className:`modules-grid`,style:{marginTop:`2rem`},children:[(0,_.jsxs)(`div`,{className:`module-card`,children:[(0,_.jsx)(`span`,{className:`label`,children:`Fase 01`}),(0,_.jsx)(`h3`,{children:`Posicionamiento magnético`}),(0,_.jsx)(`p`,{children:`Define tu narrativa, tu promesa transformadora y la identidad visual que te diferencia en tu nicho.`})]}),(0,_.jsxs)(`div`,{className:`module-card`,children:[(0,_.jsx)(`span`,{className:`label`,children:`Fase 02`}),(0,_.jsx)(`h3`,{children:`Motor de atracción`}),(0,_.jsx)(`p`,{children:`Arquitectamos un calendario de contenidos multiplataforma que nutre la demanda y crece tu audiencia base.`})]}),(0,_.jsxs)(`div`,{className:`module-card`,children:[(0,_.jsx)(`span`,{className:`label`,children:`Fase 03`}),(0,_.jsx)(`h3`,{children:`Oferta & funnel premium`}),(0,_.jsx)(`p`,{children:`Construimos la experiencia de funnel de alto ticket, con automatizaciones, eventos en vivo y cierre personalizado.`})]})]})]})})}),(0,_.jsx)(`section`,{id:`modulos`,children:(0,_.jsxs)(`div`,{className:`layout-wrapper experience`,children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`p`,{className:`pill-title`,children:`Experiencia inmersiva`}),(0,_.jsx)(`h2`,{children:`Una producción 360° creada para elevar tu marca`}),(0,_.jsx)(`p`,{style:{color:`rgba(226, 232, 240, 0.75)`,marginBottom:`1.6rem`},children:`Producción audiovisual, copywriting de conversión, automatizaciones y diseño UI adaptado a web, móvil y community. Todo orquestado para que solo te enfoques en entregar valor.`}),(0,_.jsxs)(`ul`,{style:{listStyle:`none`,padding:0,margin:0,display:`grid`,gap:`1rem`,fontSize:`0.95rem`},children:[(0,_.jsx)(`li`,{children:`✦ Sesiones de estrategia 1:1 con directores creativos`}),(0,_.jsx)(`li`,{children:`✦ Lanzamientos trimestrales con backstage documentado`}),(0,_.jsx)(`li`,{children:`✦ Base de datos de plantillas y automatizaciones probadas`}),(0,_.jsx)(`li`,{children:`✦ Equipo on-demand de ads, edición y community growth`})]})]}),(0,_.jsx)(`div`,{children:(0,_.jsx)(`img`,{src:`https://images.pexels.com/photos/5720568/pexels-photo-5720568.jpeg?auto=compress&cs=tinysrgb&w=900`,alt:`Sesión de mastermind con creadores`})})]})}),(0,_.jsx)(`section`,{id:`casos`,children:(0,_.jsxs)(`div`,{className:`layout-wrapper`,children:[(0,_.jsx)(`p`,{className:`pill-title`,children:`Casos en portada`}),(0,_.jsx)(`h2`,{children:`Historias reales de creadores que escalaron su impacto`}),(0,_.jsxs)(`div`,{className:`success-grid`,children:[(0,_.jsxs)(`div`,{className:`success-card`,children:[(0,_.jsx)(`img`,{src:`https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=900`,alt:`Creadora de bienestar`}),(0,_.jsxs)(`div`,{className:`info`,children:[(0,_.jsx)(`span`,{children:`Wellness & Mindset`}),(0,_.jsx)(`h3`,{children:`Laura M.`}),(0,_.jsx)(`p`,{children:`Pasó de lanzar cursos de $97 a un membership de $79/mes con 640 miembros activos y eventos híbridos agotados.`})]})]}),(0,_.jsxs)(`div`,{className:`success-card`,children:[(0,_.jsx)(`img`,{src:`https://images.pexels.com/photos/5710755/pexels-photo-5710755.jpeg?auto=compress&cs=tinysrgb&w=900`,alt:`Creador de finanzas`}),(0,_.jsxs)(`div`,{className:`info`,children:[(0,_.jsx)(`span`,{children:`Finanzas personales`}),(0,_.jsx)(`h3`,{children:`Andrés V.`}),(0,_.jsx)(`p`,{children:`Duplicó su MRR en 74 días lanzando un funnel evergreen con webinars en vivo y campañas de referidos.`})]})]}),(0,_.jsxs)(`div`,{className:`success-card`,children:[(0,_.jsx)(`img`,{src:`https://images.pexels.com/photos/6953737/pexels-photo-6953737.jpeg?auto=compress&cs=tinysrgb&w=900`,alt:`Creadora de productividad`}),(0,_.jsxs)(`div`,{className:`info`,children:[(0,_.jsx)(`span`,{children:`Productividad & negocios`}),(0,_.jsx)(`h3`,{children:`Majo R.`}),(0,_.jsx)(`p`,{children:`Cerró un lanzamiento boutique de $148K con 120 miembros fundadores. Retención promedio 93% en 6 meses.`})]})]})]})]})}),(0,_.jsx)(`section`,{className:`pricing`,id:`planes`,children:(0,_.jsxs)(`div`,{className:`layout-wrapper`,children:[(0,_.jsx)(`p`,{className:`pill-title`,children:`Planes diseñados para crecer contigo`}),(0,_.jsx)(`h2`,{children:`Tu funnel, tu producción y tu comunidad, orquestados por expertos`}),(0,_.jsxs)(`div`,{className:`plans`,children:[(0,_.jsxs)(`div`,{className:`plan-card`,children:[(0,_.jsx)(`span`,{className:`label`,children:`Programa intensivo 12 semanas`}),(0,_.jsx)(`div`,{className:`plan-price`,children:`$3,400 USD`}),(0,_.jsx)(`p`,{style:{color:`rgba(226, 232, 240, 0.75)`},children:`Ideal para creadores que desean su primer lanzamiento premium acompañado de nuestro equipo.`}),(0,_.jsxs)(`ul`,{children:[(0,_.jsx)(`li`,{children:`Arquitectura completa del funnel + copywriting`}),(0,_.jsx)(`li`,{children:`Diseño web, branding y assets listos para ads`}),(0,_.jsx)(`li`,{children:`Campaña en vivo de 21 días + métricas en dashboard`}),(0,_.jsx)(`li`,{children:`Acompañamiento en cierres y soporte en onboarding`})]}),(0,_.jsx)(`a`,{className:`cta`,href:`https://wa.me/573128225056?text=Programa%2012%20semanas`,children:`Agendar diagnóstico`})]}),(0,_.jsxs)(`div`,{className:`plan-card`,style:{borderColor:`rgba(168, 85, 247, 0.4)`,boxShadow:`0 35px 90px -35px rgba(168, 85, 247, 0.45)`},children:[(0,_.jsx)(`span`,{className:`label`,children:`Club CreadorX (Anual)`}),(0,_.jsx)(`div`,{className:`plan-price`,children:`$590 USD / mes`}),(0,_.jsx)(`p`,{style:{color:`rgba(226, 232, 240, 0.75)`},children:`Perfecto para creadores que buscan escala constante, producción mensual y comunidad de peers top.`}),(0,_.jsxs)(`ul`,{children:[(0,_.jsx)(`li`,{children:`Producción mensual de assets + estrategia editorial`}),(0,_.jsx)(`li`,{children:`Lanzamientos trimestrales + funnels evergreen optimizados`}),(0,_.jsx)(`li`,{children:`Acceso a masterminds privados y research de mercado`}),(0,_.jsx)(`li`,{children:`Equipo on-demand para soporte técnico, tráfico y community`})]}),(0,_.jsx)(`a`,{className:`cta`,href:`https://wa.me/573128225056?text=Club%20CreadorX`,children:`Aplicar al club`})]})]})]})}),(0,_.jsx)(`section`,{children:(0,_.jsxs)(`div`,{className:`layout-wrapper`,children:[(0,_.jsx)(`p`,{className:`pill-title`,children:`Resolvemos tus dudas`}),(0,_.jsxs)(`div`,{className:`faq`,children:[(0,_.jsxs)(`details`,{children:[(0,_.jsx)(`summary`,{children:`¿Qué tipo de creadores aceptan?`}),(0,_.jsx)(`p`,{children:`Seleccionamos creadores con comunidad activa y una promesa transformadora clara. Revisamos tu posicionamiento y vemos si el programa es la mejor opción para ti en esta etapa.`})]}),(0,_.jsxs)(`details`,{children:[(0,_.jsx)(`summary`,{children:`¿Necesito un equipo interno?`}),(0,_.jsx)(`p`,{children:`No es necesario. Nos encargamos de la producción, tecnología y tráfico junto a nuestro squad. Si ya tienes equipo, trabajamos en conjunto para integrarlo al framework.`})]}),(0,_.jsxs)(`details`,{children:[(0,_.jsx)(`summary`,{children:`¿Qué resultados puedo esperar?`}),(0,_.jsx)(`p`,{children:`Nuestros clientes ven incrementos del 3x al 7x en ingresos comparado con lanzamientos anteriores. Todo depende de tu consistencia con el plan de acción y participación en las sesiones.`})]}),(0,_.jsxs)(`details`,{children:[(0,_.jsx)(`summary`,{children:`¿Incluye gestión de comunidad?`}),(0,_.jsx)(`p`,{children:`Incluimos la estructura, automatizaciones y lineamientos. Puedes sumar a nuestro equipo de community managers por un fee adicional si deseas delegarlo completamente.`})]})]})]})}),(0,_.jsx)(`section`,{className:`final-cta`,children:(0,_.jsxs)(`div`,{className:`layout-wrapper`,style:{maxWidth:`720px`},children:[(0,_.jsx)(`h2`,{style:{fontSize:`2.4rem`,marginBottom:`1rem`},children:`Este es el funnel que tu comunidad merece.`}),(0,_.jsx)(`p`,{style:{color:`rgba(226, 232, 240, 0.75)`,fontSize:`1.05rem`,marginBottom:`2.2rem`},children:`Reserva una entrevista estratégica y construyamos juntos la experiencia premium que eleva tu marca, fideliza a tu audiencia y multiplica tus ingresos.`}),(0,_.jsxs)(`div`,{className:`hero-actions`,style:{justifyContent:`center`},children:[(0,_.jsx)(`a`,{className:`btn-primary`,href:`https://wa.me/573128225056?text=Quiero%20mi%20funnel%20premium`,children:`Aplicar ahora`}),(0,_.jsx)(`a`,{className:`btn-ghost`,href:`#planes`,children:`Revisar planes`})]}),(0,_.jsxs)(`div`,{className:`guarantee`,children:[(0,_.jsx)(`span`,{children:`⚡`}),`Programa con cupos limitados. Garantía de satisfacción de 30 días.`]})]})}),(0,_.jsxs)(`footer`,{children:[(0,_.jsx)(`p`,{children:`© 2024 CreadorX Studio. Todos los derechos reservados.`}),(0,_.jsxs)(`p`,{children:[(0,_.jsx)(`a`,{href:`#`,children:`Términos`}),` • `,(0,_.jsx)(`a`,{href:`#`,children:`Aviso de Privacidad`}),` • `,(0,_.jsx)(`a`,{href:`mailto:hola@creadorx.studio`,children:`Contacto`})]})]})]})]})}var j=t(f),oe={initial:{opacity:0,y:32},animate:{opacity:1,y:0},transition:{duration:.8,ease:`easeOut`}},se={initial:{opacity:0,y:-16},animate:{opacity:1,y:0},transition:{duration:.6,ease:`easeOut`,delay:.15}},M=(e=0)=>({initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.65,ease:`easeOut`,delay:.25+e*.08}}),N={initial:{opacity:0,y:48},whileInView:{opacity:1,y:0},transition:{duration:.75,ease:`easeOut`},viewport:{once:!0,amount:.25}},P=(e=0)=>({initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},transition:{duration:.6,ease:`easeOut`,delay:e*.08},viewport:{once:!0,amount:.2}});function F(){let[e,n]=(0,g.useState)({name:``,email:``,phone:``,company:``,message:``}),[r,i]=(0,g.useState)(`idle`),[a,o]=(0,g.useState)(null),s=(0,g.useRef)(null),c=(0,g.useMemo)(()=>[{label:`Landings publicadas`,value:`90+`},{label:`Precio fijo`,value:`$400k`},{label:`Tiempo de entrega`,value:`48h`},{label:`Satisfacción`,value:`100%`}],[]),l=(0,g.useMemo)(()=>[{title:`Precio Único y Transparente`,description:`Pagas $400.000 una sola vez. Incluye dominio y hosting por un año. Sin sorpresas ni mensualidades.`,icon:I},{title:`Sin Mensualidades`,description:`Tu página es tuya. No dependes de plataformas costosas como Wix o Squarespace que te cobran mes a mes.`,icon:ce},{title:`Lista para Vender`,description:`Diseño profesional optimizado para cargar rápido y convertir visitantes en clientes por WhatsApp.`,icon:L}],[]),u=(0,g.useMemo)(()=>[{name:`Restaurante de barrio`,summary:`Menú, reservas y promociones en una página ligera.`,highlights:[`Carta del día y combos`,`Botón directo a WhatsApp`,`Mapa y horarios embebidos`],link:`/examples/restaurante-barrio`,linkLabel:`Ver ejemplo restaurante`},{name:`Marca personal`,summary:`Portfolio y servicios para profesionales independientes.`,highlights:[`Sección de testimonios`,`Integración con Calendly`,`Descarga de media kit`],link:`/examples/marca-personal`,linkLabel:`Ver ejemplo marca personal`},{name:`Curso Digital`,summary:`Landing para promocionar un producto o curso.`,highlights:[`Beneficios y temario`,`Video de presentación`,`Botón de compra directo`],link:`/examples/curso-hotmart`,linkLabel:`Ver ejemplo curso`},{name:`Agencia de Marketing`,summary:`Presenta tus servicios y casos de éxito.`,highlights:[`Sección de servicios`,`Casos de estudio`,`Formulario de contacto`],link:`/examples/agencia-marketing`,linkLabel:`Ver ejemplo agencia`},{name:`Funnel de Ventas`,summary:`Estructura optimizada para conversión máxima y venta directa.`,highlights:[`Problema-Solución-Acción`,`Presión de urgencia (timer)`,`Garantía 100%`],link:`/examples/funnel-ventas`,linkLabel:`Ver ejemplo funnel`},{name:`Funnel de Membresía`,summary:`Convierte visitantes en miembros recurrentes.`,highlights:[`Beneficios claros`,`Llamados a la acción`,`Testimonios de usuarios`],link:`/examples/funnel-productividad`,linkLabel:`Ver ejemplo membresía`}],[]),d=(0,g.useMemo)(()=>[{title:`1. Envías tu información`,description:`Nos cuentas qué vendes y nos pasas tus textos y fotos. Si no tienes fotos, usamos de stock profesional.`},{title:`2. Construimos tu página`,description:`Diseñamos y programamos tu landing page estática. Sin plantillas pesadas, código limpio y rápido.`},{title:`3. Lanzamiento`,description:`Conectamos tu dominio .com o .co, configuramos el hosting y quedas en línea en 48 horas.`}],[]),f=(0,g.useMemo)(()=>[{name:`María Cifuentes`,role:`Emprendedora`,quote:`Necesitaba algo rápido y barato para vender mis postres. En dos días ya tenía la página lista y recibiendo pedidos al WhatsApp.`},{name:`Diego Rodríguez`,role:`Consultor`,quote:`No quería pagar mensualidades en Wix. Aquí pagué una vez y me olvidé de los cobros mensuales. La página vuela.`},{name:`Valentina Mora`,role:`Agente Inmobiliaria`,quote:`Excelente servicio. Me incluyeron el dominio y el hosting, así que no tuve que configurar nada técnico.`}],[]),p=(0,g.useMemo)(()=>[{name:`Plan Único Todo Incluido`,price:`$400.000 COP`,recurrence:`Pago único`,highlighted:!0,description:`Todo lo que necesitas para tener tu landing page profesional en línea.`,features:[`Dominio .com o .co incluido (1 año)`,`Hosting de alta velocidad incluido (1 año)`,`Diseño profesional (no plantillas genéricas)`,`Botón de WhatsApp y Formulario de contacto`,`Optimización para móviles y carga rápida`,`Lista para pauta (Google/Meta Ads)`,`Certificado SSL (Candado de seguridad)`]}],[]),m=(0,g.useMemo)(()=>[{name:`Renovación Anual`,price:`$180.000 COP/año`,accent:`bg-sky-500`,features:[`Renovación de Dominio`,`Renovación de Hosting`,`Certificado SSL`,`Soporte técnico básico`,`Monitoreo de seguridad`]}],[]),ee=(0,g.useMemo)(()=>[{question:`¿Qué incluye exactamente los $400.000?`,answer:`Incluye el diseño y desarrollo de la landing page, el dominio (.com o .co) por un año, y el hosting por un año. No hay costos ocultos.`},{question:`¿Tengo que pagar mensualidades?`,answer:`No. El pago es único. Solo debes renovar el dominio y hosting anualmente (aprox $180.000 COP) para mantener tu página en línea.`},{question:`¿Puedo editar la página yo mismo?`,answer:`Son páginas estáticas para garantizar velocidad y seguridad, por lo que no tienen panel de administración (CMS). Si necesitas cambios, puedes contactarnos para una actualización puntual.`},{question:`¿Necesito algo más complejo como un CMS?`,answer:`Si necesitas un blog, tienda en línea con carrito o autoadministración, escríbenos para cotizar un desarrollo a medida. Este plan es para landings informativas y de venta directa.`}],[]),h=(e,t)=>{n(n=>({...n,[e]:t}))},v=async t=>{t.preventDefault(),i(`loading`),o(null);try{let t=await fetch(`/api/leads`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({...e,services:[`Plan Único $400k`],budgetRange:`$400.000 COP`})});if(!t.ok){let e=await t.json().catch(()=>null);throw Error(e?.message??`No pudimos enviar tu solicitud. Inténtalo más tarde.`)}i(`success`);let r=`Hola, acabo de llenar el formulario en la web de TuLandingYa.com. Mi nombre es ${e.name} y quiero iniciar mi proyecto de $400k.`,a=`https://wa.me/573128225056?text=${encodeURIComponent(r)}`;window.open(a,`_blank`),n({name:``,email:``,phone:``,company:``,message:``})}catch(e){i(`error`),o(e instanceof Error?e.message:`Error inesperado. Vuelve a intentarlo más tarde.`)}},y=()=>{s.current?.scrollIntoView({behavior:`smooth`})};return(0,_.jsxs)(`div`,{className:`min-h-full bg-slate-950`,children:[(0,_.jsxs)(t.header,{...oe,className:`relative overflow-hidden bg-slate-950`,children:[(0,_.jsxs)(`div`,{className:`absolute inset-0 -z-10`,children:[(0,_.jsx)(`div`,{className:`absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(32,155,255,0.24),_transparent_55%)]`}),(0,_.jsx)(`div`,{className:`absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-900 via-transparent`})]}),(0,_.jsxs)(t.nav,{...se,className:`mx-auto flex max-w-6xl items-center justify-between px-6 py-8`,children:[(0,_.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,_.jsx)(`img`,{src:`/logotulandingya.png`,alt:`TuLandingYa Logo`,className:`h-12 w-12 rounded-xl`}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`p`,{className:`text-sm font-medium uppercase tracking-widest text-brand-200`,children:`TuLandingYa`}),(0,_.jsx)(`p`,{className:`hidden text-sm text-slate-400 sm:block`,children:`Landing pages profesionales a precio único`})]})]}),(0,_.jsxs)(`div`,{className:`hidden items-center gap-8 text-sm font-medium text-slate-200 sm:flex`,children:[(0,_.jsx)(t.button,{...M(0),onClick:y,className:`transition hover:text-brand-300`,type:`button`,children:`Pedir mi landing`}),(0,_.jsx)(t.a,{...M(0),href:`#plans`,className:`transition hover:text-brand-300`,children:`Qué incluye`}),(0,_.jsx)(t.a,{...M(0),href:`#testimonials`,className:`transition hover:text-brand-300`,children:`Ejemplos`})]}),(0,_.jsx)(t.button,{type:`button`,onClick:y,className:`hidden rounded-full bg-brand-600 px-6 py-2.5 text-sm font-bold text-white shadow-[0_0_20px_-5px_rgba(32,155,255,0.5)] transition-transform hover:scale-105 hover:bg-brand-500 hover:shadow-[0_0_25px_-5px_rgba(32,155,255,0.7)] sm:inline-flex`,whileHover:{scale:1.05},whileTap:{scale:.95},...M(1),children:`Empezar ahora`})]}),(0,_.jsxs)(`div`,{className:`mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 pb-20 pt-10 text-center sm:pb-24`,children:[(0,_.jsx)(t.span,{...M(0),className:`inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-slate-200`,children:`Precio único $400.000 COP`}),(0,_.jsxs)(t.h1,{...M(1),className:`max-w-3xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl`,children:[`Tu landing page profesional por un`,` `,(0,_.jsx)(`span`,{className:`text-gradient`,children:`precio único`})]}),(0,_.jsx)(t.p,{...M(2),className:`max-w-2xl text-lg text-slate-300 md:text-xl`,children:`Todo incluido: Diseño, Dominio y Hosting. Un solo pago de $400.000. Tu página es tuya para siempre, sin mensualidades.`}),(0,_.jsx)(t.div,{...M(3),className:`flex flex-col items-center gap-4 sm:flex-row`,children:(0,_.jsxs)(t.button,{type:`button`,onClick:y,className:`group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 px-8 py-4 text-lg font-bold text-white shadow-[0_0_40px_-10px_rgba(32,155,255,0.6)] ring-1 ring-white/20 transition-all hover:scale-105 hover:shadow-[0_0_60px_-15px_rgba(32,155,255,0.8)] hover:ring-white/40`,whileHover:{scale:1.05},whileTap:{scale:.95},children:[(0,_.jsx)(`span`,{className:`relative z-10`,children:`Quiero mi landing`}),(0,_.jsx)(`div`,{className:`absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-md`}),(0,_.jsx)(z,{className:`relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1`})]})}),(0,_.jsxs)(t.div,{...M(4),className:`relative w-full max-w-5xl px-4`,children:[(0,_.jsx)(`div`,{className:`absolute left-1/2 top-1/2 -z-10 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/15 blur-[90px]`}),(0,_.jsx)(`img`,{src:`/landings.png`,alt:`Ejemplos de landing pages de alta conversión`,className:`w-full drop-shadow-2xl`})]}),(0,_.jsx)(`div`,{className:`grid w-full max-w-3xl grid-cols-2 gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur`,children:c.map((e,n)=>(0,_.jsxs)(t.div,{...M(5+n),className:`px-2 text-left`,children:[(0,_.jsx)(`p`,{className:`text-2xl font-semibold text-white sm:text-3xl`,children:e.value}),(0,_.jsx)(`p`,{className:`text-sm text-slate-400`,children:e.label})]},e.label))})]})]}),(0,_.jsxs)(`main`,{className:`relative`,children:[(0,_.jsxs)(t.section,{id:`features`,...N,className:`relative py-24`,children:[(0,_.jsx)(`div`,{className:`absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(46,148,255,0.18),_transparent_60%)]`}),(0,_.jsxs)(`div`,{className:`mx-auto max-w-6xl px-6`,children:[(0,_.jsxs)(t.div,{...P(0),className:`mx-auto max-w-3xl text-center`,children:[(0,_.jsx)(`p`,{className:`text-sm font-semibold uppercase tracking-[0.4em] text-brand-200`,children:`Por qué elegirnos`}),(0,_.jsx)(`h2`,{className:`mt-4 text-3xl font-semibold text-white md:text-4xl`,children:`La forma más inteligente de tener tu web`}),(0,_.jsx)(`p`,{className:`mt-4 text-base text-slate-300`,children:`Olvídate de constructores web lentos, plugins que fallan y mensualidades eternas. Te entregamos una web profesional, rápida y tuya para siempre.`})]}),(0,_.jsx)(`div`,{className:`mt-16 grid gap-6 md:grid-cols-3`,children:l.map((e,n)=>(0,_.jsx)(t.div,{...P(n),className:`tilt-card group relative overflow-hidden rounded-2xl border border-white/5 p-[1px]`,children:(0,_.jsxs)(`div`,{className:`relative z-10 flex h-full flex-col gap-6 rounded-2xl border border-white/5 bg-slate-900/60 p-8 backdrop-blur`,children:[(0,_.jsx)(t.div,{className:`inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-500/10 text-brand-300 ring-1 ring-brand-500/40`,initial:{scale:.85,opacity:0},whileInView:{scale:1,opacity:1},transition:{duration:.5,ease:`easeOut`,delay:.1+n*.08},viewport:{once:!0,amount:.4},children:(0,_.jsx)(e.icon,{className:`h-6 w-6`})}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`h3`,{className:`text-xl font-semibold text-white`,children:e.title}),(0,_.jsx)(`p`,{className:`mt-3 text-sm text-slate-300`,children:e.description})]})]})},e.title))})]})]}),(0,_.jsx)(t.section,{id:`examples`,...N,className:`border-y border-white/5 bg-slate-950/85 py-24`,children:(0,_.jsxs)(`div`,{className:`mx-auto max-w-6xl px-6`,children:[(0,_.jsxs)(t.div,{...P(0),className:`mx-auto max-w-3xl text-center`,children:[(0,_.jsx)(`p`,{className:`text-sm uppercase tracking-[0.4em] text-brand-200`,children:`Ejemplos`}),(0,_.jsx)(`h2`,{className:`mt-4 text-3xl font-semibold text-white md:text-4xl`,children:`Diseños que venden`}),(0,_.jsx)(`p`,{className:`mt-4 text-base text-slate-300`,children:`Adaptamos el diseño a tu negocio. Ya sea un restaurante, un servicio profesional o un producto digital.`})]}),(0,_.jsx)(`div`,{className:`mt-16 grid gap-6 md:grid-cols-3`,children:u.map((e,n)=>(0,_.jsxs)(j,{to:e.link,className:`group flex h-full flex-col gap-5 rounded-3xl border border-white/5 bg-slate-900/60 p-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400`,...P(n),whileHover:{y:-6,scale:1.01},whileTap:{scale:.99},children:[(0,_.jsx)(`h3`,{className:`text-lg font-semibold text-white`,children:e.name}),(0,_.jsx)(`p`,{className:`text-sm text-slate-300`,children:e.summary}),(0,_.jsx)(`ul`,{className:`mt-2 space-y-3 text-sm text-slate-300`,children:e.highlights.map(e=>(0,_.jsxs)(t.li,{className:`flex items-start gap-2`,initial:{opacity:0,x:-12},whileInView:{opacity:1,x:0},transition:{duration:.4,ease:`easeOut`},viewport:{once:!0,amount:.4},children:[(0,_.jsx)(`span`,{className:`mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-brand-500/20 text-brand-200`,children:(0,_.jsx)(R,{className:`h-2.5 w-2.5`})}),(0,_.jsx)(`span`,{children:e})]},e))}),(0,_.jsxs)(`span`,{className:`mt-auto inline-flex items-center gap-2 text-sm font-semibold text-brand-200 transition group-hover:text-brand-100`,children:[e.linkLabel,(0,_.jsx)(z,{className:`h-4 w-4`})]})]},e.name))})]})}),(0,_.jsx)(t.section,{id:`process`,...N,className:`border-y border-white/5 bg-slate-950/80 py-24`,children:(0,_.jsxs)(`div`,{className:`mx-auto max-w-6xl px-6`,children:[(0,_.jsxs)(t.div,{...P(0),className:`grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-start`,children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`p`,{className:`text-sm uppercase tracking-[0.4em] text-brand-200`,children:`Cómo funciona`}),(0,_.jsx)(`h2`,{className:`mt-4 text-3xl font-semibold text-white md:text-4xl`,children:`Tu página lista en 3 pasos`}),(0,_.jsx)(`p`,{className:`mt-4 max-w-2xl text-base text-slate-300`,children:`Simplificamos el proceso para que no pierdas tiempo. Tú nos das la información, nosotros hacemos el resto.`})]}),(0,_.jsxs)(t.div,{className:`rounded-3xl border border-white/5 bg-slate-900/50 p-6`,initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},transition:{duration:.6,ease:`easeOut`,delay:.1},viewport:{once:!0,amount:.3},children:[(0,_.jsx)(`p`,{className:`text-sm font-medium text-brand-200`,children:`Garantía de satisfacción`}),(0,_.jsxs)(`ul`,{className:`mt-4 space-y-3 text-sm text-slate-300`,children:[(0,_.jsx)(`li`,{children:`• Si no te gusta el diseño, lo ajustamos hasta que estés feliz.`}),(0,_.jsx)(`li`,{children:`• Soporte técnico incluido por 30 días después del lanzamiento.`}),(0,_.jsx)(`li`,{children:`• Te entregamos todos los accesos a tu dominio y hosting.`})]})]})]}),(0,_.jsx)(`div`,{className:`mt-16 grid gap-6 md:grid-cols-3`,children:d.map((e,n)=>(0,_.jsxs)(t.div,{...P(n),className:`relative overflow-hidden rounded-2xl border border-white/5 bg-slate-900/60 p-6`,children:[(0,_.jsx)(t.span,{className:`inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-500/20 text-base font-semibold text-brand-100`,initial:{scale:.6,opacity:0},whileInView:{scale:1,opacity:1},transition:{duration:.45,ease:`easeOut`,delay:.12+n*.06},viewport:{once:!0,amount:.4},children:n+1}),(0,_.jsx)(`h3`,{className:`mt-4 text-xl font-semibold text-white`,children:e.title}),(0,_.jsx)(`p`,{className:`mt-3 text-sm text-slate-300`,children:e.description})]},e.title))})]})}),(0,_.jsx)(t.section,{id:`testimonials`,...N,className:`py-24`,children:(0,_.jsxs)(`div`,{className:`mx-auto max-w-6xl px-6`,children:[(0,_.jsxs)(t.div,{...P(0),className:`mx-auto max-w-3xl text-center`,children:[(0,_.jsx)(`p`,{className:`text-sm uppercase tracking-[0.4em] text-brand-200`,children:`Testimonios`}),(0,_.jsx)(`h2`,{className:`mt-4 text-3xl font-semibold text-white md:text-4xl`,children:`Lo que dicen nuestros clientes`}),(0,_.jsx)(`p`,{className:`mt-4 text-base text-slate-300`,children:`Emprendedores y profesionales que ya tienen su landing page funcionando y vendiendo.`})]}),(0,_.jsx)(`div`,{className:`mt-16 grid gap-6 md:grid-cols-3`,children:f.map((e,n)=>(0,_.jsxs)(t.article,{...P(n),className:`relative flex h-full flex-col gap-6 rounded-2xl border border-white/5 bg-slate-900/60 p-8`,children:[(0,_.jsx)(t.svg,{className:`h-8 w-8 text-brand-400`,viewBox:`0 0 32 32`,fill:`none`,initial:{rotate:-6,opacity:0},whileInView:{rotate:0,opacity:1},transition:{duration:.5,ease:`easeOut`,delay:.1+n*.08},viewport:{once:!0,amount:.4},children:(0,_.jsx)(`path`,{d:`M12.444 15.556H7.111c0-5.111 2.667-8.889 6.667-10.667v3.778c-1.778.889-3.111 2.667-3.333 4.889h2v2zm12.444 0h-5.333c0-5.111 2.666-8.889 6.666-10.667v3.778c-1.777.889-3.11 2.667-3.333 4.889h2v2z`,fill:`currentColor`})}),(0,_.jsx)(`p`,{className:`text-base text-slate-300`,children:e.quote}),(0,_.jsxs)(`div`,{className:`mt-auto text-sm`,children:[(0,_.jsx)(`p`,{className:`font-semibold text-white`,children:e.name}),(0,_.jsx)(`p`,{className:`text-slate-400`,children:e.role})]})]},e.name))})]})}),(0,_.jsx)(t.section,{id:`plans`,...N,className:`border-y border-white/5 bg-slate-950/85 py-24`,children:(0,_.jsxs)(`div`,{className:`mx-auto max-w-6xl px-6`,children:[(0,_.jsxs)(t.div,{...P(0),className:`mx-auto max-w-3xl text-center`,children:[(0,_.jsx)(`p`,{className:`text-sm uppercase tracking-[0.4em] text-brand-200`,children:`Precio Único`}),(0,_.jsx)(`h2`,{className:`mt-4 text-3xl font-semibold text-white md:text-4xl`,children:`Sin mensualidades, sin sorpresas`}),(0,_.jsx)(`p`,{className:`mt-4 text-base text-slate-300`,children:`Un solo pago. Todo incluido por un año.`})]}),(0,_.jsx)(`div`,{className:`mt-16 flex justify-center`,children:p.map((e,n)=>(0,_.jsxs)(t.article,{...P(n),whileHover:{y:-10,scale:1.01},className:`relative flex w-full max-w-md flex-col overflow-hidden rounded-3xl border border-white/5 bg-slate-900/60 p-8 ${e.highlighted?`shadow-glow ring-1 ring-brand-400/40`:``}`,children:[e.highlighted?(0,_.jsx)(t.span,{initial:{scale:.8,opacity:0},whileInView:{scale:1,opacity:1},transition:{duration:.35,ease:`easeOut`,delay:.2+n*.05},viewport:{once:!0,amount:.4},className:`absolute right-6 top-6 rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-slate-950`,children:`Todo incluido`}):null,(0,_.jsx)(`h3`,{className:`text-lg font-semibold text-white`,children:e.name}),(0,_.jsx)(`p`,{className:`mt-2 text-sm text-slate-400`,children:e.description}),(0,_.jsxs)(`div`,{className:`mt-6 flex items-baseline gap-2`,children:[(0,_.jsx)(`span`,{className:`text-3xl font-semibold text-white`,children:e.price}),(0,_.jsx)(`span`,{className:`text-sm text-slate-400`,children:e.recurrence})]}),(0,_.jsx)(`ul`,{className:`mt-6 space-y-3 text-sm text-slate-300`,children:e.features.map((e,n)=>(0,_.jsxs)(t.li,{initial:{opacity:0,x:-12},whileInView:{opacity:1,x:0},transition:{duration:.4,ease:`easeOut`,delay:.1+n*.05},viewport:{once:!0,amount:.4},className:`flex items-start gap-3`,children:[(0,_.jsx)(`span`,{className:`mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-500/20 text-brand-200`,children:(0,_.jsx)(R,{className:`h-3 w-3`})}),(0,_.jsx)(`span`,{children:e})]},e))}),(0,_.jsx)(t.button,{type:`button`,whileHover:{scale:1.04},whileTap:{scale:.94},onClick:y,className:`mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-sm font-bold transition-all ${e.highlighted?`bg-gradient-to-r from-brand-400 to-brand-600 text-white shadow-[0_0_30px_-5px_rgba(32,155,255,0.5)] hover:shadow-[0_0_40px_-5px_rgba(32,155,255,0.7)]`:`border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-brand-400/50`}`,children:`Quiero mi landing`})]},e.name))})]})}),(0,_.jsx)(t.section,{id:`renewals`,...N,className:`py-24`,children:(0,_.jsxs)(`div`,{className:`mx-auto max-w-6xl px-6`,children:[(0,_.jsxs)(t.div,{...P(0),className:`mx-auto max-w-3xl text-center`,children:[(0,_.jsx)(`p`,{className:`text-sm uppercase tracking-[0.4em] text-brand-200`,children:`Mantenimiento`}),(0,_.jsx)(`h2`,{className:`mt-4 text-3xl font-semibold text-white md:text-4xl`,children:`¿Qué pasa después del primer año?`}),(0,_.jsx)(`p`,{className:`mt-4 text-base text-slate-300`,children:`Solo pagas la renovación anual de tu dominio y hosting para mantener tu página en línea.`})]}),(0,_.jsx)(`div`,{className:`mt-16 flex justify-center`,children:m.map((e,n)=>(0,_.jsxs)(t.article,{...P(n),whileHover:{y:-8},className:`relative flex w-full max-w-md flex-col gap-6 overflow-hidden rounded-3xl border border-white/5 bg-slate-900/60 p-8`,children:[(0,_.jsx)(t.span,{className:`inline-flex h-12 w-12 items-center justify-center rounded-xl text-sm font-semibold text-slate-950 ${e.accent}`,initial:{scale:.75,opacity:0},whileInView:{scale:1,opacity:1},transition:{duration:.4,ease:`easeOut`,delay:.12+n*.08},viewport:{once:!0,amount:.4},children:`●`}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`h3`,{className:`text-lg font-semibold text-white`,children:e.name}),(0,_.jsx)(`p`,{className:`mt-2 text-sm text-slate-400`,children:e.price})]}),(0,_.jsx)(`ul`,{className:`mt-2 space-y-3 text-sm text-slate-300`,children:e.features.map((e,n)=>(0,_.jsxs)(t.li,{initial:{opacity:0,x:-10},whileInView:{opacity:1,x:0},transition:{duration:.35,ease:`easeOut`,delay:.1+n*.05},viewport:{once:!0,amount:.35},className:`flex items-start gap-3`,children:[(0,_.jsx)(`span`,{className:`mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-500/15 text-brand-200`,children:(0,_.jsx)(R,{className:`h-3 w-3`})}),(0,_.jsx)(`span`,{children:e})]},e))})]},e.name))})]})}),(0,_.jsx)(t.section,{...N,className:`py-24`,ref:s,children:(0,_.jsx)(`div`,{className:`mx-auto max-w-6xl px-6`,children:(0,_.jsxs)(`div`,{className:`grid gap-10 lg:grid-cols-[1fr_1.1fr]`,children:[(0,_.jsxs)(t.div,{...P(0),className:`space-y-8`,children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`p`,{className:`text-sm uppercase tracking-[0.4em] text-brand-200`,children:`Empieza ahora`}),(0,_.jsx)(`h2`,{className:`mt-4 text-3xl font-semibold text-white md:text-4xl`,children:`¿Listo para tener tu landing page?`}),(0,_.jsx)(`p`,{className:`mt-4 text-base text-slate-300`,children:`Déjanos tus datos y te contactaremos para iniciar el proceso. Sin compromisos.`})]}),(0,_.jsxs)(`div`,{className:`rounded-3xl border border-white/5 bg-slate-900/60 p-6`,children:[(0,_.jsx)(`h3`,{className:`text-lg font-semibold text-white`,children:`Recuerda que incluye:`}),(0,_.jsxs)(`ul`,{className:`mt-4 space-y-3 text-sm text-slate-300`,children:[(0,_.jsxs)(`li`,{className:`flex items-start gap-3`,children:[(0,_.jsx)(`span`,{className:`mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-500/20 text-brand-200`,children:(0,_.jsx)(R,{className:`h-3 w-3`})}),(0,_.jsx)(`span`,{children:`Dominio .com o .co y Hosting por 1 año.`})]}),(0,_.jsxs)(`li`,{className:`flex items-start gap-3`,children:[(0,_.jsx)(`span`,{className:`mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-500/20 text-brand-200`,children:(0,_.jsx)(R,{className:`h-3 w-3`})}),(0,_.jsx)(`span`,{children:`Diseño profesional y carga rápida.`})]}),(0,_.jsxs)(`li`,{className:`flex items-start gap-3`,children:[(0,_.jsx)(`span`,{className:`mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-500/20 text-brand-200`,children:(0,_.jsx)(R,{className:`h-3 w-3`})}),(0,_.jsx)(`span`,{children:`Botón de WhatsApp y Formulario de contacto.`})]})]})]})]}),(0,_.jsxs)(t.form,{...P(1),onSubmit:v,className:`relative overflow-hidden rounded-3xl border border-white/5 bg-slate-900/60 p-8 backdrop-blur`,children:[(0,_.jsx)(`div`,{className:`absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,_rgba(32,155,255,0.24),_transparent_60%)]`}),(0,_.jsx)(`h3`,{className:`text-xl font-semibold text-white`,children:`Solicita tu landing`}),(0,_.jsx)(`p`,{className:`mt-2 text-sm text-slate-300`,children:`Te responderemos en menos de 24 horas.`}),(0,_.jsxs)(`div`,{className:`mt-6 grid gap-4 sm:grid-cols-2`,children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`label`,{htmlFor:`name`,className:`text-xs font-semibold uppercase tracking-wide text-slate-300`,children:`Nombre`}),(0,_.jsx)(`input`,{id:`name`,name:`name`,required:!0,value:e.name,onChange:e=>h(`name`,e.target.value),className:`mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-400/60 focus:outline-none focus:ring-2 focus:ring-brand-500/30`,placeholder:`Tu nombre`})]}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`label`,{htmlFor:`email`,className:`text-xs font-semibold uppercase tracking-wide text-slate-300`,children:`Email`}),(0,_.jsx)(`input`,{id:`email`,name:`email`,type:`email`,required:!0,value:e.email,onChange:e=>h(`email`,e.target.value),className:`mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-400/60 focus:outline-none focus:ring-2 focus:ring-brand-500/30`,placeholder:`tu@email.com`})]})]}),(0,_.jsxs)(`div`,{className:`mt-4 grid gap-4 sm:grid-cols-2`,children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`label`,{htmlFor:`phone`,className:`text-xs font-semibold uppercase tracking-wide text-slate-300`,children:`WhatsApp`}),(0,_.jsx)(`input`,{id:`phone`,name:`phone`,value:e.phone,onChange:e=>h(`phone`,e.target.value),className:`mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-400/60 focus:outline-none focus:ring-2 focus:ring-brand-500/30`,placeholder:`+57 300 000 0000`})]}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`label`,{htmlFor:`company`,className:`text-xs font-semibold uppercase tracking-wide text-slate-300`,children:`Empresa (Opcional)`}),(0,_.jsx)(`input`,{id:`company`,name:`company`,value:e.company,onChange:e=>h(`company`,e.target.value),className:`mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-400/60 focus:outline-none focus:ring-2 focus:ring-brand-500/30`,placeholder:`Nombre de tu negocio`})]})]}),(0,_.jsxs)(`div`,{className:`mt-6`,children:[(0,_.jsx)(`label`,{htmlFor:`message`,className:`text-xs font-semibold uppercase tracking-wide text-slate-300`,children:`¿Qué necesitas? (Opcional)`}),(0,_.jsx)(`textarea`,{id:`message`,name:`message`,rows:4,value:e.message,onChange:e=>h(`message`,e.target.value),placeholder:`Cuéntanos brevemente sobre tu proyecto...`,className:`mt-2 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-400/60 focus:outline-none focus:ring-2 focus:ring-brand-500/30`})]}),r===`error`&&a?(0,_.jsx)(`p`,{className:`mt-4 rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200`,children:a}):null,r===`success`?(0,_.jsx)(`p`,{className:`mt-4 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200`,children:`¡Recibido! Te contactaremos muy pronto.`}):null,(0,_.jsxs)(`button`,{type:`submit`,disabled:r===`loading`,className:`group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 px-8 py-4 text-base font-bold text-white shadow-[0_0_30px_-5px_rgba(32,155,255,0.5)] ring-1 ring-white/20 transition-all hover:scale-[1.02] hover:shadow-[0_0_50px_-10px_rgba(32,155,255,0.7)] disabled:cursor-wait disabled:opacity-70`,children:[r===`loading`?`Enviando...`:`Solicitar mi landing`,(0,_.jsx)(z,{className:`h-5 w-5 transition-transform group-hover:translate-x-1`})]})]})]})})}),(0,_.jsx)(t.section,{id:`faq`,...N,className:`py-24`,children:(0,_.jsxs)(`div`,{className:`mx-auto max-w-5xl px-6`,children:[(0,_.jsxs)(t.div,{...P(0),className:`mx-auto max-w-3xl text-center`,children:[(0,_.jsx)(`p`,{className:`text-sm uppercase tracking-[0.4em] text-brand-200`,children:`Preguntas frecuentes`}),(0,_.jsx)(`h2`,{className:`mt-4 text-3xl font-semibold text-white md:text-4xl`,children:`Resuelve tus dudas`})]}),(0,_.jsx)(`div`,{className:`mt-16 space-y-6`,children:ee.map((e,n)=>(0,_.jsx)(t.div,{...P(n),children:(0,_.jsxs)(`details`,{className:`group rounded-3xl border border-white/5 bg-slate-900/60 p-6`,children:[(0,_.jsxs)(`summary`,{className:`flex cursor-pointer items-center justify-between gap-4 text-left text-lg font-semibold text-white`,children:[e.question,(0,_.jsx)(`span`,{className:`text-brand-300 transition group-open:rotate-45`,children:(0,_.jsx)(le,{className:`h-5 w-5`})})]}),(0,_.jsx)(`p`,{className:`mt-4 text-sm text-slate-300`,children:e.answer})]})},e.question))})]})})]}),(0,_.jsx)(t.footer,{...N,className:`border-t border-white/5 bg-slate-950/90 py-12`,children:(0,_.jsxs)(`div`,{className:`mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between`,children:[(0,_.jsxs)(t.div,{...P(0),children:[(0,_.jsx)(`p`,{className:`text-base font-semibold text-white`,children:`TuLandingYa`}),(0,_.jsx)(`p`,{className:`text-xs text-slate-500`,children:`Landing pages estáticas listas para publicar en Colombia.`})]}),(0,_.jsxs)(t.div,{...P(1),className:`flex flex-col items-start gap-2 text-xs text-slate-500 md:flex-row md:items-center md:gap-6`,children:[(0,_.jsx)(`a`,{href:`#plans`,className:`transition hover:text-brand-200`,children:`Planes`}),(0,_.jsx)(`a`,{href:`#process`,className:`transition hover:text-brand-200`,children:`Cómo trabajamos`}),(0,_.jsx)(`a`,{href:`#faq`,className:`transition hover:text-brand-200`,children:`FAQ`}),(0,_.jsxs)(`p`,{children:[`© `,new Date().getFullYear(),` TuLandingYa. Todos los derechos reservados.`]})]})]})}),(0,_.jsx)(ue,{})]})}function I({className:e}){return(0,_.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,className:e,children:(0,_.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`m5.25 12.75 3.5 3.5 10-10`})})}function ce({className:e}){return(0,_.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,className:e,children:[(0,_.jsx)(`circle`,{cx:`12`,cy:`12`,r:`8`}),(0,_.jsx)(`path`,{strokeLinecap:`round`,d:`M12 8v4l2.5 2.5`})]})}function L({className:e}){return(0,_.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,className:e,children:(0,_.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M7.5 4.5h9l2 3.5-2 3.5h-9l-2-3.5 2-3.5zM7.5 12.5h9l2 3.5-2 3.5h-9l-2-3.5 2-3.5z`})})}function R({className:e}){return(0,_.jsx)(`svg`,{viewBox:`0 0 20 20`,fill:`currentColor`,className:e,children:(0,_.jsx)(`path`,{fillRule:`evenodd`,d:`M16.707 5.293a1 1 0 0 1 0 1.414l-7.5 7.5a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L8.5 12.086l6.793-6.793a1 1 0 0 1 1.414 0Z`,clipRule:`evenodd`})})}function z({className:e}){return(0,_.jsx)(`svg`,{viewBox:`0 0 20 20`,fill:`currentColor`,className:e,children:(0,_.jsx)(`path`,{fillRule:`evenodd`,d:`M7.293 14.707a1 1 0 0 1 0-1.414L10.586 10 7.293 6.707a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0Z`,clipRule:`evenodd`})})}function le({className:e}){return(0,_.jsx)(`svg`,{viewBox:`0 0 20 20`,fill:`currentColor`,className:e,children:(0,_.jsx)(`path`,{d:`M9 9V4a1 1 0 1 1 2 0v5h5a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-5H4a1 1 0 1 1 0-2h5z`})})}function ue(){return(0,_.jsx)(`a`,{href:`https://wa.me/573128225056`,target:`_blank`,rel:`noopener noreferrer`,className:`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-slate-950`,"aria-label":`Chat en WhatsApp`,children:(0,_.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`currentColor`,className:`h-8 w-8`,children:(0,_.jsx)(`path`,{d:`M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z`})})})}var B=F;function V({label:e,value:t,sublabel:n}){return(0,_.jsxs)(`div`,{className:`bg-white border border-gray-100 shadow-sm rounded-xl p-5`,children:[(0,_.jsx)(`p`,{className:`text-sm text-gray-600 font-medium`,children:e}),(0,_.jsx)(`p`,{className:`text-2xl font-semibold text-gray-900 mt-1`,children:t}),n&&(0,_.jsx)(`p`,{className:`text-xs text-gray-500 mt-1`,children:n})]})}const H=[`Nuevo`,`Contactado`,`En seguimiento`,`Convertido`,`Descartado`],de={Nuevo:`bg-blue-50 text-blue-700 border-blue-200`,Contactado:`bg-purple-50 text-purple-700 border-purple-200`,"En seguimiento":`bg-amber-50 text-amber-700 border-amber-200`,Convertido:`bg-emerald-50 text-emerald-700 border-emerald-200`,Descartado:`bg-gray-100 text-gray-600 border-gray-200`};function U(e){let t=[];if(Array.isArray(e.services))t=e.services.map(e=>String(e??``));else if(typeof e.services==`string`)try{let n=JSON.parse(e.services);Array.isArray(n)&&(t=n.map(e=>String(e??``)))}catch{t=[String(e.services)]}let n=[];if(Array.isArray(e.tags))n=e.tags.map(e=>String(e??``));else if(typeof e.tags==`string`)try{let t=JSON.parse(e.tags);Array.isArray(t)&&(n=t.map(e=>String(e??``)))}catch{let t=e.tags.trim();t&&(n=[t])}let r=typeof e.status==`string`?e.status.trim():``,i=H.includes(r)?r:`Nuevo`;return{id:Number(e.id)||Date.now(),name:typeof e.name==`string`?e.name:``,email:typeof e.email==`string`?e.email:``,phone:typeof e.phone==`string`?e.phone:``,company:typeof e.company==`string`?e.company:``,services:t,tags:n,budget_range:typeof e.budget_range==`string`?e.budget_range:typeof e.budgetRange==`string`?e.budgetRange:``,message:typeof e.message==`string`?e.message:``,created_at:typeof e.created_at==`string`?e.created_at:typeof e.createdAt==`string`?e.createdAt:new Date().toISOString(),status:i,note:typeof e.note==`string`?e.note:``,assignedTo:typeof e.assigned_to==`string`?e.assigned_to:typeof e.assignedTo==`string`?e.assignedTo:``,lastContactAt:typeof e.last_contact_at==`string`?e.last_contact_at:typeof e.lastContactAt==`string`?e.lastContactAt:null}}function fe(e){return{id:Number(e.id)||Date.now(),name:typeof e.name==`string`?e.name:``,email:typeof e.email==`string`&&e.email.trim()?e.email:null,role:typeof e.role==`string`&&e.role.trim()?e.role:null,photoUrl:typeof e.photoUrl==`string`?e.photoUrl:typeof e.photo_url==`string`?e.photo_url:null,canManageLeads:typeof e.canManageLeads==`boolean`?e.canManageLeads:!0,canManageTasks:typeof e.canManageTasks==`boolean`?e.canManageTasks:!0}}function W(e){let t=new Date(e);return new Intl.DateTimeFormat(`es-CO`,{year:`numeric`,month:`short`,day:`numeric`,hour:`2-digit`,minute:`2-digit`}).format(t)}function G(e){let t=new Date(e);if(Number.isNaN(t.getTime()))return`Fecha inválida`;let n=t.getTime()-Date.now(),r=[{unit:`year`,ms:1e3*60*60*24*365},{unit:`month`,ms:1e3*60*60*24*30},{unit:`week`,ms:1e3*60*60*24*7},{unit:`day`,ms:1e3*60*60*24},{unit:`hour`,ms:1e3*60*60},{unit:`minute`,ms:1e3*60}],i=new Intl.RelativeTimeFormat(`es-CO`,{numeric:`auto`});for(let{unit:e,ms:t}of r){let r=n/t;if(Math.abs(r)>=1)return i.format(Math.round(r),e)}return i.format(Math.round(n/1e3),`second`)}function K(e){if(e.status===`Convertido`||e.status===`Descartado`)return!1;let t=e.lastContactAt?new Date(e.lastContactAt):null;return t?(Date.now()-t.getTime())/(1e3*60*60*24)>5:!0}function pe(e,t){let n=K(e),r=K(t);return n===r?(e.lastContactAt?new Date(e.lastContactAt).getTime():0)-(t.lastContactAt?new Date(t.lastContactAt).getTime():0):Number(r)-Number(n)}function q({lead:e,onOpenNotes:t,onCopyEmail:n,onMarkContact:r,onDeleteLead:i}){let{attributes:a,listeners:o,setNodeRef:l,transform:u,isDragging:d}=s({id:e.id}),f=K(e),p=e.lastContactAt?G(e.lastContactAt):`Sin contacto`;return(0,_.jsxs)(`article`,{ref:l,style:{transform:c.Transform.toString(u),transition:d?`none`:`transform 150ms ease`,zIndex:d?50:`auto`},className:`group cursor-grab rounded-lg border bg-white p-3 shadow-sm transition-all ${d?`border-blue-300 shadow-lg ring-2 ring-blue-200`:f?`border-amber-300 shadow-md ring-1 ring-amber-200`:`border-gray-200 hover:shadow-md`}`,...o,...a,children:[(0,_.jsxs)(`header`,{className:`flex items-start justify-between gap-2`,children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`p`,{className:`text-sm font-semibold text-gray-900`,children:e.name}),(0,_.jsx)(`button`,{type:`button`,onClick:()=>n(e.email),className:`text-xs text-blue-600 hover:text-blue-800`,children:e.email})]}),e.note&&(0,_.jsx)(`span`,{className:`rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-blue-600`,children:`Nota`})]}),(0,_.jsxs)(`div`,{className:`mt-2 space-y-2 text-xs text-gray-600`,children:[(0,_.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,_.jsxs)(`span`,{className:`inline-flex items-center gap-1 text-gray-700`,children:[(0,_.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`12`,height:`12`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,_.jsx)(`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`}),(0,_.jsx)(`polyline`,{points:`7 10 12 15 17 10`}),(0,_.jsx)(`line`,{x1:`12`,x2:`12`,y1:`15`,y2:`3`})]}),e.company||`Sin empresa`]}),(0,_.jsx)(`span`,{className:`rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-gray-700`,children:e.budget_range||`Sin presupuesto`})]}),(0,_.jsxs)(`div`,{className:`flex flex-wrap gap-1`,children:[e.services.length===0?(0,_.jsx)(`span`,{className:`rounded border border-dashed border-gray-300 px-2 py-0.5 text-[10px] text-gray-500`,children:`Sin servicios`}):e.services.slice(0,3).map(e=>(0,_.jsx)(`span`,{className:`rounded-full bg-gray-100 px-2 py-0.5 text-[10px] text-gray-700`,children:e},e)),e.services.length>3&&(0,_.jsxs)(`span`,{className:`rounded-full bg-gray-200 px-2 py-0.5 text-[10px] text-gray-700`,children:[`+`,e.services.length-3]})]}),e.tags&&e.tags.length>0&&(0,_.jsx)(`div`,{className:`flex flex-wrap gap-1`,children:e.tags.map(e=>(0,_.jsx)(`span`,{className:`rounded-full bg-indigo-50 px-1.5 py-0.5 text-[9px] font-medium text-indigo-600 border border-indigo-100`,children:e},e))}),e.message&&(0,_.jsx)(`p`,{className:`max-h-20 overflow-hidden text-ellipsis text-[11px] leading-relaxed text-gray-600`,children:e.message}),(0,_.jsxs)(`div`,{className:`flex items-center justify-between text-[11px]`,children:[(0,_.jsxs)(`span`,{className:`inline-flex items-center gap-1 text-gray-600`,children:[(0,_.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`12`,height:`12`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,_.jsx)(`path`,{d:`M20 21v-2a4 4 0 0 0-3-3.87`}),(0,_.jsx)(`path`,{d:`M4 21v-2a4 4 0 0 1 3-3.87`}),(0,_.jsx)(`circle`,{cx:`12`,cy:`7`,r:`4`})]}),e.assignedTo||`Sin responsable`]}),(0,_.jsx)(`span`,{className:`${f?`text-amber-600`:`text-gray-500`}`,children:p})]})]}),(0,_.jsxs)(`footer`,{className:`mt-3 flex flex-wrap items-center justify-between gap-2 text-[11px] text-gray-500`,children:[(0,_.jsx)(`span`,{children:W(e.created_at)}),(0,_.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,_.jsx)(`button`,{type:`button`,onClick:()=>r(e.id),className:`font-semibold text-emerald-600 hover:text-emerald-700`,children:`Registrar contacto`}),(0,_.jsx)(`button`,{type:`button`,onClick:()=>t(e.id),className:`font-semibold text-blue-600 hover:text-blue-800`,children:e.note||e.tags&&e.tags.length>0?`Editar nota / Tags`:`Agregar nota / Tags`}),(0,_.jsx)(`button`,{type:`button`,onClick:()=>i(e.id),className:`font-semibold text-red-600 hover:text-red-700`,children:`Eliminar`})]})]})]})}function me({status:e,leads:t,onOpenNotes:n,onCopyEmail:i,onMarkContact:a,onDeleteLead:o}){let{setNodeRef:s,isOver:c}=r({id:e});return(0,_.jsxs)(`div`,{ref:s,className:`flex min-w-[260px] flex-1 flex-col rounded-xl border bg-gray-50 transition-colors ${c?`border-blue-300 bg-blue-50/60`:`border-gray-200`}`,children:[(0,_.jsxs)(`div`,{className:`flex items-center justify-between gap-2 border-b border-gray-200 px-4 py-3`,children:[(0,_.jsx)(`span`,{className:`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-semibold ${de[e]}`,children:e}),(0,_.jsx)(`span`,{className:`text-xs font-medium text-gray-600`,children:t.length})]}),(0,_.jsx)(`div`,{className:`flex-1 space-y-3 overflow-y-auto px-3 py-3`,children:t.map(e=>(0,_.jsx)(q,{lead:e,onOpenNotes:n,onCopyEmail:i,onMarkContact:a,onDeleteLead:o},e.id))})]})}function J({task:e,assignmentOptions:t,onDelete:n,onUpdateStatus:r,onAssign:i}){let{attributes:a,listeners:o,setNodeRef:l,transform:u,isDragging:d}=s({id:`task-${e.id}`,data:{type:`task`,task:e}});return(0,_.jsxs)(`div`,{ref:l,style:{transform:c.Transform.toString(u),transition:d?`none`:`transform 150ms ease`,zIndex:d?50:`auto`,opacity:d?.5:1},className:`bg-white p-3 rounded-lg shadow-sm border border-gray-200 group cursor-grab ${d?`ring-2 ring-blue-200`:`hover:shadow-md`}`,...o,...a,children:[(0,_.jsxs)(`div`,{className:`flex justify-between items-start mb-2`,children:[(0,_.jsxs)(`div`,{children:[e.brandName&&(0,_.jsx)(`span`,{className:`inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold mb-1`,style:{backgroundColor:(e.brandColor||`#e5e7eb`)+`30`,color:e.brandColor||`#374151`},children:e.brandName}),(0,_.jsx)(`p`,{className:`font-medium text-gray-900 text-sm`,children:e.title})]}),(0,_.jsx)(`button`,{onClick:t=>{t.stopPropagation(),n(e.id)},className:`text-gray-400 hover:text-red-500`,onPointerDown:e=>e.stopPropagation(),children:`×`})]}),(0,_.jsxs)(`div`,{className:`flex flex-col gap-2 mt-3`,children:[(0,_.jsxs)(`select`,{value:e.assignedToId||``,onChange:t=>{let n=t.target.value?Number(t.target.value):null;i(e.id,n)},className:`text-xs border-gray-200 rounded bg-gray-50 py-1 px-2 w-full`,onPointerDown:e=>e.stopPropagation(),children:[(0,_.jsx)(`option`,{value:``,children:`Sin asignar`}),t.map(e=>(0,_.jsx)(`option`,{value:e.id,children:e.name},e.id))]}),(0,_.jsxs)(`select`,{value:e.status,onChange:t=>r(e.id,t.target.value),className:`text-xs border-none rounded py-1 px-2 w-full font-medium ${e.status===`completed`?`bg-green-50 text-green-700`:e.status===`in_progress`?`bg-blue-50 text-blue-700`:`bg-gray-100 text-gray-600`}`,onPointerDown:e=>e.stopPropagation(),children:[(0,_.jsx)(`option`,{value:`pending`,children:`Pendiente`}),(0,_.jsx)(`option`,{value:`in_progress`,children:`En Progreso`}),(0,_.jsx)(`option`,{value:`completed`,children:`Completada`})]})]}),(0,_.jsxs)(`div`,{className:`mt-2 flex justify-between items-center text-[10px] text-gray-400`,children:[(0,_.jsx)(`span`,{children:e.dueDate?`Vence: ${new Date(e.dueDate).toLocaleDateString()}`:``}),(0,_.jsx)(`span`,{children:new Date(e.createdAt).toLocaleDateString()})]})]})}function Y({status:e,tasks:t,assignmentOptions:n,onDelete:i,onUpdateStatus:a,onAssign:o}){let{setNodeRef:s,isOver:c}=r({id:`column-${e}`,data:{type:`column`,status:e}});return(0,_.jsxs)(`div`,{ref:s,className:`bg-gray-100 rounded-xl p-4 transition-colors ${c?`bg-blue-50 ring-2 ring-blue-200`:``}`,children:[(0,_.jsxs)(`h3`,{className:`font-semibold text-gray-700 mb-4 flex items-center justify-between`,children:[e===`pending`?`Pendientes`:e===`in_progress`?`En Progreso`:`Completadas`,(0,_.jsx)(`span`,{className:`bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full text-xs`,children:t.length})]}),(0,_.jsx)(`div`,{className:`space-y-3 min-h-[100px]`,children:t.map(e=>(0,_.jsx)(J,{task:e,assignmentOptions:n,onDelete:i,onUpdateStatus:a,onAssign:o},e.id))})]})}function he(){let[e,t]=(0,g.useState)([]),[n,r]=(0,g.useState)([]),[i,a]=(0,g.useState)([]),[o,s]=(0,g.useState)([]),[c,l]=(0,g.useState)(!1),[u,d]=(0,g.useState)(!1),[f,p]=(0,g.useState)(!1),[m,ee]=(0,g.useState)(!1),[h,_]=(0,g.useState)(!1),[v,y]=(0,g.useState)(`admin`),[b,te]=(0,g.useState)(``),[x,S]=(0,g.useState)(!1),[C,w]=(0,g.useState)(``),[T,E]=(0,g.useState)(``),[D,ne]=(0,g.useState)(`Todos`),[O,re]=(0,g.useState)(`Todos`),[k,ie]=(0,g.useState)(`Todos`),[A,ae]=(0,g.useState)(`Todos`),[j,oe]=(0,g.useState)(`Todos`),[se,M]=(0,g.useState)(!1),[N,P]=(0,g.useState)(``),[F,I]=(0,g.useState)(null),[ce,L]=(0,g.useState)(``),[R,z]=(0,g.useState)(`table`),[le,ue]=(0,g.useState)(`list`),[B,V]=(0,g.useState)({name:``,email:``,role:``,canManageLeads:!0,canManageTasks:!0,photo:null}),[de,G]=(0,g.useState)(null),[q,me]=(0,g.useState)(`leads`),J=()=>{V({name:``,email:``,role:``,canManageLeads:!0,canManageTasks:!0,photo:null}),G(null)},Y=(0,g.useCallback)(e=>{E(e),setTimeout(()=>E(``),3e3)},[]),he=async e=>{if(!e){Y(`No hay información para copiar`);return}try{await navigator.clipboard.writeText(e),Y(`Copiado al portapapeles`)}catch{Y(`No se pudo copiar`)}},ge=e=>e.map(e=>e.email).filter(Boolean).join(`,`),_e=(0,g.useCallback)(e=>[...e].sort((e,t)=>e.name.localeCompare(t.name)),[]),ve=(0,g.useCallback)(async e=>{d(!0);try{let t=await fetch(`/api/team-members`,{headers:{"x-admin-password":e}});if(!t.ok)throw Error(`Respuesta inválida del servidor`);let n=await t.json();r(_e((Array.isArray(n)?n:[]).map(fe).filter(e=>e.name.trim().length>0)))}catch(e){console.error(e),Y(`No se pudieron cargar los responsables`)}finally{d(!1)}},[Y,_e]),X=(0,g.useCallback)(async e=>{l(!0),w(``);try{let n=await fetch(`/api/leads`,{headers:{"x-admin-password":e}});if(n.ok){let r=await n.json();t((Array.isArray(r)?r:[]).map(U)),await ve(e),S(!0),localStorage.setItem(`admin_pwd`,e)}else w(`Contraseña incorrecta o error de conexión`),S(!1)}catch(e){console.error(e),w(`Error al cargar los datos`)}finally{l(!1)}},[ve]);(0,g.useEffect)(()=>{let e=localStorage.getItem(`admin_pwd`);e&&(te(e),X(e))},[X]);let ye=e=>{e.preventDefault(),X(b)},be=()=>{localStorage.removeItem(`admin_pwd`),S(!1),te(``),t([]),r([]),d(!1),_(!1),J()},xe=(n,r)=>{let i=e.find(e=>e.id===n),a=i?.status??`Nuevo`,o=i?.lastContactAt??null,s=r===`Contactado`||r===`En seguimiento`?new Date().toISOString():void 0;t(e=>e.map(e=>e.id===n?{...e,status:r,lastContactAt:s??e.lastContactAt}:e)),fetch(`/api/leads/${n}`,{method:`PATCH`,headers:{"Content-Type":`application/json`,"x-admin-password":b},body:JSON.stringify(s?{status:r,lastContactAt:s}:{status:r})}).then(e=>{if(!e.ok)throw Error(`Respuesta inválida del servidor`);return e.json()}).then(e=>{e&&t(t=>t.map(t=>t.id===n?U(e):t)),Y(`Estado actualizado`)}).catch(e=>{console.error(e),t(e=>e.map(e=>e.id===n?{...e,status:a,lastContactAt:o}:e)),Y(`No se pudo guardar el estado`)})},Se=(n,r)=>{let i=r.trim(),a=e.find(e=>e.id===n)?.assignedTo??``;i!==a.trim()&&(t(e=>e.map(e=>e.id===n?{...e,assignedTo:i}:e)),fetch(`/api/leads/${n}`,{method:`PATCH`,headers:{"Content-Type":`application/json`,"x-admin-password":b},body:JSON.stringify({assignedTo:i})}).then(e=>{if(!e.ok)throw Error(`Respuesta inválida del servidor`);return e.json()}).then(e=>{e&&t(t=>t.map(t=>t.id===n?U(e):t)),Y(`Responsable actualizado`)}).catch(e=>{console.error(e),t(e=>e.map(e=>e.id===n?{...e,assignedTo:a}:e)),Y(`No se pudo asignar el lead`)}))},Ce=n=>{if(!b.trim()){Y(`Debes iniciar sesión nuevamente`);return}let r=e.find(e=>e.id===n);if(!r||!window.confirm(`¿Eliminar el lead "${r.name||`#${r.id}`}"? Esta acción no se puede deshacer.`))return;let i=[...e];t(e=>e.filter(e=>e.id!==n)),fetch(`/api/leads/${n}`,{method:`DELETE`,headers:{"x-admin-password":b}}).then(e=>{if(!e.ok)throw Error(`Respuesta inválida del servidor`);return e.json()}).then(()=>{Y(`Lead eliminado`)}).catch(e=>{console.error(e),t(i),Y(`No se pudo eliminar el lead`)})},we=e=>t=>{let n=t.target.value;V(t=>({...t,[e]:n}))},Te=e=>t=>{let n=t.target.checked;V(t=>({...t,[e]:n}))},Ee=e=>{e.target.files&&e.target.files[0]&&V(t=>({...t,photo:e.target.files[0]}))},De=e=>{G(e.id),V({name:e.name,email:e.email??``,role:e.role??``,canManageLeads:e.canManageLeads,canManageTasks:e.canManageTasks,photo:null})},Oe=async e=>{if(e.preventDefault(),h)return;let t=b.trim();if(!t){Y(`Debes iniciar sesión nuevamente`);return}let n=B.name.trim(),i=B.email.trim(),a=B.role.trim();if(!n){Y(`El nombre del responsable es obligatorio`);return}let o=`/api`,s=de!==null,c=s?`${o}/team-members/${de}`:`${o}/team-members`,l=s?`PATCH`:`POST`,u=new FormData;u.append(`name`,n),u.append(`email`,i),u.append(`role`,a),u.append(`canManageLeads`,String(B.canManageLeads)),u.append(`canManageTasks`,String(B.canManageTasks)),B.photo&&u.append(`photo`,B.photo),_(!0);try{let e=await fetch(c,{method:l,headers:{"x-admin-password":t},body:u});if(!e.ok)throw Error(`Respuesta inválida del servidor`);let n=await e.json();if(!n)throw Error(`Respuesta vacía del servidor`);let i=fe(n);if(!i.name.trim())throw Error(`Datos inválidos del responsable`);r(e=>_e(s?e.map(e=>e.id===i.id?i:e):[...e,i])),J(),Y(s?`Responsable actualizado`:`Responsable agregado`)}catch(e){console.error(e),Y(`No se pudo guardar el responsable`)}finally{_(!1)}},ke=()=>{J()},Ae=async e=>{let t=b.trim();if(!t){Y(`Debes iniciar sesión nuevamente`);return}let i=n.find(t=>t.id===e);if(!i||!window.confirm(`¿Eliminar a "${i.name}" del equipo?`))return;let a=[...n];r(t=>t.filter(t=>t.id!==e));try{if(!(await fetch(`/api/team-members/${e}`,{method:`DELETE`,headers:{"x-admin-password":t}})).ok)throw Error(`Error al eliminar`);Y(`Miembro eliminado`)}catch(e){console.error(e),r(a),Y(`No se pudo eliminar el miembro`)}},je=n=>{let r=e.find(e=>e.id===n);if(!r)return;if(!b){Y(`Debes iniciar sesión nuevamente`);return}let i=r.status,a=r.lastContactAt??null,o=new Date().toISOString(),s=r.status===`Nuevo`;t(e=>e.map(e=>e.id===n?{...e,lastContactAt:o,status:s?`Contactado`:e.status}:e));let c={lastContactAt:o};s&&(c.status=`Contactado`),fetch(`/api/leads/${n}`,{method:`PATCH`,headers:{"Content-Type":`application/json`,"x-admin-password":b},body:JSON.stringify(c)}).then(e=>{if(!e.ok)throw Error(`Respuesta inválida del servidor`);return e.json()}).then(e=>{e&&t(t=>t.map(t=>t.id===n?U(e):t)),Y(`Seguimiento registrado`)}).catch(e=>{console.error(e),t(e=>e.map(e=>e.id===n?{...e,status:i,lastContactAt:a}:e)),Y(`No se pudo registrar el contacto`)})},Me=(e,t)=>{if(t===`__custom__`){let t=window.prompt(`Nombre del responsable`);if(t===null)return;Se(e,t);return}Se(e,t)},Ne=t=>{I(t),L(e.find(e=>e.id===t)?.note??``)},Pe=()=>{if(!F)return;let n=F,r=e.find(e=>e.id===n)?.note??``;t(e=>e.map(e=>e.id===n?{...e,note:ce}:e)),fetch(`/api/leads/${n}`,{method:`PATCH`,headers:{"Content-Type":`application/json`,"x-admin-password":b},body:JSON.stringify({note:ce})}).then(e=>{if(!e.ok)throw Error(`Respuesta inválida del servidor`);return e.json()}).then(e=>{e&&t(t=>t.map(t=>t.id===n?U(e):t)),Y(`Nota guardada`),I(null),L(``)}).catch(e=>{console.error(e),t(e=>e.map(e=>e.id===n?{...e,note:r}:e)),L(r),Y(`No se pudo guardar la nota`)})},Z=(e,n,r)=>{t(t=>t.map(t=>t.id===e?{...t,tags:n}:t)),fetch(`/api/leads/${e}`,{method:`PATCH`,headers:{"Content-Type":`application/json`,"x-admin-password":b},body:JSON.stringify({tags:n})}).then(e=>{if(!e.ok)throw Error(`Error al actualizar tags`);return e.json()}).then(n=>{n&&t(t=>t.map(t=>t.id===e?U(n):t))}).catch(n=>{console.error(n),t(t=>t.map(t=>t.id===e?{...t,tags:r}:t)),Y(`No se pudieron actualizar las etiquetas`)})},Fe=(t,n)=>{let r=n.trim();if(!r)return;let i=e.find(e=>e.id===t);if(!i||i.tags&&i.tags.includes(r))return;let a=i.tags||[];Z(t,[...a,r],a)},Ie=(t,n)=>{let r=e.find(e=>e.id===t);if(!r)return;let i=r.tags||[];Z(t,i.filter(e=>e!==n),i)},Q=(0,g.useMemo)(()=>{let t=N.trim().toLowerCase();return e.filter(e=>!(D===`Todos`||e.status===D)||!(O===`Todos`||O===`Sin asignar`&&!e.assignedTo||e.assignedTo?.trim().toLowerCase()===O.trim().toLowerCase())||!(k===`Todos`||e.services.map(e=>e.toLowerCase()).includes(k.toLowerCase()))||!(A===`Todos`||e.tags&&e.tags.includes(A))||se&&!K(e)?!1:t?[e.name,e.email,e.phone,e.company,e.message,e.assignedTo].filter(Boolean).join(` `).toLowerCase().includes(t):!0)},[e,D,O,k,A,N,se]),Le=()=>{let e=[`Fecha`,`Nombre`,`Email`,`Teléfono`,`Empresa`,`Servicios`,`Presupuesto`,`Asignado`,`Último contacto`,`Estado`,`Nota`,`Mensaje`],t=Q.map(e=>[W(e.created_at),e.name,e.email,e.phone,e.company,e.services.join(` | `),e.budget_range,e.assignedTo,e.lastContactAt?W(e.lastContactAt):``,e.status,e.note,e.message].map(e=>{let t=e?e.toString():``;return t.includes(`,`)||t.includes(`"`)||t.includes(`
`)?`"${t.replace(/"/g,`""`)}"`:t}).join(`,`)),n=[e.join(`,`),...t].join(`
`),r=new Blob([n],{type:`text/csv;charset=utf-8;`}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=`leads-${new Date().toISOString()}.csv`,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(i),Y(`CSV descargado`)},Re=(0,g.useMemo)(()=>{let t=H.reduce((e,t)=>(e[t]=0,e),{});e.forEach(e=>{t[e.status]=(t[e.status]??0)+1});let n=e.length,r=t.Convertido??0,i=n===0?0:Math.round(r/n*1e3)/10,a=new Date;return a.setDate(a.getDate()-7),{totalLeads:n,converted:r,conversionRate:i,leadsThisWeek:e.filter(e=>new Date(e.created_at)>=a).length,contactsThisWeek:e.filter(e=>e.lastContactAt&&new Date(e.lastContactAt)>=a).length,unassigned:e.filter(e=>!e.assignedTo?.trim()).length,needingFollowUp:e.filter(e=>K(e)).length,totalsByStatus:t,serviceCount:e.reduce((e,t)=>(t.services.forEach(t=>{let n=t.trim();n&&(e[n]=(e[n]??0)+1)}),e),{})}},[e]),ze=(0,g.useMemo)(()=>H.reduce((e,t)=>(e[t]=Q.filter(e=>e.status===t),e),{}),[Q]),Be=(0,g.useMemo)(()=>e.filter(e=>K(e)).sort(pe).slice(0,6),[e]),Ve=(0,g.useMemo)(()=>{let t=new Map;return e.forEach(e=>{let n=e.assignedTo?.trim()||`Sin asignar`;t.set(n,(t.get(n)??0)+1)}),Array.from(t.entries()).sort((e,t)=>t[1]-e[1])},[e]),He=(0,g.useMemo)(()=>[...e].sort((e,t)=>new Date(t.created_at).getTime()-new Date(e.created_at).getTime()).slice(0,6),[e]),Ue=(0,g.useMemo)(()=>{let t=new Set;return n.forEach(e=>{if(e.canManageLeads){let n=e.name.trim();n&&t.add(n)}}),e.forEach(e=>{let n=e.assignedTo?.trim();n&&t.add(n)}),Array.from(t).sort((e,t)=>e.localeCompare(t))},[e,n]),We=(0,g.useMemo)(()=>n.filter(e=>e.canManageTasks).sort((e,t)=>e.name.localeCompare(t.name)),[n]),$=(0,g.useCallback)(async e=>{ee(!0);try{let t=await fetch(`/api/brands`,{headers:{"x-admin-password":e}});if(!t.ok)throw Error(`Error al cargar marcas`);s(await t.json())}catch(e){console.error(e),Y(`No se pudieron cargar las marcas`)}finally{ee(!1)}},[Y]),Ge=async(e,t)=>{let n=b.trim();if(n)try{let r=await fetch(`/api/brands`,{method:`POST`,headers:{"Content-Type":`application/json`,"x-admin-password":n},body:JSON.stringify({name:e,color:t})});if(!r.ok)throw Error(`Error al crear marca`);let i=await r.json();s(e=>[...e,i].sort((e,t)=>e.name.localeCompare(t.name))),Y(`Marca creada`)}catch(e){console.error(e),Y(`No se pudo crear la marca`)}},Ke=async e=>{let t=b.trim();if(!(!t||!window.confirm(`¿Eliminar esta marca? Las tareas asociadas perderán la marca.`))){s(t=>t.filter(t=>t.id!==e));try{await fetch(`/api/brands/${e}`,{method:`DELETE`,headers:{"x-admin-password":t}}),Y(`Marca eliminada`)}catch(e){console.error(e),Y(`Error al eliminar marca`)}}},qe=(0,g.useCallback)(async e=>{p(!0);try{let t=await fetch(`/api/tasks`,{headers:{"x-admin-password":e}});if(!t.ok)throw Error(`Error al cargar tareas`);a(await t.json())}catch(e){console.error(e),Y(`No se pudieron cargar las tareas`)}finally{p(!1)}},[Y]),Je=async(e,t,n,r,i)=>{let o=b.trim();if(o)try{let s=await fetch(`/api/tasks`,{method:`POST`,headers:{"Content-Type":`application/json`,"x-admin-password":o},body:JSON.stringify({title:e,assignedToId:t,brandId:n,dueDate:r,startDate:i})});if(!s.ok)throw Error(`Error al crear tarea`);let c=await s.json();a(e=>[c,...e]),Y(`Tarea creada`)}catch(e){console.error(e),Y(`No se pudo crear la tarea`)}},Ye=async(e,t)=>{let n=b.trim();if(n){a(n=>n.map(n=>n.id===e?{...n,status:t}:n));try{await fetch(`/api/tasks/${e}`,{method:`PATCH`,headers:{"Content-Type":`application/json`,"x-admin-password":n},body:JSON.stringify({status:t})})}catch(e){console.error(e),Y(`Error al actualizar tarea`)}}};return(0,g.useEffect)(()=>{x&&(q===`tasks`?(qe(b),$(b)):q===`brands`&&$(b))},[x,q,qe,$,b]),{leads:e,teamMembers:n,loading:c,membersLoading:u,teamMemberSaving:h,username:v,password:b,isAuthenticated:x,error:C,notification:T,statusFilter:D,assignedFilter:O,serviceFilter:k,tagFilter:A,showAttentionOnly:se,searchTerm:N,activeLeadId:F,noteDraft:ce,viewMode:R,teamMemberForm:B,editingMemberId:de,activeTab:q,filteredLeads:Q,metrics:Re,leadsByStatus:ze,attentionLeads:Be,assignmentStats:Ve,recentLeads:He,assignmentOptions:Ue,serviceOptions:(0,g.useMemo)(()=>{let t=new Set;return e.forEach(e=>{e.services.forEach(e=>{let n=e.trim();n&&t.add(n)})}),Array.from(t).sort((e,t)=>e.localeCompare(t))},[e]),tagOptions:(0,g.useMemo)(()=>{let t=new Set;return e.forEach(e=>{e.tags&&e.tags.forEach(e=>{let n=e.trim();n&&t.add(n)})}),Array.from(t).sort((e,t)=>e.localeCompare(t))},[e]),activeLead:F?e.find(e=>e.id===F):null,setUsername:y,setPassword:te,setStatusFilter:ne,setAssignedFilter:re,setServiceFilter:ie,setTagFilter:ae,setShowAttentionOnly:M,setSearchTerm:P,setActiveLeadId:I,setNoteDraft:L,setViewMode:z,setActiveTab:me,handleLogin:ye,handleLogout:be,handleStatusChange:xe,handleAssignLead:Se,handleDeleteLead:Ce,handleTeamMemberFieldChange:we,handleTeamMemberCheckboxChange:Te,handleTeamMemberPhotoChange:Ee,handleEditTeamMember:De,handleTeamMemberSubmit:Oe,handleCancelTeamMemberEdit:ke,handleDeleteTeamMember:Ae,handleMarkContact:je,handleAssignmentSelect:Me,handleOpenNotes:Ne,handleSaveNote:Pe,handleAddTag:Fe,handleRemoveTag:Ie,handleExportCSV:Le,copyToClipboard:he,getEmails:ge,fetchLeads:X,fetchTasks:qe,fetchBrands:$,tasks:i,brands:o,tasksLoading:f,brandsLoading:m,taskAssignmentOptions:We,handleCreateTask:Je,handleUpdateTaskStatus:Ye,handleDeleteTask:async e=>{let t=b.trim();if(!(!t||!window.confirm(`¿Eliminar esta tarea?`))){a(t=>t.filter(t=>t.id!==e));try{await fetch(`/api/tasks/${e}`,{method:`DELETE`,headers:{"x-admin-password":t}}),Y(`Tarea eliminada`)}catch(e){console.error(e),Y(`Error al eliminar tarea`)}}},handleAssignTask:async(e,t)=>{let n=b.trim();if(n){a(n=>n.map(n=>n.id===e?{...n,assignedToId:t}:n));try{await fetch(`/api/tasks/${e}`,{method:`PATCH`,headers:{"Content-Type":`application/json`,"x-admin-password":n},body:JSON.stringify({assignedToId:t})})}catch(e){console.error(e),Y(`Error al asignar tarea`)}}},handleTaskDragEnd:e=>{let{active:t,over:n}=e;if(!n)return;let r=Number(t.id.toString().replace(`task-`,``)),a=n.id.toString();if(a.startsWith(`column-`)){let e=a.replace(`column-`,``),t=i.find(e=>e.id===r);t&&t.status!==e&&Ye(r,e)}},handleDragEnd:t=>{let n=Number(t.active.id),r=t.over?.id;if(Number.isNaN(n)||!r||!H.includes(r))return;let i=r,a=e.find(e=>e.id===n);a&&a.status!==i&&xe(n,i)},handleCreateBrand:Ge,handleDeleteBrand:Ke,brandFilter:j,setBrandFilter:oe,taskViewMode:le,setTaskViewMode:ue}}function ge({brands:e,loading:t,onCreate:n,onDelete:r}){let[i,a]=(0,g.useState)(``),[o,s]=(0,g.useState)(`#3b82f6`);return(0,_.jsxs)(`div`,{className:`space-y-6`,children:[(0,_.jsxs)(`div`,{className:`bg-white p-6 rounded-xl border border-gray-200 shadow-sm`,children:[(0,_.jsx)(`h2`,{className:`text-lg font-semibold text-gray-900 mb-4`,children:`Gestionar Marcas`}),(0,_.jsxs)(`form`,{onSubmit:e=>{e.preventDefault(),i.trim()&&(n(i.trim(),o),a(``),s(`#3b82f6`))},className:`flex gap-4 items-end`,children:[(0,_.jsxs)(`div`,{className:`flex-1`,children:[(0,_.jsx)(`label`,{className:`block text-sm font-medium text-gray-700 mb-1`,children:`Nombre de la marca`}),(0,_.jsx)(`input`,{type:`text`,value:i,onChange:e=>a(e.target.value),className:`w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none`,placeholder:`Ej. Cliente A`,required:!0})]}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`label`,{className:`block text-sm font-medium text-gray-700 mb-1`,children:`Color`}),(0,_.jsx)(`input`,{type:`color`,value:o,onChange:e=>s(e.target.value),className:`h-10 w-20 p-1 border border-gray-300 rounded-lg cursor-pointer`})]}),(0,_.jsx)(`button`,{type:`submit`,disabled:t,className:`px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50`,children:t?`Guardando...`:`Agregar Marca`})]})]}),(0,_.jsxs)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`,children:[e.map(e=>(0,_.jsxs)(`div`,{className:`bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex justify-between items-center`,children:[(0,_.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,_.jsx)(`div`,{className:`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs`,style:{backgroundColor:e.color},children:e.name.charAt(0).toUpperCase()}),(0,_.jsx)(`span`,{className:`font-medium text-gray-900`,children:e.name})]}),(0,_.jsx)(`button`,{onClick:()=>r(e.id),className:`text-gray-400 hover:text-red-500 transition-colors`,children:(0,_.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,_.jsx)(`path`,{d:`M3 6h18`}),(0,_.jsx)(`path`,{d:`M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6`}),(0,_.jsx)(`path`,{d:`M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2`})]})})]},e.id)),e.length===0&&(0,_.jsx)(`div`,{className:`col-span-full text-center py-10 text-gray-500`,children:`No hay marcas registradas.`})]})]})}function _e({tasks:e}){let[t,n]=(0,g.useState)(new Date),{days:r,firstDay:i}=(e=>{let t=e.getFullYear(),n=e.getMonth();return{days:new Date(t,n+1,0).getDate(),firstDay:new Date(t,n,1).getDay()}})(t),a=[`Enero`,`Febrero`,`Marzo`,`Abril`,`Mayo`,`Junio`,`Julio`,`Agosto`,`Septiembre`,`Octubre`,`Noviembre`,`Diciembre`],o=()=>{n(new Date(t.getFullYear(),t.getMonth()-1,1))},s=()=>{n(new Date(t.getFullYear(),t.getMonth()+1,1))},c=n=>e.filter(e=>{if(!e.dueDate&&!e.startDate)return!1;let r=new Date(t.getFullYear(),t.getMonth(),n).getTime(),i=e.startDate?new Date(e.startDate).setHours(0,0,0,0):null,a=e.dueDate?new Date(e.dueDate).setHours(0,0,0,0):null;return i&&a?r>=i&&r<=a:i?r===i:a?r===a:!1});return(0,_.jsxs)(`div`,{className:`bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden`,children:[(0,_.jsxs)(`div`,{className:`p-4 flex items-center justify-between border-b border-gray-200`,children:[(0,_.jsxs)(`h2`,{className:`text-lg font-semibold text-gray-900`,children:[a[t.getMonth()],` `,t.getFullYear()]}),(0,_.jsxs)(`div`,{className:`flex gap-2`,children:[(0,_.jsx)(`button`,{onClick:o,className:`p-1 hover:bg-gray-100 rounded`,children:(0,_.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,_.jsx)(`path`,{d:`m15 18-6-6 6-6`})})}),(0,_.jsx)(`button`,{onClick:s,className:`p-1 hover:bg-gray-100 rounded`,children:(0,_.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,_.jsx)(`path`,{d:`m9 18 6-6-6-6`})})})]})]}),(0,_.jsx)(`div`,{className:`grid grid-cols-7 text-center text-xs font-semibold text-gray-500 border-b border-gray-200 bg-gray-50`,children:[`Dom`,`Lun`,`Mar`,`Mié`,`Jue`,`Vie`,`Sáb`].map(e=>(0,_.jsx)(`div`,{className:`py-2`,children:e},e))}),(0,_.jsxs)(`div`,{className:`grid grid-cols-7 auto-rows-fr bg-gray-200 gap-px`,children:[Array.from({length:i}).map((e,t)=>(0,_.jsx)(`div`,{className:`bg-white min-h-[100px]`},`empty-${t}`)),Array.from({length:r}).map((e,n)=>{let r=n+1,i=c(r),a=new Date().toDateString()===new Date(t.getFullYear(),t.getMonth(),r).toDateString();return(0,_.jsxs)(`div`,{className:`bg-white min-h-[100px] p-1 ${a?`bg-blue-50`:``}`,children:[(0,_.jsx)(`div`,{className:`text-right text-xs mb-1 ${a?`font-bold text-blue-600`:`text-gray-500`}`,children:r}),(0,_.jsx)(`div`,{className:`space-y-1`,children:i.map(e=>(0,_.jsx)(`div`,{className:`text-[10px] p-1 rounded truncate border-l-2`,style:{backgroundColor:(e.brandColor||`#e5e7eb`)+`20`,borderLeftColor:e.brandColor||`#9ca3af`},title:e.title,children:e.title},e.id))})]},r)})]})]})}function ve(){let{teamMembers:t,loading:n,membersLoading:r,teamMemberSaving:i,username:s,password:c,isAuthenticated:u,error:d,notification:f,statusFilter:p,assignedFilter:m,serviceFilter:ee,tagFilter:h,brandFilter:v,showAttentionOnly:y,searchTerm:b,noteDraft:te,viewMode:x,taskViewMode:S,teamMemberForm:C,editingMemberId:w,activeTab:T,filteredLeads:E,metrics:D,leadsByStatus:ne,attentionLeads:O,assignmentStats:re,recentLeads:k,assignmentOptions:ie,serviceOptions:A,tagOptions:ae,activeLead:j,setUsername:oe,setPassword:se,setStatusFilter:M,setAssignedFilter:N,setServiceFilter:P,setTagFilter:F,setBrandFilter:I,setShowAttentionOnly:ce,setSearchTerm:L,setActiveLeadId:R,setNoteDraft:z,setViewMode:le,setTaskViewMode:ue,setActiveTab:B,handleLogin:U,handleLogout:fe,handleStatusChange:pe,handleDeleteLead:q,handleTeamMemberFieldChange:J,handleEditTeamMember:ve,handleTeamMemberSubmit:X,handleCancelTeamMemberEdit:ye,handleDeleteTeamMember:be,handleMarkContact:xe,handleAssignmentSelect:Se,handleOpenNotes:Ce,handleSaveNote:we,handleExportCSV:Te,handleDragEnd:Ee,copyToClipboard:De,getEmails:Oe,fetchLeads:ke,handleAddTag:Ae,handleRemoveTag:je,handleTeamMemberCheckboxChange:Me,handleTeamMemberPhotoChange:Ne,tasks:Pe,brands:Z,brandsLoading:Fe,taskAssignmentOptions:Ie,handleCreateTask:Q,handleUpdateTaskStatus:Le,handleAssignTask:Re,handleTaskDragEnd:ze,handleDeleteTask:Be,handleCreateBrand:Ve,handleDeleteBrand:He}=he(),[Ue,We]=(0,g.useState)(``),$=o(e(a,{activationConstraint:{distance:8}})),Ge=x===`board`;return u?(0,_.jsx)(`div`,{className:`min-h-screen bg-gray-50 p-4 md:p-8`,children:(0,_.jsxs)(`div`,{className:`mx-auto max-w-[1920px]`,children:[(0,_.jsxs)(`div`,{className:`flex flex-col gap-6 lg:flex-row`,children:[(0,_.jsxs)(`aside`,{className:`flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:w-64 shrink-0`,children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`p`,{className:`text-xs font-semibold uppercase tracking-wide text-gray-500`,children:`Navegación`}),(0,_.jsx)(`h2`,{className:`mt-2 text-2xl font-bold text-gray-900`,children:`Panel admin`}),(0,_.jsx)(`p`,{className:`mt-1 text-sm text-gray-600`,children:`Gestiona leads, notas internas y el equipo comercial.`})]}),(0,_.jsxs)(`nav`,{className:`space-y-2`,children:[(0,_.jsxs)(`button`,{type:`button`,onClick:()=>B(`leads`),className:`w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition-colors ${T===`leads`?`bg-blue-600 text-white shadow-sm`:`text-gray-600 hover:bg-gray-100`}`,children:[`Leads`,(0,_.jsx)(`span`,{className:`block text-xs font-normal lg:hidden ${T===`leads`?`text-white/80`:`text-gray-500`}`,children:`Métricas, filtros y pipeline`})]}),(0,_.jsxs)(`button`,{type:`button`,onClick:()=>B(`team`),className:`w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition-colors ${T===`team`?`bg-blue-600 text-white shadow-sm`:`text-gray-600 hover:bg-gray-100`}`,children:[`Equipo`,(0,_.jsx)(`span`,{className:`block text-xs font-normal lg:hidden ${T===`team`?`text-white/80`:`text-gray-500`}`,children:`Roles y contactos del equipo`})]}),(0,_.jsxs)(`button`,{type:`button`,onClick:()=>B(`tasks`),className:`w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition-colors ${T===`tasks`?`bg-blue-600 text-white shadow-sm`:`text-gray-600 hover:bg-gray-100`}`,children:[`Tareas`,(0,_.jsx)(`span`,{className:`block text-xs font-normal lg:hidden ${T===`tasks`?`text-white/80`:`text-gray-500`}`,children:`Gestor de tareas del equipo`})]})]}),(0,_.jsx)(`button`,{onClick:fe,className:`mt-auto inline-flex items-center justify-center rounded-xl border border-red-200 px-4 py-2 text-sm font-semibold text-red-600 transition-colors hover:bg-red-50`,children:`Cerrar sesión`})]}),(0,_.jsxs)(`div`,{className:`flex-1 space-y-8 min-w-0`,children:[(0,_.jsxs)(`div`,{className:`flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between`,children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`h1`,{className:`text-3xl font-bold text-gray-900`,children:T===`leads`?`Panel de Leads`:T===`team`?`Gestión de Equipo`:T===`brands`?`Gestión de Marcas`:`Gestor de Tareas`}),(0,_.jsx)(`p`,{className:`text-sm text-gray-600 mt-1`,children:T===`leads`?`Gestiona contactos, notas internas y métricas clave en tiempo real.`:T===`team`?`Administra los miembros del equipo y sus permisos.`:T===`brands`?`Administra las marcas o clientes para organizar las tareas.`:`Organiza y asigna tareas pendientes al equipo.`})]}),T===`leads`&&(0,_.jsxs)(`div`,{className:`flex flex-wrap items-center justify-end gap-3`,children:[(0,_.jsxs)(`div`,{className:`flex overflow-hidden rounded-lg border border-gray-300 bg-white text-sm font-medium shadow-sm`,children:[(0,_.jsx)(`button`,{type:`button`,onClick:()=>le(`table`),className:`px-3 py-1.5 transition-colors ${x===`table`?`bg-blue-600 text-white`:`text-gray-600 hover:bg-gray-100`}`,children:`Vista tabla`}),(0,_.jsx)(`button`,{type:`button`,onClick:()=>le(`board`),className:`px-3 py-1.5 transition-colors ${x===`board`?`bg-blue-600 text-white`:`text-gray-600 hover:bg-gray-100`}`,children:`Vista Kanban`})]}),(0,_.jsxs)(`button`,{onClick:()=>ke(c),disabled:n,className:`inline-flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors shadow-sm disabled:opacity-60`,children:[(0,_.jsx)(`span`,{className:`h-2 w-2 rounded-full bg-green-500 animate-pulse`,"aria-hidden":!0}),`Actualizar`]})]}),T===`tasks`&&(0,_.jsx)(`div`,{className:`flex flex-wrap items-center justify-end gap-3`,children:(0,_.jsxs)(`div`,{className:`flex overflow-hidden rounded-lg border border-gray-300 bg-white text-sm font-medium shadow-sm`,children:[(0,_.jsx)(`button`,{type:`button`,onClick:()=>ue(`list`),className:`px-3 py-1.5 transition-colors ${S===`list`?`bg-blue-600 text-white`:`text-gray-600 hover:bg-gray-100`}`,children:`Lista`}),(0,_.jsx)(`button`,{type:`button`,onClick:()=>ue(`board`),className:`px-3 py-1.5 transition-colors ${S===`board`?`bg-blue-600 text-white`:`text-gray-600 hover:bg-gray-100`}`,children:`Kanban`}),(0,_.jsx)(`button`,{type:`button`,onClick:()=>ue(`calendar`),className:`px-3 py-1.5 transition-colors ${S===`calendar`?`bg-blue-600 text-white`:`text-gray-600 hover:bg-gray-100`}`,children:`Calendario`})]})})]}),T===`leads`?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(`div`,{className:`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6`,children:[(0,_.jsx)(V,{label:`Leads totales`,value:D.totalLeads.toString()}),(0,_.jsx)(V,{label:`Leads últimos 7 días`,value:D.leadsThisWeek.toString()}),(0,_.jsx)(V,{label:`Convertidos`,value:D.converted.toString(),sublabel:`Basado en estado 'Convertido'`}),(0,_.jsx)(V,{label:`Tasa de conversión`,value:`${D.conversionRate.toFixed(1)}%`,sublabel:`Convertidos / Leads totales`}),(0,_.jsx)(V,{label:`Seguimientos pendientes`,value:D.needingFollowUp.toString(),sublabel:`Más de 5 días sin contacto`}),(0,_.jsx)(V,{label:`Sin responsable`,value:D.unassigned.toString(),sublabel:`Leads sin asignación`}),(0,_.jsx)(V,{label:`Contactos semana`,value:D.contactsThisWeek.toString(),sublabel:`Últimos 7 días`})]}),(0,_.jsxs)(`div`,{className:`bg-white border border-gray-100 shadow-sm rounded-xl p-5 space-y-4`,children:[(0,_.jsxs)(`div`,{className:`flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between`,children:[(0,_.jsxs)(`div`,{className:`flex flex-wrap gap-3 items-center`,children:[(0,_.jsx)(`div`,{className:`relative`,children:(0,_.jsx)(`input`,{type:`text`,value:b,onChange:e=>L(e.target.value),className:`w-full md:w-64 lg:w-72 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200`,placeholder:`Buscar por nombre, correo, empresa...`})}),(0,_.jsxs)(`select`,{value:p,onChange:e=>M(e.target.value),className:`rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200`,children:[(0,_.jsx)(`option`,{value:`Todos`,children:`Todos los estados`}),H.map(e=>(0,_.jsx)(`option`,{value:e,children:e},e))]}),(0,_.jsxs)(`select`,{value:ee,onChange:e=>P(e.target.value),className:`rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200`,children:[(0,_.jsx)(`option`,{value:`Todos`,children:`Todos los servicios`}),A.map(e=>(0,_.jsx)(`option`,{value:e,children:e},e))]}),(0,_.jsxs)(`select`,{value:h,onChange:e=>F(e.target.value),className:`rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200`,children:[(0,_.jsx)(`option`,{value:`Todos`,children:`Todas las etiquetas`}),ae.map(e=>(0,_.jsx)(`option`,{value:e,children:e},e))]}),(0,_.jsxs)(`select`,{value:m,onChange:e=>N(e.target.value),className:`rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200`,children:[(0,_.jsx)(`option`,{value:`Todos`,children:`Todos los responsables`}),(0,_.jsx)(`option`,{value:`Sin asignar`,children:`Sin asignar`}),ie.map(e=>(0,_.jsx)(`option`,{value:e,children:e},e))]}),(0,_.jsxs)(`label`,{className:`inline-flex items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-sm text-gray-600 hover:bg-gray-100`,children:[(0,_.jsx)(`input`,{type:`checkbox`,checked:y,onChange:e=>ce(e.target.checked),className:`h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500`}),`Solo pendientes de seguimiento`]}),(0,_.jsxs)(`button`,{onClick:()=>De(Oe(E)),className:`inline-flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors`,children:[(0,_.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,_.jsx)(`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`}),(0,_.jsx)(`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`})]}),`Copiar correos`]}),(0,_.jsxs)(`a`,{href:`mailto:?bcc=${Oe(E)}`,className:`inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors`,children:[(0,_.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,_.jsx)(`rect`,{width:`20`,height:`16`,x:`2`,y:`4`,rx:`2`}),(0,_.jsx)(`path`,{d:`m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7`})]}),`Redactar a todos`]})]}),(0,_.jsxs)(`button`,{onClick:Te,className:`inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors`,children:[(0,_.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,_.jsx)(`path`,{d:`M4 20h16`}),(0,_.jsx)(`path`,{d:`M7 10v4`}),(0,_.jsx)(`path`,{d:`M12 4v10`}),(0,_.jsx)(`path`,{d:`M17 7v7`}),(0,_.jsx)(`path`,{d:`M7 14l-3-3 3-3`}),(0,_.jsx)(`path`,{d:`m17 14 3-3-3-3`})]}),`Exportar CSV`]})]}),(0,_.jsxs)(`div`,{className:`grid gap-3 md:grid-cols-2`,children:[(0,_.jsxs)(`div`,{className:`rounded-lg border border-dashed border-gray-200 p-4`,children:[(0,_.jsx)(`h2`,{className:`text-sm font-semibold text-gray-700 mb-2`,children:`Estado de leads`}),(0,_.jsx)(`div`,{className:`space-y-2`,children:H.map(e=>{let t=D.totalsByStatus[e]??0,n=D.totalLeads===0?0:Math.round(t/D.totalLeads*100);return(0,_.jsxs)(`div`,{className:`flex items-center justify-between text-sm`,children:[(0,_.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,_.jsx)(`span`,{className:`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${de[e]}`,children:e}),(0,_.jsx)(`span`,{className:`text-gray-600`,children:t})]}),(0,_.jsxs)(`span`,{className:`text-xs text-gray-400`,children:[n,`%`]})]},e)})})]}),(0,_.jsxs)(`div`,{className:`rounded-lg border border-dashed border-gray-200 p-4`,children:[(0,_.jsx)(`h2`,{className:`text-sm font-semibold text-gray-700 mb-2`,children:`Servicios más solicitados`}),Object.keys(D.serviceCount).length===0?(0,_.jsx)(`p`,{className:`text-xs text-gray-400`,children:`Aún no hay datos de servicios.`}):(0,_.jsx)(`div`,{className:`space-y-2`,children:Object.entries(D.serviceCount).sort(([,e],[,t])=>Number(t)-Number(e)).slice(0,6).map(([e,t])=>(0,_.jsxs)(`div`,{className:`flex items-center justify-between text-sm`,children:[(0,_.jsx)(`span`,{className:`text-gray-600 truncate pr-3`,children:e}),(0,_.jsx)(`span`,{className:`text-gray-500`,children:t})]},e))})]})]})]}),(0,_.jsxs)(`div`,{className:`grid gap-4 xl:grid-cols-3`,children:[(0,_.jsxs)(`div`,{className:`rounded-xl border border-gray-100 bg-white p-5 shadow-sm`,children:[(0,_.jsxs)(`div`,{className:`mb-4 flex items-center justify-between`,children:[(0,_.jsx)(`h2`,{className:`text-sm font-semibold text-gray-700`,children:`Alertas de seguimiento`}),(0,_.jsxs)(`span`,{className:`text-xs text-gray-400`,children:[D.needingFollowUp,` pendientes`]})]}),O.length===0?(0,_.jsx)(`p`,{className:`text-xs text-gray-400`,children:`Todo al día. No hay leads sin seguimiento reciente.`}):(0,_.jsx)(`ul`,{className:`space-y-3`,children:O.map(e=>{let t=e.lastContactAt?G(e.lastContactAt):`Sin contacto`;return(0,_.jsxs)(`li`,{className:`flex items-start justify-between gap-3 rounded-lg border border-amber-100 bg-amber-50/60 p-3`,children:[(0,_.jsxs)(`div`,{className:`min-w-0`,children:[(0,_.jsx)(`p`,{className:`text-sm font-semibold text-amber-700 truncate`,children:e.name}),(0,_.jsx)(`p`,{className:`text-xs text-amber-600`,children:e.assignedTo?`Asignado a ${e.assignedTo}`:`Sin responsable`}),(0,_.jsxs)(`p`,{className:`text-xs text-amber-600`,children:[`Último contacto: `,t]})]}),(0,_.jsxs)(`div`,{className:`flex flex-col items-end gap-2 text-xs`,children:[(0,_.jsx)(`button`,{type:`button`,onClick:()=>xe(e.id),className:`rounded-md border border-emerald-200 px-2 py-1 font-semibold text-emerald-600 hover:bg-emerald-50`,children:`Registrar`}),(0,_.jsx)(`button`,{type:`button`,onClick:()=>Ce(e.id),className:`rounded-md border border-blue-200 px-2 py-1 font-semibold text-blue-600 hover:bg-blue-50`,children:`Nota`})]})]},e.id)})})]}),(0,_.jsxs)(`div`,{className:`rounded-xl border border-gray-100 bg-white p-5 shadow-sm`,children:[(0,_.jsx)(`h2`,{className:`text-sm font-semibold text-gray-700 mb-4`,children:`Distribución por responsable`}),re.length===0?(0,_.jsx)(`p`,{className:`text-xs text-gray-400`,children:`Aún no hay leads asignados.`}):(0,_.jsx)(`ul`,{className:`space-y-3`,children:re.map(([e,t])=>{let n=D.totalLeads===0?0:Math.round(t/D.totalLeads*100);return(0,_.jsxs)(`li`,{className:`space-y-1`,children:[(0,_.jsxs)(`div`,{className:`flex items-center justify-between text-sm text-gray-600`,children:[(0,_.jsx)(`span`,{className:`truncate pr-3`,children:e}),(0,_.jsx)(`span`,{className:`font-semibold text-gray-900`,children:t})]}),(0,_.jsx)(`div`,{className:`h-2 w-full overflow-hidden rounded-full bg-gray-100`,children:(0,_.jsx)(`div`,{className:`h-full rounded-full bg-blue-500`,style:{width:`${n}%`}})})]},e)})})]}),(0,_.jsxs)(`div`,{className:`rounded-xl border border-gray-100 bg-white p-5 shadow-sm`,children:[(0,_.jsx)(`h2`,{className:`text-sm font-semibold text-gray-700 mb-4`,children:`Actividad reciente`}),k.length===0?(0,_.jsx)(`p`,{className:`text-xs text-gray-400`,children:`Aún no llegan leads.`}):(0,_.jsx)(`ul`,{className:`space-y-3`,children:k.map(e=>(0,_.jsxs)(`li`,{className:`flex items-start justify-between gap-3`,children:[(0,_.jsxs)(`div`,{className:`min-w-0`,children:[(0,_.jsx)(`p`,{className:`text-sm font-semibold text-gray-800 truncate`,children:e.name}),(0,_.jsx)(`p`,{className:`text-xs text-gray-500`,children:W(e.created_at)}),(0,_.jsx)(`p`,{className:`text-xs text-gray-500`,children:e.status})]}),(0,_.jsxs)(`div`,{className:`text-right text-xs text-gray-500`,children:[(0,_.jsx)(`p`,{children:e.assignedTo||`Sin responsable`}),(0,_.jsx)(`p`,{children:e.lastContactAt?G(e.lastContactAt):`Sin contacto`})]})]},e.id))})]})]}),Ge?(0,_.jsx)(l,{sensors:$,onDragEnd:Ee,children:(0,_.jsxs)(`div`,{className:`bg-white border border-gray-200 rounded-xl shadow-sm p-4`,children:[(0,_.jsx)(`div`,{className:`flex gap-4 overflow-x-auto pb-2`,children:H.map(e=>(0,_.jsx)(me,{status:e,leads:ne[e]??[],onOpenNotes:Ce,onCopyEmail:De,onMarkContact:xe,onDeleteLead:q},e))}),E.length===0&&(0,_.jsx)(`p`,{className:`py-10 text-center text-sm text-gray-500`,children:`No hay leads para mostrar con los filtros actuales.`})]})}):(0,_.jsxs)(`div`,{className:`bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200`,children:[(0,_.jsx)(`div`,{className:`overflow-x-auto`,children:(0,_.jsxs)(`table`,{className:`w-full text-left text-sm text-gray-600`,children:[(0,_.jsx)(`thead`,{className:`bg-gray-50 text-gray-900 font-semibold border-b border-gray-200`,children:(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{className:`px-5 py-4`,children:`Fecha`}),(0,_.jsx)(`th`,{className:`px-5 py-4`,children:`Nombre`}),(0,_.jsx)(`th`,{className:`px-5 py-4`,children:`Email`}),(0,_.jsx)(`th`,{className:`px-5 py-4`,children:`Teléfono`}),(0,_.jsx)(`th`,{className:`px-5 py-4`,children:`Empresa`}),(0,_.jsx)(`th`,{className:`px-5 py-4`,children:`Servicios`}),(0,_.jsx)(`th`,{className:`px-5 py-4`,children:`Presupuesto`}),(0,_.jsx)(`th`,{className:`px-5 py-4`,children:`Asignado`}),(0,_.jsx)(`th`,{className:`px-5 py-4`,children:`Último contacto`}),(0,_.jsx)(`th`,{className:`px-5 py-4`,children:`Estado`}),(0,_.jsx)(`th`,{className:`px-5 py-4`,children:`Nota`}),(0,_.jsx)(`th`,{className:`px-5 py-4`,children:`Mensaje`}),(0,_.jsx)(`th`,{className:`px-5 py-4 text-right`,children:`Acciones`})]})}),(0,_.jsxs)(`tbody`,{className:`divide-y divide-gray-200`,children:[E.map(e=>{let t=K(e),n=e.lastContactAt?G(e.lastContactAt):`Sin contacto`;return(0,_.jsxs)(`tr`,{className:`hover:bg-gray-50 transition-colors`,children:[(0,_.jsx)(`td`,{className:`px-5 py-4 whitespace-nowrap text-gray-500`,children:W(e.created_at)}),(0,_.jsx)(`td`,{className:`px-5 py-4 font-medium text-gray-900`,children:e.name}),(0,_.jsx)(`td`,{className:`px-5 py-4`,children:(0,_.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,_.jsx)(`a`,{href:`mailto:${e.email}`,className:`text-blue-600 hover:text-blue-800 hover:underline`,children:e.email}),(0,_.jsx)(`button`,{onClick:()=>De(e.email),className:`text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-100 transition-colors`,title:`Copiar correo`,children:(0,_.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,_.jsx)(`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`}),(0,_.jsx)(`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`})]})})]})}),(0,_.jsx)(`td`,{className:`px-5 py-4`,children:e.phone||`-`}),(0,_.jsx)(`td`,{className:`px-5 py-4`,children:e.company||`-`}),(0,_.jsx)(`td`,{className:`px-5 py-4`,children:(0,_.jsx)(`div`,{className:`flex flex-wrap gap-1`,children:e.services.length===0?(0,_.jsx)(`span`,{className:`text-xs text-gray-400`,children:`Sin datos`}):e.services.map(e=>(0,_.jsx)(`span`,{className:`inline-flex items-center rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600`,children:e},e))})}),(0,_.jsx)(`td`,{className:`px-5 py-4`,children:e.budget_range||`-`}),(0,_.jsx)(`td`,{className:`px-5 py-4`,children:(0,_.jsxs)(`select`,{value:e.assignedTo||``,onChange:t=>Se(e.id,t.target.value),className:`rounded-md border border-gray-300 bg-white px-2 py-1 text-xs focus:border-blue-500 focus:ring-1 focus:ring-blue-200`,children:[(0,_.jsx)(`option`,{value:``,children:`Sin asignar`}),ie.map(e=>(0,_.jsx)(`option`,{value:e,children:e},e)),(0,_.jsx)(`option`,{value:`__custom__`,children:`Agregar responsable…`})]})}),(0,_.jsx)(`td`,{className:`px-5 py-4`,children:(0,_.jsxs)(`div`,{className:`flex items-center gap-2 text-xs`,children:[(0,_.jsx)(`span`,{className:`${t?`text-amber-600 font-medium`:`text-gray-500`}`,title:e.lastContactAt?W(e.lastContactAt):`Sin registros`,children:n}),(0,_.jsx)(`button`,{type:`button`,onClick:()=>xe(e.id),className:`text-emerald-600 hover:text-emerald-700`,children:`Registrar`})]})}),(0,_.jsx)(`td`,{className:`px-5 py-4`,children:(0,_.jsx)(`select`,{value:e.status,onChange:t=>pe(e.id,t.target.value),className:`rounded-md border border-gray-300 bg-white px-2 py-1 text-xs focus:border-blue-500 focus:ring-1 focus:ring-blue-200`,children:H.map(e=>(0,_.jsx)(`option`,{value:e,children:e},e))})}),(0,_.jsx)(`td`,{className:`px-5 py-4`,children:(0,_.jsx)(`button`,{onClick:()=>Ce(e.id),className:`text-sm text-blue-600 hover:text-blue-800 hover:underline`,children:e.note?`Ver nota`:`Agregar nota`})}),(0,_.jsx)(`td`,{className:`px-5 py-4 max-w-xs truncate`,title:e.message,children:e.message||`-`}),(0,_.jsx)(`td`,{className:`px-5 py-4 text-right`,children:(0,_.jsx)(`button`,{type:`button`,onClick:()=>q(e.id),className:`text-sm font-semibold text-red-600 hover:text-red-700`,children:`Eliminar`})})]},e.id)}),E.length===0&&(0,_.jsx)(`tr`,{children:(0,_.jsx)(`td`,{colSpan:13,className:`px-6 py-12 text-center text-gray-500`,children:`No hay leads para los filtros seleccionados.`})})]})]})}),n&&(0,_.jsx)(`p`,{className:`px-5 pb-5 text-sm text-gray-400`,children:`Cargando leads...`})]})]}):T===`team`?(0,_.jsxs)(`div`,{className:`bg-white border border-gray-100 shadow-sm rounded-xl p-5 space-y-5`,children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`h2`,{className:`text-sm font-semibold text-gray-700`,children:`Equipo de seguimiento`}),(0,_.jsx)(`p`,{className:`text-xs text-gray-500 mt-1`,children:`Define quién puede recibir leads y asigna roles de seguimiento para el equipo comercial.`})]}),(0,_.jsxs)(`form`,{onSubmit:X,className:`space-y-4`,children:[(0,_.jsxs)(`div`,{className:`grid gap-3 md:grid-cols-[2fr_2fr_2fr] md:items-start`,children:[(0,_.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,_.jsx)(`label`,{className:`text-xs font-semibold text-gray-600`,htmlFor:`member-name`,children:`Nombre completo`}),(0,_.jsx)(`input`,{id:`member-name`,type:`text`,value:C.name,onChange:J(`name`),autoComplete:`name`,className:`rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200`,placeholder:`Ej. Ana López`,required:!0})]}),(0,_.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,_.jsx)(`label`,{className:`text-xs font-semibold text-gray-600`,htmlFor:`member-email`,children:`Correo (opcional)`}),(0,_.jsx)(`input`,{id:`member-email`,type:`email`,value:C.email,onChange:J(`email`),autoComplete:`email`,className:`rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200`,placeholder:`ana@empresa.com`})]}),(0,_.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,_.jsx)(`label`,{className:`text-xs font-semibold text-gray-600`,htmlFor:`member-role`,children:`Rol (opcional)`}),(0,_.jsx)(`input`,{id:`member-role`,type:`text`,value:C.role,onChange:J(`role`),autoComplete:`organization-title`,className:`rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200`,placeholder:`Ej. Ejecutivo comercial`})]})]}),(0,_.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,_.jsx)(`label`,{className:`text-xs font-semibold text-gray-600`,htmlFor:`member-photo`,children:`Foto (opcional)`}),(0,_.jsx)(`input`,{id:`member-photo`,type:`file`,accept:`image/*`,onChange:Ne,className:`block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100`})]}),(0,_.jsxs)(`div`,{className:`flex flex-wrap gap-4 items-center`,children:[(0,_.jsxs)(`label`,{className:`inline-flex items-center gap-2 text-sm text-gray-700`,children:[(0,_.jsx)(`input`,{type:`checkbox`,checked:C.canManageLeads,onChange:Me(`canManageLeads`),className:`rounded border-gray-300 text-blue-600 focus:ring-blue-500`}),`Gestiona Leads`]}),(0,_.jsxs)(`label`,{className:`inline-flex items-center gap-2 text-sm text-gray-700`,children:[(0,_.jsx)(`input`,{type:`checkbox`,checked:C.canManageTasks,onChange:Me(`canManageTasks`),className:`rounded border-gray-300 text-blue-600 focus:ring-blue-500`}),`Gestiona Tareas`]})]}),(0,_.jsxs)(`div`,{className:`flex items-center gap-2`,children:[w&&(0,_.jsx)(`button`,{type:`button`,onClick:ye,className:`hidden md:inline-flex items-center justify-center rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100`,children:`Cancelar`}),(0,_.jsx)(`button`,{type:`submit`,disabled:i,className:`inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors disabled:opacity-60`,children:i?`Guardando…`:w?`Guardar cambios`:`Agregar miembro`}),w&&(0,_.jsx)(`button`,{type:`button`,onClick:ye,className:`md:hidden inline-flex items-center justify-center rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-600 hover:bg-gray-100`,children:`Cancelar edición`})]})]}),(0,_.jsx)(`div`,{className:`overflow-x-auto`,children:(0,_.jsxs)(`table`,{className:`min-w-full text-left text-sm text-gray-600`,children:[(0,_.jsx)(`thead`,{className:`bg-gray-50 text-gray-900 font-semibold border border-gray-200`,children:(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`th`,{className:`px-4 py-3`,children:`Nombre`}),(0,_.jsx)(`th`,{className:`px-4 py-3`,children:`Correo`}),(0,_.jsx)(`th`,{className:`px-4 py-3`,children:`Rol`}),(0,_.jsx)(`th`,{className:`px-4 py-3`,children:`Permisos`}),(0,_.jsx)(`th`,{className:`px-4 py-3 text-right`,children:`Acciones`})]})}),(0,_.jsxs)(`tbody`,{className:`divide-y divide-gray-200`,children:[t.map(e=>(0,_.jsxs)(`tr`,{children:[(0,_.jsx)(`td`,{className:`px-4 py-3 font-medium text-gray-900`,children:(0,_.jsxs)(`div`,{className:`flex items-center gap-3`,children:[e.photoUrl?(0,_.jsx)(`img`,{src:e.photoUrl,alt:e.name,className:`w-8 h-8 rounded-full object-cover`}):(0,_.jsx)(`div`,{className:`w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs font-bold`,children:e.name.charAt(0).toUpperCase()}),e.name]})}),(0,_.jsx)(`td`,{className:`px-4 py-3`,children:e.email?(0,_.jsx)(`a`,{href:`mailto:${e.email}`,className:`text-blue-600 hover:text-blue-800 hover:underline`,children:e.email}):(0,_.jsx)(`span`,{className:`text-xs text-gray-400`,children:`Sin correo`})}),(0,_.jsx)(`td`,{className:`px-4 py-3`,children:e.role??(0,_.jsx)(`span`,{className:`text-xs text-gray-400`,children:`Sin rol`})}),(0,_.jsx)(`td`,{className:`px-4 py-3`,children:(0,_.jsxs)(`div`,{className:`flex gap-2`,children:[e.canManageLeads&&(0,_.jsx)(`span`,{className:`inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10`,children:`Leads`}),e.canManageTasks&&(0,_.jsx)(`span`,{className:`inline-flex items-center rounded-full bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10`,children:`Tareas`})]})}),(0,_.jsx)(`td`,{className:`px-4 py-3 text-right`,children:(0,_.jsxs)(`div`,{className:`flex items-center justify-end gap-2`,children:[(0,_.jsx)(`button`,{type:`button`,onClick:()=>ve(e),className:`inline-flex items-center rounded-lg border border-gray-300 px-3 py-1.5 text-xs font-semibold text-gray-600 hover:bg-gray-100`,children:`Editar`}),(0,_.jsx)(`button`,{type:`button`,onClick:()=>be(e.id),className:`inline-flex items-center rounded-lg border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50`,children:`Eliminar`})]})})]},e.id)),t.length===0&&!r&&(0,_.jsx)(`tr`,{children:(0,_.jsx)(`td`,{colSpan:4,className:`px-4 py-6 text-center text-sm text-gray-400`,children:`Aún no hay integrantes registrados. Agrega el primero para comenzar.`})}),r&&(0,_.jsx)(`tr`,{children:(0,_.jsx)(`td`,{colSpan:4,className:`px-4 py-6 text-center text-sm text-gray-400`,children:`Cargando equipo...`})})]})]})})]}):T===`brands`?(0,_.jsx)(ge,{brands:Z,loading:Fe,onCreate:Ve,onDelete:He}):(0,_.jsxs)(`div`,{className:`space-y-6`,children:[(0,_.jsxs)(`div`,{className:`bg-white p-6 rounded-xl border border-gray-200 shadow-sm`,children:[(0,_.jsx)(`h2`,{className:`text-lg font-semibold text-gray-900 mb-4`,children:`Nueva Tarea`}),(0,_.jsxs)(`form`,{onSubmit:e=>{e.preventDefault();let t=e.currentTarget,n=t.elements.namedItem(`title`).value,r=t.elements.namedItem(`assignedTo`).value,i=t.elements.namedItem(`brandId`).value,a=t.elements.namedItem(`dueDate`).value,o=t.elements.namedItem(`startDate`).value;n.trim()&&(Q(n.trim(),r?Number(r):null,i?Number(i):null,a||null,o||null),t.reset())},className:`flex flex-col gap-4 md:flex-row md:items-end`,children:[(0,_.jsxs)(`div`,{className:`flex-1`,children:[(0,_.jsx)(`label`,{className:`block text-sm font-medium text-gray-700 mb-1`,children:`Título`}),(0,_.jsx)(`input`,{name:`title`,type:`text`,className:`w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none`,placeholder:`¿Qué hay que hacer?`,required:!0})]}),(0,_.jsxs)(`div`,{className:`w-full md:w-48`,children:[(0,_.jsx)(`label`,{className:`block text-sm font-medium text-gray-700 mb-1`,children:`Marca`}),(0,_.jsxs)(`select`,{name:`brandId`,className:`w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white`,children:[(0,_.jsx)(`option`,{value:``,children:`Sin marca`}),Z.map(e=>(0,_.jsx)(`option`,{value:e.id,children:e.name},e.id))]})]}),(0,_.jsxs)(`div`,{className:`w-full md:w-48`,children:[(0,_.jsx)(`label`,{className:`block text-sm font-medium text-gray-700 mb-1`,children:`Asignar a`}),(0,_.jsxs)(`select`,{name:`assignedTo`,className:`w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white`,children:[(0,_.jsx)(`option`,{value:``,children:`Sin asignar`}),Ie.map(e=>(0,_.jsx)(`option`,{value:e.id,children:e.name},e.id))]})]}),(0,_.jsxs)(`div`,{className:`w-full md:w-40`,children:[(0,_.jsx)(`label`,{className:`block text-sm font-medium text-gray-700 mb-1`,children:`Inicio`}),(0,_.jsx)(`input`,{name:`startDate`,type:`date`,className:`w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none`})]}),(0,_.jsxs)(`div`,{className:`w-full md:w-40`,children:[(0,_.jsx)(`label`,{className:`block text-sm font-medium text-gray-700 mb-1`,children:`Vencimiento`}),(0,_.jsx)(`input`,{name:`dueDate`,type:`date`,className:`w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none`})]}),(0,_.jsx)(`button`,{type:`submit`,className:`px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors`,children:`Crear`})]})]}),(0,_.jsxs)(`div`,{className:`flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-200 shadow-sm`,children:[(0,_.jsx)(`span`,{className:`text-sm font-medium text-gray-700`,children:`Filtrar por marca:`}),(0,_.jsxs)(`div`,{className:`flex gap-2 overflow-x-auto pb-1`,children:[(0,_.jsx)(`button`,{onClick:()=>I(`Todos`),className:`px-3 py-1 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${v===`Todos`?`bg-gray-800 text-white`:`bg-gray-100 text-gray-600 hover:bg-gray-200`}`,children:`Todas`}),Z.map(e=>(0,_.jsxs)(`button`,{onClick:()=>I(String(e.id)),className:`px-3 py-1 rounded-full text-xs font-medium transition-colors whitespace-nowrap flex items-center gap-2 ${v===String(e.id)?`text-white ring-2 ring-offset-1`:`bg-gray-100 text-gray-600 hover:bg-gray-200`}`,style:v===String(e.id)?{backgroundColor:e.color,borderColor:e.color}:{},children:[(0,_.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-current`,style:{color:v===String(e.id)?`white`:e.color}}),e.name]},e.id))]})]}),S===`calendar`?(0,_.jsx)(_e,{tasks:Pe.filter(e=>v===`Todos`||String(e.brandId)===v)}):S===`board`?(0,_.jsx)(l,{sensors:$,onDragEnd:ze,children:(0,_.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-3 gap-6 h-full overflow-x-auto pb-4`,children:[`pending`,`in_progress`,`completed`].map(e=>(0,_.jsx)(Y,{status:e,tasks:Pe.filter(t=>t.status===e&&(v===`Todos`||String(t.brandId)===v)),assignmentOptions:Ie,onDelete:Be,onUpdateStatus:Le,onAssign:Re},e))})}):(0,_.jsx)(`div`,{className:`space-y-8`,children:(v===`Todos`?[...Z,{id:0,name:`Sin Marca`,color:`#9ca3af`}]:Z.filter(e=>String(e.id)===v)).map(e=>{let t=Pe.filter(t=>(t.brandId||0)===e.id);return t.length===0&&v===`Todos`?null:(0,_.jsxs)(`div`,{className:`space-y-3`,children:[(0,_.jsxs)(`h3`,{className:`font-semibold text-gray-800 flex items-center gap-2`,children:[(0,_.jsx)(`span`,{className:`w-3 h-3 rounded-full`,style:{backgroundColor:e.color}}),e.name,(0,_.jsx)(`span`,{className:`text-xs font-normal text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full`,children:t.length})]}),(0,_.jsx)(`div`,{className:`grid gap-3`,children:t.map(e=>(0,_.jsxs)(`div`,{className:`bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow`,children:[(0,_.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,_.jsx)(`div`,{className:`w-2 h-2 rounded-full ${e.status===`completed`?`bg-green-500`:e.status===`in_progress`?`bg-blue-500`:`bg-gray-300`}`}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`p`,{className:`font-medium ${e.status===`completed`?`text-gray-500 line-through`:`text-gray-900`}`,children:e.title}),(0,_.jsxs)(`div`,{className:`flex items-center gap-3 text-xs text-gray-500 mt-1`,children:[e.assignedToName&&(0,_.jsxs)(`span`,{className:`flex items-center gap-1 bg-gray-50 px-1.5 py-0.5 rounded`,children:[`👤 `,e.assignedToName]}),e.dueDate&&(0,_.jsxs)(`span`,{className:`flex items-center gap-1 px-1.5 py-0.5 rounded ${new Date(e.dueDate)<new Date&&e.status!==`completed`?`bg-red-50 text-red-600`:`bg-gray-50`}`,children:[`📅 `,new Date(e.dueDate).toLocaleDateString()]})]})]})]}),(0,_.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,_.jsxs)(`select`,{value:e.status,onChange:t=>Le(e.id,t.target.value),className:`text-xs border-gray-200 rounded-lg bg-gray-50 py-1.5 px-2`,children:[(0,_.jsx)(`option`,{value:`pending`,children:`Pendiente`}),(0,_.jsx)(`option`,{value:`in_progress`,children:`En Progreso`}),(0,_.jsx)(`option`,{value:`completed`,children:`Completada`})]}),(0,_.jsx)(`button`,{onClick:()=>Be(e.id),className:`text-gray-400 hover:text-red-500 p-1`,children:`×`})]})]},e.id))})]},e.id)})})]})]})]}),f&&(0,_.jsx)(`div`,{className:`fixed bottom-4 right-4 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg`,children:f}),j&&(0,_.jsx)(`div`,{className:`fixed inset-0 z-30 flex items-center justify-center bg-black/40 p-4`,children:(0,_.jsxs)(`div`,{className:`w-full max-w-lg rounded-xl bg-white shadow-xl`,children:[(0,_.jsxs)(`div`,{className:`flex items-center justify-between border-b border-gray-200 px-6 py-4`,children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`h2`,{className:`text-lg font-semibold text-gray-900`,children:`Nota interna`}),(0,_.jsxs)(`p`,{className:`text-xs text-gray-500`,children:[j.name,` · `,j.email]})]}),(0,_.jsx)(`button`,{onClick:()=>{R(null),z(``)},className:`text-sm text-gray-500 hover:text-gray-700`,children:`Cerrar`})]}),(0,_.jsxs)(`div`,{className:`px-6 py-5 space-y-4`,children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`label`,{className:`block text-xs font-medium text-gray-700 mb-2`,children:`Etiquetas`}),(0,_.jsx)(`div`,{className:`flex flex-wrap gap-2 mb-2`,children:j.tags?.map(e=>(0,_.jsxs)(`span`,{className:`inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 border border-indigo-100`,children:[e,(0,_.jsx)(`button`,{onClick:()=>je(j.id,e),className:`text-indigo-400 hover:text-indigo-600 ml-1`,children:`×`})]},e))}),(0,_.jsxs)(`div`,{className:`flex gap-2`,children:[(0,_.jsx)(`input`,{type:`text`,value:Ue,onChange:e=>We(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Ae(j.id,Ue),We(``))},placeholder:`Nueva etiqueta...`,className:`flex-1 rounded-lg border border-gray-300 px-3 py-1.5 text-sm text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none`}),(0,_.jsx)(`button`,{onClick:()=>{Ae(j.id,Ue),We(``)},disabled:!Ue.trim(),className:`rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-200 disabled:opacity-50`,children:`Agregar`})]})]}),(0,_.jsx)(`textarea`,{value:te,onChange:e=>z(e.target.value),rows:6,className:`w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200`,placeholder:`Añade contexto sobre conversaciones, próximos pasos o recordatorios para el equipo.`}),(0,_.jsxs)(`div`,{className:`flex justify-end gap-3`,children:[(0,_.jsx)(`button`,{onClick:()=>{R(null),z(``)},className:`rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-gray-100`,children:`Cancelar`}),(0,_.jsx)(`button`,{onClick:we,className:`rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700`,children:`Guardar nota`})]})]})]})})]})}):(0,_.jsx)(`div`,{className:`min-h-screen bg-gray-50 flex items-center justify-center p-4`,children:(0,_.jsxs)(`div`,{className:`bg-white p-8 rounded-xl shadow-lg max-w-md w-full`,children:[(0,_.jsx)(`h1`,{className:`text-2xl font-bold text-gray-900 mb-6 text-center`,children:`Admin Login`}),(0,_.jsxs)(`form`,{onSubmit:U,className:`space-y-4`,children:[(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`label`,{className:`block text-sm font-medium text-gray-700 mb-1`,htmlFor:`admin-username`,children:`Usuario (opcional)`}),(0,_.jsx)(`input`,{id:`admin-username`,type:`text`,value:s,onChange:e=>oe(e.target.value),autoComplete:`username`,className:`w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all`,placeholder:`Escribe tu usuario o correo`})]}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`label`,{className:`block text-sm font-medium text-gray-700 mb-1`,children:`Contraseña`}),(0,_.jsx)(`input`,{type:`password`,value:c,onChange:e=>se(e.target.value),autoComplete:`current-password`,className:`w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all`,placeholder:`Ingresa la contraseña de admin`})]}),d&&(0,_.jsx)(`p`,{className:`text-red-500 text-sm`,children:d}),(0,_.jsx)(`button`,{type:`submit`,disabled:n,className:`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors disabled:opacity-50`,children:n?`Verificando...`:`Ingresar`})]})]})})}function X(){return(0,_.jsxs)(u,{children:[(0,_.jsx)(d,{path:`/`,element:(0,_.jsx)(B,{})}),(0,_.jsx)(d,{path:`/admin`,element:(0,_.jsx)(ve,{})}),(0,_.jsx)(d,{path:`/examples/restaurante-barrio`,element:(0,_.jsx)(ne,{})}),(0,_.jsx)(d,{path:`/examples/marca-personal`,element:(0,_.jsx)(T,{})}),(0,_.jsx)(d,{path:`/examples/curso-hotmart`,element:(0,_.jsx)(S,{})}),(0,_.jsx)(d,{path:`/examples/agencia-marketing`,element:(0,_.jsx)(re,{})}),(0,_.jsx)(d,{path:`/examples/funnel-ventas`,element:(0,_.jsx)(ie,{})}),(0,_.jsx)(d,{path:`/examples/funnel-productividad`,element:(0,_.jsx)(ae,{})}),(0,_.jsx)(d,{path:`/examples/restaurante-barrio.html`,element:(0,_.jsx)(m,{to:`/examples/restaurante-barrio`,replace:!0})}),(0,_.jsx)(d,{path:`/examples/marca-personal.html`,element:(0,_.jsx)(m,{to:`/examples/marca-personal`,replace:!0})}),(0,_.jsx)(d,{path:`/examples/curso-hotmart.html`,element:(0,_.jsx)(m,{to:`/examples/curso-hotmart`,replace:!0})}),(0,_.jsx)(d,{path:`*`,element:(0,_.jsx)(m,{to:`/`,replace:!0})})]})}var ye=X;(0,h.createRoot)(document.getElementById(`root`)).render((0,_.jsx)(g.StrictMode,{children:(0,_.jsx)(ee,{children:(0,_.jsx)(ye,{})})}));