<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="pa-5" elevation="4">
          <v-card-title class="text-h5">Login</v-card-title>

          <v-card-text>
            <v-text-field
              v-model="usuario"
              label="Usuário"
              outlined
            ></v-text-field>

            <v-text-field
              v-model="senha"
              label="Senha"
              type="password"
              outlined
            ></v-text-field>
          </v-card-text>

          <v-card-actions>
            <v-btn color="primary" block @click="logar">Entrar</v-btn>
          </v-card-actions>

          <!-- Alerta de sucesso após login válido -->
          <v-alert v-if="logado" type="success" class="mt-4">
            Bem-vindo, {{ usuario }}!
          </v-alert>

          <!-- Alerta de erro para credenciais incorretas -->
          <v-alert v-if="erro" type="error" class="mt-4">
            Usuário ou senha incorretos.
          </v-alert>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const usuario = ref('')
const senha = ref('')
const logado = ref(false)
const erro = ref(false)
const router = useRouter()

// Função para simular o login
function logar() {
  if (usuario.value === 'admin' && senha.value === 'admin') {
    // Login bem-sucedido
    logado.value = true
    erro.value = false
    localStorage.setItem('logado', 'true')

    // Chama função global para atualizar estado de login, se existir
    if (typeof window.atualizarLogin === 'function') {
      window.atualizarLogin()
    }

    router.push('/')
  } else {
    // Falha no login
    logado.value = false
    erro.value = true
    localStorage.removeItem('logado')

    if (typeof window.atualizarLogin === 'function') {
      window.atualizarLogin()
    }
  }
}
</script>
