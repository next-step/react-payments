export const formInitialValues = {
  cardNumber1: '',
  cardNumber2: '',
  cardNumber3: '',
  cardNumber4: '',
  expirationDate: '',
  cardholderName: '',
  securityCode: '',
  cardPassword1: '',
  cardPassword2: '',
}

export const cardAdditionalInfo = {
  nickName: '',
}

export const cardEditingInfo = { ...formInitialValues, ...cardAdditionalInfo, id: '', time: 0 }

export const PAYMENTS_MACHINE_INITIAL_VALUES = {
  registration: formInitialValues,
  cardAdditionalInfo,
  cardEditingInfo,
}

export const CARD_HOLDER_NAME_MAX_LENGTH = 30

export const CARD_NUMBER_INPUT_REGEX = /^\d{4}$/

export const CARD_PASSWORD_REGEX = /^\d$/

export const SECURITY_CODE_REG = /^\d{3}$/

export const EXPIRATION_DATE_INPUT_REG = /^\d{2}\s\/\s\d{2}$/

export const CARD_NICKNAME_NAX_LENGTH = 10

export const LOCAL_STORAGE_KEY_LIST = {
  CARD_INFO: 'CARD_INFO',
  CARD_NICKNAME: 'CARD_NICKNAME',
}
