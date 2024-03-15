import {
  CARD_HOLDER_NAME_MAX_LENGTH,
  CARD_NICKNAME_NAX_LENGTH,
  CARD_NUMBER_INPUT_REGEX,
  CARD_PASSWORD_REGEX,
  EXPIRATION_DATE_INPUT_REG,
  SECURITY_CODE_REG,
} from '@/service/payments/payments.const'
import {
  CardAdditionalInitialValues,
  RegistrationInitialValues,
} from '@/service/payments/payments.type'

const checkExpirationDate = (expirationDate: string) => {
  if (!EXPIRATION_DATE_INPUT_REG.test(expirationDate)) {
    return false
  }

  const [expirationMonth, expirationYear] = expirationDate.split('/')

  const parsedMonth = parseInt(expirationMonth)

  if (parsedMonth < 1 || parsedMonth > 12) {
    return false
  }

  return true
}

const checkCardholderName = (name: string) => {
  return name.length <= CARD_HOLDER_NAME_MAX_LENGTH
}

const checkCardNumber = (cardNumber: string) => {
  return CARD_NUMBER_INPUT_REGEX.test(cardNumber)
}

const checkSecurityCode = (code: string) => {
  return SECURITY_CODE_REG.test(code)
}

const checkCardPassword = (password: string) => {
  return CARD_PASSWORD_REGEX.test(password)
}

export const Step1Validate = (values: RegistrationInitialValues) => {
  const errors: Record<keyof RegistrationInitialValues, string> = {
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

  if (!checkExpirationDate(values.expirationDate)) {
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

export const step2Validate = (values: CardAdditionalInitialValues) => {
  const errors: Record<keyof CardAdditionalInitialValues, string> = {
    nickName: '',
  }

  if (values.nickName.length > CARD_NICKNAME_NAX_LENGTH) {
    errors.nickName = '카드 별칭 최대 길이는 10자리입니다.'
  }

  return errors
}
