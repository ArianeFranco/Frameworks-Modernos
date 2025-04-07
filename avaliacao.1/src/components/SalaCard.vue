<template>
  <v-card class="ma-3 pa-3">
    <v-card-title>{{ sala.nome }}</v-card-title>
    <v-card-text>
      Capacidade: {{ sala.capacidade }}
    </v-card-text>
    <!-- Ações do card: botões para reservar ou ver detalhes -->
    <v-card-actions>
      <v-btn @click="$emit('reservar', sala)">Reservar</v-btn>
      <v-btn :to="`/sala/${sala.id}`">Detalhes</v-btn>
    </v-card-actions>

  </v-card>
</template>

<script setup>
// defineProps permite receber dados do componente pai via props
defineProps(['sala'])

// defineEmits permite emitir eventos personalizados para o componente pai
defineEmits(['reservar'])
</script>
