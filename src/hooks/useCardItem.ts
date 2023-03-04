import { CARD_INFO } from './../constants/card'
import { INIT_CARD_VALUE } from 'constants/card'
import React, { useState } from 'react'
import { CardType, CardTypeKeys } from 'models/card.model'
import { validatorFn } from 'utils/validators'

const useCardItem = (initCard: CardType) => {
  const [card, setCard] = useState<CardType>(initCard)
  const [validator, setValidator] = useState<{ [key: string]: boolean }>({
    cardNumber: validatorFn(initCard.cardNumber, CARD_INFO.CARD_NUMBER),
    expireDate: validatorFn(initCard.expireDate, CARD_INFO.EXPIRE_DATE),
    cardOwner: validatorFn(initCard.cardOwner, CARD_INFO.CARD_OWNER),
    pinCode: validatorFn(initCard.pinCode, CARD_INFO.PIN_CODE),
    password: validatorFn(initCard.password, CARD_INFO.PASSWORD),
    cardNickname: validatorFn(initCard.cardNickname, CARD_INFO.CARD_NICKNAME),
    cardCompanyCode: validatorFn(
      initCard.cardCompanyCode,
      CARD_INFO.CARD_COMPANY_CODE,
    ),
  })

  const resetCard = () => {
    setCard(INIT_CARD_VALUE)
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
