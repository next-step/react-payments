import { FormType } from '../../type'
import { CARD_HOLDER_NAME_MAX_LENGTH } from './const'

const checkExpirationDate = (month: string, year: string) => {
  const parsedMonth = parseInt(month)

  if (!parsedMonth || !year) {
    return false
  }

  if (parsedMonth < 1 || parsedMonth > 12) {
    return false
  }

  return true
}

const checkCardholderName = (name: string) => {
  if (name.length > CARD_HOLDER_NAME_MAX_LENGTH) return false

  return true
}

const checkCardNumber = (cardNumber: string) => {
  const FOUR_NUMBER_REG = /^\d{4}$/

  if (FOUR_NUMBER_REG.test(cardNumber)) {
    return true
  }

  return false
}

const checkSecurityCode = (code: string) => {
  const SECURITY_CODE_REG = /^\d{3}$/

  if (SECURITY_CODE_REG.test(code)) {
    return true
  }

  return false
}

const checkCardPassword = (password: string) => {
  const CARD_PASSWORD_REG = /^\d$/

  if (CARD_PASSWORD_REG.test(password)) {
    return true
  }
}

export const Step1Validate = (values: FormType) => {
  const errors: Record<keyof FormType, string> = {
    cardholderName: '',
    cardNumber1: '',
    cardNumber2: '',
    cardNumber3: '',
    cardNumber4: '',
    cardPassword1: '',
    cardPassword2: '',
    expirationDate: '',
    securityCode: '',
  }

  const [expirationMonth, expirationYear] = values.expirationDate.split('/')

  if (!checkExpirationDate(expirationMonth, expirationYear)) {
    errors.expirationDate = '월은 1이상 12이하 숫자를 입력해 주세요.'
  }

  if (!checkCardholderName(values.cardholderName)) {
    errors.cardholderName = '이름은 최대 30자리 까지 입력할 수 있습니다.'
  }

  if (!checkCardNumber(values.cardNumber1)) {
    errors.cardNumber1 = '카드번호은 4개의 숫자를 입력해 주세요.'
  }

  if (!checkCardNumber(values.cardNumber2)) {
    errors.cardNumber2 = '카드번호은 4개의 숫자를 입력해 주세요.'
  }

  if (!checkCardNumber(values.cardNumber3)) {
    errors.cardNumber3 = '카드번호은 4개의 숫자를 입력해 주세요.'
  }

  if (!checkCardNumber(values.cardNumber4)) {
    errors.cardNumber4 = '카드번호은 4개의 숫자를 입력해 주세요.'
  }

  if (!checkSecurityCode(values.securityCode)) {
    errors.securityCode = '보안코드은 3개의 숫자를 입력해 주세요.'
  }

  if (!checkCardPassword(values.cardPassword1)) {
    errors.cardPassword1 = '카드 비밀번호의 앞 2자리를 입력해 주세요.'
  }

  if (!checkCardPassword(values.cardPassword2)) {
    errors.cardPassword2 = '카드 비밀번호의 앞 2자리를 입력해 주세요.'
  }

  return errors
}
