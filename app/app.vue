<template>
	<div class="w-2xl mx-auto my-12 max-sm:w-full max-sm:px-4">
		<appHeader />
		<div class="my-8 min-h-[clac(100vh-128px)]">
			<NuxtPage />
		</div>
		<appFooter />
	</div>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig();

useHead({
	title: `${appConfig.info.title} | ${appConfig.info.author}`,
	meta: [
		{ name: "author", content: appConfig.info.author },
		{ name: "description", content: appConfig.info.description },
	],
	link: [{ rel: "icon", type: "image/x-icon", href: appConfig.info.logo }],
});
</script>

<style>
.page-enter-active,
.page-leave-active {
	transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
	margin-top: 12px;
	opacity: 0;
}
</style>
