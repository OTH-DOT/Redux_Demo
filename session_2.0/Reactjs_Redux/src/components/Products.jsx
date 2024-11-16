import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, fetchProduct } from '../rtk/slices/productsSlice'
// import { addProduct, fetchProduct, getProduct } from '../store/actions/product-actions'

const Products = () => {

  const store = useSelector(state => state.Products.products)
  const dispatch = useDispatch()

  console.log(store)

  const display = store.map((product,key) => <p key={key} >{product.title}</p> )

  useEffect(()=>{
    dispatch(fetchProduct())
  },[])

  return (
    <>
      <h2>Products</h2>
      <button onClick={()=> dispatch(addProduct({id:2,title:'world'}))}>add world</button>
      <div>
        {display}
      </div>
    </>
  )
}

export default Products