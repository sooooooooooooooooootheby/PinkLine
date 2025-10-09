<template>
	<div class="flex items-center justify-between">
		<div class="flex items-center gap-2">
			<img :src="appConfig.info.logo" alt="logo" class="w-7" v-if="appConfig.switch.appHeader.isLogo" />
			<span class="text-lg" v-if="appConfig.switch.appHeader.isTitle">PinkLine</span>
		</div>
		<ul class="flex items-center gap-3 text-sm">
			<li v-for="item in appConfig.page" :key="item.path">
				<NuxtLink
					:to="item.path"
					:class="isPath(item.path) ? 'text-default font-bold' : 'text-default-1'"
				>
					{{ item.name }}
				</NuxtLink>
			</li>
		</ul>
	</div>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig();
const route = useRoute();

const isPath = (path: string) => {
	return route.path === path;
}
</script>
