import {createStore, combineReducers, applyMiddleware} from 'redux'
import { bankReducer } from './Reducers/bank-reducer'
import { productReducer } from './Reducers/product-reducer'
import {thunk} from 'redux-thunk'

const appReducer = combineReducers({
  bank:bankReducer,
  product:productReducer,
})

export const store = createStore(appReducer, applyMiddleware(thunk))
