import { BackButton, NavigationTextButton } from '@/components/button'
import { PageTitle } from '@/components/layouts'

function CardCompleted() {
  return (
    <div className="root">
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
                <span className="card-text__big">1111 - 2222 - oooo - oooo</span>
              </div>
              <div className="card-bottom__info">
                <span className="card-text__big">YUJO</span>
                <span className="card-text__big">12 / 23</span>
              </div>
            </div>
          </div>
        </div>
        <div className="input-container flex-center w-100">
          <input className="input-underline w-75" type="text" placeholder="카드의 별칭을 입력해주세요." />
        </div>
        <NavigationTextButton additionalClassNames="mt-50" to="/" text="다음" />
      </div>
    </div>
  )
}

export default CardCompleted
