import first from 'lodash/first'
import last from 'lodash/last'
import createReducer from 'redux/helpers/reducer'

const ADD_DATA = 'ADD_DATA'
const MODIFY_DATA = 'MODIFY_DATA'
const REMOVE_DATA = 'REMOVE_DATA'

export const addData = (data) => (dispatch, getState) => {
  const { set } = getState()

  const exists = set.data.find(item => first(item) === first(data))

  if (exists) {
    const same = last(exists) === last(data)

    if (same) {
      dispatch({ type: REMOVE_DATA, data })
    } else {
      dispatch({ type: MODIFY_DATA, oldData: exists, data })
    }
  } else {
    dispatch({ type: ADD_DATA, data })
  }
}

const INITIAL_STATE = {
  data: [
    [10, 10],
    [20, 20],
    [30, 30]
  ]
}

const ACTION_HANDLERS = {
  [ADD_DATA]: (state, action) => ({
    data: [...state.data, action.data]
  }),
  [MODIFY_DATA]: (state, action) => {
    const data = [...state.data]

    data.splice(state.data.indexOf(action.oldData), 1, action.data)

    return { data }
  },
  [REMOVE_DATA]: (state, action) => {
    const data = [...state.data]

    data.splice(state.data.indexOf(action.data))

    return { data }
  }
}

export const reducer = createReducer(INITIAL_STATE, ACTION_HANDLERS)
