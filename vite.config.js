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
      include: [/\.vue$/, /\.md$/], // <--
    }),
    Markdown({
      markdownItSetup(md) {
        md.use(Prism); // 添加代码高亮支持
      },
      frontmatter: true,
    }),
    Pages({
      extensions: ['vue', 'md'],
      dirs: [
        { dir: 'src/pages', baseRoute: ''}
      ]
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
