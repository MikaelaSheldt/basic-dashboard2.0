import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import studentsReducer from './students'
import { createLogger } from 'redux-logger'
import  thunkMiddleware  from 'redux-thunk'

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)

export default createStore(
  studentsReducer,
  middleware
  )
