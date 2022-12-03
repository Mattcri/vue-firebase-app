import { createRouter , createWebHistory } from 'vue-router';
import Login from '../views/Login.vue'
import HomeDashboard from '../views/HomeDashboard.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/dashboard',
    name: 'HomeDashboard',
    component: HomeDashboard,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
