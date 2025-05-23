import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/isaac',
      name: 'isaac',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/IsaacView.vue'),
    },
    {
      path: '/raj',
      name: 'raj',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RajView.vue'),
    },
    {
      path: '/rick',
      name: 'rick',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RickView.vue'),
    },
    {
      path: '/apipage',
      name: 'apipage',
      component: () => import('../views/APIView.vue'),
    },
    {
      path: '/cookies',
      name: 'cookies',
      component: () => import('../views/CookieView.vue'),
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('../views/TeamView.vue'),
    }
  ],
})

export default router
