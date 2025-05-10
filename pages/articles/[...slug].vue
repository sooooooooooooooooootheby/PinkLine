<template>
    <div>
        <template v-if="article">
            <div class="text-gray-600">
                <NuxtLink to="/article">
                    <Icon name="akar-icons:arrow-back" class="mr-1 text-xs" />
                    <span class="text-sm">回到文章列表</span>
                </NuxtLink>
            </div>
            <article>
                <h1 class="text-3xl font-bold my-4">{{ article.title }}</h1>
                <div class="text-sm text-gray-600">
                    <span v-if="article.update" class="flex items-center">
                        {{ formattingTime(article.update) }}
                        <Icon name="mynaui:edit" class="ml-1" />
                    </span>
                    <span v-else>{{ formattingTime(article.date) }}</span>
                </div>
                <div class="text-sm text-gray-600 flex items-center">
                    <span>#{{ article.sort }}</span>
                    <span class="mx-1">·</span>
                    <ul class="flex">
                        <li v-for="tags in article.tag" class="mr-1">{{ tags }}</li>
                    </ul>
                </div>
                <div class="prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl dark:prose-invert">
                    <ContentRenderer :value="article" />
                </div>
            </article>
            <div style="margin-top: 64px" v-if="appConfig.comment.isComment">
                <ClientOnly>
                    <waline />
                </ClientOnly>
            </div>
        </template>
        <template v-else>
            <div>
                <h1 class="text-center text-xl font-bold mb-2">哦😯, 看起来我们没有找到你需要的文章.</h1>
                <NuxtLink to="/article">
                    <p class="text-center underline">回到文章列表</p>
                </NuxtLink>
            </div>
        </template>
    </div>
</template>

<script lang="ts" setup>
import { createApp, h } from "vue";
import CopyCodeButton from "~/components/CopyCodeButton.vue";

const appConfig = useAppConfig();
const route = useRoute();

const { data: article } = await useAsyncData(route.path, () => {
    return queryCollection("articles")
        .path(route.path)
        .select("title", "date", "update", "body", "sort", "tag", "description")
        .first();
});

useSeoMeta({
    title: `${article.value?.title} | s22y`,
    ogTitle: `${article.value?.title} | s22y`,
    description: article.value?.description,
});

onMounted(() => {
    const preElements: NodeListOf<HTMLPreElement> = document.querySelectorAll("pre");
    preElements.forEach((pre) => {
        pre.style.position = "relative";
        const code: any = pre.textContent;
        const button = document.createElement("div");
        const app = createApp({
            render() {
                return h(CopyCodeButton, { code });
            },
        });
        app.mount(button);
        button.style.position = "absolute";
        button.style.top = "10px";
        button.style.right = "10px";
        pre.appendChild(button);
    });
});
</script>
