import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
	collections: {
		content: defineCollection({
			type: "page",
			source: "page/*.md",
		}),
		articles: defineCollection({
			type: "page",
			source: "articles/*.md",
			schema: z.object({
				description: z.string(),
				date: z.date(),
				update: z.date(),
				tag: z.array(z.string()),
				sort: z.string(),
			}),
		}),
		notes: defineCollection({
			type: "page",
			source: "notes/*.md",
			schema: z.object({
				date: z.date(),
			}),
		}),
	},
});
