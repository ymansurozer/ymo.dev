import { defineCollection, defineContentConfig, z } from "@nuxt/content";
import { asSitemapCollection } from "@nuxtjs/sitemap/content";

export default defineContentConfig({
  collections: {
    page: defineCollection(asSitemapCollection({
      source: "*.md",
      type: "page",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date().optional(),
        image: z.string().optional(),
      }),
    })),
    blog: defineCollection(asSitemapCollection({
      source: "blog/*.md",
      type: "page",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        image: z.string().optional(),
        tags: z.array(z.string()),
      }),
    })),
  },
});
