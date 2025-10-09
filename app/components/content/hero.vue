<template>
	<div class="pt-3 sm:px-6">
		<img :src="appConfig.info.logo" :alt="appConfig.info.author" class="rounded-full! border-1 border-default h-32 w-32" />
		<div class="text-4xl font-bold">
			<slot name="title" />
		</div>
		<div class="text-default-2 my-2 flex items-center gap-3 text-sm">
			<div class="flex items-center gap-1">
				<Icon name="gravity-ui:location-arrow" />
				<slot name="location" mdc-unwrap="p" />
			</div>
			<NuxtLink to="/rss.xml" target="_blank" class="text-default-2! flex items-center">
				<Icon name="lucide:rss" />
			</NuxtLink>
		</div>
		<div class="[&>*]:my-0!">
			<slot name="description" />
		</div>
	</div>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig();
</script>
