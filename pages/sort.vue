<template>
    <div>
        <ul class="flex flex-wrap mb-12">
            <li
                v-for="sorts in uniqueTags"
                class="py-0.5 px-2 m-1 bg-pinkline-50 rounded-lg cursor-pointer"
                :class="{ 'bg-pinkline-100': route.query.tag === sorts }"
                @click="selectTag(sorts)"
            >
                {{ sorts }}
            </li>
        </ul>
        <ul v-if="searchResult">
            <li v-for="item in searchResult" class="mb-8">
                <NuxtLink :to="item.path">
                    <h2 class="text-xl font-bold">{{ item.title }}</h2>
                    <p class="text-sm text-gray-700 my-2">{{ item.description }}</p>
                </NuxtLink>
                <span class="text-sm text-gray-600">#{{ item.sort }}</span>
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
    sort: string;
    tag: Array<string>;
}

const { data: sort } = await useAsyncData("sort", () => {
    return queryCollection("articles").select("sort").all();
});

const uniqueTags = computed(() => {
    const sorts = sort.value?.flatMap((item: { sort: string }) => item.sort);
    return [...new Set(sorts)];
});

// 这是查询的部分
const searchQuery = ref<string>("");
const searchResult = ref<Array<tags>>();

const { data: list } = await useAsyncData("list", () => {
    return queryCollection("articles").select("title", "description", "path", "sort", "tag").all();
});

const queryTag = (tag: string) => {
    return list.value?.filter((item: tags) => item.tag.includes(tag)) as tags[];
};

const selectTag = async (tag: string) => {
    await navigateTo(`/sort?tag=${tag}`);
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
