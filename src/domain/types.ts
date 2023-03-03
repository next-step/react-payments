export type CardNumbers = {
  first: string
  second: string
  third: string
  fourth: string
}
export type CardName = string
export type CardNickname = string
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
      type: 'SET_NICKNAME'
      payload: CardNickname
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
  | {
      type: 'SET_ALL'
      payload: CardInfomation
    }
  | {
      type: 'RESET_ALL'
    }

export interface CardInfomation {
  id?: number
  cardNumbers: CardNumbers
  name: CardName
  nickname: CardNickname
  expiredYear: CardExpiredYear
  expiredMonth: CardExpiredMonth
  owner: CardOwner
  securityCode: CardSecurityCode
  password: CardPassword
}

export type CardListAction =
  | {
      type: 'ADD'
      payload: CardInfomation
    }
  | {
      type: 'UPDATE'
      payload: CardInfomation
    }
