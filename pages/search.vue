<template>
    <div class="search">
        <div class="bar">
            <input placeholder="Search this blog..." type="text" name="text" class="input" v-model="searchQuery" />
        </div>
        <div class="res" v-if="searchQuery">
            <ul>
                <li class="item" v-for="item in filteredSections" :key="item.id">
                    <NuxtLink :to="item.id" class="title">{{ item.title }}</NuxtLink>
                    <p class="content">{{ item.content }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
useSeoMeta({
    title: "搜索文章",
    ogTitle: "搜索文章",
});

const searchQuery = ref("");

const { data: sections } = await useAsyncData("search-sections", () => {
    return queryCollectionSearchSections("articles");
});

interface Section {
    id: number;
    title: string;
    content: string;
}

const filteredSections = computed(() => {
    const query = searchQuery.value.toLowerCase();
    return sections.value.filter((section: Section) => {
        return section.title.toLowerCase().includes(query) || section.content.toLowerCase().includes(query);
    });
});
</script>

<style lang="scss" scoped>
.search {
    width: 100%;

    .bar {
        width: 100%;
        display: flex;
        align-items: center;
    }
    .res {
        margin-top: 32px;

        .item {
            margin-bottom: 12px;
            list-style: none;

            .title {
                color: var(--font-color);
                margin-bottom: 2px;
            }
            .content {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
}
.input {
    width: 100%;
    max-width: 400px;
    height: 45px;
    margin: 0 auto;
    padding: 0 12px;
    border-radius: 12px;
    border: 1.5px solid lightgrey;
    outline: none;
    transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
    box-shadow: 0px 0px 20px -18px;
    background-color: transparent;
    color: var(--font-color);
}

.input:hover {
    border: 2px solid lightgrey;
    box-shadow: 0px 0px 20px -17px;
}

.input:active {
    transform: scale(0.95);
}

.input:focus {
    border: 2px solid grey;
}
</style>
