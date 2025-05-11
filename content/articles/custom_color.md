---
title: 修改颜色
date: Wed Mar 15 2025 15:53:44 GMT+0800
tag: ["color", "颜色"]
sort: custom
---

PinkLine 默认的主题色为粉色`#d9908e`, 如果你不喜欢可以修改`/assets/theme.scss`下的`--theme-color` & `--theme-color-hover`.

```scss
:root {
	--theme-color: #d9908e; // 主题色
	--theme-color-hover: #e2aba9; // 触摸的主题色
}

// 明亮模式
.light-mode body {
	color: #333; // 文字颜色
	--font-color: rgba(0, 0, 0, 0.8); // 字体颜色
	--border-color: #000000bd; // 边框颜色
	--backgrond-color1: #0000002d; // 背景颜色1
	--code-background: #f8f8f8; // 代码高亮背景色
}
// 暗黑模式
.dark-mode body {
	color: #ffffff; // 文字颜色
	--font-color: #ffffff; // 字体颜色
	--border-color: #ffffffbd; // 边框颜色
	--backgrond-color1: #ffffff2d; // 背景颜色1
	--code-background: #171514; // 代码高亮背景色
}

.light-mode {
	.background {
		background-color: #fff; // 背景颜色
		transition: 0.2s; // 过渡时间
	}
}
.dark-mode {
	.background {
		background-color: #1c1c1e; // 背景颜色
		transition: 0.2s; // 过渡时间
	}
}
```
