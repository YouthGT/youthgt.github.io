import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const post = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/post' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.coerce.date(),
		author: z.string().default('YouthGT'),
		tags: z.array(z.string()).default([]),
		featured: z.boolean().optional(),
		draft: z.boolean().optional(),
		modDatetime: z.coerce.date().optional(),
		img: z.string().optional(),
		img_alt: z.string().optional(),
		canonicalURL: z.string().optional(),
		read: z.number().optional(),
	}),
});

export const collections = { post };
