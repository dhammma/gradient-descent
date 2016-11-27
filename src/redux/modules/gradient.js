import createReducer from 'redux/helpers/reducer'

const UPDATE_HYPOTHESIS = 'UPDATE_HYPOTHESIS'

export const findSolution = () => (dispatch, getState) => {
  const { set } = getState()
  const { data } = set
  const m = data.length
  const eps = 0.001

  let diff = Number.POSITIVE_INFINITY

  do {
    const { teta0, teta1, alpha } = getState().gradient

    const h = x => teta0 + teta1 * x

    const cost = (t0, t1) => 1 / (2 * m) * data.reduce(
      (sum, [x, y]) => sum + Math.pow(t0 + t1 * x - y, 2), 0
    )

    const nextTeta0 = teta0 - alpha / m * data.reduce(
      (sum, [x, y]) => sum + h(x) - y, 0
    )

    const nextTeta1 = teta1 - alpha / m * data.reduce(
      (sum, [x, y]) => sum + (h(x) - y) * x, 0
    )

    dispatch({
      type: UPDATE_HYPOTHESIS,
      teta0: nextTeta0,
      teta1: nextTeta1
    })

    diff = cost(teta0, teta1) - cost(nextTeta0, nextTeta1)
  } while (diff >= eps)
}

const INITIAL_STATE = {
  teta0: 0,
  teta1: 0,
  alpha: 0.0005
}

const ACTION_HANDLERS = {
  [UPDATE_HYPOTHESIS]: (state, action) => ({
    ...state,
    teta0: action.teta0,
    teta1: action.teta1
  })
}

export const reducer = createReducer(INITIAL_STATE, ACTION_HANDLERS)
