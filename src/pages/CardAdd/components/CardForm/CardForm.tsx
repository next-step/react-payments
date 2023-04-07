import { PropsWithChildren } from 'react'

import { getCardFormSubElement } from '@/domain'

import { CardNumbers, CardExpiredDate, CardOwner, CardSecurityCode, CardPassword } from './components'

const CardForm = ({ children }: PropsWithChildren) => {
  const cardNumber = getCardFormSubElement(children, CardNumbers)
  const cardExpiredDateType = getCardFormSubElement(children, CardExpiredDate)
  const cardOwnerType = getCardFormSubElement(children, CardOwner)
  const cardSecurityCode = getCardFormSubElement(children, CardSecurityCode)
  const cardPassword = getCardFormSubElement(children, CardPassword)

  return (
    <>
      {cardNumber}
      {cardExpiredDateType}
      {cardOwnerType}
      {cardSecurityCode}
      {cardPassword}
    </>
  )
}

CardForm.CardNumbers = CardNumbers
CardForm.CardExpiredDate = CardExpiredDate
CardForm.CardOwner = CardOwner
CardForm.CardSecurityCode = CardSecurityCode
CardForm.CardPassword = CardPassword

export default CardForm
