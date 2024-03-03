import { CARD_HOLDER_NAME_MAX_LENGTH } from './const'

export const checkExpirationDate = (month: string, year: string) => {
  const parsedMonth = parseInt(month)

  if (parsedMonth < 1 || parsedMonth > 12) {
    return false
  }

  return true
}

export const checkCardholderName = (name: string) => {
  if (name.length > CARD_HOLDER_NAME_MAX_LENGTH) return false

  return true
}

export const checkCardNumber = (cardNumber: string) => {
  const FOUR_NUMBER_REG = /^\d{4}$/

  if (FOUR_NUMBER_REG.test(cardNumber)) {
    return true
  }

  return false
}

export const checkSecurityCode = (code: string) => {
  const SECURITY_CODE_REG = /^\d{3}$/

  if (SECURITY_CODE_REG.test(code)) {
    return true
  }

  return false
}
