import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { combineReducers } from 'redux'

import portfolioReducer from './portfolio'

const reducers = combineReducers({
  portfolio: portfolioReducer
})

export default createStore(reducers, applyMiddleware(thunk))
