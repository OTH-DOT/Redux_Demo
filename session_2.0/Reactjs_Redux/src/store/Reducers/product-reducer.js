import { add_product, get_product } from "../actions/product-actions"

export const productReducer = (state = [{id:1,title:'hello'}], action) => {
  switch (action.type) {
    case add_product : return [...state, action.payload]
    case get_product : return [...state, ...action.payload]
    default: return state
  }
}