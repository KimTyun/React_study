import { createSlice } from '@reduxjs/toolkit'

const toolkitCounterSlice = createSlice({
   name: 'counter',
   initialState: { value: 0 },
   reducers: {
      UP: (state, action) => {
         state.value += action.payload
      },
      DOWN: (state, action) => {
         state.value -= action.payload
      },
   },
})

export default toolkitCounterSlice.reducer
export const { UP, DOWN } = toolkitCounterSlice.actions
