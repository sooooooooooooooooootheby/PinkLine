<template>
    <div>
        <template v-if="article">
            <div class="mark">
                <h1>{{ article.title }}</h1>
                <p>{{ handleTime(article.data) }}</p>
                <ContentRenderer :value="article" />
            </div>
            <div style="margin-top: 64px" v-if="appConfig.comment.isComment">
                <ClientOnly>
                    <waline />
                </ClientOnly>
            </div>
        </template>
        <template v-else>
            <div class="empty-page">
                <h1>Page Not Found</h1>
                <p>Oops! The content you're looking for doesn't exist.</p>
                <NuxtLink to="/">Go back home</NuxtLink>
            </div>
        </template>
    </div>
</template>

<script lang="ts" setup>
import { createApp, h } from 'vue';
import CopyCodeButton from '~/components/CopyCodeButton.vue';

const appConfig = useAppConfig();
const route = useRoute();

const { data: article } = await useAsyncData(route.path, () => {
    return queryCollection("articles").path(route.path).select("title", "data", "body", "description").first();
});

useSeoMeta({
    title: `${article.value.title} | s22y`,
    ogTitle: `${article.value.title} | s22y`,
    description: article.value.description,
});

onMounted(() => {
    const preElements: NodeListOf<HTMLPreElement> = document.querySelectorAll("pre");
    preElements.forEach((pre) => {
        pre.style.position = 'relative';
        const code: any = pre.textContent;
        const button = document.createElement("div");
        const app = createApp({
            render() {
                return h(CopyCodeButton, { code });
            },
        });
        app.mount(button);
        button.style.position = 'absolute';
        button.style.top = '10px';
        button.style.right = '10px';
        pre.appendChild(button);
    });
});
</script>

<style lang="scss" scoped></style>
