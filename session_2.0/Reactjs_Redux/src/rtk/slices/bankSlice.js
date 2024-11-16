import { createSlice } from '@reduxjs/toolkit'

export const bankSlice = createSlice({
  initialState: 1000,
  name: 'bankSlice',
  reducers: {
    action: (state, action) => {
      return state + action.payload
    },
    action2: (state, action) => {
      return state - action.payload
    }
  }
})

export const {action, action2} = bankSlice.actions
export default bankSlice.reducer