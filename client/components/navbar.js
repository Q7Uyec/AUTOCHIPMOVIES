import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../reducers/UserReducer'

const Navbar = ({ handleClick, isLoggedIn, userId }) => {
  return (
    <div id="nav">
