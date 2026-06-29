# 博客文章模板

Obsidian 模板文件夹，配合 Obsidian 的「模板」核心插件使用。

## 使用方法

1. Obsidian → 设置 → 核心插件 → 开启「模板」，模板文件夹设为 `_templates`
2. 在 `src/content/post/` 下新建文件夹，并在其中新建 `index.md`
3. 打开该 `index.md` 并进入**编辑模式**，光标放到正文
4. `Ctrl+P` → 搜索 `模板: 插入模板`（中文界面）→ 选择 `new-post`

> 更省事：直接运行脚本一键生成「文件夹 + index.md + 已填好的 frontmatter」：
>
> ```bash
> pnpm new:post <英文名> "文章标题" 标签1,标签2
> ```

## 模板说明

| 模板 | 用途 |
|------|------|
| `new-post.md` | 新建博客文章的通用模板 |

## 字段说明

| 字段 | 必填 | 说明 |
|------|------|------|
| `title` | 是 | 文章标题 |
| `description` | 是 | 简介，显示在列表卡片、搜索结果与 SEO 描述 |
| `publishDate` | 是 | 发布日期时间（ISO 格式，`Z` 为 UTC），决定排序 |
| `author` | 否 | 作者，默认 `YouthGT` |
| `tags` | 否 | 标签数组，如 `["教程", "Astro"]`；勿留空 `""` |
| `featured` | 否 | `true` 则出现在首页「精选文章」 |
| `draft` | 否 | `true`=草稿不公开；`false`=正式发布到列表 |
| `img` | 否 | 列表页缩略图，文件放 `public/images/`，路径以 `/images/` 开头 |

注意：文章文件保存为 `.md`，放在 `src/content/post/<文章名>/index.md`（也支持 `.mdx`，但 Obsidian 不能编辑 `.mdx`）
