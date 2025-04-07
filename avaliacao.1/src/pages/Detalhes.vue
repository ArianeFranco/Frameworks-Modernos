<template>
  <v-container>
    <v-card class="pa-5">
      <v-card-title class="text-h5">{{ sala.nome }}</v-card-title>
      <v-card-subtitle>
        Capacidade: {{ sala.capacidade }} pessoas
      </v-card-subtitle>

      <v-card-text>
        <p>{{ sala.descricao }}</p>
      </v-card-text>

      <v-card-actions>
        <v-btn color="primary" @click="reservarSala">
          Reservar Sala
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const sala = ref({})

// Carrega os dados simulados da sala com base no ID da rota
onMounted(() => {
  const id = route.params.id
  sala.value = {
    id,
    nome: `Sala ${id}`,
    capacidade: 15,
    descricao: 'Sala equipada com recursos multimídia.'
  }
})

// Exibe alerta ao reservar a sala
function reservarSala() {
  alert(`Reserva realizada para ${sala.value.nome}`)
}
</script>
