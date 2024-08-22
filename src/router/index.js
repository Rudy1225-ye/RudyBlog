import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // routes: [
  //   { path: '/', redirect: '/home' },
  //   {
  //     path: '/home',
  //     name: 'home',
  //     component: () => import('../views/home.vue'),
  //   },
  //   {
  //     path: '/blog',
  //     name: 'blog',
  //     component: () => import('../views/blog.vue'),
  //     children: [ {
  //         path: 'detail',
  //         component: () => import('../views/blogDetail.vue')
  //       },

  //    ]
  //   },
  // ]
  routes,
})

export default router
