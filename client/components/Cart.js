import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  getCartThunk,
  deleteItemThunk,
  changeQuantThunk
} from '../reducers/CartReducer'
import CartItem from './CartItem'

class Cart extends Component {
  constructor() {
    super()
    this.removeItem = this.removeItem.bind(this)
    thi