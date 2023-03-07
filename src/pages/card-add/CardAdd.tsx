import { BackButton, NavigationTextButton } from '@/components/button'
import { Card, BasicCardPart } from '@/components/card'
import { PageTitle } from '@/components/layouts'
import { CardForm } from '@/pages/card-add/card-form'
import { useCardInfo, useSequentialInputFocus } from '@/pages/hooks'

import { useCardAdd } from './hooks'

function CardAdd() {
  const { handleNumber, handleExpiredDate, handleOwner } = useCardInfo()
  const { numbersRef, passwordRef, expiredDateRef, ownerRef, securityCodeRef, preNavigation } = useCardAdd()

  // Todo: 유효성 검사 여기서
  useSequentialInputFocus([
    { ref: numbersRef.first, maxLength: 4 },
    { ref: numbersRef.second, maxLength: 4 },
    { ref: numbersRef.third, maxLength: 4 },
    { ref: numbersRef.fourth, maxLength: 4 },
    { ref: expiredDateRef.first, maxLength: 2 },
    { ref: expiredDateRef.second, maxLength: 2 },
    { ref: ownerRef, maxLength: 30 },
    { ref: securityCodeRef, maxLength: 3 },
    { ref: passwordRef.first, maxLength: 1 },
    { ref: passwordRef.second, maxLength: 1 },
  ])

  return (
    <div className="app">
      <PageTitle title="카드 추가" buttonElement={<BackButton />} />
      <Card>
        <BasicCardPart />
      </Card>
      <CardForm>
        <CardForm.CardNumbers numbersRef={numbersRef} handleChange={handleNumber} />
        <CardForm.CardExpiredDate expiredDateRef={expiredDateRef} handleChange={handleExpiredDate} />
        <CardForm.CardOwner ownerRef={ownerRef} handleChange={handleOwner} />
        <CardForm.CardSecurityCode securityCodeRef={securityCodeRef} />
        <CardForm.CardPassword passwordRef={passwordRef} />
      </CardForm>
      <NavigationTextButton preNavigation={preNavigation} to="/card-completed" text="다음" />
    </div>
  )
}

export default CardAdd
