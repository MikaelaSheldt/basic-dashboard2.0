import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import dashboardReducer from './dashboard'
import { createLogger } from 'redux-logger'
import  thunkMiddleware  from 'redux-thunk'

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)

export default createStore(
  dashboardReducer,
  middleware
  )
