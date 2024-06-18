import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/auth/LoginView.vue'
import Home from '../views/home/Home.vue'

const routes = [
  {
    path: '/auth/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/auth/register',
    name: 'register',
    component: () => import('../views/auth/RegisterView.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
