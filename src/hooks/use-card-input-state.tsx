import { useState } from 'react'
import { CardType } from '@/constants/card-type.ts'

export interface CardInputState {
  cardCode: string
  cardExpDate: string
  cardName: string
  cardCVC: string
  cardPin: string
  cardType?: CardType
}

const INITIAL_CARD_STATE: CardInputState = {
  cardCode: '',
  cardExpDate: '',
  cardName: '',
  cardCVC: '',
  cardPin: '',
  cardType: undefined,
}

export const useCardInputState = () => {
  const [cardInput, setCardInput] = useState<CardInputState>(INITIAL_CARD_STATE)

  const handleChangeCardInput = (name: keyof CardInputState) => (value: string) => {
    setCardInput(prev => ({ ...prev, [name]: value }))
  }

  const resetCardInput = () => {
    setCardInput(INITIAL_CARD_STATE)
  }

  return { cardInput, setCardInput: handleChangeCardInput, resetCardInput } as const
}
