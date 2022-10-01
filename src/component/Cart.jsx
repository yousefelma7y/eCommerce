import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addCart, decrementCart, delCart } from '../redux/action/index'


const Cart = () => {

  const state = useSelector((state) => state.handleCart)
  const dispatch = useDispatch()

  const handleClose = (item) => {
    dispatch(delCart(item))
  }

  const addProduct = (product) =>{
    dispatch(addCart(product)) ;
  }
  const decrementProduct = (product) =>{
    dispatch(decrementCart(product)) ;
  }
 


  const CartItems = (product) => {
   
    if (product.qty <= 1 ){
      product.qty = 1 
    }

    return (
      <div className='container' key={product.id}>
        <div className='row p-3 m-3 border bg-light' >

              <div className='col-md-12 float-end'>
                    <button onClick={() => handleClose(product)} className="btn-close float-end" >
                    </button>
              </div>
              <div className='col-md-4 pb-2'>
                <img src={product.images} alt={product.title} height="200px" width="180px" />
              </div>
              <div className='col-md-4 '>
                <h3>
                  {product.title}
                </h3>
                <p className='lead fw-bold'>
                  {product.qty} X ${product.price} = $
                  {product.qty * product.price}
                </p>
                <button className='btn btn-outline-dark me-4' onClick={()=>decrementProduct(product)} >
                  <i className='fa fa-minus'></i>
                </button>
                <button className='btn btn-outline-dark ' onClick={()=>addProduct(product)} >
                  <i className='fa fa-plus'></i>
                </button>
              </div>
           
           

          </div>
        </div>
    
    )
  }

  const emptyCart = () => {
    return (
      <div className='px-4 my-5 bg-light rounded-3 py-5'>
        <div className='container py-4'>
          <div className="row">
            <h3>
              Your Cart Is Empty
            </h3>
          </div>
        </div>
      </div>
    )
  }

  const button = () => {
    return (
      <div className='container'>
        <div className="row justify-content-center ">
          <NavLink to='/checkout' className="btn btn-outline-primary mb-5 col-8 col-md-4  ">
            Proceed To Checkout
          </NavLink>
        </div>
      </div>
    )
  }

  return (

    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(CartItems)}
      {state.length !== 0 && button()}

    </>

  )
}

export default Cart






