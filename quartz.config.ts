import { defineConfig } from "quartz/config"

export default defineConfig({
  siteMetadata: {
    title: "Kingmaker Journal",
    description: "Rendered campaign notes",
    author: "Your Name",
  },

  // Use default theme and markdown rendering
  theme: "quartz",

  // Quartz looks for content in this folder
  contentDir: "./content",

  // Where the output HTML will go
  buildDir: "./public",

  // Leave RSS disabled if you don't want it
  plugins: [],
})
