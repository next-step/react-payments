import { vars } from '@/styles'

export interface CardType {
  id: number
  name: string
  color: keyof typeof vars.color
}

export interface CardInputState {
  cardCode: string
  cardExpDate: string
  cardName: string
  cardCVC: string
  cardPin: string
  cardNickName: string
  cardType?: CardType
}

export interface CardState extends CardInputState {
  id: string
  updatedAt: Date
}

export type CardBeforeRegister = Omit<CardState, 'updatedAt'>
