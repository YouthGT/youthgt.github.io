---
title: "cnpm命令无反应的解决办法"
description: "cnpm命令无反应也无报错的解决方案"
publishDate: 2021-02-26T14:31:00Z
author: YouthGT
tags: ["问题记录", "cnpm"]
featured: false
img: "/og.png"
draft: false
---

前几天发现cnpm命令无反应也无报错，最后尝试卸载重装即可解决该问题

1. 卸载 `npm uninstall -g cnpm --registry=https://registry.npm.taobao.org`
2. 注册 `npm set registry https://registry.npm.taobao.org`
3. 解析 `npm set disturl https://npm.taobao.org/dist`
4. 安装 `npm install -g cnpm --registry=https://registry.npm.taobao.org`
