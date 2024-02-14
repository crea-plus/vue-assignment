import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/detail/:id',
      name: 'detail',
      //lazy loading
      component: () => import('@/views/DetailView.vue')
    }
  ]
})

export default router
