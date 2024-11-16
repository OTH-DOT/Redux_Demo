import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('productSlice/fetchProducts', async ()=> {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()
  return data
})

export const productSlice = createSlice({
  initialState:{
    products: [],
    loading: false,
    error: null
  },
  name: 'productSlice',
  reducers:{

  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending , (state, action) => {
      state.loading = true
    }),
    builder.addCase(fetchProducts.fulfilled , (state, action) => {
      state.products = action.payload
    }),
    builder.addCase(fetchProducts.rejected , (state, action) => {
      state.error = action.error.message 
    })
  }
})

export const {} = productSlice.actions
export default productSlice.reducer