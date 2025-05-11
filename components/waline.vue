<template>
	<div id="waline"></div>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig();
import { init } from "@waline/client";

onMounted(() => {
	init({
		el: "#waline",
		serverURL: appConfig.comment.serverUrl,
		dark: "html[class='dark']",
		emoji: appConfig.comment.emoji,
	});
});
</script>

<style lang="scss">
.wl-emoji {
	height: 2.4rem !important;
}
</style>
