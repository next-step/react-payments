import { CardTypeKeys } from './../models/card.model'
import { CARD_COMPNAYS_CODE } from 'constants/card'

const cardNumberValidator = (value: string) => {
  return value.replace(/\D/g, '').length === 16
}

const expireDateValidator = (value: string) => {
  if (Number(value.slice(0, 2)) > 12) {
    return false
  }

  return /\d/.test(value)
}

const cardOwnerValidator = (value: string) => {
  if (value.length > 30) {
    return false
  }

  return /\w/.test(value)
}

const pinCodeValidator = (value: string) => {
  if (value.length !== 3) {
    return false
  }
  return /\d/.test(value)
}

const passwordValidator = (value: string) => {
  if (value.length !== 2) {
    return false
  }
  return /\d/.test(value)
}

const cardCompanyCodeValidator = (value: string) => {
  return value !== CARD_COMPNAYS_CODE.NULL
}

export const validatorFn = (value: string, name: CardTypeKeys) => {
  switch (name) {
    case 'cardNumber':
      return cardNumberValidator(value)
    case 'expireDate':
      return expireDateValidator(value)
    case 'cardOwner':
      return cardOwnerValidator(value)
    case 'pinCode':
      return pinCodeValidator(value)
    case 'password':
      return passwordValidator(value)
    case 'cardCompanyCode':
      return cardCompanyCodeValidator(value)
    default:
      return false
  }
}
