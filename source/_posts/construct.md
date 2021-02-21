---
title: Hexo 博客的搭建记录
date: 2020-02-19 12:18:15
tags:  [Hexo, Markdown]
categories: 搭建博客


---
## 安装Nodejs
```bash
node -v	#查看node版本
npm -v	#查看npm版本>
```
## 安装淘宝的cnpm 管理器
```bash
npm install -g cnpm --registry=http://registry.npm.taobao.org	
```
<!--more-->
## 查看cnpm版本
```bash
cnpm -v
```	
## 安装hexo框架 查看hexo版本
```bash
cnpm install -g hexo-cli
hexo -v	
```
##创建blog目录
```bash
mkdir blog	   
```                       
## 进入blog目录 生成博客 初始化博客
```bash
cd blog	
sudo hexo init 
```
## 启动本地博客服务 本地访问地址
```bash
hexo s	
http://localhost:4000/	
```
## 创建新的文章 
```bash
hexo n "我的第一篇文章"
```
## 返回blog目录
hexo clean #清理
hexo g #生成
## Github创建一个新的仓库 
YourGithubName.github.io
## 在blog目录下安装git部署插件
cnpm install --save hexo-deployer-git 
----
## 配置_config.yml 
```bash
	# Deployment
	## Docs: https://hexo.io/docs/deployment.html
	deploy:
  		type: git
 		repo: https://github.com/YourGithubName/YourGithubName.github.io.git
  		branch: master
```

## 部署到Github仓库里
```bash
hexo d	
```
## 访问这个地址可以查看博客
<https://YourGithubName.github.io/>
## 下载NEXT主题到本地
```bash
git clone https://github.com.cnpmjs.org/theme-next/hexo-theme-next themes/next 
```
## 修改hexo根目录下的 _config.yml 文件 
```bash 
theme: Next
```
## 最后发布
```bash
hexo c	#清理一下
hexo g	#生成
hexo d	#部署到远程Github仓库
```
## 小技巧
1 只需要将www.github.com/改为www.github.com.cnpmjs.org/就可以实现一键式加速