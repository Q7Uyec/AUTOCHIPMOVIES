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
    this.changeQuant = this.changeQuant.bind(this)
  }

  componentDidMount() {
    this.props.getCartThunk(this.props.user)
  }

  removeItem = product => {
    this.props.deleteItemThunk(product, this.props.user)
  }

  changeQuant = (itemId, change) => {
    this.props.changeQuantThunk(itemId, change, this.props.user)
  }

  render() {
    con