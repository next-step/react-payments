import {
  CardType,
  AddPaymentCard,
  PaymentCardValidate,
  PaymentCard,
} from 'models/card.model'

export const CARD_COMPNAYS_CODE = {
  NULL: 'C000',
  LOTTE: 'C001',
  BC: 'C002',
  SAMSUNG: 'C003',
  SINHAN: 'C004',
  HANA: 'C005',
  HUNDAE: 'C006',
  KB: 'C007',
  NH: 'C008',
} as const

export const CARD_COMPANYS = {
  C000: {
    name: '',
    color: '#e5e5e5',
  },
  C001: {
    name: '롯데카드',
    color: '#F8D800',
  },
  C002: {
    name: '비씨카드',
    color: '#0396FF',
  },
  C003: {
    name: '삼성카드',
    color: '#EA5455',
  },
  C004: {
    name: '신한카드',
    color: '#7367F0',
  },
  C005: {
    name: '하나카드',
    color: '#32CCBC',
  },
  C006: {
    name: '현대카드',
    color: '#F6416C',
  },
  C007: {
    name: 'KB국민카드',
    color: '#28C76F',
  },
  C008: {
    name: 'NH농협카드',
    color: '#F55555',
  },
} as const

export const EMPTY_CARD_VIEW_ID = 'EmptyCardView' as const
export const INIT_CARD_VALUE: CardType = {
  cardNumber: '',
  expireDate: '',
  cardOwner: '',
  pinCode: '',
  password: '',
  cardNickname: '',
  cardCompanyCode: CARD_COMPNAYS_CODE.NULL,
}

export const ADD_CARD_VIEW_VALUE: CardType = {
  id: EMPTY_CARD_VIEW_ID,
  cardNumber: '',
  expireDate: '',
  cardOwner: '',
  pinCode: '',
  password: '',
  cardNickname: '',
  cardCompanyCode: CARD_COMPNAYS_CODE.NULL,
}

export const CARD_INFO = {
  CARD_NUMBER: 'cardNumber',
  EXPIRE_DATE: 'expireDate',
  CARD_OWNER: 'cardOwner',
  PIN_CODE: 'pinCode',
  PASSWORD: 'password',
  CARD_COMPANY_CODE: 'cardCompanyCode',
  CARD_NICKNAME: 'cardNickname',
} as const

/////// 새로 레핑

export const PAYMENT_CARD_INFO = {
  ID: 'id',
  CARD_NUMBERS: 'cardNumbers',
  CARD_EXPIRE_DATE: 'cardExpireDate',
  CARD_OWNER: 'cardOwner',
  CARD_PINCODE: 'cardPinCode',
  CARD_PASSWORD: 'cardPassword',
  CARD_COMPANY_CODE: 'cardCompanyCode',
  CARD_NICKNAME: 'cardNickname',
} as const

export const INIT_PAYMENT_CARD_INFO: AddPaymentCard = {
  [PAYMENT_CARD_INFO.CARD_NUMBERS]: {
    firstNumber: '',
    secondNumber: '',
    thridNumber: '',
    fourthNumber: '',
  },
  [PAYMENT_CARD_INFO.CARD_EXPIRE_DATE]: {
    month: '',
    year: '',
  },
  [PAYMENT_CARD_INFO.CARD_OWNER]: '',
  [PAYMENT_CARD_INFO.CARD_PINCODE]: '',
  [PAYMENT_CARD_INFO.CARD_PASSWORD]: {
    firstPssword: '',
    secondPassword: '',
  },
  [PAYMENT_CARD_INFO.CARD_COMPANY_CODE]: CARD_COMPNAYS_CODE.NULL,
  [PAYMENT_CARD_INFO.CARD_NICKNAME]: '',
}

export const INIT_PAYMENT_CARD_VALIDATE: PaymentCardValidate = {
  [PAYMENT_CARD_INFO.CARD_NUMBERS]: {
    firstNumber: false,
    secondNumber: false,
    thridNumber: false,
    fourthNumber: false,
  },
  [PAYMENT_CARD_INFO.CARD_EXPIRE_DATE]: {
    month: false,
    year: false,
  },
  [PAYMENT_CARD_INFO.CARD_OWNER]: false,
  [PAYMENT_CARD_INFO.CARD_PINCODE]: false,
  [PAYMENT_CARD_INFO.CARD_PASSWORD]: {
    firstPssword: false,
    secondPassword: false,
  },
  [PAYMENT_CARD_INFO.CARD_COMPANY_CODE]: false,
  [PAYMENT_CARD_INFO.CARD_NICKNAME]: false,
}

export const DUMMY_PAYMENT_CARD: PaymentCard[] = [
  {
    [PAYMENT_CARD_INFO.ID]: '1',
    [PAYMENT_CARD_INFO.CARD_NUMBERS]: {
      firstNumber: '1234',
      secondNumber: '1123',
      thridNumber: '1234',
      fourthNumber: '6456',
    },
    [PAYMENT_CARD_INFO.CARD_EXPIRE_DATE]: {
      month: '02',
      year: '23',
    },
    [PAYMENT_CARD_INFO.CARD_OWNER]: 'Soo',
    [PAYMENT_CARD_INFO.CARD_PINCODE]: '052',
    [PAYMENT_CARD_INFO.CARD_PASSWORD]: {
      firstPssword: '1',
      secondPassword: '2',
    },
    [PAYMENT_CARD_INFO.CARD_COMPANY_CODE]: CARD_COMPNAYS_CODE.HANA,
    [PAYMENT_CARD_INFO.CARD_NICKNAME]: '식비 카드',
  },
  {
    [PAYMENT_CARD_INFO.ID]: '2',
    [PAYMENT_CARD_INFO.CARD_NUMBERS]: {
      firstNumber: '4465',
      secondNumber: '3464',
      thridNumber: '5534',
      fourthNumber: '3454',
    },
    [PAYMENT_CARD_INFO.CARD_EXPIRE_DATE]: {
      month: '12',
      year: '23',
    },
    [PAYMENT_CARD_INFO.CARD_OWNER]: 'Soo',
    [PAYMENT_CARD_INFO.CARD_PINCODE]: '332',
    [PAYMENT_CARD_INFO.CARD_PASSWORD]: {
      firstPssword: '1',
      secondPassword: '2',
    },
    [PAYMENT_CARD_INFO.CARD_COMPANY_CODE]: CARD_COMPNAYS_CODE.HUNDAE,
    [PAYMENT_CARD_INFO.CARD_NICKNAME]: '법인 카드',
  },
]
