import React from 'react'
import { Link } from 'react-router-dom'

const CartItem = props => {
  const product = props.cartItem.product
  const quantity = props.cartItem.quantity
  const cartItem = props.cartItem

  if (!product) {
    props.getCartThunk(props.user)
    return <div>Loading...</div>
  }

  return (
    <div id="cartItemDiv">
      <div>
        <Link to={`products/${product.id}`}>
          <img src={product.imgUrl} wi