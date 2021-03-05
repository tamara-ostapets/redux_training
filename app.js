import amountReducer, { actions } from './store';
import { createStore } from './redux'

const store = createStore(amountReducer, 100)

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(actions.add(20))
store.dispatch(actions.take(40))
store.dispatch(actions.add(50))
store.dispatch(actions.clear())
