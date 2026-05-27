export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-top">
        {project.tags.map((tag) => (
          <span className="tag" key={tag}>{tag}</span>
        ))}
      </div>

      <h3>{project.title}</h3>
      <p>{project.summary}</p>

      <dl className="process-list">
        <div>
          <dt>Problema</dt>
          <dd>{project.problem}</dd>
        </div>
        <div>
          <dt>Entrada</dt>
          <dd>{project.input}</dd>
        </div>
        <div>
          <dt>Automatización</dt>
          <dd>{project.automation}</dd>
        </div>
        <div>
          <dt>Salida</dt>
          <dd>{project.output}</dd>
        </div>
        <div>
          <dt>Impacto</dt>
          <dd>{project.impact}</dd>
        </div>
      </dl>
    </article>
  );
}
