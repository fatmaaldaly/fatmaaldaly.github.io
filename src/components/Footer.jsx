import { useEffect, useState } from "react";
import {
  TbArrowUp,
  TbBrandGithub,
  TbBrandLinkedin,
  TbMail,
} from "react-icons/tb";
import { profile } from "../data/site";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Fatma Aldaly</p>
        <ul className="footer-social" aria-label="Social links">
          <li>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <TbBrandGithub />
            </a>
          </li>
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <TbBrandLinkedin />
            </a>
          </li>
          <li>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <TbMail />
            </a>
          </li>
        </ul>
      </div>

      <button
        type="button"
        className={`to-top ${showTop ? "is-visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0 })}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
      >
        <TbArrowUp />
      </button>
    </footer>
  );
}
