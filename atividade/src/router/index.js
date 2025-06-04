import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/login.vue'
import Dashboard from '../pages/dashboard.vue'
import { useAuthStore } from '../stores/user.js' // ✅ pode importar aqui, mas só usar dentro do router depois do app

const routes = [
  { path: '/', component: Login },
  { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
  { path: '/:pathMatch(.*)*', redirect: '/' } // fallback p/ evitar warning de rota inexistente
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// ✅ O problema não era a importação — era o timing. Isso resolve:
router.beforeEach((to, from, next) => {
  // Só usar store aqui DEPOIS que o app tiver montado
  const auth = useAuthStore()
  const isAuth = !!auth.user
  if (to.meta.requiresAuth && !isAuth) {
    next('/')
  } else {
    next()
  }
})

export default router
