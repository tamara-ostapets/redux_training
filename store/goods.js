const ADD = 'goods/ADD'
const TAKE = 'goods/TAKE'
const CLEAR = 'goods/CLEAR'

export const actions = {
  add: (good) => ({ type: ADD, good }),
  take: (good) => ({ type: TAKE, good }),
  clear: () => ({ type: CLEAR })
}

const goodsReducer = (goods = [], action) => {
  switch (action.type) {
    case ADD :
      return [...goods, action.good]

    case TAKE :
      return goods.filter(good => good !== action.good)

    case CLEAR :
      return []

    default :
      return goods
  }
}

export default goodsReducer
