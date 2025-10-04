<template>
	<div class="enhancer">
		<ContentRenderer :value="props.content" :components="components" />
	</div>
</template>

<script lang="ts" setup>
import pre from "./pre.vue";

const props = defineProps(["content"]);

const components = {
	pre: pre,
};
</script>
