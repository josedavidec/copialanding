import ExampleLayout from './ExampleLayout'

const funnelStyles = `
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
`

export default function FunnelVentas() {
  return (
    <ExampleLayout
      title="Funnel de Ventas - Curso Online"
      description="Ejemplo de estructura de funnel diseñado para convertir visitantes en clientes"
      accent="emerald"
    >
      <style>{funnelStyles}</style>
      <div className="funnel-ventas">
        
        {/* STEP 1: HERO - Hook del Producto */}
        <section className="hero-section">
          <div className="hero-content">
            <span className="subheading">⏰ Oferta limitada - Finaliza en 24 horas</span>
            <h1>Aprende a Ganar Dinero Creando Contenido en Redes Sociales</h1>
            <p>
              Descubre el sistema que miles de creators usan para generar $3,000 - $10,000 USD mensuales trabajando desde cualquier lugar
            </p>
            <a href="#formulario" className="hero-cta">
              Sí, quiero aprender ahora
            </a>
            <div style={{ marginTop: '1.5rem', color: '#10b981' }}>
              ✓ Sin experiencia previa
              <br />
              ✓ Resultados en 30 días
              <br />
              ✓ Acceso de por vida
            </div>
          </div>
        </section>

        {/* STEP 2: Problema - Empatía */}
        <section style={{ background: 'rgba(15, 23, 42, 0.8)' }}>
          <div className="section-container">
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>¿Te suena familiar?</h2>
            <div className="two-column">
              <div>
                <div className="benefit-item">
                  <div className="benefit-icon">❌</div>
                  <div className="benefit-text">
                    <h3>No sabes cómo empezar</h3>
                    <p>Ves a otros creators ganando pero no sabes por dónde comenzar</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">❌</div>
                  <div className="benefit-text">
                    <h3>Creas contenido pero no ganas dinero</h3>
                    <p>Publicas constantemente pero tus seguidores no se convierten en clientes</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">❌</div>
                  <div className="benefit-text">
                    <h3>Los algoritmos te ignoran</h3>
                    <p>No entiendes por qué algunos videos explotan y otros no</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="benefit-item">
                  <div className="benefit-icon">❌</div>
                  <div className="benefit-text">
                    <h3>Te sientes abrumado</h3>
                    <p>Tanto contenido y tanta información que no sabes qué hacer</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">❌</div>
                  <div className="benefit-text">
                    <h3>Inviertes tiempo pero sin retorno</h3>
                    <p>Dedicas horas al día pero no ves resultados económicos reales</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">❌</div>
                  <div className="benefit-text">
                    <h3>Necesitas ingresos ahora</h3>
                    <p>Quieres un negocio escalable que genere dinero sin invertir mucho</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STEP 3: Solución - Agitación */}
        <section>
          <div className="section-container">
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>La solución ya existe</h2>
            <p style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.1rem', color: '#cbd5f5' }}>
              Existe un sistema probado que hemos perfeccionado durante 2 años trabajando con más de 500 creators exitosos.
            </p>
            
            <div className="testimonial-box">
              <p>
                "Hace 6 meses no tenía ni 100 seguidores. Seguí el sistema exactamente como está en el curso y ahora genero $5,000 mensuales en mi tiempo libre. Nunca creí que fuera posible."
              </p>
              <p className="testimonial-author">— María García, Microinfluencer</p>
            </div>

            <h2 style={{ marginTop: '2rem', marginBottom: '1.5rem' }}>Lo que aprenderás:</h2>
            <div className="two-column">
              <div>
                <div className="benefit-item">
                  <div className="benefit-icon">📱</div>
                  <div className="benefit-text">
                    <h3>Fórmula de Contenido Viral</h3>
                    <p>El patrón exacto que usan los creadores de 1M+ seguidores (funciona en TikTok, Reels, Shorts)</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">💰</div>
                  <div className="benefit-text">
                    <h3>5 Formas de Monetizar</h3>
                    <p>Elige la que mejor se adapte a ti: Afiliados, Productos Digitales, Servicios, Coaching, Ads</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🎯</div>
                  <div className="benefit-text">
                    <h3>Estrategia de Nicho</h3>
                    <p>Cómo elegir tu nicho perfecto y dominar la competencia (sin ser un experto)</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="benefit-item">
                  <div className="benefit-icon">📊</div>
                  <div className="benefit-text">
                    <h3>Sistema de Análisis</h3>
                    <p>Los datos que debes revisar cada semana para optimizar tus videos</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🔐</div>
                  <div className="benefit-text">
                    <h3>Scripts y Plantillas</h3>
                    <p>20+ plantillas de scripts listos para grabar y publicar (copia y pega)</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🚀</div>
                  <div className="benefit-text">
                    <h3>Plan de Acción 30 Días</h3>
                    <p>Día a día qué hacer, qué crear y cómo monetizar desde el primer mes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STEP 4: Prueba Social (Testimonios) */}
        <section style={{ background: 'rgba(15, 23, 42, 0.8)' }}>
          <div className="section-container">
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Resultados reales de nuestros estudiantes</h2>
            
            <div className="two-column" style={{ marginTop: '2rem' }}>
              <div className="testimonial-box">
                <p>
                  "Los scripts del curso me ahorraron meses de prueba y error. Implementé el sistema en 2 semanas y ya tengo 15,000 seguidores. La venta de mi primer producto digital fue el mes siguiente."
                </p>
                <p className="testimonial-author">— David López, Copywriter</p>
              </div>
              <div className="testimonial-box">
                <p>
                  "Creía que necesitaba ser famosa para ganar dinero. Resulta que NO. El sistema funciona incluso con 500 seguidores reales. Hice $2,300 en mi primer mes."
                </p>
                <p className="testimonial-author">— Sofía Martínez, Emprendedora</p>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <div className="testimonial-box">
                <p>
                  "Lo que más me gustó fue el plan de 30 días. Es tan específico que solo necesita saber QUÉ hacer, no necesito pensar en la estrategia. En 45 días generé mis primeros $800 dólares."
                </p>
                <p className="testimonial-author">— Carlos Ruiz, Estudiante de Ingeniería</p>
              </div>
            </div>
          </div>
        </section>

        {/* STEP 5: Objeciones - Responder Dudas */}
        <section>
          <div className="section-container">
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>¿Tienes dudas?</h2>
            
            <div className="objection-section">
              <h3>¿Necesito experiencia previa?</h3>
              <p>No. El 40% de nuestros estudiantes nunca habían subido un video. El sistema funciona incluso si estás empezando de cero.</p>
            </div>

            <div className="objection-section">
              <h3>¿Funciona en todas las plataformas?</h3>
              <p>Sí. Los principios funcionan en TikTok, Instagram Reels, YouTube Shorts, Pinterest y Facebook. Te mostramos estrategias específicas para cada una.</p>
            </div>

            <div className="objection-section">
              <h3>¿Cuánto tiempo necesito invertir?</h3>
              <p>Mínimo 1 hora diaria. La mayoría de estudiantes invierte 2-3 horas grabando contenido y dejando que el sistema trabaje el resto del día.</p>
            </div>

            <div className="objection-section">
              <h3>¿Y si no me funciona?</h3>
              <p>Tenemos garantía de 60 días. Si no ves progreso en tu primer mes, reembolsamos tu dinero. Sin preguntas. Sin justificaciones.</p>
            </div>
          </div>
        </section>

        {/* STEP 6: Scarcity + Price */}
        <section style={{ background: 'rgba(16, 185, 129, 0.05)' }}>
          <div className="section-container" style={{ maxWidth: '600px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Oportunidad limitada</h2>
            <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#cbd5f5' }}>
              Solo abrimos el curso cada 6 meses y solo tenemos 50 spots disponibles por cohorte.
            </p>

            <div className="timer">
              ⏱️ OFERTA ESPECIAL DE LANZAMIENTO
              <br />
              Acaba en: 24 horas
            </div>

            <div className="price-highlight">
              <strong>Precio normal</strong>
              <p style={{ textDecoration: 'line-through', marginBottom: '1rem', color: '#94a3b8' }}>$197 USD</p>
              <strong style={{ color: '#ef4444' }}>HPER HOY SOLO</strong>
              <div className="amount">$49 USD</div>
              <p>Después de las 24 horas, el precio sube a $197</p>
            </div>

            <div className="guarantee-box">
              <h3>✓ Garantía 100% de Satisfacción</h3>
              <p>No te funciona? Reembolso total en 60 días</p>
              <p style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>Acceso inmediato al curso después del pago</p>
            </div>
          </div>
        </section>

        {/* STEP 7: Final CTA con Presión */}
        <section id="formulario">
          <div className="section-container" style={{ maxWidth: '700px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>¿Estás listo para cambiar tu vida?</h2>
            <p style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.05rem', color: '#cbd5f5' }}>
              Los spots se están llenando rápido. En la cohorte anterior se vendieron en 3 días.
            </p>

            <div style={{ 
              background: 'rgba(15, 23, 42, 0.8)',
              border: '2px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '1.5rem',
              padding: '2rem',
              textAlign: 'center'
            }}>
              <p style={{ color: '#10b981', fontWeight: '700', margin: '0 0 1rem 0' }}>
                Haz clic abajo para acceder al curso
              </p>
              <a href="https://wa.me/573128225056?text=Hola, quiero el curso de creators" className="final-cta">
                SÍ, QUIERO EL ACCESO AHORA
              </a>
              <p className="risk-free">
                ✓ Sin riesgo - 100% garantía de devolución de dinero
              </p>
              <p className="cta-text">
                Haz clic en el botón. Confirmaremos tu acceso en menos de 5 minutos.
              </p>
            </div>

            <p style={{ textAlign: 'center', marginTop: '2rem', color: '#64748b', fontSize: '0.9rem' }}>
              Preguntas? Contáctanos por WhatsApp arriba o responde a tu email de confirmación
            </p>
          </div>
        </section>

        {/* STEP 8: Final Security/Trust */}
        <section style={{ background: 'rgba(15, 23, 42, 0.6)' }}>
          <div className="section-container" style={{ maxWidth: '800px', textAlign: 'center' }}>
            <p style={{ marginBottom: '1.5rem', color: '#94a3b8' }}>
              🔒 Transacción segura con SSL | 📱 Acceso inmediato después del pago
              <br />
              ✓ Garantía de satisfacción 60 días | 💬 Soporte por WhatsApp
            </p>
            <p style={{ fontSize: '0.85rem', color: '#64748b' }}>
              © 2024 CreatorsAcademy. Todos los derechos reservados. | 
              <a href="#" style={{ color: '#10b981', textDecoration: 'none', marginLeft: '0.5rem' }}>Términos y Condiciones</a>
            </p>
          </div>
        </section>

      </div>
    </ExampleLayout>
  )
}
