
import axios from 'axios'

// initial state
const initialState = {
  cart: []
}

// action types
const GET_CART = 'GET_CART'
const ADD_TO_CART = 'ADD_TO_CART'
const DELETE_ITEM = 'DELETE_ITEM'
const CHANGE_QUANTITY = 'CHANGE_QUANTITY'
// const CLEAR_CART = 'CLEAR_CART'

// action creators
const getCartAction = data => ({
  type: GET_CART,