import { CardInfomation, CardListAction } from '@/domain'

const cardListReducer = (state: CardInfomation[], action: CardListAction): CardInfomation[] => {
  switch (action.type) {
    case 'ADD':
      return [action.payload, ...state]
    case 'UPDATE':
      const updatedCardList = state.map((card) => {
        if (card.id === action.payload.id) {
          return action.payload
        } else {
          return card
        }
      })
      return updatedCardList
    case 'DELETE':
      const deletedCardList = state.filter((card) => card.id !== action.payload.id)
      return deletedCardList
  }
}

export default cardListReducer
