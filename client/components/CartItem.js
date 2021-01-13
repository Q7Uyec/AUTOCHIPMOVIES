import React from 'react'
import { Link } from 'react-router-dom'

const CartItem = props => {
  const product = props.cartItem.product
  const quantity = props.cartItem.quantity
  const cartItem = props.cartItem

  if (!product) {
    props.getCartThunk(props.user)
 