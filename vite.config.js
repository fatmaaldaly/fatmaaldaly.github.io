import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  // Inline config stops Vite from picking up a stray postcss.config in a parent folder
  css: { postcss: {} },
});
