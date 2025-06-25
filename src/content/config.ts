import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    heroImage: z.string(),
    category: z.string(), 
    series: z.string().optional(), 
    order: z.number().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};