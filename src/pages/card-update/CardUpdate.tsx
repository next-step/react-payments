import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import { BackButton, NavigationTextButton } from '@/components/button'
import { PageTitle } from '@/components/layouts'
import { useCardInfo, useCardList } from '@/pages/hooks'

function CardUpdate() {
  const navigate = useNavigate()
  const {
    cardInfo,
    cardInfo: {
      cardNumbers: { first, second, third, fourth },
      owner,
      name,
      nickname,
      expiredMonth,
      expiredYear,
    },
    handleNickname,
    resetCardInfo,
  } = useCardInfo()

  const { updateCard, deleteCard } = useCardList()

  const nicknameRef = useRef<HTMLInputElement>(null)

  const preNavigation = () => {
    const nicknameValue = nicknameRef.current?.value || name
    handleNickname(nicknameValue)
    updateCard({ ...cardInfo, nickname: nicknameValue })
    resetCardInfo()
  }

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <PageTitle buttonElement={<BackButton />} addtionalClassName="mb-10" title="카드 목록으로 돌아가기" />
      </div>
      <div className="card-box">
        <div className="big-card">
          <div className="card-top">
            <span className="card-text__big">클린카드</span>
            <button
              type="button"
              className="card-text"
              onClick={() => {
                deleteCard(cardInfo)
                navigate('/')
              }}
            >
              카드삭제
            </button>
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
          defaultValue={nickname}
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

export default CardUpdate
