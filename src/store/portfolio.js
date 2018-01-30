import { createAction, handleActions } from 'redux-actions'
import axios from 'axios'

const initialState = {
  loading: false,
  items: [],
  filteredItems: [],
  selected: {}
}

const baseURL = 'http://admin.noch212.me'

export const setLoadingState = createAction('setLoadingState')
export const setPortfolioItems = createAction('setPortfolioItems')
export const getPortfolioItems = () => async (dispatch) => {
  try {
    dispatch(setLoadingState(true))
    console.log(111);
    const data = await axios.get(`${baseURL}/portfolio/api`)
    await dispatch(setPortfolioItems(data.data))
    dispatch(setLoadingState(false))
  } catch (error) {
    console.warn(error)
  }
}
export const setFilteredItems = createAction('setFilteredItems')
export const selectItem = createAction('selectItem')

const reducer = handleActions({
  [setPortfolioItems]: (state, { payload }) => ({
    ...state,
    items: [...payload],
  }),
  [setLoadingState]: (state, { payload }) => ({
    ...state,
    loading: payload
  }),
  [setFilteredItems]: (state, { payload }) => ({
    ...state,
    filteredItems: payload
  }),
  [selectItem]: (state, { payload }) => ({
    ...state,
    selected: payload
  })
}, initialState)

export default reducer
