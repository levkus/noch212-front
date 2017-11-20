import { createAction, handleActions } from 'redux-actions'
import axios from 'axios'

const initialState = {
  loading: false,
  items: [],
  filter: 'all'
}

export const setLoadingState = createAction('setLoadingState')
export const setPortfolioItems = createAction('setPortfolioItems')
export const getPortfolioItems = () => async (dispatch) => {
  try {
    dispatch(setLoadingState(true))
    const data = await axios.get('http://localhost/noch212/portfolio/api')
    await dispatch(setPortfolioItems(data.data))
    dispatch(setLoadingState(false))
  } catch (error) {
    console.warn(error)
  }
}
export const setFilter = createAction('setFilter')

const reducer = handleActions({
  [setPortfolioItems]: (state, { payload }) => ({
    ...state,
    items: payload
  }),
  [setLoadingState]: (state, { payload }) => ({
    ...state,
    loading: payload
  }),
  [setFilter]: (state, { payload }) => ({
    ...state,
    filter: payload
  })
}, initialState)

export default reducer
