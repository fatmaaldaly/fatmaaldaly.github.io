// Shows the project's first screenshot in a browser frame.
// Projects without screenshots get a designed placeholder instead.
export default function ProjectVisual({ project, eager = false }) {
  const [cover] = project.images;
  const host = project.links.live
    ? project.links.live.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : `github.com/fatmaaldaly/${project.links.github.split("/").pop()}`;

  return (
    <div className="project-visual">
      <div className="browser-bar" aria-hidden="true">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="browser-url">{host}</span>
      </div>
      {cover ? (
        <img
          src={cover}
          alt={`Screenshot of ${project.title}`}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
        />
      ) : (
        <div className="visual-placeholder" aria-hidden="true">
          <span className="placeholder-kicker">
            {project.platform === "mobile" ? "< mobile app />" : "< web app />"}
          </span>
          <span className="placeholder-title">{project.title}</span>
          <span className="placeholder-stack">
            {project.tech.slice(0, 3).join(" · ")}
          </span>
        </div>
      )}
    </div>
  );
}
