<template>
	<div class="text-sm px-2">
		<ul class="flex flex-col gap-2 max-sm:gap-4">
			<li v-for="(item, index) in friends ?? []" :key="item.id">
				<div class="flex sm:items-center gap-2">
					<img :src="item.image" :alt="item.name" class="w-12 h-12 rounded-xl" />
					<div class="flex w-full items-center max-sm:flex-col">
						<div class="w-1/3 flex flex-col max-sm:w-full max-sm:h-12 max-sm:justify-center">
							<p class="font-bold text-default">{{ item.name }}</p>
							<NuxtLink :to="item.url" target="_blank" class="text-xs text-default-2">{{ item.url }}</NuxtLink>
						</div>
						<p class="w-2/3 text-default-1 max-sm:w-full max-sm:mt-1">{{ item.info }}</p>
					</div>
				</div>
				<division class="mt-2 max-sm:mt-4" v-if="index !== (friends?.length ?? 0)-1" />
			</li>
		</ul>
		<div class="text-default-1">
			<enhancer :content="content" />
		</div>
	</div>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig();
const route = useRoute();

const { data: friends } = await useAsyncData("friendsList", () => {
	return queryCollection("friends").all();
});
const { data: content } = await useAsyncData("friendsContent", () => {
	return queryCollection("page").path("/page/friends").first();
});

const currentPage = appConfig.page.find(p => p.path === route.path);
const pageTitle = currentPage?.title && currentPage.title.trim() !== "" ? currentPage.title : "PinkLine";

useHead({
	title: `${pageTitle} | ${appConfig.info.title}`
});
</script>
