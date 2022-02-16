import { combineReducers } from 'redux'

import { configureStore } from '@reduxjs/toolkit'

import { createLogger } from 'redux-logger'

import common from "./common"
import error from "./error"

import thunk from 'redux-thunk'

import { throwMiddleware } from './middlewares'

const rootReducer = combineReducers({
  common,
  error,
})


const middleware = [thunk]


if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

middleware.push(throwMiddleware)


export const store = configureStore({
  reducer: rootReducer,
  middleware
});


export default rootReducer
