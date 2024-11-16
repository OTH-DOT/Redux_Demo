import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { action } from "./bankSlice";

export const fetchProduct = createAsyncThunk('productsSlice/fetchProduct', async ()=>{
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json();
  console.log(data)
  return data  
})

export const productsSlice = createSlice({
  initialState: {
    products: [{ id: 1, title: 'product1' }],
    loading: false,
    error: null
  },
  name: 'productsSlice',
  reducers: {
    addProduct: (state, action)=>{
      state.products.push(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state, action) => {
      //show loader here
      state.loading = true;
    })
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.products.push(...action.payload)
    })
    builder.addCase(fetchProduct.rejected, (state, action)=> {
      state.loading = false
      state.error = action.error.message
    })
  }
})

export const {addProduct} = productsSlice.actions
export default productsSlice.reducer