import store, { getDistanceTo, getPosition } from './store/index.js'

import { actions as positionActions } from './store/position.js'

// #region buttons
const up = document.getElementById('up')
const right = document.getElementById('right')
const down = document.getElementById('down')
const left = document.getElementById('left')

const truck = document.getElementById('block')
const truckPosition = document.getElementById('position')

// #endregion

// #region actions
const { moveUp, moveDown, moveLeft, moveRight } = positionActions

up.onclick = () => store.dispatch(moveUp())
down.onclick = () => store.dispatch(moveDown())
left.onclick = () => store.dispatch(moveLeft())
right.onclick = () => store.dispatch(moveRight())
// #endregion

store.subscribe(() => {
  const state = store.getState()
  const { x, y } = getPosition(state)

  const step = 20

  truckPosition.textContent = `${x}:${y}`
  truck.style.transform = `translate(${x * step}px, ${-y * step}px)`

  truck.textContent = getDistanceTo(
    state,
    { x: 0, y: 0 }
  )
})
