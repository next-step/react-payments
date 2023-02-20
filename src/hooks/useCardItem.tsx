import React, { useState } from 'react'
import { CardType, CardTypeKeys } from 'models/card.model'
import { validatorFn } from 'utils/validators'

const useCardItem = (initCard: CardType) => {
  const [card, setCard] = useState<CardType>(initCard)
  const [validator, setValidator] = useState<{ [key: string]: boolean }>({
    cardNumber: false,
    expireDate: false,
    cardOwner: false,
    pinCode: false,
    password: false,
    cardNickname: false,
    cardCompanyCode: false,
  })

  const resetCard = (card: CardType) => {
    setCard(card)
  }

  const updateCard = (value: string, name: CardTypeKeys) => {
    setCard({
      ...card,
      [name]: value,
    })
    setValidator({
      ...validator,
      [name]: validatorFn(value, name),
    })
  }

  return { card, resetCard, updateCard, validator }
}

export default useCardItem
