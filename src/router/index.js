import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/Services.vue'),
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('../views/Work.vue'),
    },
    {
      path: '/prices',
      name: 'prices',
      component: () => import('../views/Prices.vue'),
    },
  ],
})

export default router
