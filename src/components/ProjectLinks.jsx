import { TbBrandGithub, TbExternalLink } from "react-icons/tb";

export default function ProjectLinks({ project, size = "" }) {
  const { github, live } = project.links;
  return (
    <>
      {live && (
        <a
          href={live}
          className={`btn btn-primary ${size}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Live demo of ${project.title} (opens in a new tab)`}
        >
          <TbExternalLink aria-hidden="true" /> Live Demo
        </a>
      )}
      {github && (
        <a
          href={github}
          className={`btn btn-ghost ${size}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Source code of ${project.title} on GitHub (opens in a new tab)`}
        >
          <TbBrandGithub aria-hidden="true" /> GitHub
        </a>
      )}
    </>
  );
}
