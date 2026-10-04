import { useEffect } from "react";

const DEFAULT_TITLE = "Fatma Aldaly · Aspiring Full-Stack Developer";

// Updates the document title and meta description for the current page.
export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ?? DEFAULT_TITLE;
    if (!description) return;
    const meta = document.querySelector('meta[name="description"]');
    if (!meta) return;
    const previous = meta.getAttribute("content");
    meta.setAttribute("content", description);
    return () => meta.setAttribute("content", previous);
  }, [title, description]);
}
