import {
  INITAL_CARD_STATE,
  PaymentCard,
  PAYMENT_CARD_FORM_KEYS,
} from 'constants/card'
import { AddPaymentCard, AddPaymentCardKeys } from 'constants/card'
import { FormChangeParams } from 'context/FormContext'

export const CARD_FORM_ACTION_TYPES = {
  UPDATE: 'update',
} as const

type Action = {
  type: typeof CARD_FORM_ACTION_TYPES.UPDATE
  payload: FormChangeParams
}

export function CardFormReducer(
  state: AddPaymentCard,
  action: Action,
): AddPaymentCard {
  switch (action.type) {
    case CARD_FORM_ACTION_TYPES.UPDATE: {
      const { value, name, key } = action.payload
      if (!name) {
        return {
          ...state,
          [key]: value,
        }
      }
      return {
        ...state,
        [key]: {
          ...(state[key] as object),
          [name]: value,
        },
      }
    }

    default: {
      throw Error('')
    }
  }
}
