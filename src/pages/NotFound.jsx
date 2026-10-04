import { Link } from "react-router-dom";
import { TbArrowLeft } from "react-icons/tb";
import usePageMeta from "../hooks/usePageMeta";

export default function NotFound() {
  usePageMeta("Page not found · Fatma Aldaly");

  return (
    <section className="page-hero not-found">
      <div className="container">
        <p className="eyebrow">
          <span className="eyebrow-index">404</span>
          Not found
        </p>
        <h1 className="page-title">This page doesn't exist (yet).</h1>
        <p className="section-intro">The link may be broken, or the page may have moved.</p>
        <Link to="/" className="btn btn-primary">
          <TbArrowLeft aria-hidden="true" /> Back to home
        </Link>
      </div>
    </section>
  );
}
