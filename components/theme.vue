<template>
	<div class="mt-2 flex">
		<button
			@click="toggle('light')"
			class="cursor-pointer mr-2 flex size-6 items-center justify-center rounded-lg border border-gray-600 text-xs text-gray-600 dark:border-gray-400 dark:text-gray-400"
		>
			<Icon :name="colorMode.preference === 'light' ? 'mynaui:sun-solid' : 'mynaui:sun'" />
		</button>
		<button
			@click="toggle('dark')"
			class="cursor-pointer mr-2 flex size-6 items-center justify-center rounded-lg border border-gray-600 text-xs text-gray-600 dark:border-gray-400 dark:text-gray-400"
		>
			<Icon :name="colorMode.preference === 'dark' ? 'mynaui:moon-solid' : 'mynaui:moon'" />
		</button>
		<button
			@click="toggle('system')"
			class="cursor-pointer mr-2 flex size-6 items-center justify-center rounded-lg border border-gray-600 text-xs text-gray-600 dark:border-gray-400 dark:text-gray-400"
		>
			<Icon :name="colorMode.preference === 'system' ? 'mynaui:desktop-solid' : 'mynaui:desktop'" />
		</button>
	</div>
</template>

<script lang="ts" setup>
import { useColorMode } from "#imports";
const colorMode = useColorMode();

const toggle = (mode: string) => {
	colorMode.preference = mode;
};
</script>
