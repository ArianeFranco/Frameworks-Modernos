import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { useAuthStore } from './stores/user.js'
import vuetify from './plugins/vuetify' 

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(vuetify) 

const auth = useAuthStore()
auth.initAuth?.() // se tiver método que escuta onAuthStateChanged()

app.mount('#app')
