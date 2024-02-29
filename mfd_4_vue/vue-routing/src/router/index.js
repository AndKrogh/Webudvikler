import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import UserProfileView from '../views/UserProfileView.vue'
import UserView from '../views/UserView.vue'
import login from '../views/Login.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/users/:userid',
      name: 'UserProfileView',
      component: UserProfileView,
    },
    {
      path: '/users/:userid/login',
      name: 'login',
      component: login
    },
    {
      path: '/users/:userid/profile',
      name: 'UserView',
      component: UserView,
      meta:{
        requiresAuth: true,
      }
    }
    
  ]
})

router.beforeEach((to, from) => {
  if(to.requiresAuth && !window.user) {
    return {name: 'login'}
  }
});

export default router
