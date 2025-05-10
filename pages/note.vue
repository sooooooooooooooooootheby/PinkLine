<template>
    <div>
        <h1 class="text-3xl font-bold mb-10">日常记录</h1>
        <ul>
            <li v-for="item in note" class="mb-8">
                <ContentRenderer :value="item" />
                <p class="text-gray-600 text-xs mt-1">{{ handleTime(item.date) }}</p>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig();

useSeoMeta({
    title: appConfig.info.author + " 的随记",
    ogTitle: appConfig.info.author + " 的随记",
});

const { data: note } = await(async () => {
    return await useAsyncData("note", () => {
        return queryCollection("notes").select("date", "body").order("date", "DESC").all();
    });
})();
</script>
