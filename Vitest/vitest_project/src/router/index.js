import { createRouter, createWebHistory } from 'vue-router'
import UserList from '../views/User_list.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/UserList',
      name: 'UserList',
      component: UserList
    },
    {
      path:'/signin',
      name:'signin',
      component: () => import('@/views/signinView.vue')
    },
  ]
})

export default router
