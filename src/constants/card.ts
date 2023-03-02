import { CardType } from 'models/card.model'

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
