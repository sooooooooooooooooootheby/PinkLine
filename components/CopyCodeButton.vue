<template>
	<div class="button" @click="copyCode">
		<svg class="svg" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" v-if="check">
			<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
				<path d="M8 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.242a2 2 0 0 0-.602-1.43L16.083 2.57A2 2 0 0 0 14.685 2H10a2 2 0 0 0-2 2" />
				<path d="M16 18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2" />
			</g>
		</svg>
		<svg class="svg" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" v-else>
			<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12l6 6L20 6" />
		</svg>
	</div>
</template>

<script lang="ts" setup>
const props = defineProps<{ code: string }>();
const check: Ref<boolean> = ref(true);

const copyCode = () => {
	navigator.clipboard.writeText(props.code).then(() => {
		check.value = false;
		setTimeout(() => {
			check.value = true;
		}, 3000);
	});
};
</script>

<style lang="scss" scoped>
.button {
	width: 30px;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 2px solid var(--border-color-op);
	border-radius: 10px;
	cursor: pointer;
	transition: 0.2s;

	.svg {
		color: var(--border-color-op);
	}
}
.button:hover {
	scale: 1.1;
}
.button:active {
	scale: 0.9;
}
</style>
