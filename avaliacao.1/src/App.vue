<template>
  <v-app>
    <v-layout>
      <!-- App Bar -->
      <v-app-bar color="primary" dark>
        <v-btn icon @click.stop="drawer = !drawer">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <v-toolbar-title>Reserva de Salas</v-toolbar-title>
      </v-app-bar>

      <!-- Navigation Drawer -->
      <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
        temporary
      >

        <v-divider class="mb-2" />

        <!-- Itens fixos -->
        <v-list>
          <v-list-item
            v-for="(item, index) in fixedItems"
            :key="index"
            :title="item.title"
            :to="item.to"
            link
            @click="drawer = false"
          >
            <template #prepend>
              <v-icon>{{ item.icon }}</v-icon>
            </template>
          </v-list-item>

          <!-- Login (somente se não estiver logado) -->
          <v-list-item
            v-if="!isLoggedIn"
            title="Login"
            to="/login"
            link
            @click="drawer = false"
          >
            <template #prepend>
              <v-icon>mdi-account</v-icon>
            </template>
          </v-list-item>

          <!-- Logout (somente se estiver logado) -->
          <v-list-item
            v-if="isLoggedIn"
            title="Sair"
            @click="logout"
            link
          >
            <template #prepend>
              <v-icon color="red">mdi-logout</v-icon>
            </template>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <!-- Conteúdo -->
      <v-main>
        <v-container fluid class="pa-4">
          <router-view />
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const drawer = ref(false)
const isLoggedIn = ref(false)
const router = useRouter()

// Checa o estado de login no carregamento
onMounted(() => {
  atualizarLogin()
})

// Função global para atualizar status após login
window.atualizarLogin = () => {
  isLoggedIn.value = localStorage.getItem('logado') === 'true'
}

// Itens sempre visíveis
const fixedItems = [
  { title: 'Home', to: '/', icon: 'mdi-home' },
  { title: 'Minhas Reservas', to: '/minhas-reservas', icon: 'mdi-calendar-check' }
]

// Função de logout
function logout() {
  localStorage.removeItem('logado')
  isLoggedIn.value = false
  router.push('/login')
}
</script>
