export default defineAppConfig({
	info: {
		title: "PinkLine",
		author: "s22y",
		lang: "zh-cn",
		logo: "/logo_small.webp",
		headLogo: "/logo_MG.gif",
		description: "基于nuxt.js的博客",
		ogDescription: "基于nuxt.js的博客",
		ogImage: "/Canvas-Ruom.webp",
	},
	page: [
		{ path: "/", name: "about", icon: "akar-icons:coffee" },
		{ path: "/article", name: "article", icon: "akar-icons:folder" },
		{ path: "/note", name: "note", icon: "akar-icons:comment" },
		{ path: "/tag", name: "tag", icon: "akar-icons:tag" },
		{ path: "/sort", name: "sort", icon: "akar-icons:sort" },
		{ path: "/friend", name: "friend", icon: "akar-icons:paper-airplane" },
	],
	friend: [
		{
			name: "s22y",
			info: "去码头整点薯条.",
			url: "https://blog.s22y.moe",
			image: "https://blog.s22y.moe/logo_MG.gif",
		},
	],
	comment: {
		isComment: true,
		serverUrl: "https://comment.s22y.moe/",
		emoji: ["https://gcore.jsdelivr.net/gh/sooooooooooooooooootheby/pinkline_commit@v1.0.0/r1999"],
	},
	rss: {
		link: "blog.s22y.moe",
	},
});
