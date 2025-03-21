<template>
    <div class="blog">
        <h1>这些是我的宝藏</h1>
        <p class="count" v-if="searchQuery">总共有 {{ filteredSections.length }} 篇文章</p>
        <p class="count" v-else>查询到 {{ count }} 篇文章</p>
        <div class="search">
            <div class="bar">
                <input placeholder="Search this page..." type="text" name="text" class="input" v-model="searchQuery" />
            </div>
            <div class="res" v-if="searchQuery">
                <ul v-if="filteredSections.length > 0">
                    <li class="item" v-for="item in filteredSections" :key="item.id">
                        <NuxtLink :to="item.id" class="title">
                            <h2>{{ item.title }}</h2>
                        </NuxtLink>
                        <p class="content">{{ item.content }}</p>
                    </li>
                </ul>
                <p v-else>没有找到文章哦～</p>
            </div>
        </div>
        <ul class="list" v-if="!searchQuery">
            <li class="item" v-for="item in list" :key="item.id">
                <h2>{{ item.title }}</h2>
                <p class="description">{{ item.description }}</p>
                <div class="time">
                    <span v-if="item.update">{{ handleTime(item.update) }} (已更新)</span>
                    <span v-else>{{ handleTime(item.date) }}</span>
                </div>
                <div class="info">
                    <NuxtLink :to="`/sort?sort=${item.sort}`" class="sort">
                        <span>#{{ item.sort }}</span>
                    </NuxtLink>
                    <ul class="tag">
                        <li class="tags" v-for="tags in item.tag" :key="tags">
                            <NuxtLink :to="`/tag?tag=${tags}`">{{ tags }}</NuxtLink>
                        </li>
                    </ul>
                </div>
                <NuxtLink :to="item.path" class="read">
                    <span>Read more</span>
                    <Icon class="icon" name="akar-icons:arrow-right" />
                </NuxtLink>
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

const { data: count } = await useAsyncData("count", () => {
    return queryCollection("articles").count();
});

// 这是查询的部分
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
.blog {
    .count {
        margin-top: 12px;
        margin-bottom: 48px;
    }
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
                margin-bottom: 32px;
                list-style: none;

                .title {
                    color: var(--font-color);
                    margin-bottom: 2px;
                    text-decoration: none;
                    transition: 0.2s;
                }
                .title:hover {
                    color: var(--theme-color);
                }
                .content {
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    opacity: 0.8;
                    font-size: 0.9rem;
                }
            }
        }
        .input {
            width: 100%;
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
            box-shadow: 0px 0px 20px -17px;
        }

        .input:active {
            transform: scale(0.95);
        }

        .input:focus {
            border: 2px solid grey;
        }
    }

    .list {
        margin-top: 32px;

        .item {
            margin-bottom: 32px;
            list-style: none;

            .description {
                opacity: 0.8;
                margin: 8px 0;
                font-size: 0.9rem;
            }
            .time {
                opacity: 0.6;
                font-size: 0.8rem;
            }
            .info {
                display: flex;
                font-size: 0.8rem;
                opacity: 0.6;

                .sort {
                    margin-right: 8px;
                    color: var(--font-color);
                }
                .tag {
                    display: flex;

                    .tags {
                        list-style: none;
                        margin: 0 4px;

                        a {
                            color: var(--font-color);
                        }
                    }
                    .tags::after {
                        content: ",";
                    }
                    .tags:last-child::after {
                        content: "";
                    }
                }
            }
            .read {
                margin-top: 8px;
                display: flex;
                align-items: center;
                color: var(--font-color);

                .icon {
                    opacity: 0;
                    font-size: 0.9rem;
                    margin-left: 4px;
                    transition: 0.2s;
                }
            }
            .read:hover {
                .icon {
                    opacity: 1;
                }
            }
        }
    }
}
</style>
