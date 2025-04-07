<template>
  <v-container class="fill-height" fluid>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-card class="pa-5" elevation="3">
          <v-card-title class="text-h5">
            Salas Disponíveis
          </v-card-title>

          <v-card-text>
            <v-row dense>
              <!-- Renderiza cada sala da lista usando v-for -->
              <v-col
                v-for="sala in salas"
                :key="sala.id"
                cols="12"
                sm="6"
                md="4"
              >
                <v-card class="pa-3" outlined>
                  <v-card-title>{{ sala.nome }}</v-card-title>
                  <v-card-subtitle>
                    Capacidade: {{ sala.capacidade }} pessoas
                  </v-card-subtitle>
                  <v-card-text>
                    {{ sala.descricao }}
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="primary" @click="reservarSala(sala)">
                      Reservar
                    </v-btn>
                    <v-btn color="secondary" :to="`/sala/${sala.id}`">
                      Detalhes
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
// Importa ref e hook onMounted da Composition API
import { ref, onMounted } from 'vue'

const salas = ref([])

onMounted(() => {
  salas.value = [
    {
      id: 1,
      nome: 'Sala 101',
      capacidade: 12,
      descricao: 'Sala com projetor e ar-condicionado.'
    },
    {
      id: 2,
      nome: 'Sala 202',
      capacidade: 20,
      descricao: 'Espaço amplo para apresentações e reuniões.'
    },
    {
      id: 3,
      nome: 'Sala 303',
      capacidade: 8,
      descricao: 'Ambiente reservado, ideal para entrevistas.'
    },
    {
      id: 4,
      nome: 'Sala 404',
      capacidade: 15,
      descricao: 'Com TV 50" e Wi-Fi dedicado.'
    }
  ]
})

// Função chamada ao clicar no botão "Reservar"
function reservarSala(sala) {
  alert(`Reserva feita para a ${sala.nome}!`)
}
</script>
