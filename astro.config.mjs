import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import { defineConfig, squooshImageService } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import config from "./src/config/config.json";
import icon from "astro-icon";
import aws from "astro-sst";
import { i18n, filterSitemapByDefaultLocale } from "astro-i18n-aut/integration";

// TODO: --changeDefaultLocale

// also need to adjust in i18n file -> utils/18n.ts
const defaultLocale = "en";
const locales = {
  en: "en-US", // the `defaultLocale`
  es: "es-ES",
  fr: "fr-CA",
  de: "de-DE",
  it: "it-IT",
  ja: "ja-JP",
  zh: "zh-CN",
  th: "th-TH",
  hi: "hi-IN",
};

export default defineConfig({
  output: "server",
  outDir: "dist",
  adapter: aws({ serverRoutes: ["api/*"] }),
  // site: config.site.base_url,
  security: { checkOrigin: true,  },
  trailingSlash: "never",
  build: {
    format: "file",
  },
  base: "/",
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  image: {
    service: squooshImageService()
  },
  // image: {
  //   // service: passthroughImageService(),
  //   // entrypoint: "astro/assets/services/sharp",
  //   config: {
  //     limitInputPixels: false,
  //   },
  // },
  integrations: [
    react(),
    i18n({
      locales,
      defaultLocale,
      exclude: ["pages/api/**/*"],
      redirectDefaultLocale: true,
    }),
    sitemap({
      i18n: {
        locales,
        defaultLocale,
      },
      filter: filterSitemapByDefaultLocale({ defaultLocale }),
    }),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    AutoImport({
      imports: [],
    }),
    mdx(),
    icon({
      include: {
        tabler: ["*"],
      },
    }),
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: {
        dark: "github-dark",
      },
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
});
