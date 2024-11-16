import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../rtk/slices/product-slice';
import { addToCart } from '../rtk/slices/cart-slice';

  
const Products = () => {
  const store = useSelector(state => state.Products.products)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])

  return (
    <>
      <Container className='py-5' >
      <h1>Proudcts</h1>
        <Row>
          {store.map((product, key) => (
            <Col key={product.id} > 
                <Card style={{ width: '18rem' }}>
                  <Card.Img style={{height:'300px',margin:'0 auto'}} variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.title.substring(0,30)}...</Card.Title>
                    <Card.Text>
                      {product.description.substring(0,80)}...
                    </Card.Text>
                    <Card.Text>
                      {product.price} $
                    </Card.Text>
                    <Button variant="primary" onClick={()=> dispatch(addToCart(product))} >Add to cart</Button>
                  </Card.Body>
                </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Products