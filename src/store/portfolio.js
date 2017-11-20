import { createAction, handleActions } from 'redux-actions'
import axios from 'axios'

const initialState = {
  loading: false,
  items: []
}

const instance = axios.create({
  baseURL: 'http://localhost/noch212/portfolio/api',
  timeout: '2000',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Origin': '*',
  }
})
export const setLoadingState = createAction('setLoadingState')
export const setPortfolioItems = createAction('setPortfolioItems')
export const getPortfolioItems = () => (dispatch) => {
  dispatch(setLoadingState(true))
  axios.get('http://localhost/noch212/portfolio/api').then(res => {
    dispatch(setPortfolioItems(res.data))
    dispatch(setLoadingState(false))
  })
}

const reducer = handleActions({
  [setPortfolioItems]: (state, { payload }) => ({
    ...state,
    items: payload
  }),
  [setLoadingState]: (state, { payload }) => ({
    ...state,
    loading: payload
  })
}, initialState)

export default reducer
