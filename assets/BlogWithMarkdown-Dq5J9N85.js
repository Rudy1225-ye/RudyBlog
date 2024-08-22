import{d as n,o as t,c as o,a as r}from"./index-Ch80g4Ls.js";const a={class:"markdown-body"},i=r(`<h1>Vite项目集成Markdown</h1><p>在从零开始构建个人博客网站时，除了网页的样式和交互逻辑外，最重要的一点就是内容的输出。然而，直接在 VS Code 中编写博客的体验往往不尽如人意。在 Vue 模板中撰写博客内容时，需要花费大量精力处理各种 HTML 标签，确保网页的格式和排版正确，这极大地降低了内容输出的效率。为了解决这一问题，我考虑了两个可行的方案：</p><ol><li><h2>CMS管理平台提供接口</h2><p>使用像 Strapi 这样的开源 Headless CMS，可以帮助像我这样不擅长后端开发的前端开发者快速搭建一个内容管理系统，并通过 API 将内容提供给前端项目。这样的方式有几个优点：</p><ul><li><strong>统一样式</strong>：只需一次性编写前端样式，文章内容可以直接通过 CMS 后台输出，前端页面通过调用接口获取内容。</li><li><strong>专注内容</strong>：开发者可以将精力集中在内容输出上，而不用担心格式和排版问题。</li></ul><p>然而，使用这种方式的一个挑战是，部署这些接口需要一个服务器，或者使用像 Strapi Cloud 这样的服务。国内的公网服务器备案周期较长，对于像我这样希望快速搭建博客网站的开发者并不友好。此外，Strapi Cloud 这类服务收费较高，不适合初期开发。</p><p>因此，我最终决定在开发初期，使用 Vite 项目集成 Markdown 的方式来快速部署博客内容，并在后期考虑将其迁移到个人服务器上。</p></li><li><h2>Vite项目集成Markdown</h2><p>将 Markdown 文件转换为 Vue 组件并渲染，使我能够使用体验更佳的 Markdown 编辑器（如 Typora）来撰写博客内容。集成该功能后，Vue Router 可以自动生成相应的路由，非常适合博客网站的需求，也契合前端工程化的实践。这种方式不仅提升了内容输出的效率，还能确保网页格式的统一和正确。</p><p>通过这种方式，我可以更专注于内容的创作，而不必为排版和格式问题分心，同时确保网站的开发过程高效、有序。</p></li><li><h2>实践过程</h2><h3>搭建vite项目</h3><pre class="language-powershell"><code class="language-powershell">vue create@latest
</code></pre><p>创建一个vue3项目并在此基础上集成所需要的插件</p><h3>集成插件</h3><pre class="language-powershell"><code class="language-powershell">pnpm i vite-plugin-md vite-plugin-pages markdown-it-prism <span class="token operator">-</span>D
</code></pre><p>搭建博客网站主要需要vite-plugin-md / vite-plugin-pages / markdown-it-prism</p><p>vite-plugin-md解析Markdown文件内容 / vite-plugin-pages自动更新路由配置 / markdown-it-prism添加代码块样式</p><p><strong>这些插件搭配使用让我能够更专注于输出内容且不用重复进行琐碎的路由配置和修改样式</strong></p><h3>配置项目</h3><pre class="language-vue"><code class="language-vue">import { fileURLToPath, URL } from &#39;node:url&#39;

import { defineConfig } from &#39;vite&#39;
import vue from &#39;@vitejs/plugin-vue&#39;
import Markdown from &#39;vite-plugin-md&#39;
import Pages from &#39;vite-plugin-pages&#39;
import Prism from &#39;markdown-it-prism&#39;;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\\.vue$/, /\\.md$/], // &lt;-- 解析md文件
    }),
    Markdown({
      markdownItSetup(md) {
        md.use(Prism); // 添加代码高亮支持
      },
      frontmatter: true, // 支持解析md文件的frontmatter
    }),
    Pages({
      extensions: [&#39;vue&#39;, &#39;md&#39;], // 自动配置vue和md文件路由
      dirs: [
        { dir: &#39;src/pages&#39;, baseRoute: &#39;&#39;} // 指定目录
      ]
    }),
  ],
  resolve: {
    alias: {
      &#39;@&#39;: fileURLToPath(new URL(&#39;./src&#39;, import.meta.url))
    }
  }
})

</code></pre><h3>Github Actions自动化部署</h3></li></ol>`,3),p=[i],m={title:"Vite项目集成Markdown",date:"2024/08",author:"Rudy",tags:"前端工程化",id:"5",desc:"将 Markdown 文件转换为 Vue 组件并渲染，使我能够使用体验更佳的 Markdown 编辑器（如 Typora）来撰写博客内容。集成该功能后，Vue Router 可以自动生成相应的路由，非常适合博客网站的需求，也契合前端工程化的实践。这种方式不仅提升了内容输出的效率，还能确保网页格式的统一和正确。"},g="",c=n({__name:"BlogWithMarkdown",setup(s,{expose:e}){return e({frontmatter:{title:"Vite项目集成Markdown",date:"2024/08",author:"Rudy",tags:"前端工程化",id:"5",desc:"将 Markdown 文件转换为 Vue 组件并渲染，使我能够使用体验更佳的 Markdown 编辑器（如 Typora）来撰写博客内容。集成该功能后，Vue Router 可以自动生成相应的路由，非常适合博客网站的需求，也契合前端工程化的实践。这种方式不仅提升了内容输出的效率，还能确保网页格式的统一和正确。"},excerpt:void 0}),(d,l)=>(t(),o("div",a,p))}});export{c as default,g as excerpt,m as frontmatter};
