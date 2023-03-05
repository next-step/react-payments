import { BackButton, CardDetailsForm } from '@/components'
import { useCardCompleted } from '@/pages/card-completed/hooks'

function CardCompleted() {
  const { nicknameRef, cardNumbers, cardOwner, cardExpiredDate, cardNickname, cardName, handlePreNavigation } =
    useCardCompleted()

  return (
    <CardDetailsForm>
      <CardDetailsForm.PageTitle
        buttonElement={<BackButton />}
        addtionalClassName="mb-10"
        title="카드등록이 완료되었습니다."
      />
      <CardDetailsForm.BigCard
        cardNumbers={cardNumbers}
        cardName={cardName}
        cardOwner={cardOwner}
        cardExpiredDate={cardExpiredDate}
      />
      <CardDetailsForm.CardAliasInput ref={nicknameRef} defaultValue={cardNickname} />
      <CardDetailsForm.NavigationTextButton
        additionalClassNames="mt-50"
        preNavigation={handlePreNavigation}
        to="/"
        text="다음"
      />
    </CardDetailsForm>
  )
}

export default CardCompleted
