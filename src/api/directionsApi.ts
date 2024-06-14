import axios from 'axios'

const directionsApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token:
      'pk.eyJ1IjoiYXN0b3JyZXNzIiwiYSI6ImNseGNjaHlhMzNqOGYya3B2dDlweGs5ZGIifQ.K4B-VHHB1SBpkFYr7PgD2w',
  },
})

export default directionsApi
