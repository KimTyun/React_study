import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './toolkitCounterSlice'
const store = configureStore({
   reducer: {
      counter: counterSlice,
   },
})

export default store
