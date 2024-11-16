import { deposite_money, withdraw_money } from "../actions/bank-actions"


export const bankReducer = (state = 1000, action) => {
  switch (action.type) {
    case withdraw_money : return state + action.payload
    case deposite_money : return state - action.payload
    default: return state
  }
}