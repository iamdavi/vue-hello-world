import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue')
  },
  {
    path: '/blog/:id',
    name: 'Articulo',
    component: () => import(/* webpackChunkName: "blog" */ '../views/Articulo.vue')
  },
  {
    path: '/formulario',
    name: 'Formulario',
    component: () => import(/* webpackChunkName: "formulario" */ '../views/Formulario.vue')
  },
  {
    path: '/tarea/:id',
    name: 'EditarTarea',
    component: () => import(/* webpackChunkName: "formulario" */ '../views/EditarTarea.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
