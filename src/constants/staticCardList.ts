import { PaymentCard, PAYMENT_CARD_FORM_KEYS } from './card'
import { CARD_COMPNAYS_CODE } from './cardCompanyCode'

export const DUMMY_PAYMENT_CARDS: PaymentCard[] = [
  {
    [PAYMENT_CARD_FORM_KEYS.ID]: '1',
    [PAYMENT_CARD_FORM_KEYS.CARD_NUMBERS]: {
      firstNumber: '1234',
      secondNumber: '1123',
      thridNumber: '1234',
      fourthNumber: '6456',
    },
    [PAYMENT_CARD_FORM_KEYS.CARD_EXPIRE_DATE]: {
      month: '02',
      year: '23',
    },
    [PAYMENT_CARD_FORM_KEYS.CARD_OWNER]: 'Soo',
    [PAYMENT_CARD_FORM_KEYS.CARD_PINCODE]: '052',
    [PAYMENT_CARD_FORM_KEYS.CARD_PASSWORD]: {
      firstPassword: '1',
      secondPassword: '2',
    },
    [PAYMENT_CARD_FORM_KEYS.CARD_COMPANY_CODE]: CARD_COMPNAYS_CODE.HANA,
    [PAYMENT_CARD_FORM_KEYS.CARD_NICKNAME]: '식비 카드',
  },
  {
    [PAYMENT_CARD_FORM_KEYS.ID]: '2',
    [PAYMENT_CARD_FORM_KEYS.CARD_NUMBERS]: {
      firstNumber: '4465',
      secondNumber: '3464',
      thridNumber: '5534',
      fourthNumber: '3454',
    },
    [PAYMENT_CARD_FORM_KEYS.CARD_EXPIRE_DATE]: {
      month: '12',
      year: '23',
    },
    [PAYMENT_CARD_FORM_KEYS.CARD_OWNER]: 'Soo',
    [PAYMENT_CARD_FORM_KEYS.CARD_PINCODE]: '332',
    [PAYMENT_CARD_FORM_KEYS.CARD_PASSWORD]: {
      firstPassword: '1',
      secondPassword: '2',
    },
    [PAYMENT_CARD_FORM_KEYS.CARD_COMPANY_CODE]: CARD_COMPNAYS_CODE.HUNDAE,
    [PAYMENT_CARD_FORM_KEYS.CARD_NICKNAME]: '법인 카드',
  },
]
