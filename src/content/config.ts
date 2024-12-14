import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    image: z.object({
      src: z.string(),
      alt: z.string().default('Article image')
    }),
    author: z.string(),
    draft: z.boolean().default(false)
  })
});

export const collections = {
  articles
}; 