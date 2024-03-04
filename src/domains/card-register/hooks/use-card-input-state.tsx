import { useState } from 'react'

export interface CardInputState {
  cardCode: string
  cardExpDate: string
  cardName: string
  cardCVC: string
  cardPin: string
}

export const useCardInputState = () => {
  const [cardInput, setCardInput] = useState<CardInputState>({
    cardCode: '',
    cardExpDate: '',
    cardName: '',
    cardCVC: '',
    cardPin: '',
  })

  const handleChangeCardInput = (name: keyof CardInputState) => (value: string) => {
    setCardInput(prev => ({ ...prev, [name]: value }))
  }

  return [cardInput, handleChangeCardInput] as const
}
