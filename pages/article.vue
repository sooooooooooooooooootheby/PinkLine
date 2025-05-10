<template>
    <h1 class="text-3xl font-bold mb-10">这些是我的宝藏</h1>
    <!-- <input
        placeholder="Search this page..."
        type="text"
        name="text"
        v-model="searchQuery"
        class="w-full text-gray-600 focus:outline-none p-2"
    /> -->
    <!-- <p class="text-sm text-gray-600" v-if="searchQuery">总共有 {{ filteredSections ?? [].length }} 篇文章</p>
    <p class="text-sm text-gray-600" v-else>查询到 {{ list?.length ?? 0 }} 篇文章</p> -->
    <!-- <div v-if="searchQuery">
        <ul v-if="(filteredSections ?? []).length > 0">
            <li v-for="item in filteredSections" :key="item.id">
                <NuxtLink :to="item.id">
                    <h2>{{ item.title }}</h2>
                </NuxtLink>
                <p>{{ item.content }}</p>
            </li>
        </ul>
        <p v-else>没有找到文章哦～</p>
    </div> -->
    <ul>
        <li v-for="item in list" class="mb-8">
            <NuxtLink :to="item.path">
                <h2 class="text-xl font-bold">{{ item.title }}</h2>
                <p class="text-sm text-gray-700 my-2">{{ item.description }}</p>
            </NuxtLink>
            <div class="flex text-sm text-gray-600">
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

const filteredSections = computed(() => {
    const query = searchQuery.value.toLowerCase();
    return sections.value?.filter((section: Section) => {
        return section.title.toLowerCase().includes(query) || section.content.toLowerCase().includes(query);
    });
});
</script>
