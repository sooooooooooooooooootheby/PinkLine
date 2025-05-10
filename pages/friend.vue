<template>
    <div>
        <h1 class="text-3xl font-bold mb-10">来自互联网的朋友</h1>
        <ul v-if="appConfig.friend.length" class="mb-8">
            <li v-for="item in appConfig.friend">
                <a :href="item.url" target="_block">
                    <div class="flex items-center p-2 border border-gray-400 rounded-lg hover:shadow-lg duration-300">
                        <img :src="item.image" alt="image" class="size-14 rounded-lg mr-2 lg:size-10" />
                        <div class="flex flex-col justify-center">
                            <span class="text-lg font-bold">{{ item.name }}</span>
                            <span class="text-sm text-gray-600">{{ item.info }}</span>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
        <p v-else>博主还没有友链哦, 欢迎交换友链.</p>
        <div class="prose prose-sm sm:prose-base dark:prose-invert">
            <ContentRenderer v-if="friend" :value="friend" />
        </div>
    </div>
    <clientOnly v-if="appConfig.comment.isComment">
        <waline />
    </clientOnly>
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
