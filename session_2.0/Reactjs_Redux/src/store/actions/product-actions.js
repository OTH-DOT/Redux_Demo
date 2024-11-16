
export const get_product = 'get_product'
export const add_product = 'add_product'


export const addProduct = (product) => {
  return {
    type: add_product,
    payload: product,
  }
}

export const getProduct = (products) => {
  return {
    type: get_product,
    payload: products
  }
}

export const fetchProduct = () => {

  return async (dispatch) => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json();
    console.log(data)

    dispatch(getProduct(data))
  }

}
