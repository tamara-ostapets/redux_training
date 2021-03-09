import { createStore, combineReducers } from '../redux.js'

import amountReducer from './amount.js'
import goodsReducer from './goods.js'
import positionReducer, { getX, getY } from './position.js'

export function getAmount (state) {
  return state.amount
}

export function hasEnoughMoney (state, payment) {
  return getAmount(state) >= payment
}

export function getPosition (state) {
  return {
    x: getX(state.position),
    y: getY(state.position)
  }
}

export function getDistanceTo (state, point) {
  const { x, y } = getPosition(state)

  return Math.abs(x - point.x) + Math.abs(y - point.y)
}

const reducer = combineReducers({
  amount: amountReducer,
  goods: goodsReducer,
  position: positionReducer
})

const store = createStore(reducer)

export default store
