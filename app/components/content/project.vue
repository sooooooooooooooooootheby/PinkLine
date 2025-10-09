<template>
	<div class="mt-6 flex flex-col sm:px-6">
		<p class="m-0! text-lg font-bold">My Project:</p>
		<ul class="m-0!">
			<li v-for="item in appConfig.project">
				<div>
					<span class="text-default">{{ item.name }}</span>
					<span class="text-default-2"> - </span>
					<NuxtLink :to="item.url" class="text-default-1! underline">{{ item.url }}</NuxtLink>
				</div>
				<p class="m-0!">{{ item.info }}</p>
				<p class="text-default-2 m-0! text-xs">{{ formattingTime(item.time) }}</p>
			</li>
		</ul>
	</div>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig();
</script>
