import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import axios from 'axios'
import rootReducer from './reducers'

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware.withExtraArgumen