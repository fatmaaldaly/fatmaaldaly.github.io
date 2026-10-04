import { Link } from "react-router-dom";
import { TbArrowRight } from "react-icons/tb";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import { featuredProjects, projects } from "../data/projects";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeader
          index="03"
          label="Projects"
          id="projects-title"
          title="Things I've built."
          intro="Each project started with a problem I wanted to understand. Open a case study to see how I approached it and what I learned along the way."
        />

        <div className="project-stack">
          {featuredProjects.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={i}
              reverse={i % 2 === 1}
            />
          ))}
        </div>

        {projects.length > featuredProjects.length && (
          <div className="section-more reveal">
            <Link to="/projects" className="btn btn-ghost">
              See all {projects.length} projects <TbArrowRight aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
