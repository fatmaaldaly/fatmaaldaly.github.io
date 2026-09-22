import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-text animate-fade-in">
            <h1 className="hero-title">
              FATMA
              <br />
              <span className="hero-title-gradient">ALDALY</span>
            </h1>
            <p className="hero-subtitle"></p>
            <p className="hero-description">
              Interested in full stack development with experience in both
              frontend and backend technologies. Skilled in data analysis,
              database management, and AI, enabling the creation of intelligent,
              data-driven applications.
            </p>
            <div className="hero-buttons">
              {/* onclick="window.location.href='./projects.html'" */}
              {/* <button className="btn btn-primary"><Link to="/Projects" >View Projects</Link></button> */}
              <Link to="/projects" className="btn btn-primary">
                View Projects
              </Link>
              {/* <button className="btn btn-secondary" onclick="window.location.href='#contact'">Contact me</button> */}
              <button
                className="btn btn-secondary"
                onClick={() => (window.location.href = "#contact")}
              >
                Contact me
              </button>

              {/* <!-- <a href="#contact" className="nav-link">Contact me</a> --> */}
            </div>
          </div>
          <div className="hero-visual animate-scale-in">
            <div className="hero-circle">
              <svg
                className="hero-icon"
                width="120"
                height="120"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="16,18 22,12 16,6"></polyline>
                <polyline points="8,6 2,12 8,18"></polyline>
              </svg>
            </div>
            <div className="hero-decoration-1"></div>
            <div className="hero-decoration-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
