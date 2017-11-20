import { createAction, handleActions } from 'redux-actions'
import axios from 'axios'

const initialState = {
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

export const setPortfolioItems = createAction('setPortfolioItems')
export const getPortfolioItems = () => (dispatch) => {
  axios.get('http://localhost/noch212/portfolio/api').then(resp => {
    console.log(resp)
    dispatch(setPortfolioItems(resp.data))
  })
}

const reducer = handleActions({
  [setPortfolioItems]: (state, payload) => ({
    ...state,
    items: payload
  })
}, initialState)

export default reducer
