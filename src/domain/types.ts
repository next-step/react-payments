export interface CardInfomation {
  cardNumbers: { first: string; second: string; third: string; fourth: string }
  name: string
  expiredYear: string
  expiredMonth: string
  owner: string
  securityCode: string
  password: { first: string; second: string }
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
