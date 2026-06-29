---
# 标题：{{title}} 自动填入笔记文件名，可改成正式标题（必填）
title: "{{title}}"
# 简介：一句话概括，显示在列表卡片、搜索结果与 SEO 描述（必填）
description: ""
# 发布日期：自动填当前日期+时间，Z 表示 UTC 时区；决定排序与显示日期（必填）
publishDate: {{date:YYYY-MM-DD}}T{{time:HH:mm}}:00Z
# 作者：默认 YouthGT，一般无需修改
author: YouthGT
# 标签：用于分类与标签页，可多个，如 ["教程", "Astro"]（留空 [] 则无标签）
tags: []
# 精选：true 时出现在首页「精选文章」区，仅重点文章设为 true
featured: false
# 草稿：true=不公开（不进列表，仅 /blog/<名字> 直链可见）；改为 false 才正式发布
draft: true
# 封面图：列表页缩略图；图片放 public/images/ 下，路径必须以 /images/ 开头
img: "/images/{{title}}.png"
---

## 开始写作

在这里写正文…（写完后可删除上面 frontmatter 里的 # 注释行）

### 代码块示例

```js
console.log("hello world");
```

### 图片示例

<!-- 图片放在 public/images/ 下，正文用以 /images/ 开头的路径引用 -->
![图片说明](/images/文件名.png)
