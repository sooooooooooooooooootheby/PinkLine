<template>
	<div class="flex items-center gap-1">
        <span class="cursor-pointer" @click="$colorMode.preference = 'light'">Light</span>
        <span class="text-gray-400">·</span>
        <span class="cursor-pointer" @click="$colorMode.preference = 'dark'">Dark</span>
        <span class="text-gray-400">·</span>
        <span class="cursor-pointer" @click="$colorMode.preference = 'system'">System</span>
	</div>
</template>

<!-- <style>
body {
	background-color: #fff;
	color: rgba(0, 0, 0, 0.8);
}
.dark-mode body {
	background-color: #091a28;
	color: #ebf4f1;
}
.sepia-mode body {
	background-color: #f1e7d0;
	color: #433422;
}
</style> -->
