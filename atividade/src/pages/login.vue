<template>
    <v-container class="fill-height d-flex justify-center align-center">
    <v-card class="pa-6" max-width="400" elevation="12">
      <v-card-title class="text-h5 text-center">
        <v-icon color="primary" size="36">mdi-account-circle</v-icon>
        <span class="ml-2">Login com Google</span>
      </v-card-title>

      <v-card-text class="text-center">
        <p>Entre com sua conta Google para acessar o sistema.</p>

        <v-btn
          :loading="loading"
          color="primary"
          class="mt-4"
          prepend-icon="mdi-google"
          @click="login"
          block
        >
          Entrar com Google
        </v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { useAuthStore } from '../stores/user'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()
const loading = ref(false) 

async function login() {
  try {
    await auth.login()
    router.push('/dashboard')
  } catch (err) {
    alert('Erro no login!')
    console.error(err)
  }
}
</script>
