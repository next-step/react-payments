import { useRef } from 'react'

import { BackButton, NavigationTextButton } from '@/components/button'
import { Card, BasicCardPart } from '@/components/card'
import { PageTitle } from '@/components/layouts'
import { CardForm } from '@/pages/card-add/card-form'
import { useCardInfo } from '@/pages/hooks'

function CardAdd() {
  const { cardInfo, handleNumber, handleExpiredDate, handleOwner, handlePassword, handleSecurityCode } = useCardInfo()

  const firstPasswordRef = useRef<HTMLInputElement>(null)
  const secondPasswordRef = useRef<HTMLInputElement>(null)
  const passwordRef = { first: firstPasswordRef, second: secondPasswordRef }

  const securityCodeRef = useRef<HTMLInputElement>(null)

  const preNavigation = () => {
    const firstPasswordValue = firstPasswordRef.current?.value
    const secondPasswordValue = secondPasswordRef.current?.value
    if (firstPasswordValue && secondPasswordValue) {
      handlePassword({ first: firstPasswordValue, second: secondPasswordValue })
    }

    const securityCodeValue = securityCodeRef.current?.value
    if (securityCodeValue) {
      handleSecurityCode(securityCodeValue)
    }
  }

  const {
    cardNumbers: { first, second, third, fourth },
    owner,
    expiredMonth,
    expiredYear,
  } = cardInfo

  return (
    <div className="app">
      <PageTitle title="카드 추가" buttonElement={<BackButton />} />
      <Card>
        <BasicCardPart
          cardNumbers={`${first} - ${second} - ${third} - ${fourth}`}
          cardOwner={owner}
          cardExpiredDate={`${expiredMonth} / ${expiredYear}`}
        />
      </Card>
      <CardForm>
        <CardForm.CardNumbers numbers={cardInfo.cardNumbers} handleChange={handleNumber} />
        <CardForm.CardExpiredDate
          expiredYear={cardInfo.expiredYear}
          expiredMonth={cardInfo.expiredMonth}
          handleChange={handleExpiredDate}
        />
        <CardForm.CardOwner owner={cardInfo.owner} handleChange={handleOwner} />
        <CardForm.CardSecurityCode securityCodeRef={securityCodeRef} />
        <CardForm.CardPassword passwordRef={passwordRef} />
      </CardForm>
      <NavigationTextButton preNavigation={preNavigation} to="/card-completed" text="다음" />
    </div>
  )
}

export default CardAdd
