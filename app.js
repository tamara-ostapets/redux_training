import { createStore, combineReducers } from './redux.js'

import goodsReducer, { actions as goodsActions } from './store/goods.js'
import amountReducer, { actions as amountActions } from './store/amount.js'
import positionReducer, { actions as positionActions } from './store/position.js'

const initialState = {
  amount: 100,
  goods: [],
  position: { x: 0, y: 0, z: 0 }
}

const reducer = combineReducers({
  amount: amountReducer,
  goods: goodsReducer,
  position: positionReducer
})

const store = createStore(reducer, initialState)

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(positionActions.moveRight())
store.dispatch(amountActions.add(50))
store.dispatch(amountActions.take(20))
store.dispatch(goodsActions.add('Apple'))
