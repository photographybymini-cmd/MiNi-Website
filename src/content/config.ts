import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Hochzeiten', 'Familie', 'Paare']),
    date: z.date(),
    cover: z.string(),
    coverPosition: z.string().optional().default('50% 50%'),
    heroPosition: z.string().optional().default('center top'),
  }),
});

export const collections = { blog };
