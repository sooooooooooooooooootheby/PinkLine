export default defineAppConfig({
	// 博客的基本信息
	info: {
		title: "PinkLine",						// 标题
		author: "s22y",							// 作者
		lang: "zh-cn",							// 语言
		logo: "/logo_MG.gif",					// logo icon
		description: "基于nuxt.js的博客",		 // 简介
		ogDescription: "基于nuxt.js的博客",		 // og 简介
		ogImage: "/Canvas-Ruom.webp",			// og 图片
	},
	// 功能开关
	switch: {
		appHeader: {
			isLogo: true,						// 是否显示导航栏的图标
			isTitle: false,						// 是否显示导航栏的标题
		},
		comment: false,							// 是否启用评论区
	},
	// 联系方式
	contact: [
		{
			platform: "Discord",				// 平台
			url: "https://pinkline.s22y.moe/",	// 链接
			icon: "akar-icons:coffee",			// 图标 图标库: https://yesicon.app/
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
	// 项目
	project: [
		{
			name: "Blog",								// 名字
			info: "这是一个博客.",						 // 介绍
			url: "https://pinkline.s22y.moe/",			// 链接
			time: "Wed Mar 10 2025 15:53:43 GMT+0800",	// 时间 支持UTC和ISO格式
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
	// 页面
	page: [
		{
			path: "/",					// 路径
			name: "S22y",				// 名字
			title: "",					// 显示的名字
			icon: "akar-icons:coffee"	// 图标 (暂时没用)
		},
		{ path: "/blog", name: "Blog", title: "Blog", icon: "akar-icons:coffee" },
		{ path: "/note", name: "Note", title: "Note", icon: "akar-icons:coffee" },
		{ path: "/friends", name: "Friends", title: "Friends", icon: "akar-icons:coffee" },
	],
	// rss
	rss: {
		link: "blog.s22y.moe",			// 填写你博客的域名即可
	},
});
