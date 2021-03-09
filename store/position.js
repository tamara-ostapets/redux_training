const MOVE_LEFT = 'MOVE_LEFT'
const MOVE_RIGHT = 'MOVE_RIGHT'
const MOVE_UP = 'MOVE_UP'
const MOVE_DOWN = 'MOVE_DOWN'

export const actions = {
  moveLeft: () => ({ type: MOVE_LEFT }),
  moveRight: () => ({ type: MOVE_RIGHT }),
  moveUp: () => ({ type: MOVE_UP }),
  moveDown: () => ({ type: MOVE_DOWN })
}

export const getX = position => position.left
export const getY = position => position.top

const startPosition = { left: 0, top: 0 }

const positionReducer = (position = startPosition, action) => {
  switch (action.type) {
    case MOVE_LEFT :
      return {
        ...position,
        left: position.left - 1
      }

    case MOVE_RIGHT :
      return {
        ...position,
        left: position.left + 1
      }

    case MOVE_UP :
      return {
        ...position,
        top: position.top + 1
      }

    case MOVE_DOWN :
      return {
        ...position,
        top: position.top - 1
      }

    default :
      return position
  }
}

export default positionReducer
