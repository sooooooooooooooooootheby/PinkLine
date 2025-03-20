<template>
    <div>
        <h1 class="title">日常记录</h1>
        <ul class="note">
            <li class="item mark" v-for="item in note" :key="item.id">
                <ContentRenderer :value="item" />
                <p>{{ handleTime(item.date) }}</p>
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

<style lang="scss" scoped>
.title {
    margin-bottom: 48px;
}
.note {
    .item {
        margin-bottom: 42px;
        list-style: none;
        border-bottom: 1px solid var(--border-color);
    }
    .item:last-child {
        border-bottom: none;
    }
}
</style>
