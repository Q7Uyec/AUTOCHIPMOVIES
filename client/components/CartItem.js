import React from 'react'
import { Link } from 'react-router-dom'

const CartItem = props => {
  const product = props.cartItem.product
  const quantity = pro