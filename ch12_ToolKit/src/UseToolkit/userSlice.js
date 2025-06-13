import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
   name: 'user',
   initialState: {
      name: '',
      age: 0,
   },
   reducers: {
      setName: (s, a) => {
         s.name = a.payload
      },
      setAge: (s, a) => {
         s.age = a.payload
      },
   },
})

export default userSlice.reducer
export const { setName, setAge } = userSlice.actions
