import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import '@mdi/font/css/materialdesignicons.css'

const app = createApp(App)
const vuetify = createVuetify({ components })

app.use(router)
app.use(vuetify)
app.mount('#app')
