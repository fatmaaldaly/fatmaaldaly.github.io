import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-content">
          <h1 className="nav-title fs-3 fw-bold" style={{ color: "white" }}>
            Fatma Aldaly
          </h1>

          {/* Hamburger icon for mobile */}
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          {/* Nav links */}
          <div className={`nav-links g-2 ${isOpen ? "open" : ""}`}>
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#education" className="nav-link">
              Education
            </a>
            <a href="#experience" className="nav-link">
              Experience
            </a>
            <a href="#skills" className="nav-link">
              Skills
            </a>
            <a href="#hobbies" className="nav-link">
              Hobbies
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
