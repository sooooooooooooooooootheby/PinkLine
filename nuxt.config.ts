import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },

    app: {
        pageTransition: { name: "page", mode: "out-in" },
    },

    modules: ["@nuxt/content", "@nuxt/icon", "nuxt-module-feed", "@nuxtjs/color-mode"],

    css: ["~/assets/base.css", "~/assets/waline.scss"],

    nitro: {
        prerender: {
            routes: ["/rss.xml"],
        },
    },

    content: {
        preview: {
            api: "https://api.nuxt.studio",
        },
        build: {
            markdown: {
                highlight: {
                    theme: "catppuccin-frappe",
                },
            },
        },
    },

    vite: {
        plugins: [tailwindcss()],
    },

    colorMode: {
        classPrefix: "",
        classSuffix: "",
        storage: "localStorage",
        storageKey: "color-mode",
    },
});
