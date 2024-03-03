export const checkExpirationDate = (month: string, year: string) => {
  const parsedMonth = parseInt(month)

  if (parsedMonth < 1 || parsedMonth > 12) {
    return false
  }

  return true
}

export const checkCardholderName = (name: string) => {
  const MAX_LENGTH = 30

  if (name.length > MAX_LENGTH) return false

  return true
}

export const checkCardNumber = (cardNumber: string) => {
  const FOUR_NUMBER_REG = /^\d{4}$/

  if (FOUR_NUMBER_REG.test(cardNumber)) {
    return true
  }

  return false
}
