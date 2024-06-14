import { defineComponent, onMounted, ref, watch } from 'vue'
import Mapboxgl from 'mapbox-gl'

import { usePlacesStore, useMapStore } from '@/composables'

export default defineComponent({
  name: 'MapView',
  setup() {
    const mapElement = ref<HTMLDivElement>()
    const { userLocation, isUserLocationReady } = usePlacesStore()
    const { setMap } = useMapStore()

    const initMap = async () => {
      if (!mapElement.value) throw new Error('Div Element no exists')
      if (!userLocation.value) throw new Error('user location no existe')

      await Promise.resolve()

      const map = new Mapboxgl.Map({
        container: mapElement.value,
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: userLocation.value, // starting position [lng, lat]
        zoom: 15, // starting zoom
      })

      const myLocationPopup = new Mapboxgl.Popup({ offset: [0, -25] }).setLngLat(userLocation.value)
        .setHTML(`
        <h4> Aquí estoy yo </h4>
        <p> Actualmente en Sabaneta </p>
        `)

      const myLocationMarker = new Mapboxgl.Marker()
        .setLngLat(userLocation.value)
        .setPopup(myLocationPopup)
        .addTo(map)

      setMap(map)
    }

    onMounted(() => {
      if (isUserLocationReady.value) return initMap()

      console.log('No tengo localización aún')
    })

    watch(isUserLocationReady, (newVal) => {
      if (isUserLocationReady.value) initMap()
    })

    return {
      isUserLocationReady,
      mapElement,
    }
  },
})
