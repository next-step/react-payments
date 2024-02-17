import { BackButton } from '@/components/button'
import { PreviewCard } from '@/components/card'
import { PageTitle } from '@/components/layouts'
import { CardForm } from '@/pages/CardAdd/components/CardForm'

import { NavigationButtonWithValidation } from './components'
import { useCardAdd } from './hooks'

function CardAdd() {
  // Todo: 핸들러 각 컴포넌트에서 불러오고 Props에서 지워주기

  const {
    numbersRef,
    passwordRef,
    expiredDateRef,
    ownerRef,
    securityCodeRef,
    openValidToast,
    setOpenValidToast,
    onBeforeNavigate,
    isValidCardInfo,
  } = useCardAdd()

  return (
    <div className="app">
      <PageTitle title="카드 추가" buttonElement={<BackButton />} />
      <PreviewCard />
      <CardForm>
        <CardForm.CardNumbers numbersRef={numbersRef} nextRef={expiredDateRef.first} />
        <CardForm.CardExpiredDate expiredDateRef={expiredDateRef} />
        <CardForm.CardOwner ownerRef={ownerRef} />
        <CardForm.CardSecurityCode securityCodeRef={securityCodeRef} nextRef={passwordRef.first} />
        <CardForm.CardPassword passwordRef={passwordRef} />
      </CardForm>
      <NavigationButtonWithValidation
        to="/card-completed"
        text="다음"
        openValidToast={openValidToast}
        setOpenValidToast={setOpenValidToast}
        onBeforeNavigate={onBeforeNavigate}
        isNavigationEnabled={isValidCardInfo}
      />
    </div>
  )
}

export default CardAdd
