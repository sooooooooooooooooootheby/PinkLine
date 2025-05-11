---
title: 使用nuxt studio管理内容
date: Wed Mar 1 2025 15:53:40 GMT+0800
tag: ["后台", "nuxt studio"]
sort: manage
---

当我们需要写文章的时候要用在手机或者电脑上面写出来, 然后放到`/content/articles`或者`/content/notes`里面, 再推到 Github 上, 这很不健康. 所以我们可以使用 nuxt studio, 这是一个 nuxt 的内容管理工具.

打开[nuxt studio](https://nuxt.studio/)

使用 Github 注册一个账号.

> Github 是免费的个人用户, 如果你使用 Google 登陆则是团队模式, 需要付费(貌似是这样的)

注册登陆进去后在项目管理页新建项目.

![new project](/image/studio/1.webp)

选择`Import a Nuxt project`.

选择你 fork 的项目, 我这里选择了 PinkLine 这个库.

![select repo](/image/studio/2.webp)

点击进去后设置显示的项目名字, 直接默认就好了, 第二项是项目目录, 直接选择`.`就好了, 代表根目录.

最后点击`Import repository`.

等待加载完成就可以愉快地使用了!

![use](/image/studio/3.webp)

nuxt studio 有即时预览的功能, 只需要在`nuxt.config.ts`添加链接即可.

```typescript
export default defineNuxtConfig({
	content: {
		preview: {
			api: "https://api.nuxt.studio",
		},
	},
});
```

推送到 GitHub 等待托管服务build完成打开[nuxt.studio](https://nuxt.studio/)就能看到左上角有个preview的按钮了.
