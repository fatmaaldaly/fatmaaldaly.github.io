# Fatma Aldaly · Portfolio

Personal software engineering portfolio built with React, React Router and Vite, deployed to GitHub Pages.

Live: https://fatmaaldaly.github.io/personal-site/

## Run locally

```bash
npm install
npm run dev
```

## Editing content

All content lives in two files, so you rarely need to touch components:

- `src/data/site.js`: profile links, skills, experience, learning goals
- `src/data/projects.js`: projects and their case studies (`/projects/:slug`)

Screenshots go in `src/assets/` (WebP keeps them small). Projects without screenshots get a generated placeholder.

## Deploy

```bash
npm run deploy
```

The build copies `index.html` to `404.html` so deep links such as `/projects/crm-pro` work on GitHub Pages.
