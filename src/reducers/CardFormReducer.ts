import { PAYMENT_CARD_INFO } from 'constants/card'
import { INITAL_CARD_STATE } from 'constants/cardValidateState'
import { AddPaymentCard, AddPaymentCardKeys } from 'models/card.model'

type CardFormAction = {
  type: 'updateForm'
  payload: {
    error: null | string
    newValue: string
    key: AddPaymentCardKeys
    innerKey?: any
  }
}

export function CardFormReducer(
  state: typeof INITAL_CARD_STATE,
  { type, payload }: CardFormAction,
): typeof INITAL_CARD_STATE {
  switch (type) {
    case 'updateForm': {
      const { error, newValue, key, innerKey } = payload
      if (
        key === 'cardExpireDate' ||
        key === 'cardNumbers' ||
        key === 'cardPassword'
      ) {
        return {
          ...state,
          [key]: {
            ...state[key],
            [innerKey]: {
              error,
              value: newValue,
            },
          },
        }
      }
      return {
        ...state,
        [key]: {
          error,
          value: newValue,
        },
      }
    }
  }
}
