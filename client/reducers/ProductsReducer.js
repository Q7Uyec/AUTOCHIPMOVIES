import axios from 'axios'

//Initial State
const initialState = {
  allProducts: [],
  selectedProduct: {}
}
//action types
const SELECTED_PRODUCT = 'SELECTED_PRODUCT'
const GETTING_ALL