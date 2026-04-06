import { createWebHistory, createRouter } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import FormView from '@/views/FormView.vue'

const routes = [
  { 
    path: '/', 
    component: DashboardView 
  },
  { 
    path: '/edit/:id?',
    name: 'form',
    component: FormView 
  },
]

export const router = createRouter({
  history: createWebHistory(), 
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  }
})