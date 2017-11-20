import { createAction, handleActions } from 'redux-actions'
import axios from 'axios'

const initialState = {
  loading: false,
  items: []
}

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
