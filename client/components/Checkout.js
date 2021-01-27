import React, {Component} from 'react'
import {getCartThunk} from '../reducers/CartReducer'
import {connect} from 'react-redux'
import CartItem from './CartItem'
import Stripe from './Stripe'
import {createOrderThunk} from '../reducers/OrderReducer'
import {Link} from 'react-router-dom'

class Checkout extends Component {
  constructor() {
    super()
    this.placeOrder = this.placeOrder.bind(this)
  }

  componentDidMount() {
    this.props.getCartThunk(this.props.user)
  }

  placeOrder() {
    this.props.cr