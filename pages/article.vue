<template>
    <div>
        <h1 class="text-3xl font-bold dark:text-white">这些是我的宝藏</h1>
        <div class="mb-6 mt-2">
            <p class="text-sm text-gray-800 dark:text-gray-300">已经写了 {{ list?.length }} 篇文章了, 太棒了.</p>
        </div>
        <ul>
            <li v-for="item in list" class="mb-8">
                <NuxtLink :to="item.path">
                    <h2 class="text-xl font-bold dark:text-white">{{ item.title }}</h2>
                    <p class="text-sm text-gray-700 my-2 dark:text-gray-300">{{ item.description }}</p>
                </NuxtLink>
                <div class="flex text-sm text-gray-600 dark:text-gray-400">
                    <div class="flex items-center">
                        <span>{{ handleTime(item.date) }}</span>
                        <Icon name="mynaui:edit" v-if="item.update" />
                    </div>
                    <div class="mx-1">·</div>
                    <NuxtLink :to="`/sort?sort=${item.sort}`">
                        <span>#{{ item.sort }}</span>
                    </NuxtLink>
                </div>
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

// 这是文章列表的部分
const { data: list } = await useAsyncData("list", () => {
    return queryCollection("articles")
        .select("title", "description", "date", "update", "path", "sort", "tag")
        .order("update", "DESC")
        .order("date", "DESC")
        .all();
});

// 这是查询的部分
const searchQuery = ref("");

const { data: sections } = await useAsyncData("search-sections", () => {
    return queryCollectionSearchSections("articles");
});

interface Section {
    id: string;
    title: string;
    content: string;
}
</script>
