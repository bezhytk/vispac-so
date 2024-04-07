import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/salesperson',
      name: 'salesperson',
      component: () => import('../views/Salesperson.vue')
    },
    {
      path: '/storeroom',
      name: 'storeroom',
      component: () => import('../views/StoreRoom.vue')
    }
  ]
})

export default router
