import { QuartzConfig } from "./quartz-temp/quartz.config"

const config: QuartzConfig = {
  pageTitle: "Kingmaker Campaign Notes",
  enableSPA: true,
  enablePopovers: true,
  analytics: null,
  locale: "en-US",
  baseUrl: "cliffcolvin.github.io/kingmaker-saturday",
  ignorePatterns: ["private", "drafts", "templates"],
  defaultDateType: "published",
  theme: {
    cdnCaching: true,
    typography: {
      header: "Schibsted Grotesk",
      body: "Source Sans Pro",
      code: "IBM Plex Mono",
    },
    colors: {
      lightMode: {
        light: "#faf8f8",
        lightgray: "#e5e5e5",
        gray: "#b8b8b8",
        darkgray: "#4e4e4e",
        dark: "#2b2b2b",
        secondary: "#284b63",
        tertiary: "#84a59d",
        highlight: "rgba(143, 159, 169, 0.15)",
      },
      darkMode: {
        light: "#161618",
        lightgray: "#393639",
        gray: "#646464",
        darkgray: "#d4d4d4",
        dark: "#ebebec",
        secondary: "#7b97aa",
        tertiary: "#84a59d",
        highlight: "rgba(143, 159, 169, 0.15)",
      },
    },
  },
  plugins: {
    transformers: [
      "frontmatter",
      "description",
      "gfm",
      "linebreaks",
      "links",
      "syntax",
      "toc",
    ],
    filters: ["draft"],
    emitters: [
      "contentPage",
      "folderPage",
      "tagPage",
      "contentIndex",
      "assets",
      "static",
      "404",
    ],
  },
}

export default config 