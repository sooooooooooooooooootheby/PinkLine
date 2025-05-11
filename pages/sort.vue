<template>
	<div>
		<ul class="mb-12 flex flex-wrap">
			<li
				v-for="sorts in uniqueSorts"
				class="m-1 cursor-pointer rounded-lg bg-pinkline-50 px-2 py-0.5 dark:border dark:border-zinc-600 dark:bg-transparent dark:text-white"
				:class="{ 'bg-pinkline-100': route.query.sort === sorts, 'dark:bg-pinkline-200!': route.query.sort === sorts, 'dark:text-black!': route.query.sort === sorts }"
				@click="selectSort(sorts)"
			>
				{{ sorts }}
			</li>
		</ul>
		<ul v-if="searchResult">
			<li v-for="item in searchResult" class="mb-8">
				<NuxtLink :to="item.path">
					<h2 class="text-xl font-bold dark:text-white">{{ item.title }}</h2>
					<p class="my-2 text-sm text-gray-700 dark:text-gray-300">{{ item.description }}</p>
				</NuxtLink>
				<span class="text-sm text-gray-600 dark:text-gray-400">#{{ item.sort }}</span>
			</li>
		</ul>
	</div>
</template>

<script lang="ts" setup>
const route = useRoute();

interface sorts {
	title: string;
	description: string;
	path: string;
	sort: string;
	tag: Array<string>;
}

const { data: sortData } = await useAsyncData("sort", () => {
	return queryCollection("articles").select("sort").all();
});

const uniqueSorts = computed(() => {
	const sorts = sortData.value?.flatMap((item: { sort: string }) => item.sort);
	return [...new Set(sorts)];
});

// 这是查询的部分
const searchQuery = ref<string>("");
const searchResult = ref<Array<sorts>>();

const { data: list } = await useAsyncData("sortlist", () => {
	return queryCollection("articles").select("title", "description", "path", "sort", "tag").all();
});

const querySort = (sort: string) => {
	return list.value?.filter((item: sorts) => item.sort === sort) as sorts[];
};

const selectSort = async (sort: string) => {
	await navigateTo(`/sort?sort=${sort}`);
	searchResult.value = querySort(sort);
};

onMounted(() => {
	const sort = route.query.sort;
	if (typeof sort === "string") {
		searchQuery.value = sort;
		searchResult.value = querySort(sort);
	}
});
</script>
