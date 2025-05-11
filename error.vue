<template>
	<div>
		<div class="main">
			<div class="head">
				<appHeader />
			</div>
			<div class="page">
				<h1>{{ error?.statusCode }}</h1>
				<p>{{ error?.statusMessage }}</p>
				<pre>{{ error }}</pre>
			</div>
			<div class="foot">
				<appFooter />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
	error: Object as () => NuxtError,
});

const { error } = props;

useSeoMeta({
	title: `${error?.statusCode} | ${error?.statusMessage}`,
	ogTitle: `${error?.statusCode} | ${error?.statusMessage}`,
});
</script>

<!-- <style lang="scss" scoped>
.main {
    .head {
        width: 600px;
        margin: 0 auto;
    }
    .page {
        width: 600px;
        min-height: calc(100vh - 96px - 91px - 82px - 82px);
        margin: 0 auto;
        padding: 82px 0;
        overflow: scroll;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .footer {
        width: 600px;
        margin: 0 auto;
    }
}
</style> -->
