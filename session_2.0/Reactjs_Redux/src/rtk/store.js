import { configureStore } from '@reduxjs/toolkit'
import bankSlice from './slices/bankSlice'
import productsSlice from './slices/productsSlice'

export const store = configureStore({
  reducer: {
    Bank: bankSlice,
    Products: productsSlice
  },
  devTools: true
})