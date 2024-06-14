import Mapboxgl from 'mapbox-gl'

export interface MapState {
  map?: Mapboxgl.Map
  marker: Mapboxgl.Marker[]
  distance?: number
  duration?: number
}

function state(): MapState {
  return {
    map: undefined,
    marker: [],
    distance: undefined,
    duration: undefined,
  }
}

export default state
