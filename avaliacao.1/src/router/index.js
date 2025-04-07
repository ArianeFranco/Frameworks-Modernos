import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Detalhes from '../pages/Detalhes.vue'
import MinhasReservas from '../pages/MinhasReservas.vue'
import Login from '../pages/Login.vue'

// Definição das rotas e suas respectivas páginas
const routes = [
  {
    path: '/',               
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/minhas-reservas', 
    component: MinhasReservas,
    meta: { requiresAuth: true } 
  },
  {
    path: '/sala/:id',       
    component: Detalhes,
    meta: { requiresAuth: true } 
  },
  {
    path: '/login',           
    component: Login
  }
]

// Criação do roteador com histórico baseado em URL padrão
const router = createRouter({
  history: createWebHistory(),
  routes
})

// Guarda de rota (navigation guard) para proteger rotas que exigem login
router.beforeEach((to, from, next) => {
  const autenticado = localStorage.getItem('logado') === 'true'

  // Se a rota exigir autenticação e o usuário não estiver logado, redireciona para login
  if (to.meta.requiresAuth && !autenticado) {
    next('/login')
  } else {
    next() // Caso contrário, segue normalmente
  }
})

export default router
