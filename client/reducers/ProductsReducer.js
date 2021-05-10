import axios from 'axios'

//Initial State
const initialState = {
  allProducts: [],
  selectedProduct: {}
}
//action types
const SELECTED_PRODUCT = 'SELECTED_PRODUCT'
const GETTING_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
const GOT_ALL_PRODUCTS = 'GOT_ALL_PRODUCTS'

//action creators
const gotSingleProduct = product => ({
  type: SELECTED_PRODUCT,
  product
})

const gettingAllProducts = () => ({
  type: GETTING_ALL_PRODUCTS
})

const 