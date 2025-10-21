<template>
	<div class="border-1 border-default relative my-4 min-h-[16.5px] overflow-hidden rounded-xl text-sm shadow-sm duration-200 hover:shadow-md hover:[&>*]:opacity-100">
		<div v-if="filename" class="border-b-1 border-default bg-default! px-5 py-2">
			<p class="m-0! text-gray-400">{{ filename }}</p>
		</div>
		<Shiki :code="code" class="scrollbar-hide block w-full overflow-y-scroll rounded-xl p-5 pb-1 dark:bg-[#0B0E13]" />
		<div
			class="border-1 border-default bg-default absolute right-2 top-2 z-10 flex rounded-lg p-1.5 transition-opacity duration-200 active:scale-90 sm:opacity-0"
			@click="copyCode"
		>
			<component :is="icons[copyStatus]" />
		</div>
	</div>
</template>

<script setup lang="ts">
import IconCopy from "./Icon/copy.vue";
import IconCopyCheck from "./Icon/copyCheck.vue";
import IconCopyXmark from "./Icon/copyXmark.vue";

const props = defineProps<{
	code: string;
	filename?: string;
	highlights?: number[];
	language?: string;
	meta?: string;
	style?: string;
}>();

enum CopyState {
	Idle = 0,
	Success = 1,
	Error = 2,
}
const copyStatus = ref<CopyState>(CopyState.Idle);
const icons = {
	[CopyState.Idle]: IconCopy,
	[CopyState.Success]: IconCopyCheck,
	[CopyState.Error]: IconCopyXmark,
};

const copyCode = async () => {
	try {
		await navigator.clipboard.writeText(props.code);
		copyStatus.value = CopyState.Success;
	} catch (err) {
		copyStatus.value = CopyState.Error;
	} finally {
		setTimeout(() => {
			copyStatus.value = CopyState.Idle;
		}, 3000);
	}
};
</script>
