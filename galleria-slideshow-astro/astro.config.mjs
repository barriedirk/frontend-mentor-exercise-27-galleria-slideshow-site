// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// const isDev = process.env.NODE_ENV === "development";

// https://astro.build/config
export default defineConfig({
  // base: isDev ? "/" : "/frontend-mentor-exercise-27-galleria-slideshow-site/",
  // base: import.meta.env.PUBLIC_BASE || "/",

  // site: "https://barriedirk.github.io",
  // base: "frontend-mentor-exercise-27-galleria-slideshow-site",
  compressHTML: false,
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
