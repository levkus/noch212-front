import { createAction, handleActions } from 'redux-actions'
import axios from 'axios'

const initialState = {
  loading: false,
  items: [],
  filteredItems: [],
  openedItem: {}
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
export const setFilteredItems = createAction('setFilteredItems')
export const openItem = createAction('openItem')

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
  }),
  [openItem]: (state, { payload }) => ({
    ...state,
    openedItem: payload
  })
}, initialState)

export default reducer
