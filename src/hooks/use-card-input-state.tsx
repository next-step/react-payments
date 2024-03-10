import { useState } from 'react'
import { CardType } from '@/constants/card-type.ts'

export interface CardInputState {
  cardCode: string
  cardExpDate: string
  cardName: string
  cardCVC: string
  cardPin: string
  cardNickName: string
  cardType?: CardType
}

export const INITIAL_CARD_INPUT_STATE: CardInputState = {
  cardCode: '',
  cardExpDate: '',
  cardName: '',
  cardCVC: '',
  cardPin: '',
  cardNickName: '',
  cardType: undefined,
}

export const useCardInputState = () => {
  const [cardInput, setCardInput] = useState<CardInputState>(INITIAL_CARD_INPUT_STATE)

  const handleChangeCardInput =
    (name: keyof CardInputState) => (value: CardInputState[typeof name]) => {
      setCardInput(prev => ({ ...prev, [name]: value }))
    }

  const resetCardInput = (value?: CardInputState) => {
    setCardInput(value ?? INITIAL_CARD_INPUT_STATE)
  }

  return { cardInput, setCardInput: handleChangeCardInput, resetCardInput } as const
}
