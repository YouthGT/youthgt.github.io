# 博客文章模板

Obsidian 模板文件夹，配合 Obsidian 的「模板」核心插件使用。

## 使用方法

1. Obsidian → 设置 → 核心插件 → 开启「模板」
2. 模板文件夹路径设为 `_templates`
3. 新建文章时：`Ctrl+P` → `Template: Insert template` → 选择 `new-post`

## 模板说明

| 模板 | 用途 |
|------|------|
| `new-post.md` | 新建博客文章的通用模板 |

## 字段说明

| 字段 | 说明 |
|------|------|
| `title` | 文章标题 |
| `description` | 简介，显示在列表卡片和搜索结果中 |
| `publishDate` | 发布日期 |
| `tags` | 标签数组 |
| `featured` | `true` 则出现在首页「精选文章」 |
| `draft` | `true` 则不发布（草稿），`false` 即发布 |
| `img` | 列表页缩略图路径 |

注意：文章文件必须保存为 `.mdx` 扩展名，放在 `src/content/post/<文章名>/index.mdx`
