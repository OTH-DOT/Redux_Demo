
export const withdraw_money = "withdraw_money"
export const deposite_money = "deposite_money"


export const action = (amount) => {
  return {
    type: withdraw_money,
    payload: amount
  }
}

export const action2 = (amount) => {
  return {
    type: deposite_money,
    payload: amount
  }
}