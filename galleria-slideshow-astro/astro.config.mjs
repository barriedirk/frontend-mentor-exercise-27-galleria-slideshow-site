// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const isDev = process.env.NODE_ENV === "development";
// const site = isDev ? "/" : "https://barriedirk.github.io";
const base = isDev
  ? "/"
  : "frontend-mentor-exercise-27-galleria-slideshow-site";

// console.log({ isDev });

// https://astro.build/config
export default defineConfig({
  // base: isDev ? "/" : "/frontend-mentor-exercise-27-galleria-slideshow-site/",
  // base: import.meta.env.PUBLIC_BASE || "/",

  // site,
  base,

  compressHTML: false,
  build: {
    assets: "astro_",
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
