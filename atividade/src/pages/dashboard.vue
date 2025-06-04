<template>
  <v-card class="pa-4">
    <v-card-title class="text-h6">CRUD Simples</v-card-title>
    <v-card-text>
      <v-text-field v-model="newItem" label="Novo item" @keyup.enter="addItem" />
      <v-btn color="green" class="mt-2" @click="addItem">Adicionar</v-btn>

      <v-list two-line class="mt-4">
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-content>
            <v-text-field v-model="items[index]" label="Editar item" />
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon @click="removeItem(index)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const newItem = ref('')
const items = ref([])

function addItem() {
  if (newItem.value.trim()) {
    items.value.push(newItem.value)
    newItem.value = ''
  }
}

function removeItem(index) {
  items.value.splice(index, 1)
}
</script>
