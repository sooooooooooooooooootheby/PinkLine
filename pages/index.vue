<template>
    <div>
        <template v-if="about">
            <article class="prose prose-sm sm:prose-base dark:prose-invert">
                <ContentRenderer :value="about" />
            </article>
        </template>
        <template v-else>
            <div>
                <h1 class="text-center text-xl font-bold mb-2">哦😯, 看起来首页不见了.</h1>
                <p class="text-center">
                    请按照文档检查<code class="py-0.5 px-1 mx-1 bg-pinkline-100 rounded-lg">/content</code>文件夹
                </p>
            </div>
        </template>
    </div>
</template>

<script lang="ts" setup>
const route = useRoute();

const { data: about } = await useAsyncData(route.path, () => {
    return queryCollection("content")
        .path("/page" + route.path)
        .first();
});
</script>
