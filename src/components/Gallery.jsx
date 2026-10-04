import { useState } from "react";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";

export default function Gallery({ images, title }) {
  const [active, setActive] = useState(0);
  const count = images.length;
  const go = (i) => setActive((i + count) % count);

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") go(active - 1);
    if (e.key === "ArrowRight") go(active + 1);
  };

  return (
    <div
      className="gallery"
      role="region"
      aria-roledescription="carousel"
      aria-label={`${title} screenshots`}
      onKeyDown={count > 1 ? onKeyDown : undefined}
    >
      <div className="gallery-stage">
        <div className="browser-bar" aria-hidden="true">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>
        <img
          src={images[active]}
          alt={`${title} screenshot ${active + 1} of ${count}`}
          fetchPriority="high"
        />
        {count > 1 && (
          <>
            <button
              type="button"
              className="gallery-nav prev"
              onClick={() => go(active - 1)}
              aria-label="Previous screenshot"
            >
              <TbChevronLeft />
            </button>
            <button
              type="button"
              className="gallery-nav next"
              onClick={() => go(active + 1)}
              aria-label="Next screenshot"
            >
              <TbChevronRight />
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <ul className="gallery-thumbs" aria-label="Choose a screenshot">
          {images.map((src, i) => (
            <li key={src}>
              <button
                type="button"
                className={i === active ? "is-active" : ""}
                onClick={() => setActive(i)}
                aria-label={`Show screenshot ${i + 1}`}
                aria-current={i === active ? "true" : undefined}
              >
                <img src={src} alt="" loading="lazy" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
