<template>
	<div class="sm:px-6 pt-3">
		<img :src="appConfig.info.logo" :alt="appConfig.info.author" class="rounded-full! h-32 w-32 border-1 border-default" />
		<div class="text-4xl font-bold">
            <slot name="title" />
        </div>
        <div class="text-sm my-2 flex items-center gap-1 text-default-2">
            <Icon name="gravity-ui:location-arrow" />
            <slot name="location" mdc-unwrap="p" />
        </div>
		<div class="[&>*]:my-0!">
            <slot name="description" />
        </div>
	</div>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig();
</script>
