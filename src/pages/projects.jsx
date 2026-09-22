import { projects } from "../assets/data/projects";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Projects.css";
import { Button } from "bootstrap";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";

export default function Projects() {
  const [activeImageIndices, setActiveImageIndices] = useState(
    projects.reduce((acc, project) => {
      acc[project.id] = 0;
      return acc;
    }, {}),
  );

  useEffect(() => {
    AOS.init({ duration: 900, once: true, mirror: false });
  }, []);

  const handlePrevImage = (projectId, totalImages) => {
    setActiveImageIndices((prev) => ({
      ...prev,
      [projectId]:
        prev[projectId] === 0 ? totalImages - 1 : prev[projectId] - 1,
    }));
  };

  const handleNextImage = (projectId, totalImages) => {
    setActiveImageIndices((prev) => ({
      ...prev,
      [projectId]:
        prev[projectId] === totalImages - 1 ? 0 : prev[projectId] + 1,
    }));
  };

  return (
    <section className="projects-section">
      <button className="back-button" onClick={() => window.history.back()}>
        &larr; Back to home
      </button>
      <div className="container">
        {/* Section Header */}
        <div
          className="projects-header"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h1 className="projects-title">
            My <span className="title-highlight">Projects</span>
          </h1>
          <p className="projects-subtitle">
            Exploring ideas, solving problems, and building solutions that make
            an impact
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-showcase">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="1000"
            >
              {/* Left Side - Gallery */}
              <div className="project-gallery">
                <div className="gallery-container">
                  <img
                    src={project.images[activeImageIndices[project.id]]}
                    alt={`${project.title} - Image ${activeImageIndices[project.id] + 1}`}
                    className="gallery-image"
                  />
                  {project.images.length > 1 && (
                    <>
                      <button
                        className="gallery-nav gallery-prev"
                        onClick={() =>
                          handlePrevImage(project.id, project.images.length)
                        }
                        aria-label="Previous image"
                      >
                        ❮
                      </button>
                      <button
                        className="gallery-nav gallery-next"
                        onClick={() =>
                          handleNextImage(project.id, project.images.length)
                        }
                        aria-label="Next image"
                      >
                        ❯
                      </button>
                      <div className="gallery-indicators">
                        {project.images.map((_, idx) => (
                          <span
                            key={idx}
                            className={`indicator ${
                              idx === activeImageIndices[project.id]
                                ? "active"
                                : ""
                            }`}
                            onClick={() =>
                              setActiveImageIndices((prev) => ({
                                ...prev,
                                [project.id]: idx,
                              }))
                            }
                            aria-label={`Go to image ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
                <div className="gallery-badge">{project.category}</div>
              </div>

              {/* Right Side - Content */}
              <div className="project-content">
                {/* Header */}
                <div className="project-header-content">
                  <h2 className="project-title">{project.title}</h2>
                  <p className="project-subtitle-text">{project.subtitle}</p>
                </div>

                {/* Description */}
                <div className="project-description">
                  <p className="description-lead">{project.shortDescription}</p>
                  <p className="description-full">{project.fullDescription}</p>
                </div>

                {/* Tech Stack */}
                <div className="project-section">
                  <h3 className="section-title">Tech Stack</h3>
                  <div className="tech-stack">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {/* <span className="tech-icon">{project.techIcons[idx]}</span> */}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="project-section">
                  <h3 className="section-title">Key Features</h3>
                  <ul className="features-list">
                    {project.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="feature-item">
                        <span className="feature-icon">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Role & Links */}
                <div className="project-footer">
                  <div className="role-info">
                    <span className="role-label">My Role:</span>
                    <span className="role-value">{project.role}</span>
                  </div>
                  <div className="project-links">
                    {project.links.live !== "#" && (
                      <a
                        href={project.links.live}
                        className="link-button link-live"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {/* <span className="link-icon">🌐</span> */}
                        Live Demo
                      </a>
                    )}
                    {project.links.github !== "#" && (
                      <a
                        href={project.links.github}
                        className="link-button link-github"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="link-icon"></span>
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className="projects-cta"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2>More projects coming soon</h2>
          <p>
            I'm constantly working on new and exciting projects. Stay tuned!
          </p>
        </div>
      </div>
      <ScrollToTop smooth component={<FaArrowUp />} />
    </section>
  );
}
