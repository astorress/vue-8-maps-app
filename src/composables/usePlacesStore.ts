import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { StateInterface } from '@/store'

export const usePlacesStore = () => {
  const store = useStore<StateInterface>()

  onMounted(() => {
    if (!store.getters['places/isUserLocationReady']) {
      store.dispatch('places/getInitialLocation')
    }
  })

  return {
    //State
    isLoading: computed(() => store.state.places.isLoading),
    userLocation: computed(() => store.state.places.userLocation),
    places: computed(() => store.state.places.places),
    isLoadingPlaces: computed(() => store.state.places.isLoadingPlaces),

    //Getters
    isUserLocationReady: computed<boolean>(() => store.getters['places/isUserLocationReady']),

    //Action
    searchPlacesByTerm: (query = '') => store.dispatch('places/searchPlacesByTerm', query),
  }
}
