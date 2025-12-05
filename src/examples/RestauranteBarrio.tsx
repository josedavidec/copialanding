import ExampleLayout from './ExampleLayout'

const restauranteStyles = `
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
`

const restauranteMarkup = `<style>${restauranteStyles}</style>
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
`

function RestauranteBarrio() {
  return (
    <ExampleLayout
      title="Landing de ejemplo · Restaurante de barrio"
      description="Usa este layout como referencia de cómo presentamos menús, promociones y reservas integradas en un solo sprint estático."
      accent="amber"
    >
      <div className="restaurante-landing" dangerouslySetInnerHTML={{ __html: restauranteMarkup }} />
    </ExampleLayout>
  )
}

export default RestauranteBarrio
