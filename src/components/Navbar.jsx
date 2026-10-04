import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { TbMenu2, TbX } from "react-icons/tb";
import { navLinks } from "../data/site";

export default function Navbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view (home page only)
  useEffect(() => {
    if (!onHome) {
      setActive(pathname.startsWith("/projects") ? "projects" : "");
      return;
    }
    const sections = navLinks
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [onHome, pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <header className={`site-header ${scrolled || isOpen ? "is-scrolled" : ""}`}>
      <nav className="container nav" aria-label="Main">
        <Link to="/#home" className="brand" onClick={close}>
          <span className="brand-mark" aria-hidden="true">
            FA
          </span>
          <span className="brand-name">Fatma Aldaly</span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={isOpen}
          aria-controls="nav-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((o) => !o)}
        >
          {isOpen ? <TbX /> : <TbMenu2 />}
        </button>

        <ul id="nav-menu" className={`nav-links ${isOpen ? "is-open" : ""}`}>
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <Link
                to={`/#${id}`}
                className={`nav-link ${active === id ? "is-active" : ""}`}
                aria-current={active === id ? "true" : undefined}
                onClick={close}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
