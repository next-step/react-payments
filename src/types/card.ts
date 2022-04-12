export interface Card {
  id: string
  alias?: string
  number: [string, string, string, string]
  expireDate: { month: string; year: string }
  holderName: string
  cvc: string
  password: [string, string]
  company: { name: string; color: string }
}
