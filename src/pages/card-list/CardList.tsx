import { Link, useNavigate } from 'react-router-dom'

import { PageTitle } from '@/components/layouts'
import { useCardInfo, useCardList } from '@/pages/hooks'

function CardList() {
  const navigate = useNavigate()
  const { cardList } = useCardList()
  const { setAllCardInfo } = useCardInfo()
  return (
    <div className="root">
      <div className="app flex-column-center">
        <div className="flex-center">
          <PageTitle addtionalClassName="mb-10" title="보유 카드" />
        </div>
        {cardList?.map((card) => {
          const {
            cardNumbers: { first, second, third, fourth },
            owner,
            name,
            nickname,
            expiredMonth,
            expiredYear,
          } = card
          return (
            <div
              key={card.nickname}
              onClick={(event) => {
                event.stopPropagation()
                setAllCardInfo(card)
                navigate('/card-update')
              }}
            >
              <div className="card-box">
                <div className="small-card">
                  <div className="delete-button-box"></div>
                  <div className="card-top">
                    <span className="card-text">{name}</span>
                  </div>
                  <div className="card-middle">
                    <div className="small-card__chip" />
                  </div>
                  <div className="card-bottom">
                    <div className="card-bottom__number">
                      <span className="card-text">{`${first} - ${second} - ${third} - ${fourth}`}</span>
                    </div>
                    <div className="card-bottom__info">
                      <span className="card-text">{owner}</span>
                      <span className="card-text">{`${expiredMonth} / ${expiredYear}`}</span>
                    </div>
                  </div>
                </div>
              </div>
              <span className="card-nickname">{nickname}</span>
            </div>
          )
        })}
        <Link to="/card-add" style={{ textDecoration: 'none' }}>
          <div className="card-box">
            <div className="empty-card">+</div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default CardList
