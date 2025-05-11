<template>
    <div class="flex items-center">
        <div class="flex-none">
            <img class="size-8" :src="appConfig.info.headLogo" alt="logo_MG" v-if="appConfig.info.headLogo" />
        </div>
        <div class="flex-1 flex justify-end">
            <ul class="flex">
                <li class="mr-4" v-for="item in appConfig.page" :key="item.path">
                    <NuxtLink class="text-xl text-gray-400 dark:text-gray-600" :to="item.path">
                        <Icon :name="item.icon" />
                    </NuxtLink>
                </li>
                <li>
                    <a href="/rss.xml" target="_blank" class="text-xl text-gray-400 dark:text-gray-600"><Icon name="akar-icons:rss" /></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig();
const route = useRoute();

const isPath = (path: string): boolean => {
    return path === route.path;
};
</script>

<style scoped>
.router-link-active {
    color: oklch(0.726 0.089 21.2);
}
</style>