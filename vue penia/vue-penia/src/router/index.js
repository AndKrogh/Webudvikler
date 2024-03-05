import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import AllProductsView from '@/views/AllproductsView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ProductView',
      name: 'ProductView',
      component: ProductView
    },
    {
      path: '/AllProductsView',
      name: 'AllProductsView',
      component: AllProductsView
    }
  ]
})

export default router
