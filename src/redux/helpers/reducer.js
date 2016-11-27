export default (
  initialState,
  actionHandlers
) => (state = initialState, action) => {
  const handler = actionHandlers[action.type]

  return handler ? handler(state, action) : state
}
