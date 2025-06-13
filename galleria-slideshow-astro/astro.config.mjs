// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const isDev = process.env.NODE_ENV === "development";

// console.log({ isDev });

// https://astro.build/config
export default defineConfig({
  // base: isDev ? "/" : "/frontend-mentor-exercise-27-galleria-slideshow-site/",
  // base: import.meta.env.PUBLIC_BASE || "/",

  site: isDev ? "" : "https://barriedirk.github.io",
  base: isDev ? "/" : "frontend-mentor-exercise-27-galleria-slideshow-site",

  compressHTML: false,
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
