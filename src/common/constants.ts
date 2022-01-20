import { RefObject } from 'react'

export const LIMITS = {
  CARD_NUMBER_SIZE: 4,
  MAX_NAME_SIZE: 30,
  MONTH_SIZE: 2,
  YEAR_MIN: 22,
  YEAR_MAX: 99,
  YEAR_SIZE: 2,
  CVC_SIZE: 3,
  PASSWORD_SIZE: 1,
}

export type InputDefaultProps = {
  name: string
  testId: string
  elRef: RefObject<HTMLInputElement>
}

export type CardType = 'big' | 'small' | 'new' | 'empty'

export type CardData = {
  cardName: string
  cardNumber: string
  expired: string
  userName: string
  alias: string
}
