import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import { clear, deleteFromCart } from '../rtk/slices/cart-slice';

const Cart = () => {

  const cart = useSelector(state => state.Cart)
  const dispatch = useDispatch()

  const Total = cart.reduce((acc, product) => {
    acc +=  product.price * product.quantity
    return acc
  }, 0)

  return (
    <>
      <Container className='py-5' >
        <h1>Cart</h1>
        <Button className='my-3' variant='primary' onClick={()=> dispatch(clear())} >Clear Table</Button>
        <h4>Total Price : {Total.toFixed(2)} $ </h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product, key) => (
              <tr key={product.id} >
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td><Image style={{width:'80px'}} src={product.image} ></Image></td>
                <td>{product.price} $</td>
                <td>{product.quantity}</td>
                <td><Button variant='danger' onClick={()=> dispatch(deleteFromCart(product)) } >Delete</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default Cart