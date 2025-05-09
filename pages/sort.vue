<template>
    <div class="tag">
        <ul class="list">
            <li
                v-for="sorts in uniqueTags"
                :key="sorts"
                class="item"
                :class="{ isActive: sorts === route.query.sort }"
                @click="selectTag(sorts)"
            >
                {{ sorts }}
            </li>
        </ul>
        <ul v-if="searchResult" class="searchResultList">
            <li v-for="item in searchResult" :key="item.path" class="searchResultItem">
                <NuxtLink :to="item.path">
                    <h2>{{ item.title }}</h2>
                </NuxtLink>
                <p class="description">{{ item.description }}</p>
                <span class="sort">#{{ item.sort }}</span>
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
    return queryCollection("articles").select("title", "description", "path", "sort").all();
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

<style lang="scss" scoped>
.tag {
    .list {
        display: flex;
        flex-wrap: wrap;

        .item {
            list-style: none;
            position: relative;
            top: 0;
            margin: 6px;
            padding: 4px 6px;
            border: 1.5px solid var(--theme-color);
            border-radius: 6px;
            font-size: 15px;
            transition: 0.2s;
            cursor: pointer;
        }
        .item:hover {
            top: -4px;
            animation: moveUpDown 0.5s infinite alternate;
        }
        @keyframes moveUpDown {
            0% {
                top: -2px;
            }
            100% {
                top: -4px;
            }
        }
        .isActive {
            background-color: var(--theme-color-hover);
        }
    }
    .searchResultList {
        margin-top: 32px;

        .searchResultItem {
            margin-bottom: 24px;
            list-style: none;

            a {
                color: var(--font-color);
                text-decoration: none;
                transition: 0.2s;
            }
            a:hover {
                color: var(--theme-color);
            }
            .description {
                opacity: 0.8;
            }

            .sort {
                opacity: 0.6;
            }
        }
    }
}
</style>
