import { useRef } from 'react'

import { BackButton, NavigationTextButton } from '@/components/button'
import { PageTitle } from '@/components/layouts'

import { useCardInfo } from '../card-add/card-form/hooks'

function CardCompleted() {
  const {
    cardInfo: {
      cardNumbers: { first, second, third, fourth },
      owner,
      expiredMonth,
      expiredYear,
    },
    handleNickname,
  } = useCardInfo()

  const nicknameRef = useRef<HTMLInputElement>(null)

  const preNavigation = () => {
    const nicknameValue = nicknameRef.current?.value
    if (nicknameValue) {
      handleNickname(nicknameValue)
    }
  }

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
              <span className="card-text__big">{`${first} - ${second} - ${third} - ${fourth}`}</span>
            </div>
            <div className="card-bottom__info">
              <span className="card-text__big">{owner}</span>
              <span className="card-text__big">{`${expiredMonth} / ${expiredYear}`}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="input-container flex-center w-100">
        <input
          ref={nicknameRef}
          className="input-underline w-75"
          type="text"
          placeholder="카드 별칭 (선택)"
          maxLength={10}
        />
      </div>
      <NavigationTextButton additionalClassNames="mt-50" preNavigation={preNavigation} to="/" text="다음" />
    </div>
  )
}

export default CardCompleted
