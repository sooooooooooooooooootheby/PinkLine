import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	modules: ["@nuxt/content", "@nuxt/icon", "nuxt-shiki", "@nuxtjs/color-mode"],

	css: ["~/assets/main.css"],

	vite: {
		plugins: [tailwindcss()],
	},

	content: {
		build: {
			markdown: {
				toc: {
					depth: 4,
				},
			},
		},
		preview: {
			api: "https://api.nuxt.studio",
		},
	},
	colorMode: {
		classPrefix: "",
		classSuffix: "",
	},
	shiki: {
		defaultTheme: {
			light: "min-light",
			dark: "ayu-dark",
		},
	},
});
