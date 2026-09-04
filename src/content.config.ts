import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional().default(''),
    category: z.enum(['tech', 'notes', 'travel']).optional().default('notes'),
    tags: z.array(z.string()).optional().default([]),
    draft: z.boolean().optional().default(false),
    location: z.string().optional().default(''),
  }),
});

export const collections = { blog };
