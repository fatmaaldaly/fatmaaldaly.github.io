import { Link, useParams } from "react-router-dom";
import { TbArrowLeft, TbArrowRight } from "react-icons/tb";
import Gallery from "../components/Gallery";
import ProjectVisual from "../components/ProjectVisual";
import ProjectLinks from "../components/ProjectLinks";
import NotFound from "./NotFound";
import { getProject, projects } from "../data/projects";
import useReveal from "../hooks/useReveal";
import usePageMeta from "../hooks/usePageMeta";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);
  useReveal(slug);
  usePageMeta(
    project ? `${project.title} · Case study · Fatma Aldaly` : "Page not found · Fatma Aldaly",
    project ? `${project.title}: ${project.tagline}.` : undefined,
  );

  if (!project) return <NotFound />;

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  return (
    <>

      <article className="case-study">
        <header className="page-hero case-hero">
          <div className="container">
            <Link to="/projects" className="back-link">
              <TbArrowLeft aria-hidden="true" /> All projects
            </Link>
            <p className="eyebrow">
              <span className="eyebrow-index">Case study</span>
              {project.category}
            </p>
            <h1 className="page-title">{project.title}</h1>
            <p className="case-tagline">{project.tagline}</p>
            <div className="case-actions">
              <ProjectLinks project={project} />
            </div>
          </div>
        </header>

        <div className="container">
          <div className="case-media reveal">
            {project.images.length > 0 ? (
              <Gallery key={project.slug} images={project.images} title={project.title} />
            ) : (
              <ProjectVisual project={project} eager />
            )}
          </div>

          <div className="case-layout">
            <aside className="case-aside reveal" aria-label="Project details">
              <dl>
                <div>
                  <dt>Role</dt>
                  <dd>{project.role}</dd>
                </div>
                <div>
                  <dt>Type</dt>
                  <dd>{project.category}</dd>
                </div>
                <div>
                  <dt>Stack</dt>
                  <dd>
                    <ul className="tag-list">
                      {project.tech.map((t) => (
                        <li className="tag" key={t}>
                          {t}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              </dl>
            </aside>

            <div className="case-content">
              <section className="case-block reveal" aria-labelledby="cs-overview">
                <h2 id="cs-overview">Overview</h2>
                <p className="lead">{project.summary}</p>
              </section>

              <section className="case-block reveal" aria-labelledby="cs-problem">
                <h2 id="cs-problem">The problem</h2>
                <p>{project.problem}</p>
              </section>

              <section className="case-block reveal" aria-labelledby="cs-approach">
                <h2 id="cs-approach">How I approached it</h2>
                <ol className="step-list">
                  {project.approach.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </section>

              <section className="case-block reveal" aria-labelledby="cs-features">
                <h2 id="cs-features">Key features</h2>
                <ul className="check-list two-col">
                  {project.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </section>

              <section className="case-block learned reveal" aria-labelledby="cs-learned">
                <h2 id="cs-learned">What I learned</h2>
                <ul className="learned-list">
                  {project.learned.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          {next !== project && (
            <nav className="next-project reveal" aria-label="Next project">
              <Link to={`/projects/${next.slug}`}>
                <span className="mini-label">Next project</span>
                <span className="next-title">
                  {next.title} <TbArrowRight aria-hidden="true" />
                </span>
                <span className="next-tagline">{next.tagline}</span>
              </Link>
            </nav>
          )}
        </div>
      </article>
    </>
  );
}
