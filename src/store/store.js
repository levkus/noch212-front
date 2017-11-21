import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { combineReducers } from 'redux'

import portfolioReducer from './portfolio'
import uiReducer from './ui'

const reducers = combineReducers({
  portfolio: portfolioReducer,
  ui: uiReducer
})

export default createStore(reducers, applyMiddleware(thunk))
