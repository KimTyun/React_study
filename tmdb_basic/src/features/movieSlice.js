import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getMovies, getMovieDetails } from '../api/tmdbApi'

export const fetchMovies = createAsyncThunk('movies/fecthMovies', async () => {
   const response = await getMovies()
   return response.data.results
})

export const fetchMovieDetails = createAsyncThunk('movies/fetchMovieDetails', async (movieId) => {
   const response = await getMovieDetails(movieId)

   return response.data
})

const movieSlice = createSlice({
   name: 'movies',
   initialState: {
      movies: [],
      movieDetails: null, //영화 상세 정보
      loading: false,
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchMovies.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false
            state.movies = action.payload
         })
         .addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })

         .addCase(fetchMovieDetails.pending, (state) => {
            state.loading = true
            state.error = null //다른 액션 생성자 함수에서 에러가 나면 에러 메세지가 남아있을 수 있으니 미리 초기화 해놓는다.
         })
         .addCase(fetchMovieDetails.fulfilled, (state, action) => {
            state.loading = false
            state.movieDetails = action.payload
         })
         .addCase(fetchMovieDetails.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default movieSlice.reducer
