export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <p className="eyebrow">Python · IA · Automatización · Documentos · Diseño</p>
        <h1>Pequeñas herramientas para mejorar procesos</h1>
        <p className="hero-subtitle">
          Portfolio de soluciones ligeras para transformar tareas repetitivas en
          procesos más claros, rápidos y medibles. Herramientas pequeñas, aplicadas
          a problemas reales.
        </p>

        <div className="hero-actions">
          <a href="#proyectos" className="button button-primary">Ver herramientas</a>
          <a href="#enfoque" className="button button-secondary">Entender el enfoque</a>
        </div>

        <div className="hero-metrics" aria-label="Indicadores">
          <div>
            <strong>Entrada</strong>
            <span>archivos, PDFs, Excel, imágenes o texto</span>
          </div>
          <div>
            <strong>Proceso</strong>
            <span>reglas, validaciones y automatización</span>
          </div>
          <div>
            <strong>Salida</strong>
            <span>datos ordenados, informes o archivos listos</span>
          </div>
        </div>
      </div>

      <div className="hero-card" aria-label="Resumen visual del portfolio">
        <div className="terminal-card">
          <div className="terminal-top">
            <span></span><span></span><span></span>
          </div>
          <pre><code>{`detectar_tarea_repetitiva()
definir_reglas()
automatizar_proceso()
medir_ahorro()
mejorar_version()`}</code></pre>
        </div>
      </div>
    </section>
  );
}
