import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getNowPlaying } from '../api/api'

export const fecthNowPlaying = createAsyncThunk('nowPlayingSlice/fecthNowPlaying', async () => {
   const response = await getNowPlaying()
   return response.data.results
})

const nowPlayingSlice = createSlice({
   name: 'nowPlaying',
   initialState: {
      movies: [],
      loading: true,
      error: null,
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fecthNowPlaying.pending, (state) => {
            state.loading = true
         })
         .addCase(fecthNowPlaying.fulfilled, (state, action) => {
            state.loading = false
            state.movies = action.payload
         })
         .addCase(fecthNowPlaying.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default nowPlayingSlice.reducer
