import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  getCartThunk,
  deleteItemThunk,
  changeQuantThunk
} from '../reducers/CartReducer'
import CartItem fro