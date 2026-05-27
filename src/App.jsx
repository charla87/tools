import { useMemo, useState } from "react";
import { projects } from "./data/projects.js";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import SectionHeader from "./components/SectionHeader.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import CaseCard from "./components/CaseCard.jsx";
import Footer from "./components/Footer.jsx";

const filters = ["Todos", "Python", "IA", "Documentos", "Diseño", "Procesos"];

const processCases = [
  {
    title: "Proceso documental",
    before: "Archivos dispersos, apertura manual, copia de datos y revisión caso por caso.",
    after: "Carpeta de entrada, reglas definidas y salida ordenada con documentos o Excel final.",
  },
  {
    title: "Proceso visual",
    before: "Adaptar imágenes una a una, ajustar tamaños, fondos, nombres y formatos.",
    after: "Conversión en lote con formato homogéneo y criterios preparados para web o catálogo.",
  },
  {
    title: "Proceso de análisis",
    before: "Leer textos largos, extraer conclusiones y preparar respuestas manualmente.",
    after: "Resumen estructurado, checklist de acciones y borrador listo para revisar.",
  },
];

const methodSteps = [
  {
    number: "01",
    title: "Observar",
    text: "Detectar una tarea que se repite y entender dónde se pierde tiempo.",
  },
  {
    number: "02",
    title: "Convertir en reglas",
    text: "Definir entradas, condiciones, errores posibles y resultado esperado.",
  },
  {
    number: "03",
    title: "Prototipar",
    text: "Crear una primera versión útil, aunque sea simple, para probar rápido.",
  },
  {
    number: "04",
    title: "Medir y mejorar",
    text: "Revisar ahorro de tiempo, errores evitados y facilidad de uso.",
  },
];

const criteria = [
  {
    icon: "⏱",
    title: "Se repite muchas veces",
    text: "La tarea aparece cada semana o cada mes y siempre sigue pasos parecidos.",
  },
  {
    icon: "⚠️",
    title: "Puede generar errores",
    text: "Hay riesgo de olvidar archivos, copiar mal datos o aplicar criterios distintos.",
  },
  {
    icon: "📈",
    title: "El resultado se puede medir",
    text: "Se puede estimar tiempo ahorrado, reducción de errores o mejora en trazabilidad.",
  },
];

export default function App() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [query, setQuery] = useState("");

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesFilter =
        activeFilter === "Todos" || project.categories.includes(activeFilter);

      const searchableText = [
        project.title,
        project.summary,
        project.problem,
        project.input,
        project.automation,
        project.output,
        project.impact,
        ...project.categories,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        normalizedQuery.length === 0 || searchableText.includes(normalizedQuery);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, query]);

  return (
    <>
      <Header />

      <main>
        <Hero />

        <section className="section section-muted" id="enfoque">
          <SectionHeader
            eyebrow="Enfoque"
            title="Una herramienta no empieza con código. Empieza con un proceso mal resuelto."
            text="Muchas tareas diarias no necesitan una gran plataforma. Necesitan una forma más clara de recibir información, aplicar reglas y generar una salida útil sin repetir trabajo manual."
          />

          <div className="value-grid">
            <article>
              <span className="icon">1</span>
              <h3>Problema concreto</h3>
              <p>
                Identificar una tarea que consume tiempo, se repite con frecuencia
                o genera errores: renombrar archivos, revisar documentos, preparar
                datos o adaptar imágenes.
              </p>
            </article>
            <article>
              <span className="icon">2</span>
              <h3>Reglas claras</h3>
              <p>
                Convertir el trabajo manual en una secuencia sencilla: qué entra,
                qué se comprueba, qué se transforma y qué resultado debe entregarse.
              </p>
            </article>
            <article>
              <span className="icon">3</span>
              <h3>Resultado medible</h3>
              <p>
                La herramienta debe ahorrar tiempo, reducir errores o mejorar la
                trazabilidad. Si no se puede explicar el beneficio, no merece complicarse.
              </p>
            </article>
          </div>
        </section>

        <section className="section">
          <SectionHeader
            eyebrow="Estructura"
            title="Cada proyecto se explica como una ficha de proceso"
            text="Así se entiende rápido qué problema resuelve, qué necesita para funcionar y qué entrega al final."
          />

          <div className="steps">
            {[
              ["01", "Problema", "Qué tarea manual, lenta o repetitiva se quiere mejorar."],
              ["02", "Entrada", "Qué recibe la herramienta: PDFs, Excel, carpetas, imágenes, texto o códigos."],
              ["03", "Automatización", "Qué reglas aplica: extracción, validación, conversión, renombrado o generación."],
              ["04", "Salida", "Qué entrega: tabla, archivo final, informe, imagen optimizada o resumen."],
            ].map(([number, title, text]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="proyectos">
          <SectionHeader
            eyebrow="Herramientas"
            title="Catálogo de proyectos"
            text="Ejemplos de automatizaciones pequeñas que pueden adaptarse a procesos administrativos, documentales, visuales o de análisis con IA."
          />

          <div className="toolbar" aria-label="Buscador y filtros de proyectos">
            <input
              className="search-input"
              type="search"
              placeholder="Buscar por PDF, Excel, IA, imágenes..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />

            <div className="filters" aria-label="Filtros de proyectos">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={`filter ${activeFilter === filter ? "active" : ""}`}
                  onClick={() => setActiveFilter(filter)}
                  type="button"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <p className="results-count">
            {filteredProjects.length} proyecto{filteredProjects.length === 1 ? "" : "s"} encontrado
            {filteredProjects.length === 1 ? "" : "s"}.
          </p>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section className="section section-muted" id="casos">
          <SectionHeader
            eyebrow="Procesos"
            title="De tarea manual a flujo automatizado"
            text="El objetivo no es hacer software complejo, sino convertir tareas repetidas en flujos más simples, controlados y fáciles de explicar."
          />

          <div className="case-grid">
            {processCases.map((item) => (
              <CaseCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section className="section" id="metodo">
          <SectionHeader
            eyebrow="Método"
            title="Proceso de trabajo"
            text="Cada herramienta empieza pequeña. Primero se valida que resuelve el problema; después se mejora la interfaz, la robustez y la documentación."
          />

          <div className="steps">
            {methodSteps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-muted">
          <SectionHeader
            eyebrow="Criterios"
            title="Cuándo merece la pena crear una herramienta"
            text="No todas las tareas necesitan automatización. Una pequeña herramienta tiene sentido cuando cumple varios de estos criterios."
          />

          <div className="value-grid">
            {criteria.map((item) => (
              <article key={item.title}>
                <span className="icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contacto">
          <div>
            <p className="eyebrow">Contacto</p>
            <h2>¿Tienes un proceso que se repite demasiado?</h2>
            <p>
              La mejor automatización suele empezar con una pregunta sencilla:
              ¿qué parte de este trabajo estoy haciendo siempre igual?
            </p>
          </div>
          <a
            className="button button-primary"
            href="mailto:tu-email@ejemplo.com?subject=Consulta%20sobre%20automatizaci%C3%B3n%20de%20procesos"
          >
            Escribir email
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}
