import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Mapboxgl from 'mapbox-gl'

import * as dotenv from 'dotenv'

dotenv.config()

Mapboxgl.accessToken = process.env.ACCESS_TOKEN || ''
if (!navigator.geolocation) {
  alert('Tu navegador no soporta la geolocation')
  throw new Error('Tu navegador no soporta la geolocation')
}

createApp(App).use(store).use(router).mount('#app')
