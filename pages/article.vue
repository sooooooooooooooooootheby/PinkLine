<template>
    <div class="blog">
        <h1>这些是我的宝藏</h1>
        <p class="count">总共有 {{ count }} 篇文章</p>
        <ul class="list">
            <li class="item" v-for="item in list" :key="item.id">
                <NuxtLink :to="item.path" class="jump">
                    <span class="title">{{ item.title }}</span>
                </NuxtLink>
                <span class="data">{{ handleTime(item.data) }}</span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig();

useSeoMeta({
    title: appConfig.info.author + " 的文章",
    ogTitle: appConfig.info.author + " 的文章",
});

const { data: list } = await useAsyncData("list", () => {
    return queryCollection("articles").select("title", "description", "data", "path").order("data", "DESC").all();
});

const { data: count } = await useAsyncData("count", () => {
    return queryCollection("articles").count();
});
</script>

<style lang="scss" scoped>
.blog {
    .count {
        margin-top: 12px;
        margin-bottom: 48px;
    }
    .list {
        .item {
            margin-bottom: 24px;
            list-style: none;
            display: flex;
            justify-content: space-between;

            .jump {
                color: var(--font-color);
                text-decoration: none;

                .title {
                    transition: 0.2s;
                }
                .title:hover {
                    opacity: 0.6;
                }
            }
        }
    }
}
</style>
