---
title: 自定义主题--添加页面
data: Wed Mar 19 2025 15:53:43 GMT+0800
---

如果你需要添加自定义页面, 需要在`/pages`下新建一个`.vue`文件, 这个文件就是你的页面文件.

页面有两种类型, 一种是纯 vue, 一种是纯 markdown, 你也可以两个都使用.

## 添加路由项

你要在`app.config.ts`的 page 数组中添加一个 item.

```typescript
{
    path: "/search",            // 路径 这个例子中的路径对应实际目录的 /pages/search.vue
    name: "search",             // 在导航栏中显示的名字
    icon: "akar-icons:search"   // 图标 在移动端会显示图标而不是名字
},
```

> 图标插件使用的是@nuxt/icon, 我推荐你从 [yesicon](https://yesicon.app/) 图标库获取图标

## vue模版

这是我推荐的标准模版, 如果你不需要 ts 可以直接删除`<script>`中的`lang="ts"`.

```vue
<template></template>

<script lang="ts" setup>
useSeoMeta({
    title: "", // 标签标题
    ogTitle: "", // og 标题
});
</script>

<style lang="scss" scoped></style>
```

## 在页面中使用markdown

如果你想要使用 markdown, 前面的两项工作是必须的.

在`/pages/page`下新建一个`.md`文件, 这个文件存放的就是你要显示在页面上的内容.

把下面的内容复制到你的vue文件中即可.

```vue
<template>
    <div class="index mark">
        <ContentRenderer :value="page" />
    </div>
</template>

<script lang="ts" setup>
const route = useRoute();

const { data: page } = await useAsyncData(route.path, () => {
    return queryCollection("content")
        .path("/page" + route.path)
        .first();
});
</script>

<style lang="scss" scoped></style>
```
