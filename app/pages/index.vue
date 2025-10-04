<template>
	<div class="text-sm px-2">
        <enhancer :content="content" />
    </div>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig();
const route = useRoute();

const { data: content } = await useAsyncData("index", () => {
	return queryCollection("page")
		.path("/page/")
		.first();
});

const currentPage = appConfig.page.find(p => p.path === route.path);
const pageTitle = currentPage?.title && currentPage.title.trim() !== "" ? currentPage.title : "PinkLine";

useHead({
	title: `${pageTitle} | ${appConfig.info.title}`
});
</script>
