import { CardInfomation, CardListAction } from '@/domain'

const cardListReducer = (state: CardInfomation[], action: CardListAction): CardInfomation[] => {
  return [action.payload, ...state]
}

export default cardListReducer
