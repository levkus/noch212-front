import { createAction, handleActions } from 'redux-actions'
import axios from 'axios'

const initialState = {
  loading: false,
  items: [],
  filteredItems: []
}

export const setLoadingState = createAction('setLoadingState')
export const setPortfolioItems = createAction('setPortfolioItems')
export const getPortfolioItems = () => async (dispatch) => {
  try {
    dispatch(setLoadingState(true))
    const data = await axios.get('http://192.168.0.73/noch212/portfolio/api')
    await dispatch(setPortfolioItems(data.data))
    dispatch(setLoadingState(false))
  } catch (error) {
    console.warn(error)
  }
}
export const setFilteredItems = createAction('setFilteredItems')

const reducer = handleActions({
  [setPortfolioItems]: (state, { payload }) => ({
    ...state,
    items: payload
  }),
  [setLoadingState]: (state, { payload }) => ({
    ...state,
    loading: payload
  }),
  [setFilteredItems]: (state, { payload }) => ({
    ...state,
    filteredItems: payload
  })
}, initialState)

export default reducer
