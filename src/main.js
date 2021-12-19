import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'

import '@quasar/extras/material-icons/material-icons.css'

import 'quasar/src/css/index.sass'
const musicApp = createApp(App)

musicApp.use(Quasar,{
  plugins: {},
})

musicApp.mount('#app')
