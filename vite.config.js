import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const base = "/personal-site/"

// React Router links to the home page as "/personal-site" (no trailing slash).
// Vite only serves URLs under "/personal-site/", so refreshing that URL fails.
// Redirect it to the slashed version, like GitHub Pages does in production.
function redirectBaseWithoutSlash() {
  const bare = base.slice(0, -1)
  const middleware = (req, res, next) => {
    const [path, query = ""] = req.url.split("?")
    if (path === bare) {
      res.writeHead(301, { Location: base + (query ? `?${query}` : "") })
      res.end()
      return
    }
    next()
  }
  return {
    name: "redirect-base-without-slash",
    configureServer(server) {
      server.middlewares.use(middleware)
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), redirectBaseWithoutSlash()],
  base,
})
