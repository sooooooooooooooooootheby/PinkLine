---
title: 自定义主题--修改文章排版
data: Wed Mar 19 2025 15:53:43 GMT+0800
---

PinkLine 使用的排版 css 是少数派的 css, 文件位于`/assets/sspai.scss`.

如果你觉得少数派的排版并不合你的口味, 你可以复制自己的 css 文件到`/assets`目录下, 并在`app.config.ts`中修改导入.

举个栗子 🌰

现在我有一个排版文件 `sotheby.scss`

我需要修改`nuxt.config.ts`, 将`sspai.scss`修改成你的排版 css.

```typescript
// 修改前
css: ["~/assets/base.scss", "~/assets/theme.scss", "~/assets/sspai.scss", "~/assets/waline.css"],

// 修改后
css: ["~/assets/base.scss", "~/assets/theme.scss", "~/assets/sotheby.scss", "~/assets/waline.css"],
```

建议你将后缀修改成`scss`而不是`css`, 因为我们需要使用`.mark`类嵌套所有的样式代码.

如何嵌套?

```scss
// 默认的样式
* {
    margin: 0;
}
body {
    padding: 0;
}

// 你需要手动嵌套一个 .mark 类
.mark {
    * {
        margin: 0;
    }
    body {
        padding: 0;
    }
}
```
