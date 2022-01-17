export interface Card {
  number: [string, string, string, string]
  expireDate: { month: string; year: string }
  holderName: string
  cvc: string
  password: [string, string]
}
