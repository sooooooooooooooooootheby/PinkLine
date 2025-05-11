<template>
    <div>
        <ul class="flex flex-wrap mb-12">
            <li
                v-for="tags in uniqueTags"
                class="py-0.5 px-2 m-1 bg-pinkline-50 rounded-lg cursor-pointer dark:bg-transparent dark:text-white dark:border dark:border-zinc-600"
                :class="{ 'bg-pinkline-100': route.query.tag === tags, 'dark:bg-pinkline-200!': route.query.tag === tags, 'dark:text-black!': route.query.tag === tags }"
                @click="selectTag(tags)"
            >
                {{ tags }}
            </li>
        </ul>
        <ul v-if="searchResult">
            <li v-for="item in searchResult" class="mb-8">
                <NuxtLink :to="item.path">
                    <h2 class="text-xl font-bold dark:text-white">{{ item.title }}</h2>
                    <p class="text-sm text-gray-700 my-2 dark:text-gray-300">{{ item.description }}</p>
                </NuxtLink>
                <ul class="flex">
                    <li v-for="tags in item.tag" class="text-sm text-gray-600 mr-1 dark:text-gray-400">
                        {{ tags }}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
const route = useRoute();

interface tags {
    title: string;
    description: string;
    path: string;
    tag: Array<string>;
}

// 获取所有的标签
const { data: tag } = await useAsyncData("taglist", () => {
    return queryCollection("articles").select("tag").all();
});

// 处理标签
const uniqueTags = computed(() => {
    const tags = tag.value?.flatMap((item: { tag: string[] }) => item.tag);
    return [...new Set(tags)];
});

// 这是查询的部分
const searchQuery = ref<string>("");
const searchResult = ref<Array<tags>>();

const { data: list } = await useAsyncData("list", () => {
    return queryCollection("articles").select("title", "description", "path", "tag").all();
});

const queryTag = (tag: string) => {
    return list.value?.filter((item: { tag: string[] }) => item.tag.includes(tag));
};

const selectTag = async (tag: string) => {
    await navigateTo(`/tag?tag=${tag}`);
    searchResult.value = queryTag(tag);
};

onMounted(() => {
    const tag = route.query.tag;
    if (typeof tag === "string") {
        searchQuery.value = tag;
        searchResult.value = queryTag(tag);
    }
});
</script>
