import { createAction, handleActions } from 'redux-actions'

const initialState = {
  navOpen: false
}

export const toggleNav = createAction('toggleNav', )

const reducer = handleActions({
  [toggleNav]: (state, { payload }) => {
    return {
      ...state,
      navOpen: payload
    }
  },
}, initialState)

export default reducer
