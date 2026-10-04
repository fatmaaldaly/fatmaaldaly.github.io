import { Link } from "react-router-dom";
import { TbArrowLeft, TbArrowRight } from "react-icons/tb";
import ProjectVisual from "../components/ProjectVisual";
import { projects } from "../data/projects";
import useReveal from "../hooks/useReveal";
import usePageMeta from "../hooks/usePageMeta";

export default function ProjectsPage() {
  useReveal("projects");
  usePageMeta(
    "Projects · Fatma Aldaly",
    "All projects by Fatma Aldaly: full-stack web apps, dashboards and React Native mobile apps.",
  );

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Link to="/#projects" className="back-link">
            <TbArrowLeft aria-hidden="true" /> Back to home
          </Link>
          <p className="eyebrow">
            <span className="eyebrow-index">{String(projects.length).padStart(2, "0")}</span>
            All projects
          </p>
          <h1 className="page-title">Everything I've built so far.</h1>
          <p className="section-intro">
            Web apps, dashboards and mobile apps. Each one taught me something
            new, and each has a case study explaining how.
          </p>
        </div>
      </section>

      <section className="section section-tight" aria-label="Project list">
        <div className="container">
          <ul className="archive-grid">
            {projects.map((project) => (
              <li key={project.slug} className="reveal">
                <Link to={`/projects/${project.slug}`} className="archive-card">
                  <ProjectVisual project={project} />
                  <div className="archive-body">
                    <p className="project-meta">{project.category}</p>
                    <h2>{project.title}</h2>
                    <p>{project.tagline}</p>
                    <ul className="tag-list" aria-label="Technologies">
                      {project.tech.slice(0, 4).map((t) => (
                        <li className="tag" key={t}>
                          {t}
                        </li>
                      ))}
                    </ul>
                    <span className="archive-link">
                      Read case study <TbArrowRight aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <p className="archive-note reveal">
            More projects are on the way. I'm always building something new.
          </p>
        </div>
      </section>
    </>
  );
}
