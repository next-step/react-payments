import { BackButton, NavigationTextButton } from '@/components/button'
import { BigCard } from '@/components/card'
import { PageTitle } from '@/components/layouts'
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

  // Todo: Input 컴포넌트 분리 가능함
  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <PageTitle buttonElement={<BackButton />} addtionalClassName="mb-10" title="카드 목록으로 돌아가기" />
      </div>
      <BigCard
        onClickDeleteButton={onClickDeleteButton}
        cardNumbers={cardNumbers}
        cardName={cardName}
        cardOwner={cardOwner}
        cardExpiredDate={cardExpiredDate}
      />
      <div className="input-container flex-center w-100">
        <input
          ref={nicknameRef}
          defaultValue={cardNickname}
          className="input-underline w-75"
          type="text"
          placeholder="카드 별칭 (선택)"
          maxLength={10}
        />
      </div>
      <NavigationTextButton additionalClassNames="mt-50" preNavigation={handlePreNavigation} to="/" text="다음" />
    </div>
  )
}

export default CardUpdate
