export type CardNumbers = {
  first: string
  second: string
  third: string
  fourth: string
}
export type CardName = string
export type CardExpiredYear = string
export type CardExpiredMonth = string
export type CardOwner = string
export type CardSecurityCode = string
export type CardPassword = {
  first: string
  second: string
}

export type CardAction =
  | {
      type: 'SET_CARD_NUMBERS'
      payload: CardNumbers
    }
  | {
      type: 'SET_NAME'
      payload: CardName
    }
  | {
      type: 'SET_EXPIRED_YEAR'
      payload: CardExpiredYear
    }
  | {
      type: 'SET_EXPIRED_MONTH'
      payload: CardExpiredMonth
    }
  | {
      type: 'SET_OWNER'
      payload: CardOwner
    }
  | {
      type: 'SET_SECURITY_CODE'
      payload: CardSecurityCode
    }
  | {
      type: 'SET_PASSWORD'
      payload: CardPassword
    }

export interface CardInfomation {
  cardNumbers: CardNumbers
  name: CardName
  expiredYear: CardExpiredYear
  expiredMonth: CardExpiredMonth
  owner: CardOwner
  securityCode: CardSecurityCode
  password: CardPassword
}

export interface ChangeCardInfomation {
  cardNumbers?: { first: string; second: string; third: string; fourth: string }
  name?: string
  expiredYear?: string
  expiredMonth?: string
  owner?: string
  securityCode?: string
  password?: { first: string; second: string }
}
