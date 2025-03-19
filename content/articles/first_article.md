---
title: 你的第一篇文章
data: Wed Mar 19 2025 15:53:45 GMT+0800
---

如果你需要写一篇文章, 只需要在`/content/articles`下新建一个`.md`文件, 如果你想写一个随记, 只需要在`/content/notes`下新建一个`.md`文件

PinkLine会自动识别你的`.md`文件, 并不需要你做多余的事情.

PinkLine支持最基本的markdown语法(如果你发现缺少了什么, 请使用issues告诉我)

## Frontmatter

Frontmatter是基于Markdown的CMS的一种约定，为页面提供元数据，如描述或标题.

关于文章, 你可以插入`title`,`data`,`description`.

- `title`: 文章的标题

- `data`: 文章的时间(我知道这个该死的data不是时间的意思, 这是拼写错误, 但是我不想修改了, 修改它有些许麻烦)

    文章时间支持多种格式的时间戳, 只要是js支持的都可以(大概)

- `description`: 文章的描述

Frontmatter需要使用Syntax, 也就是`---`去声明.

举个栗子🌰

``` markdown
---
title: 你的第一篇文章
data: Wed Mar 19 2025 15:53:45 GMT+0800
---
```

关于随记, 你只需要插入`data`, 和文章一样的插入方式.

## 图片

如果你不使用图床保存图片, 可以将图片放在`public`目录下, 在`.md`中引入直接使用`/`即可.

举个栗子🌰

现在我的`public`下有个图片, 完整目录为`/public/sotheby.webp`.

那么我在文章中的引入方式应当是这样的:

``` markdown
![sotheby](/sotheby.webp)
```
