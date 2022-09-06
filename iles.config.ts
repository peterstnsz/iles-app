import { defineConfig } from "iles";

import excerpt from "@islands/excerpt";
import feed from "@islands/feed";
import windicss from "vite-plugin-windicss";
import headings from "@islands/headings";

// export default {
//   plugins: [windicss()],
// };

export default defineConfig({
  siteUrl: "https://iles-docs.netlify.app",
  turbo: false,
  jsx: "solid",
  debug: false,

  // markdown: {
  //   rehypePlugins: ["rehype-external-links"],
  // },

  modules: [
    ["@islands/excerpt", { maxLength: 140 }],
    "@islands/headings",
    excerpt(),
    feed(),
    headings(),
  ],
  extendFrontmatter(frontmatter, filename) {
    if (filename.includes("/posts/")) frontmatter.layout ||= "post";
  },
  markdown: {
    withImageSrc(src) {
      if (!src.includes("?")) return `${src}?preset=post`;
    },
    remarkPlugins: ["remark-gfm"],
  },
  vite: {
    plugins: windicss(),
  },
});
