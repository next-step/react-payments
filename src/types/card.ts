import { vars } from '@/styles'

export interface CardType {
  id: number
  brandName: string
  color: keyof typeof vars.color
}

export interface CardInputState {
  cardCode: string
  cardExpDate: string
  cardName: string
  cardCVC: string
  cardPin: string
  cardNickName: string
  cardType: CardType | undefined
}

export type CardInputErrorState = Record<
  keyof Omit<CardInputState, 'cardNickName'>,
  string | undefined
>

export interface CardState extends CardInputState {
  id: string
  updatedAt: Date
}

export type CardBeforeRegister = Omit<CardState, 'updatedAt'>
