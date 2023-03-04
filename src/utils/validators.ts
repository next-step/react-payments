import { CARD_COMPNAYS_CODE, CARD_INFO } from 'constants/card'

const validateCardNumber = (value: string) => {
  return value.replace(/\D/g, '').length === 16
}

const validatoeExpireDate = (value: string) => {
  if (Number(value.slice(0, 2)) > 12) {
    return false
  }

  return /\d/.test(value)
}

const validateCardOwner = (value: string) => {
  if (value.length > 30) {
    return false
  }

  return /\w/.test(value)
}

const validatePinCode = (value: string) => {
  if (value.length !== 3) {
    return false
  }
  return /\d/.test(value)
}

const validatePassword = (value: string) => {
  if (value.length !== 2) {
    return false
  }
  return /\d/.test(value)
}

const validateCardCompanyCode = (value: string) => {
  return value !== CARD_COMPNAYS_CODE.NULL
}

export const validatorFn = (
  value: string,
  name: (typeof CARD_INFO)[keyof typeof CARD_INFO],
) => {
  if (!Object.values(CARD_INFO).includes(name)) {
    throw new SyntaxError('invalid key value')
  }
  switch (name) {
    case CARD_INFO.CARD_NUMBER:
      return validateCardNumber(value)
    case CARD_INFO.EXPIRE_DATE:
      return validatoeExpireDate(value)
    case CARD_INFO.CARD_OWNER:
      return validateCardOwner(value)
    case CARD_INFO.PIN_CODE:
      return validatePinCode(value)
    case CARD_INFO.PASSWORD:
      return validatePassword(value)
    case CARD_INFO.CARD_COMPANY_CODE:
      return validateCardCompanyCode(value)
    case CARD_INFO.CARD_NICKNAME:
      return validateCardOwner(value)
  }
}
