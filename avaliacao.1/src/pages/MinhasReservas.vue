<template>
  <v-container class="fill-height" fluid>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-card class="pa-5" elevation="3">
          <v-card-title class="text-h5">
            Minhas Reservas
          </v-card-title>

          <v-card-text>
            <v-row dense>
              <!-- Renderiza cada reserva dinamicamente -->
              <v-col
                v-for="(reserva, index) in reservas"
                :key="index"
                cols="12"
                sm="6"
                md="4"
              >
                <v-card class="pa-3" outlined>
                  <v-card-title>{{ reserva.sala }}</v-card-title>
                  <v-card-subtitle>Data: {{ reserva.data }}</v-card-subtitle>
                  <v-card-text>
                    Horário: {{ reserva.horario }}
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="error" @click="cancelar(index)">Cancelar</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>

            <!-- Alerta exibido quando não há nenhuma reserva -->
            <v-alert
              v-if="reservas.length === 0"
              type="info"
              class="mt-4"
            >
              Nenhuma reserva encontrada.
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const reservas = ref([
  { sala: 'Sala 101', data: '2025-04-08', horario: '10h' },
  { sala: 'Sala 202', data: '2025-04-09', horario: '14h' }
])

// Remove uma reserva com base no índice
function cancelar(index) {
  reservas.value.splice(index, 1)
}
</script>
