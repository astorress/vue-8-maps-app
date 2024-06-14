import axios from 'axios'

const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 5,
    language: 'es',
    access_token:
      'pk.eyJ1IjoiYXN0b3JyZXNzIiwiYSI6ImNseGNjaHlhMzNqOGYya3B2dDlweGs5ZGIifQ.K4B-VHHB1SBpkFYr7PgD2w',
  },
})

export default searchApi
