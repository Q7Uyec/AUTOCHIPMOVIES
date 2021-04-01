
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
            </div>
            <div>
              <label htmlFor="state" className="label">
                <small>State</small>
              </label>
              <input name="state" type="text" className="input" />
            </div>
            <div>
              <label htmlFor="country" className="label">
                <small>Country</small>
              </label>
              <input name="country" type="text" className="input" />
            </div> */}
              {/* <div>
              <label htmlFor="zipCode" className="label">
                <small>Zip Code</small>
              </label>
              <input name="zipCode" type="text" className="input" />
            </div> */}
            </div>
          )}
          <div>
            {name === 'login' && (
              <h1>
                Log in here! <br />
              </h1>
            )}
            <label htmlFor="email" className="label">
              <small>Email</small>
            </label>
            <input name="email" type="text" className="input" />
          </div>
          <div>
            <label htmlFor="password" className="label">
              <small>Password</small>
            </label>
            <input name="password" type="password" className="input" />
          </div>
          <div>
            <button className="sendBtn" type="submit">
              {displayName}
            </button>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
          <a href="/auth/google">{displayName} with Google</a>
        </form>
      </div>
    </div>
  )