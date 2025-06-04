import { defineStore } from 'pinia'

export const useCrudStore = defineStore('crud', {
  state: () => ({
    items: [],
    nextId: 1,
  }),
  actions: {
    addItem(name) {
      this.items.push({ id: this.nextId++, name })
    },
    removeItem(id) {
      this.items = this.items.filter(i => i.id !== id)
    },
    updateItem(id, name) {
      const item = this.items.find(i => i.id === id)
      if (item) item.name = name
    }
  }
})
