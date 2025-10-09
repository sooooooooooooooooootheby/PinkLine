<template>
	<ul class="flex flex-col gap-4 px-2 text-sm">
		<li v-for="item in content" :key="item.id">
			<enhancer :content="item" />
			<p class="text-default-2 text-xs">{{ formattingTime(item.date) }}</p>
		</li>
	</ul>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig();
const route = useRoute();

const { data: content } = await useAsyncData("note", () => {
	return queryCollection("note").select("id", "date", "body").order("date", "DESC").all();
});

const currentPage = appConfig.page.find((p) => p.path === route.path);
const pageTitle = currentPage?.title && currentPage.title.trim() !== "" ? currentPage.title : "PinkLine";

useHead({
	title: `${pageTitle} | ${appConfig.info.title}`,
});
</script>
