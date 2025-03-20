<template>
    <div>
        <template v-if="article">
            <div class="back" @click="navigateTo('/article')">
                <Icon class="icon" name="akar-icons:arrow-back" />
                <span>回到文章列表</span>
            </div>
            <div class="mark">
                <h1>{{ article.title }}</h1>
                <div class="time">
                    <span>于{{ formattingTime(article.date) }}发布</span>
                    <span v-if="article.update">于{{ formattingTime(article.update) }}更新</span>
                </div>
                <div class="info">
                    <span class="sort">#{{ article.sort }}</span>
                    <ul class="tag">
                        <li class="tags" v-for="tags in article.tag" :key="tags">{{ tags }}</li>
                    </ul>
                </div>
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
import { createApp, h } from "vue";
import CopyCodeButton from "~/components/CopyCodeButton.vue";

const appConfig = useAppConfig();
const route = useRoute();

const { data: article } = await useAsyncData(route.path, () => {
    return queryCollection("articles").path(route.path).select("title", "date", "update", "body", "sort", "tag").first();
});

useSeoMeta({
    title: `${article.value.title} | s22y`,
    ogTitle: `${article.value.title} | s22y`,
    description: article.value.description,
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

<style lang="scss" scoped>
.back {
    display: inline-block;
    margin-top: -12px;
    margin-bottom: 12px;
    border-bottom: 1px solid var(--border-color);
    cursor: pointer;

    .icon {
        font-size: 0.9rem;
        margin-right: 4px;
    }
}
.time {
    opacity: 0.6;
    font-size: 0.8rem;

    span {
        margin-right: 12px;
    }
}
.info {
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    opacity: 0.6;
    margin-bottom: 24px;

    .sort::after {
        content: "/";
        margin: 4px;
    }
    .tag {
        display: flex;
        margin: 0;
        padding: 0;

        .tags {
            list-style: none;
            margin: 0;
            padding: 0;
            margin-right: 4px;
        }
        .tags::after {
            content: ",";
        }
        .tags:last-child::after {
            content: "";
        }
    }
}
</style>
