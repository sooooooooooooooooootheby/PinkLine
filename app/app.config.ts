export default defineAppConfig({
	info: {
		title: "PinkLine",
		author: "s22y",
		lang: "zh-cn",
		logo: "/logo_MG.gif",
		description: "基于nuxt.js的博客",
		ogDescription: "基于nuxt.js的博客",
		ogImage: "/Canvas-Ruom.webp",
	},
	switch: {
		appHeader: {
			isLogo: true,
			isTitle: false,
		},
		comment: false,
	},
	contact: [
		{
			platform: "Discord",
			url: "https://pinkline.s22y.moe/",
			icon: "akar-icons:coffee",
		},
		{
			platform: "Discord",
			url: "https://pinkline.s22y.moe/",
			icon: "akar-icons:coffee",
		},
		{
			platform: "Discord",
			url: "https://pinkline.s22y.moe/",
			icon: "akar-icons:coffee",
		},
		{
			platform: "Discord",
			url: "https://pinkline.s22y.moe/",
			icon: "akar-icons:coffee",
		},
	],
	project: [
		{
			name: "Blog",
			info: "这是一个博客.",
			url: "https://pinkline.s22y.moe/",
			time: "Wed Mar 10 2025 15:53:43 GMT+0800",
		},
		{
			name: "Blog",
			info: "这是一个博客.",
			url: "https://pinkline.s22y.moe/",
			time: "Wed Mar 10 2025 15:53:43 GMT+0800",
		},
		{
			name: "Blog",
			info: "这是一个博客.",
			url: "https://pinkline.s22y.moe/",
			time: "Wed Mar 10 2025 15:53:43 GMT+0800",
		},
		{
			name: "Blog",
			info: "这是一个博客.",
			url: "https://pinkline.s22y.moe/",
			time: "Wed Mar 10 2025 15:53:43 GMT+0800",
		},
	],
	page: [
		{ path: "/", name: "S22y", title: "", icon: "akar-icons:coffee" },
		{ path: "/blog", name: "Blog", title: "Blog", icon: "akar-icons:coffee" },
		{ path: "/note", name: "Note", title: "Note", icon: "akar-icons:coffee" },
		{ path: "/friends", name: "Friends", title: "Friends", icon: "akar-icons:coffee" },
	],
	rss: {
		link: "blog.s22y.moe",
	},
});
