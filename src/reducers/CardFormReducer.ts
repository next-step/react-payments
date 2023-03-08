import { PAYMENT_CARD_FORM_KEYS } from 'constants/card'
import { AddPaymentCard } from 'constants/card'
import { FormChangeParams } from 'context/FormContext'

export const CARD_FORM_ACTION_TYPES = {
  UPDATE: 'update',
} as const

type Action = {
  type: typeof CARD_FORM_ACTION_TYPES.UPDATE
  payload: FormChangeParams
}

export const CardFormReducer = (state: AddPaymentCard, action: Action) => {
  switch (action.type) {
    case CARD_FORM_ACTION_TYPES.UPDATE: {
      const { value, name, key } = action.payload
      if (name === undefined) {
        return {
          ...state,
          [key]: value,
        }
      }

      if (
        key === PAYMENT_CARD_FORM_KEYS.CARD_EXPIRE_DATE ||
        key === PAYMENT_CARD_FORM_KEYS.CARD_NUMBERS ||
        key === PAYMENT_CARD_FORM_KEYS.CARD_PASSWORD
      ) {
        return {
          ...state,
          [key]: {
            ...state[key],
            [name]: value,
          },
        }
      }

      return {
        ...state,
        [key]: value,
      }
    }
    default: {
      throw Error('invalid action type')
    }
  }
}

// export function CardFormReducer(
//   state: AddPaymentCard,
//   action: Action,
// ): AddPaymentCard {
//   switch (action.type) {
//     case CARD_FORM_ACTION_TYPES.UPDATE: {
//       const { value, name, key } = action.payload
// if (!name) {
//   return {
//     ...state,
//     [key]: value,
//   }
// }
// return {
//   ...state,
//   [key]: {
//     ...(state[key] as object),
//     [name]: value,
//   },
// }
//     }

//     default: {
//       throw Error('')
//     }
//   }
// }
