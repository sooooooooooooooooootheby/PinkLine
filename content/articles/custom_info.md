---
title: 自定义主题--修改网站信息
date: Wed Mar 19 2025 15:53:43 GMT+0800
tag: ["website", "info"]
sort: custom
---

修改网站的标题,logo需要修改根目录下的`app.config.ts`.

```typescript
info: {
    title: "",          // 网站标题
    author: "",         // 作者
    lang: "",           // 语言
    logo: "",           // 网站logo
    headLogo: "",       // 导航栏左侧的图标(留空则不显示)
    description: "",    // 网站描述
    ogDescription: "",  // og 网站描述
    ogImage: "",        // og 图片
},
```
