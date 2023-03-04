import { BackButton, NavigationTextButton } from '@/components/button'
import { PageTitle } from '@/components/layouts'
import { useCardCompleted } from '@/pages/card-completed/hooks'

function CardCompleted() {
  const { nicknameRef, cardNumbers, cardOwner, cardExpiredDate, cardNickname, handlePreNavigation } = useCardCompleted()

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <PageTitle buttonElement={<BackButton />} addtionalClassName="mb-10" title="카드등록이 완료되었습니다." />
      </div>
      <div className="card-box">
        <div className="big-card">
          <div className="card-top">
            <span className="card-text__big">클린카드</span>
          </div>
          <div className="card-middle">
            <div className="big-card__chip" />
          </div>
          <div className="card-bottom">
            <div className="card-bottom__number">
              <span className="card-text__big">{cardNumbers}</span>
            </div>
            <div className="card-bottom__info">
              <span className="card-text__big">{cardOwner}</span>
              <span className="card-text__big">{cardExpiredDate}</span>
            </div>
          </div>
        </div>
      </div>
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
