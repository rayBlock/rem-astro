import { defineCollection, z } from "astro:content";

const commonPageTypes = z.object({
  header1: z.string(),
  header2: z.string().optional(),
  sub: z.string(),
  text: z.string(),
});
const test = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    en: commonPageTypes,
    es: commonPageTypes,
    fr: commonPageTypes,
    de: commonPageTypes,
    it: commonPageTypes,
    ja: commonPageTypes,
    zh: commonPageTypes,
    th: commonPageTypes,
    hi: commonPageTypes,
    ko: commonPageTypes,
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// Export collections
export const collections = {
  pages: pagesCollection,
  test: test,
};
