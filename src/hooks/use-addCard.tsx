import { CardType } from 'models/card.model'
import React, { useState } from 'react'

const useAddCard = (initCard: CardType): [CardType, (name: string, value: string) => void] => {
  const [card, setCard] = useState<CardType>(initCard)
  // initCard 정규식처리
  const [validator, setValidator] = useState<{ [key: string]: boolean }>({
    cardNumber: false,
    expireDate: false,
    cardOwner: false,
    pinCode: false,
    password: false,
    cardNickname: false,
    cardCompanyCode: false,
  })

  // 1. vaildate check (error message)
  // 2. onPress value, check validate, open Layer
  // 3. replace string

  const updateCardInfo = (name: string, value: string) => {
    setCard({
      ...card,
      [name]: value,
    })
  }

  return [card, updateCardInfo]
}

export default useAddCard
