#!/usr/bin/env node
import { mkdir, writeFile, access } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const POST_DIR = join(root, 'src', 'content', 'post');

function pad(n) {
	return String(n).padStart(2, '0');
}

function isoLocal(date) {
	const y = date.getFullYear();
	const m = pad(date.getMonth() + 1);
	const d = pad(date.getDate());
	const hh = pad(date.getHours());
	const mm = pad(date.getMinutes());
	return `${y}-${m}-${d}T${hh}:${mm}:00Z`;
}

async function exists(p) {
	try {
		await access(p);
		return true;
	} catch {
		return false;
	}
}

const args = process.argv.slice(2);
if (args.length === 0) {
	console.error('用法: pnpm new:post <slug> ["文章标题"] [tag1,tag2]');
	console.error('示例: pnpm new:post my-first-post "我的第一篇文章" 教程,Astro');
	process.exit(1);
}

const slug = args[0]
	.trim()
	.toLowerCase()
	.replace(/[^a-z0-9\u4e00-\u9fa5-]+/g, '-')
	.replace(/^-+|-+$/g, '');

const title = args[1] ?? slug;
const tags = args[2]
	? args[2].split(',').map((t) => t.trim()).filter(Boolean)
	: [];

const tagsLine = tags.length
	? tags.map((t) => `"${t}"`).join(', ')
	: '';

const folder = join(POST_DIR, slug);
const file = join(folder, 'index.md');

if (await exists(file)) {
	console.error(`文章已存在: ${file}`);
	process.exit(1);
}

const frontmatter = `---
title: "${title}"
description: ""
publishDate: ${isoLocal(new Date())}
author: YouthGT
tags: [${tagsLine}]
featured: false
draft: true
img: "/images/${slug}.png"
---

## 开始写作

在这里写文章内容…

### 图片示例

![图片说明](/images/${slug}.png)
`;

await mkdir(folder, { recursive: true });
await writeFile(file, frontmatter, 'utf8');

console.log(`已创建: src/content/post/${slug}/index.md`);
console.log(`记得把封面图放到: public/images/${slug}.png`);
