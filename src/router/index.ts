import { createRouter, createWebHistory , createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(),
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
      path: '/mes-projets',
      name: 'mes-projets',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/games',
      name: 'games',
      component: () => import('../views/GamesView.vue')
    },
    {
      path: '/vr',
      name: 'vr',
      component: () => import('../views/VRView.vue')
    },
    {
      path: '/music',
      name: 'music',
      component: () => import('../views/WIPView.vue')
    },
    {
      path: '/3d',
      name: '3d',
      component: () => import('../views/3DView.vue')
    },
    {
      path: '/other',
      name: 'other',
      component: () => import('../views/WIPView.vue')
    },


  ]
})

export default router
