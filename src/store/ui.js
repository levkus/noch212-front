import { createAction, handleActions } from 'redux-actions'

const initialState = {
  navOpen: false
}

export const toggleNav = createAction('toggleNav')
export const toggleFilters = createAction('toggleFilters')

const reducer = handleActions({
  [toggleNav]: (state, { payload }) => {
    return {
      ...state,
      navOpen: payload
    }
  },
  [toggleFilters]: (state, { payload }) => {
    return {
      ...state,
      filtersOpen: payload
    }
  },
}, initialState)

export default reducer
