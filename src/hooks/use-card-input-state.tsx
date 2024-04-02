import { useState } from 'react'
import type { CardInputState, CardInputErrorState } from '@/types/card'
import { cardInputValidator } from '@/utils/card-input-validator'
import { INITIAL_CARD_INPUT_ERROR_STATE, INITIAL_CARD_INPUT_STATE } from '@/constants/card-state'

export const useCardInputState = () => {
  const [cardInput, setCardInput] = useState<CardInputState>(INITIAL_CARD_INPUT_STATE)
  const [cardInputError, setCardInputError] = useState<CardInputErrorState>(
    INITIAL_CARD_INPUT_ERROR_STATE,
  )

  const handleChangeCardInput =
    (name: keyof CardInputState) => (value: CardInputState[typeof name]) => {
      setCardInput(prev => ({ ...prev, [name]: value }))
    }

  const validateCardInput = (value: CardInputState) => {
    const errorState = cardInputValidator.validate(value)
    setCardInputError(cardInputValidator.validate(value))
    return cardInputValidator.isValid(errorState)
  }

  const resetCardInput = (value?: CardInputState) => {
    setCardInput(value ?? INITIAL_CARD_INPUT_STATE)
    setCardInputError(INITIAL_CARD_INPUT_ERROR_STATE)
  }

  return {
    cardInput,
    cardInputError,
    setCardInput: handleChangeCardInput,
    validateCardInput,
    resetCardInput,
  } as const
}
