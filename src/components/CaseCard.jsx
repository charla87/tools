export default function CaseCard({ title, before, after }) {
  return (
    <article className="case-card">
      <h3>{title}</h3>
      <div className="case-columns">
        <div>
          <span>Antes</span>
          <p>{before}</p>
        </div>
        <div>
          <span>Después</span>
          <p>{after}</p>
        </div>
      </div>
    </article>
  );
}
