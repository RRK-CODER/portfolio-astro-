import { glob } from "astro/loaders";
import { z, reference, defineCollection } from "astro:content";

const articles = defineCollection({
    loader: glob({ pattern: ["**/*.md", "**/*.mdx"], base: "./src/content/articles" }),
    schema: ({ image }) => z.object({
        cover: image(),
        coverAlt: z.string(),
        title: z.string(),
        slug: z.string(),
        snippet: z.string(),
        category: z.string(),
        date: z.coerce.date(),
        readingDuration: z.number(),
        //originalLink: z.string().url(),
        isDraft: z.boolean().default(false),
        updatedDate: z.coerce.date().optional(),
        //author: z.string().default('Retro Rocket Team'),
        //relatedArticles: z.array(reference('articles')).optional(),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: ["**/*.md"], base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    skills: z.array(z.string()).optional(),
    link: z.string().url().optional(),
    image: z.string().optional(),
  }),
});


  export const collections = { articles, projects };