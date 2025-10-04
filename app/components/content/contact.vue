<template>
	<div class="flex flex-col gap-2 sm:px-6">
		<p class="m-0! text-lg font-bold">Contact Me:</p>
		<ul class="list-none! m-0! p-0! flex items-center gap-4">
			<li v-for="item in appConfig.contact" :key="item.url" class="p-0! m-0!">
				<NuxtLink :to="item.url" target="_blank" class="text-default-1! flex items-center gap-1 text-lg">
					<Icon :name="item.icon" />
				</NuxtLink>
			</li>
		</ul>
	</div>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig();
</script>
