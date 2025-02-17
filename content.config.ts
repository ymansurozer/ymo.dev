import { defineCollection, defineContentConfig, z } from "@nuxt/content";
import { asSitemapCollection } from "@nuxtjs/sitemap/content";

export default defineContentConfig({
  collections: {
    page: defineCollection(asSitemapCollection({
      source: "*.md",
      type: "page",
      schema: z.object({
        draft: z.boolean().optional(),
      }),
    })),
    blog: defineCollection(asSitemapCollection({
      source: "blog/*.md",
      type: "page",
      schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        image: z.string().optional(),
        tags: z.array(z.string()),
        draft: z.boolean().optional(),
      }),
    })),
  },
});
