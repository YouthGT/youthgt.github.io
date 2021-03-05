title: cnpm命令无反应的解决办法
author: YouthGT
tags:
  - cnpm
categories:
  - 问题记录
date: 2021-02-26 22:31:00
---
前几天发现cnpm命令无反应也无报错，最后尝试卸载重装即可解决该问题<!--more-->![cnpm无反应.png](https://s3.ax1x.com/2021/02/26/6SkDqf.png)

1. 卸载 `npm uninstall -g cnpm --registry=https://registry.npm.taobao.org`
2. 注册 `npm set registry https://registry.npm.taobao.org`
3. 解析 `npm set disturl https://npm.taobao.org/dist`
4. 安装 `npm install -g cnpm --registry=https://registry.npm.taobao.org`