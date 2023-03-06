import { AddPaymentCard, PaymentCard } from 'models/card.model'

const CARD_REDUCER_ACTION_TYPE = {
  ADD: 'add',
  DELETE: 'delete',
  UPDATE: 'update',
} as const

type Action =
  | { type: typeof CARD_REDUCER_ACTION_TYPE.ADD; payload: AddPaymentCard }
  | { type: typeof CARD_REDUCER_ACTION_TYPE.DELETE; payload: { id: string } }
  | { type: typeof CARD_REDUCER_ACTION_TYPE.UPDATE; payload: PaymentCard }
  | { type: string; payload: never }

export function CardReducer(
  cards: PaymentCard[],
  action: Action,
): PaymentCard[] {
  switch (action.type) {
    case CARD_REDUCER_ACTION_TYPE.ADD: {
      const { payload } = action
      return [{ ...payload, id: (cards.length + 1).toString() }, ...cards]
    }
    case CARD_REDUCER_ACTION_TYPE.UPDATE: {
      const { payload } = action
      return cards.map((card) => {
        if (card.id === payload.id) {
          return payload
        }
        return card
      })
    }
    case CARD_REDUCER_ACTION_TYPE.DELETE: {
      const { payload } = action
      return cards.filter((card) => card.id !== payload.id)
    }
    default: {
      throw Error(`invalid action type: ${action.type}`)
    }
  }
}
