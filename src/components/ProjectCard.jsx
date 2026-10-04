import { Link } from "react-router-dom";
import { TbArrowRight } from "react-icons/tb";
import ProjectVisual from "./ProjectVisual";
import ProjectLinks from "./ProjectLinks";

// Large card used on the home page; `reverse` alternates the image side.
export default function ProjectCard({ project, index, reverse }) {
  const caseStudy = `/projects/${project.slug}`;

  return (
    <article className={`project-card reveal ${reverse ? "is-reverse" : ""}`}>
      <Link to={caseStudy} className="project-media" tabIndex={-1} aria-hidden="true">
        <ProjectVisual project={project} />
      </Link>

      <div className="project-body">
        <p className="project-meta">
          <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
          {project.category}
        </p>
        <h3 className="project-title">
          <Link to={caseStudy}>{project.title}</Link>
        </h3>
        <p className="project-tagline">{project.tagline}</p>

        <div className="project-problem">
          <span className="label">Problem</span>
          <p>{project.problem}</p>
        </div>

        <ul className="project-features">
          {project.features.slice(0, 3).map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <ul className="tag-list" aria-label="Technologies">
          {project.tech.slice(0, 6).map((t) => (
            <li className="tag" key={t}>
              {t}
            </li>
          ))}
          {project.tech.length > 6 && (
            <li className="tag tag-more">+{project.tech.length - 6}</li>
          )}
        </ul>

        <div className="project-actions">
          <Link to={caseStudy} className="btn btn-soft btn-sm">
            Read case study <TbArrowRight aria-hidden="true" />
          </Link>
          <ProjectLinks project={project} size="btn-sm" />
        </div>
      </div>
    </article>
  );
}
