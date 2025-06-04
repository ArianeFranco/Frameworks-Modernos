import { defineStore } from 'pinia'
import { auth, provider } from '../plugins/firebase'
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'


export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),
  actions: {
    async login() {
      const result = await signInWithPopup(auth, provider)
      this.user = result.user
    },
    async logout() {
      await signOut(auth)
      this.user = null
    },
    initAuth() {
      onAuthStateChanged(auth, (user) => {
        this.user = user
      })
    },
  },
})
