
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
  data
})

const addToCart = product => ({
  type: ADD_TO_CART,
  product
})

const deleteItem = id => ({
  type: DELETE_ITEM,
  id
})

const changeQuant = (id, data) => ({
  type: CHANGE_QUANTITY,
  id,
  data
})

// const clearCart = () => ({
//   type: CLEAR_CART
// })

// thunk
export const getCartThunk = userId => {
  if (userId) {
    return async dispatch => {
      const {data} = await axios.get(`/api/users/${userId}/cart`)
      dispatch(getCartAction(data))
    }
  } else {
    return async dispatch => {
      const {data} = await axios.get('/api/cart')
      dispatch(getCartAction(data))
    }
  }
}

export const addToCartThunk = (product, userId) => {
  if (userId) {
    return async dispatch => {
      const {data} = await axios.put(`/api/users/${userId}/cart`, product)
      dispatch(getCartAction(data))
    }
  } else {
    return async dispatch => {
      const {data} = await axios.put('/api/cart', product)
      dispatch(addToCart(data))
    }
  }
}