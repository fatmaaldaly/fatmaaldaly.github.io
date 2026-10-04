import { useEffect, useState } from "react";
import { TbBrandGithub, TbArrowUpRight, TbStar } from "react-icons/tb";
import SectionHeader from "./SectionHeader";
import { profile } from "../data/site";
import { projects } from "../data/projects";

const CACHE_KEY = "gh-repos-v1";
const LANG_COLORS = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  CSS: "#663399",
  HTML: "#e34c26",
  Java: "#b07219",
};

// Shown if the GitHub API is unavailable or rate-limited
const fallbackRepos = projects.map((p) => ({
  name: p.links.github.split("/").pop(),
  html_url: p.links.github,
  description: p.tagline,
  language: p.platform === "mobile" || p.tech.includes("TypeScript") ? "TypeScript" : "JavaScript",
  stargazers_count: 0,
  pushed_at: null,
}));

function describe(repo) {
  if (repo.description) return repo.description;
  const match = projects.find(
    (p) => p.links.github.toLowerCase().endsWith(`/${repo.name.toLowerCase()}`),
  );
  if (match) return match.tagline;
  if (repo.name === "personal-site") return "The source code of this portfolio.";
  return "Project repository";
}

function readCache() {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function writeCache(data) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(data));
  } catch {
    /* storage unavailable: ignore */
  }
}

function formatDate(iso) {
  if (!iso) return null;
  return new Date(iso).toLocaleDateString("en", { month: "short", year: "numeric" });
}

export default function GitHubSection() {
  const [repos, setRepos] = useState(() => readCache());

  useEffect(() => {
    if (repos) return;
    const controller = new AbortController();
    fetch(
      `https://api.github.com/users/${profile.githubUser}/repos?sort=pushed&per_page=30`,
      { signal: controller.signal },
    )
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data) => {
        const list = data
          .filter((r) => !r.fork && !r.archived)
          .slice(0, 6)
          .map(({ name, html_url, description, language, stargazers_count, pushed_at }) => ({
            name,
            html_url,
            description,
            language,
            stargazers_count,
            pushed_at,
          }));
        writeCache(list);
        setRepos(list);
      })
      .catch((err) => {
        if (err?.name !== "AbortError") setRepos(fallbackRepos);
      });
    return () => controller.abort();
  }, [repos]);

  const list = repos ?? [];

  return (
    <section id="github" className="section section-alt" aria-labelledby="github-title">
      <div className="container">
        <SectionHeader
          index="06"
          label="Code"
          id="github-title"
          title="Explore my GitHub."
          intro="Everything I build lives on GitHub, including the experiments and the work in progress. Here's what I've pushed to most recently."
        />

        <div className="github-layout">
          <a
            className="github-cta reveal"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TbBrandGithub className="github-cta-icon" aria-hidden="true" />
            <span className="github-cta-handle">@{profile.githubUser}</span>
            <span className="github-cta-text">
              Browse all repositories, commits and work in progress.
            </span>
            <span className="github-cta-link">
              Visit profile <TbArrowUpRight aria-hidden="true" />
            </span>
          </a>

          <ul className="repo-grid" aria-busy={!repos}>
            {!repos &&
              Array.from({ length: 6 }, (_, i) => (
                <li className="repo-card is-loading" key={i} aria-hidden="true" />
              ))}
            {list.map((repo) => (
              <li key={repo.name}>
                <a
                  className="repo-card"
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="repo-name">
                    {repo.name}
                    <TbArrowUpRight aria-hidden="true" />
                  </span>
                  <span className="repo-desc">{describe(repo)}</span>
                  <span className="repo-meta">
                    {repo.language && (
                      <span className="repo-lang">
                        <span
                          className="lang-dot"
                          style={{ background: LANG_COLORS[repo.language] ?? "var(--muted)" }}
                          aria-hidden="true"
                        />
                        {repo.language}
                      </span>
                    )}
                    {repo.stargazers_count > 0 && (
                      <span>
                        <TbStar aria-hidden="true" /> {repo.stargazers_count}
                      </span>
                    )}
                    {repo.pushed_at && <span>Updated {formatDate(repo.pushed_at)}</span>}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
