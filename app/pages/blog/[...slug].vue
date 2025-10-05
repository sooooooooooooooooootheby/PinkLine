<template>
	<div class="text-sm">
		<div v-if="blog">
			<div class="px-2 py-4">
				<NuxtLink to="/blog" class="text-default-2 mb-2 flex items-center gap-1">
					<Icon name="gravity-ui:arrow-left" class="text-xs" />
					<span>Return Blog List</span>
				</NuxtLink>
				<h1 class="text-default text-4xl font-bold">{{ blog.title }}</h1>
				<div class="text-default-1 mt-2 text-xs">
					<div class="flex items-center gap-2">
						<span class="flex items-center gap-1">
							<Icon name="gravity-ui:clock" />
							{{ formattingTime(blog.date) }}
						</span>
						<span>·</span>
						<span>{{ calculateReadingTime(blog.body) }} min read</span>
					</div>
					<div class="flex items-center gap-1">
						<span>#{{ blog.sort }}</span>
						<span>/</span>
						<div v-for="(tags, index) in blog.tag" :key="tags">
							<span>{{ tags }}</span>
							<span class="mx-[2px]" :class="{ hidden: index === blog.tag.length - 1 }">, </span>
						</div>
					</div>
				</div>
				<ul class="ml-4 mt-2">
					<li v-for="item in blog.body.toc?.links" :key="item.id">
						<NuxtLink :to="`#${item.id}`" class="text-xs">
							<span class="mr-2 text-gray-400">-</span>
							<span class="hover:underline">{{ item.text }}</span>
						</NuxtLink>
					</li>
				</ul>
			</div>
			<division />
			<div class="text-default-1 px-2">
				<enhancer :content="blog" />
			</div>
			<comment />
		</div>
		<div v-else>
			<div class="flex min-h-[calc(100vh-256px)] flex-col items-center justify-center">
				<p>( × w × )</p>
				<p class="mb-2 text-3xl">找不到文章哦</p>
				<NuxtLink to="/" class="flex items-center"><Icon name="gravity-ui:chevron-left" />返回首页</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
const route = useRoute();
const appConfig = useAppConfig();

const { data: blog } = await useAsyncData(route.path, () =>
	queryCollection("blog").path(route.path).select("title", "date", "update", "body", "sort", "tag", "description").first()
);

useHead({
	title: `${blog.value?.title} | ${appConfig.info.title}`,
});
</script>
