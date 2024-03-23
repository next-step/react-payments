export type PaymentState = {
  cardList: CardDetail[]
  card: CardDetail
}

export type PaymentActions = {
  updateCardList: (card: CardDetail) => void
  updateCardDetail: (payload: {
    name: KeyOf<CardDetail>
    value: string
    index?: string
  }) => void
  resetCardDetail: () => void
}

export type CardDetail = {
  number: string[]
  expiry: string[]
  owner: string
  name: string
  bank: string
  cvc: string
  password: string[]
}
