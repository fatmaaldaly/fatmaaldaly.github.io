export default function SectionHeader({ index, label, title, intro, id }) {
  return (
    <header className="section-header reveal">
      <p className="eyebrow">
        <span className="eyebrow-index">{index}</span>
        {label}
      </p>
      <h2 className="section-title" id={id}>
        {title}
      </h2>
      {intro && <p className="section-intro">{intro}</p>}
    </header>
  );
}
