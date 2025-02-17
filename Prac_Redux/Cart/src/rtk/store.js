import { configureStore } from '@reduxjs/toolkit'
import productSlice from './slices/product-slice'
import cartSlice from './slices/cart-slice'

export const store = configureStore({
  reducer: {
    Products: productSlice,
    Cart: cartSlice,
  },
  devTools: true
})