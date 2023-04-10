import { BackButton } from '@/components/button'
import { PreviewCard } from '@/components/card'
import { PageTitle } from '@/components/layouts'
// import { CardTypeSelectionModal } from '@/components/modal'
// import { useModal } from '@/hooks'
import { CardForm } from '@/pages/CardAdd/components/CardForm'
import { useCardInfo } from '@/pages/hooks'

import { NavigationButtonWithValidation } from './components'
import { useCardAdd } from './hooks'

function CardAdd() {
  const { handleNumber, handleExpiredDate, handleOwner, handlePassword, handleSecurityCode } = useCardInfo()
  const { numbersRef, passwordRef, expiredDateRef, ownerRef, securityCodeRef } = useCardAdd()
  // const { openModal } = useModal()

  // const openCardTypeSelectionModal = () => {
  //   openModal({ element: <CardTypeSelectionModal text="하이" onConfirmButtonClick={() => console.log('check')} /> })
  // }

  return (
    <div className="app">
      <PageTitle title="카드 추가" buttonElement={<BackButton />} />
      <PreviewCard />
      <CardForm>
        <CardForm.CardNumbers numbersRef={numbersRef} handleChange={handleNumber} />
        <CardForm.CardExpiredDate expiredDateRef={expiredDateRef} handleChange={handleExpiredDate} />
        <CardForm.CardOwner ownerRef={ownerRef} handleChange={handleOwner} />
        <CardForm.CardSecurityCode securityCodeRef={securityCodeRef} handleChange={handleSecurityCode} />
        <CardForm.CardPassword passwordRef={passwordRef} handleChange={handlePassword} />
      </CardForm>
      <NavigationButtonWithValidation to="/card-completed" text="다음" />
    </div>
  )
}

export default CardAdd
