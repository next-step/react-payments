import { BackButton } from '@/components/button'
import { CardDetailsForm } from '@/components/layouts'
import { useCardUpdate } from '@/pages/CardUpdate/hooks'

function CardUpdate() {
  const {
    nicknameRef,
    cardNumbers,
    cardOwner,
    cardExpiredDate,
    cardName,
    cardNickname,
    cardType,
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
        cardType={cardType}
      />
      <CardDetailsForm.CardAliasInput inputRef={nicknameRef} defaultValue={cardNickname} />
      <CardDetailsForm.NavigationButton
        additionalClassNames="mt-50"
        onBeforeNavigate={handlePreNavigation}
        to="/"
        text="다음"
      />
    </CardDetailsForm>
  )
}

export default CardUpdate
