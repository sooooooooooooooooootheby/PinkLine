<template>
	<div class="flex items-center gap-1">
		<span class="cursor-pointer" :class="{ 'font-bold': $colorMode.preference === 'light' }" @click="$colorMode.preference = 'light'">Light</span>
		<span class="text-gray-400">·</span>
		<span class="cursor-pointer" :class="{ 'font-bold': $colorMode.preference === 'dark' }" @click="$colorMode.preference = 'dark'">Dark</span>
		<span class="text-gray-400">·</span>
		<span class="cursor-pointer" :class="{ 'font-bold': $colorMode.preference === 'system' }" @click="$colorMode.preference = 'system'">System</span>
	</div>
</template>
