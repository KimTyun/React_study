import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3'
const AUTH_KEY = import.meta.env.VITE_TMDB_API_KEY

const tmdbApi = axios.create({
   baseURL: BASE_URL,
   headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_KEY}`,
   },
})

export const getMovies = async function (page = 1) {
   const response = await tmdbApi.get('/movie/popular', {
      params: {
         language: 'ko-KR',
         page,
         region: 'KR',
      },
   })

   return response
}

export const getUpcomingMovies = async function (page = 1) {
   const response = await tmdbApi.get('/movie/upcoming', {
      params: {
         language: 'ko-KR',
         page,
         region: 'KR',
      },
   })
   return response
}

export const getMovieDetails = async function (movieID) {
   const response = await tmdbApi.get(`/movie/${movieID}`, {
      params: {
         language: 'ko-KR',
      },
   })
   return response
}

export default tmdbApi
