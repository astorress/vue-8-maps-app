import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Mapboxgl from 'mapbox-gl'

Mapboxgl.accessToken =
  'pk.eyJ1IjoiYXN0b3JyZXNzIiwiYSI6ImNseGNjaHlhMzNqOGYya3B2dDlweGs5ZGIifQ.K4B-VHHB1SBpkFYr7PgD2w'

if (!navigator.geolocation) {
  alert('Tu navegador no soporta la geolocation')
  throw new Error('Tu navegador no soporta la geolocation')
}

createApp(App).use(store).use(router).mount('#app')
