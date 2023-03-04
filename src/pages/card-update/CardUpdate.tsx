import { BackButton, NavigationTextButton } from '@/components/button'
import { PageTitle } from '@/components/layouts'
import { useCardUpdate } from '@/pages/card-update/hooks'

function CardUpdate() {
  const {
    nicknameRef,
    cardNumbers,
    cardOwner,
    cardExpiredDate,
    cardNickname,
    onClickDeleteButton,
    handlePreNavigation,
  } = useCardUpdate()

  // Todo: BigCard, Input 컴포넌트 분리 가능함
  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <PageTitle buttonElement={<BackButton />} addtionalClassName="mb-10" title="카드 목록으로 돌아가기" />
      </div>
      <div className="card-box">
        <div className="big-card">
          <div className="card-top">
            <span className="card-text__big">클린카드</span>
            <button type="button" className="card-text" onClick={onClickDeleteButton}>
              카드삭제
            </button>
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

export default CardUpdate
