import React, { useState } from 'react'
import { CardType, UpdateCardParams } from 'models/card.model'

const useAddCard = (initCard: CardType) => {
  const [card, setCard] = useState<CardType>(initCard)
  // initCard 정규식처리
  const [validator, setValidator] = useState<{ [key: string]: boolean }>({
    cardNumber: /\d{1,16}/.test(initCard.cardNumber),
    expireDate: false,
    cardOwner: false,
    pinCode: false,
    password: false,
    cardNickname: false,
    cardCompanyCode: false,
  })

  // const isValidatorCardNumber = (cardNumber: string) => {
  //   console.log(/\d/.test(cardNumber), cardNumber)
  //   if (cardNumber.replace(/\\-/, '').length > 16) {
  //     return false
  //   }

  //   return /\d/.test(cardNumber)
  // }

  // const isValidatorExpireDate = (expireDate: string) => {
  //   if (Number(expireDate.slice(0, 2)) > 12) {
  //     return false
  //   }

  //   return /\d/.test(expireDate)
  // }

  // const isValidatorCardOwner = (cardOwner: string) => {
  //   if (cardOwner.length > 30) {
  //     return false
  //   }

  //   return /\w/.test(cardOwner)
  // }

  // const isValidatorPinCode = (pinCode: string) => {
  //   return /\d/.test(pinCode)
  // }

  // const isValidatorPassword = (password: string) => {
  //   return /\d/.test(password)
  // }

  // // const isValidatorCardNickname = () => {
  // //   return /\w/.test(cardOwner)
  // // }

  // // const isValidatorCardComapnyCode = () => {
  // //   return
  // // }

  const resetCard = (card: CardType) => {
    setCard(card)
  }

  const updateCard = ({ value, name }: UpdateCardParams) => {
    setCard({
      ...card,
      [name]: value,
    })
  }

  return { card, resetCard, updateCard }
}

export default useAddCard
