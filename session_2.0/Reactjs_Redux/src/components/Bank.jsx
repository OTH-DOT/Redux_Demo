import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { action, action2 } from '../rtk/slices/bankSlice'
// import { action, action2 } from '../store/actions/bank-actions'


function Bank() {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  
  console.log(state)

  return (
    <>
      <h1>{state.Bank}</h1>
      <div>
        <button onClick={()=> dispatch(action(100))}>+</button>
        <button onClick={()=> dispatch(action2(100))} >-</button>
      </div>
    </>
  )
}

export default Bank
