export function createStore (
  reducer,
  initialState = reducer(undefined, {})
) {
  let state = initialState
  const callbacks = []

  return {
    getState () {
      return state
    },
    dispatch (action) {
      state = reducer(state, action)
      callbacks.forEach(f => f())
    },
    subscribe (f) {
      callbacks.push(f)
    }
  }
}
