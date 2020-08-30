
import React from 'react'
import {connect} from 'react-redux'
import {getAllProducts} from '../reducers/ProductsReducer'
import Product from './Product'
import {addToCartThunk} from '../reducers/CartReducer'

export class AllProducts extends React.Component {
  constructor(props) {
    super(props)
    this.addToCart = this.addToCart.bind(this)
  }

  componentDidMount() {
    this.props.getAllProducts()
  }
