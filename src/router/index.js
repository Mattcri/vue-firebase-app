import { createRouter , createWebHistory } from 'vue-router';
import Login from '../views/Login.vue'
import HomeDashboard from '../views/HomeDashboard.vue'
import Home from '../views/Home.vue'
import NotAcces from '../views/NotAcces.vue'
import NotFound from '../views/NotFound.vue'
import Register from '../views/Register.vue'
import { useAuthStore } from '../stores/auth'

const requireAuth = async (to, from, next) => {
  const store = useAuthStore()
  const user = await store.getCurrentUser()
  user ? next() : next('/sin-permisos')
}


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
    beforeEnter: requireAuth
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    beforeEnter: requireAuth
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/sin-permisos',
    name: 'NotAcces',
    component: NotAcces,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
