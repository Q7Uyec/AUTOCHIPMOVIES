
import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../reducers/UserReducer'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div id="container">
      <h1>Welcome</h1>
      <div>
        <form onSubmit={handleSubmit} name={name} className="formStyle">
          {name === 'signup' && (
            <div>
              <div>
                <h1>
                  Sign up here! <br />
                </h1>
                <label htmlFor="firstName" className="label">
                  <small>First Name</small>
                </label>
                <input name="firstName" type="text" className="input" />
              </div>
              <div>
                <label htmlFor="lastName" className="label">
                  <small>Last Name</small>
                </label>
                <input name="lastName" type="text" className="input" />
              </div>
              {/* <div>
              <label htmlFor="address" className="label">
                <small>Address</small>
              </label>
              <input name="address" type="text" className="input" />
            </div>
            <div>
              <label htmlFor="city" className="label">
                <small>City</small>
              </label>
              <input name="city" type="text" className="input" />