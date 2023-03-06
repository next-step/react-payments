import { BackButton } from '@/components/button'
import { CardDetailsForm } from '@/components/layouts'
import { useCardUpdate } from '@/pages/card-update/hooks'

function CardUpdate() {
  const {
    nicknameRef,
    cardNumbers,
    cardOwner,
    cardExpiredDate,
    cardName,
    cardNickname,
    onClickDeleteButton,
    handlePreNavigation,
  } = useCardUpdate()

  return (
    <CardDetailsForm>
      <CardDetailsForm.PageTitle
        buttonElement={<BackButton />}
        addtionalClassName="mb-10"
        title="카드 목록으로 돌아가기"
      />
      <CardDetailsForm.BigCard
        onClickDeleteButton={onClickDeleteButton}
        cardNumbers={cardNumbers}
        cardName={cardName}
        cardOwner={cardOwner}
        cardExpiredDate={cardExpiredDate}
      />
      <CardDetailsForm.CardAliasInput inputRef={nicknameRef} defaultValue={cardNickname} />
      <CardDetailsForm.NavigationTextButton
        additionalClassNames="mt-50"
        preNavigation={handlePreNavigation}
        to="/"
        text="다음"
      />
    </CardDetailsForm>
  )
}

export default CardUpdate
