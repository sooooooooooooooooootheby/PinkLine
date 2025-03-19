<template>
    <div class="friend">
        <div class="mark">
            <h1>来自互联网的朋友</h1>
            <ul class="list" v-if="appConfig.friend.length">
                <li class="item" v-for="item in appConfig.friend" :key="item.name">
                    <a :href="item.url" target="_block">
                        <img :src="item.image" alt="image" />
                        <span class="name">{{ item.name }}</span>
                    </a>
                </li>
            </ul>
            <p v-else>博主还没有友链哦, 欢迎交换友链.</p>
            <ContentRenderer :value="friend" />
        </div>
        <clientOnly v-if="appConfig.comment.isComment">
            <waline />
        </clientOnly>
    </div>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig();
const route = useRoute();

useSeoMeta({
    title: appConfig.info.author + " 的朋友",
    ogTitle: appConfig.info.author + " 的朋友",
});

const { data: friend } = await useAsyncData(route.path, () => {
    return queryCollection("content").path("/page/friend").first();
});
</script>

<style lang="scss" scoped>
.friend {
    .list {
        padding: 0;
        margin-bottom: 12px;
        display: flex;
        flex-wrap: wrap;

        .item {
            width: 64px;
            margin: 8px 16px;
            list-style: none;
            transition: 0.2s;

            a {
                display: flex;
                flex-direction: column;
                align-items: center;
                position: relative;

                img {
                    width: 64px;
                    height: 64px;
                    object-fit: cover;
                    margin: 0;
                }
                .name {
                    padding: 2px 14px;
                    opacity: 0;
                    z-index: 2;
                    transition: .2s;
                    background-color: #fff;
                    border-radius: 4px;
                    position: absolute;
                    bottom: 0;
                }
            }
        }
        .item:hover {
            scale: 1.1;
            z-index: 99;

            a {
                .name {
                    margin: 0;
                    opacity: 1;
                    bottom: -34px;
                }
            }
        }
    }
}
</style>
