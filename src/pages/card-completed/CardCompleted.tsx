import { BackButton, NavigationTextButton } from '@/components/button'
import { BigCard } from '@/components/card'
import { PageTitle } from '@/components/layouts'
import { useCardCompleted } from '@/pages/card-completed/hooks'

function CardCompleted() {
  const { nicknameRef, cardNumbers, cardOwner, cardExpiredDate, cardNickname, cardName, handlePreNavigation } =
    useCardCompleted()

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <PageTitle buttonElement={<BackButton />} addtionalClassName="mb-10" title="카드등록이 완료되었습니다." />
      </div>
      <BigCard cardNumbers={cardNumbers} cardName={cardName} cardOwner={cardOwner} cardExpiredDate={cardExpiredDate} />
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

export default CardCompleted
