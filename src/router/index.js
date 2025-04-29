import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView/HomeView.vue'
import DrinkDetailView from '../views/DrinkDetails/DrinkDetailView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/drink/:id',
      name: 'drink-detail',
      component: DrinkDetailView,
    },
  ],
})

export default router
