export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },

    app: {
        pageTransition: { name: "page", mode: "out-in" },
    },

    modules: ["@nuxt/content", "@nuxtjs/color-mode", "@nuxt/icon", "nuxt-module-feed", "@nuxthq/studio"],

    css: ["~/assets/base.scss", "~/assets/theme.scss", "~/assets/sspai.scss", "~/assets/waline.css"],

    nitro: {
        prerender: {
            routes: ["/rss.xml"],
        },
    },
});