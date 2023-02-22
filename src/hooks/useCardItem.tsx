import React, { useState } from 'react'
import { CardType, CardTypeKeys } from 'models/card.model'
import { validatorFn } from 'utils/validators'

const useCardItem = (initCard: CardType) => {
  const [card, setCard] = useState<CardType>(initCard)
  const [validator, setValidator] = useState<{ [key: string]: boolean }>({
    cardNumber: validatorFn(initCard.cardNumber, 'cardNickname'),
    expireDate: validatorFn(initCard.expireDate, 'expireDate'),
    cardOwner: validatorFn(initCard.cardOwner, 'cardOwner'),
    pinCode: validatorFn(initCard.pinCode, 'pinCode'),
    password: validatorFn(initCard.password, 'password'),
    cardNickname: validatorFn(initCard.cardNickname, 'cardNickname'),
    cardCompanyCode: validatorFn(initCard.cardCompanyCode, 'cardCompanyCode'),
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
