import { Link } from "react-router-dom";
import { TbArrowRight, TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";
import { profile } from "../data/site";

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="hero-status">
            <span className="pulse" aria-hidden="true" />
            Business Informatics graduate · open to opportunities
          </p>
          <h1 id="hero-title" className="hero-title">
            Fatma Aldaly
          </h1>
          <p className="hero-role">
            Aspiring <span className="text-gradient">Full-Stack Developer</span>
          </p>
          <p className="hero-intro">
            I learn by building. I enjoy turning ideas into working
            applications, digging into how things work behind the interface,
            and getting a little better at software engineering with every
            project.
          </p>

          <div className="hero-actions">
            <Link to="/#projects" className="btn btn-primary">
              View My Projects <TbArrowRight aria-hidden="true" />
            </Link>
            <Link to="/#contact" className="btn btn-ghost">
              Contact Me
            </Link>
          </div>

          <ul className="hero-social" aria-label="Social links">
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">
                <TbBrandGithub aria-hidden="true" /> GitHub
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                <TbBrandLinkedin aria-hidden="true" /> LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div className="hero-code" aria-hidden="true">
          <div className="code-window">
            <div className="code-titlebar">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <span className="code-filename">fatma.ts</span>
            </div>
            <pre className="code-body">
              <code>
                <span className="tk-key">const</span> <span className="tk-var">fatma</span> = {"{"}
                {"\n"}  <span className="tk-prop">background</span>: <span className="tk-str">"Business Informatics"</span>,
                {"\n"}  <span className="tk-prop">focus</span>: <span className="tk-str">"Full-stack web apps"</span>,
                {"\n"}  <span className="tk-prop">stack</span>: [<span className="tk-str">"React"</span>, <span className="tk-str">"Next.js"</span>, <span className="tk-str">"Node.js"</span>, <span className="tk-str">"PostgreSQL"</span>],
                {"\n"}  <span className="tk-prop">learning</span>: [<span className="tk-str">"system design"</span>, <span className="tk-str">"testing"</span>],
                {"\n"}  <span className="tk-prop">approach</span>: <span className="tk-str">"learn by building"</span>,
                {"\n"}  <span className="tk-prop">curious</span>: <span className="tk-bool">true</span>,
                {"\n"}{"}"};
                {"\n"}
                {"\n"}<span className="tk-comment">{"// always shipping the next version"}</span>
                {"\n"}<span className="tk-var">fatma</span>.<span className="tk-fn">build</span>(<span className="tk-str">"something useful"</span>);<span className="caret" />
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
