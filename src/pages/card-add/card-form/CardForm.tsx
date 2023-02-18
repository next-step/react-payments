import { ReactNode } from 'react'

import { getCardFormSubElement } from '@/domain'

import {
  CardNumber,
  CardExpiredDate,
  CardOwner,
  CardSecurityCode,
  CardPassword,
  CardNumberType,
  CardExpiredDateType,
  CardOwnerType,
  CardSecurityCodeType,
  CardPasswordType,
} from './components'

interface CardFormProps {
  //Learning Point: ReactNode와 ReactElement의 차이점
  children: ReactNode
}

const CardForm = ({ children }: CardFormProps) => {
  const cardNumber = getCardFormSubElement(children, CardNumberType)
  const cardExpiredDateType = getCardFormSubElement(
    children,
    CardExpiredDateType,
  )
  const cardOwnerType = getCardFormSubElement(children, CardOwnerType)
  const cardSecurityCode = getCardFormSubElement(children, CardSecurityCodeType)
  const cardPassword = getCardFormSubElement(children, CardPasswordType)
  return (
    <>
      {cardNumber && cardNumber}
      {cardExpiredDateType && cardExpiredDateType}
      {cardOwnerType && cardOwnerType}
      {cardSecurityCode && cardSecurityCode}
      {cardPassword && cardPassword}
    </>
  )
}

CardForm.CardNumber = CardNumber
CardForm.CardExpiredDate = CardExpiredDate
CardForm.CardOwner = CardOwner
CardForm.CardSecurityCode = CardSecurityCode
CardForm.CardPassword = CardPassword

export default CardForm
