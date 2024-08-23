---
title: "Vite项目集成Markdown"
date: "2024/08"
author: "Rudy"
tags: "前端工程化"
id: "5"
desc: "将 Markdown 文件转换为 Vue 组件并渲染，使我能够使用体验更佳的 Markdown 编辑器（如 Typora）来撰写博客内容。集成该功能后，Vue Router 可以自动生成相应的路由，非常适合博客网站的需求，也契合前端工程化的实践。这种方式不仅提升了内容输出的效率，还能确保网页格式的统一和正确。"
---

# Vite项目集成Markdown

在从零开始构建个人博客网站时，除了网页的样式和交互逻辑外，最重要的一点就是内容的输出。然而，直接在 VS Code 中编写博客的体验往往不尽如人意。在 Vue 模板中撰写博客内容时，需要花费大量精力处理各种 HTML 标签，确保网页的格式和排版正确，这极大地降低了内容输出的效率。为了解决这一问题，我考虑了两个可行的方案：

1. ## CMS管理平台提供接口

   使用像 Strapi 这样的开源 Headless CMS，可以帮助像我这样不擅长后端开发的前端开发者快速搭建一个内容管理系统，并通过 API 将内容提供给前端项目。这样的方式有几个优点：

   - **统一样式**：只需一次性编写前端样式，文章内容可以直接通过 CMS 后台输出，前端页面通过调用接口获取内容。
   - **专注内容**：开发者可以将精力集中在内容输出上，而不用担心格式和排版问题。

   然而，使用这种方式的一个挑战是，部署这些接口需要一个服务器，或者使用像 Strapi Cloud 这样的服务。国内的公网服务器备案周期较长，对于像我这样希望快速搭建博客网站的开发者并不友好。此外，Strapi Cloud 这类服务收费较高，不适合初期开发。

   因此，我最终决定在开发初期，使用 Vite 项目集成 Markdown 的方式来快速部署博客内容，并在后期考虑将其迁移到个人服务器上。

2. ## Vite项目集成Markdown

   将 Markdown 文件转换为 Vue 组件并渲染，使我能够使用体验更佳的 Markdown 编辑器（如 Typora）来撰写博客内容。集成该功能后，Vue Router 可以自动生成相应的路由，非常适合博客网站的需求，也契合前端工程化的实践。这种方式不仅提升了内容输出的效率，还能确保网页格式的统一和正确。

   通过这种方式，我可以更专注于内容的创作，而不必为排版和格式问题分心，同时确保网站的开发过程高效、有序。

3. ## 实践过程

   ### 搭建vite项目

   ```powershell
   vue create@latest
   ```

   创建一个vue3项目并在此基础上集成所需要的插件

   ### 集成插件

   ```powershell
   pnpm i vite-plugin-md vite-plugin-pages markdown-it-prism -D
   ```

   搭建博客网站主要需要vite-plugin-md / vite-plugin-pages / markdown-it-prism

   vite-plugin-md解析Markdown文件内容 / vite-plugin-pages自动更新路由配置 / markdown-it-prism添加代码块样式

   **这些插件搭配使用让我能够更专注于输出内容且不用重复进行琐碎的路由配置和修改样式**

   ### 配置项目

   ```vue
   import { fileURLToPath, URL } from 'node:url'
   
   import { defineConfig } from 'vite'
   import vue from '@vitejs/plugin-vue'
   import Markdown from 'vite-plugin-md'
   import Pages from 'vite-plugin-pages'
   import Prism from 'markdown-it-prism';
   
   // https://vitejs.dev/config/
   export default defineConfig({
     plugins: [
       vue({
         include: [/\.vue$/, /\.md$/], // <-- 解析md文件
       }),
       Markdown({
         markdownItSetup(md) {
           md.use(Prism); // 添加代码高亮支持
         },
         frontmatter: true, // 支持解析md文件的frontmatter
       }),
       Pages({
         extensions: ['vue', 'md'], // 自动配置vue和md文件路由
         dirs: [
           { dir: 'src/pages', baseRoute: ''} // 指定目录
         ]
       }),
     ],
     resolve: {
       alias: {
         '@': fileURLToPath(new URL('./src', import.meta.url))
       }
     }
   })
   
   ```

   ### Github Actions自动化部署

在项目创建.github/workflows文件夹

创建deploy.yml

```yaml
name: Blog Deploy

on:
  push:
    branches:
      - main

permissions:
  contents: write

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20.10'

      - name: Install dependencies
        run: npm install --legacy-peer-deps

      - name: Build Project
        run: npm run build

      - name: Publish to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: rudyblog
          directory: ./
          # Optional: Enable this if you want to have GitHub Deployments triggered
          gitHubToken: ${{ secrets.GITHUB_TOKEN }}
          # Optional: Switch what branch you are publishing to.
          # By default this will be the branch which triggered this workflow
          branch: main
          # Optional: Change the working directory
          # All my website content is in the site folder
          workingDirectory: ./dist
          # Optional: Change the Wrangler version, allows you to point to a specific version or a tag such as `beta`
          wranglerVersion: '3'

```
结合Cloudflare Pages，使用Github Actions实现自动化部署
这样每次写完新的博客内容把代码push到仓库，就能自动打包构建并部署到指定的Cloudflare Pages上

**省去了每次都要打包上传部署的琐碎工作，项目的运转效率大大提升**
