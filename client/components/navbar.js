import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../reducers/UserReducer'

const Navbar = ({ handleClick, isLoggedIn, userId }) => {
  return (
    <div id="nav">
      <nav>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <Link to="/products">Products</Link>
            <Link to={`/${userId}/cart`}>
              <img src="https://image.flaticon.com/icons/svg/2/2772.svg" />
            </Link> |
            <Link to={`/${userId}/checkout`}>Checkout</Link>
            <a href="#" onClick={handleClick}>
              Logout
            </a>
          </div>
        ) : (
            <div>
              {/* The navbar will show these links before you log in */}
              <Link to="/pro