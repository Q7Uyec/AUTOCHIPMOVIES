import React, {Component} from 'react'
import {getCartThunk} from '../reducers/CartReducer'
import {connect} from 'react-redux'
import CartItem from './CartItem'
import Stripe from './Strip