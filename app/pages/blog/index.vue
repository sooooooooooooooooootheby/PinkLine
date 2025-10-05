<template>
	<div>
		<ul class="flex items-center flex-wrap gap-2 px-2">
			<li
				v-for="item in uniqueSorts"
				:key="item"
				class="cursor-pointer text-default-1 duration-200 hover:text-default"
				:class="{ 'font-semibold text-default!': route.query.sort === item }"
				@click="applySort(item)"
			>
				<span class="mr-px text-xs">#</span>
				{{ item }}
			</li>
		</ul>
		<division class="mt-2 mb-6" />
		<ul class="flex flex-col gap-6 px-2">
			<li v-if="!filteredList.length" class="text-default">
				<p>找不到文章哦.</p>
				<p class="text-xs text-default-1">请联系一下站长是不是网站的配置有问题.</p>
			</li>
			<li v-for="post in filteredList" :key="post.path">
				<p class="text-default">
					<NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
				</p>
				<div class="flex items-center text-xs text-default-2">
					<span class="mr-3">{{ formattingTime(new Date(post.date)) }}</span>
					<div class="flex items-center gap-[1px]">
						<span class="text-[8px]">#</span>
						<span>{{ post.sort }}</span>
						<span class="mx-1 text-[8px]">/</span>
						<div v-for="(tags, index) in post.tag" :key="index">
							<span>{{ tags }}</span>
							<span class="mx-[2px]" :class="{ hidden: index === post.tag.length - 1 }">, </span>
						</div>
					</div>
				</div>
				<p class="text-sm text-default-1">{{ post.description }}</p>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const appConfig = useAppConfig();

// 获取文章
const { data: listData } = await useAsyncData("blog", () =>
	queryCollection("blog").select("title", "description", "date", "update", "path", "sort", "tag").order("update", "DESC").order("date", "DESC").all()
);

const list = computed(() => listData.value ?? []);

// 获取分类
const { data: sortData } = await useAsyncData("sort", () => queryCollection("blog").select("sort").all());

const uniqueSorts = computed(() => {
	const raw = sortData.value ?? [];
	const flattened = raw.flatMap((item: any) => {
		if (!item) return [];
		const s = item.sort;
		if (!s) return [];
		return Array.isArray(s) ? s : [s];
	});
	return [...new Set(flattened.filter(Boolean))];
});

// 应用筛选
function applySort(item: string) {
	if (route.query.sort === item) {
		clearSort();
		return;
	}
	const newQuery = { ...route.query, sort: item };
	router.push({ query: newQuery }).catch(() => {});
}

// 清除筛选
function clearSort() {
	const newQuery = { ...route.query };
	if ("sort" in newQuery) delete newQuery.sort;
	router.push({ query: newQuery }).catch(() => {});
}

// 根据 route.query.sort 过滤文章
const filteredList = computed(() => {
	const q = route.query.sort;
	if (!q) return list.value;

	const filterValue = Array.isArray(q) ? q[0] : q;
	return list.value.filter((item: any) => {
		const s = item.sort;
		if (!s) return false;
		if (Array.isArray(s)) return s.includes(filterValue);
		return s === filterValue;
	});
});

const currentPage = appConfig.page.find(p => p.path === route.path);
const pageTitle = currentPage?.title && currentPage.title.trim() !== "" ? currentPage.title : "PinkLine";

useHead({
	title: `${pageTitle} | ${appConfig.info.title}`
});
</script>
