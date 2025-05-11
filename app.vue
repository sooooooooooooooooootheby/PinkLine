<template>
	<div class="lg:mx-auto lg:w-3xl">
		<div class="p-6">
			<appHeader />
		</div>
		<div class="min-h-screen p-6 lg:p-8">
			<NuxtLoadingIndicator :color="color" :height="2" />
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
		</div>
		<div class="p-6">
			<appFooter />
		</div>
	</div>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig();

const color: Ref<string> = ref("");

useHead({
	title: appConfig.info.title + " | " + appConfig.info.author,
	meta: [{ name: "description", content: appConfig.info.description }],
	link: [{ rel: "icon", type: "image/x-icon", href: "/logo_MG.gif" }],
});

useSeoMeta({
	title: appConfig.info.title + " | " + appConfig.info.author,
	htmlAttrs: {
		lang: appConfig.info.lang,
	},
	link: [{ rel: "icon", type: "image/x-icon", href: appConfig.info.logo }],
	meta: [
		{ name: "description", content: appConfig.info.description },
		{ name: "ogDescription", content: appConfig.info.ogDescription },
		{ name: "ogImage", content: appConfig.info.ogImage },
	],
});

onMounted(() => {
	const element: HTMLElement = document.documentElement;
	const computedStyle: CSSStyleDeclaration = getComputedStyle(element);
	const themeColor: string = computedStyle.getPropertyValue("--theme-color").trim();

	color.value = themeColor;
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
