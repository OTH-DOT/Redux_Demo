
console.log(Redux);
console.log(ReduxThunk);


let btn = document.getElementById("btn")
let btn2 = document.getElementById("btn2")
let value = document.getElementById('value')
let text = document.getElementById('text')

//constants

const withdraw_money = "withdraw_money"
const deposite_money = "deposite_money"

const add_product = 'add_product'
const get_product = 'get_product'

//action creators

const action = (amount) => {
  return {
    type: withdraw_money,
    payload: amount
  }
}

const action2 = (amount) => {
  return {
    type: deposite_money,
    payload: amount
  }
}

const addProduct = (product) => {
  return {
    type: add_product,
    payload: product,
  }
}

const getProduct = (products) => {
  return {
    type: get_product,
    payload: products
  }
}

const fetchProduct = () => {

  return async (dispatch) => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json();
    console.log(data)

    dispatch(getProduct(data))
  }

}


//reducers


const bankReducer = (state = 1000, action) => {
  switch (action.type) {
    case withdraw_money : return state + action.payload
    case deposite_money : return state - action.payload
    default: return state
  }
}

const productReducer = (state = [], action) => {
  switch (action.type) {
    case add_product : return [...state, action.payload]
    case get_product : return [...state, ...action.payload]
    default: return state
  }
}

const appReducer = Redux.combineReducers({
  bank:bankReducer,
  product:productReducer,
})

//store

const store = Redux.createStore(appReducer, Redux.applyMiddleware(ReduxThunk));

console.log(store)

//test

text.innerHTML = store.getState().bank

btn.addEventListener("click", event => {
  event.preventDefault()

  store.dispatch(action(+value.value || 0))
})

btn2.addEventListener("click", event => {
  event.preventDefault()

  store.dispatch(action2(+value.value || 0))
})

store.dispatch(addProduct({id:1,title:'samsung'}))

store.subscribe(() => {
  console.log('current state', store.getState());
  text.innerHTML = store.getState().bank
})