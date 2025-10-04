import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
	collections: {
		page: defineCollection({
			type: "page",
			source: "page/*.md",
		}),
		blog: defineCollection({
			type: "page",
			source: "blog/*.md",
			schema: z.object({
				title: z.string(),
				description: z.string(),
				date: z.date(),
				update: z.date(),
				tag: z.array(z.string()),
				sort: z.string(),
			}),
		}),
		note: defineCollection({
			type: "page",
			source: "note/*.md",
			schema: z.object({
				date: z.date(),
			}),
		}),
		friends: defineCollection({
			type: "data",
			source: "data/friends/*.json",
			schema: z.object({
				name: z.string(),
				info: z.string(),
				url: z.string(),
				image: z.string(),
			}),
		}),
	},
});
