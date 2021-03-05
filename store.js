const ADD = 'ADD'
const TAKE = 'TAKE'
const CLEAR = 'CLEAR'

export const actions = {
  add: (value) => ({ type: ADD, value }),
  take: (value) => ({ type: TAKE, value }),
  clear: () => ({ type: CLEAR })
}

const amountReducer = (amount, action) => {
  switch (action.type) {
    case ADD :
      return amount + action.value

    case TAKE :
      return amount - action.value

    case CLEAR :
      return 0

    default :
      return amount
  }
}

export default amountReducer
