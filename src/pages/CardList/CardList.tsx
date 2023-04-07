import { Link } from 'react-router-dom'

import { EmptyCard, SmallCard } from '@/components/card'
import { PageTitle } from '@/components/layouts'
import { useCardList } from '@/pages/CardList/hooks'

function CardList() {
  const { cardList, onClickCard } = useCardList()

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
            <div key={card.nickname} onClick={() => onClickCard(card)}>
              <SmallCard
                cardName={name}
                cardNumbers={`${first} - ${second} - ${third} - ${fourth}`}
                cardOwner={owner}
                cardExpiredDate={`${expiredMonth} / ${expiredYear}`}
              />
              <span className="card-nickname">{nickname}</span>
            </div>
          )
        })}
        <Link to="/card-add" style={{ textDecoration: 'none' }}>
          <EmptyCard>
            <span>+</span>
          </EmptyCard>
        </Link>
      </div>
    </div>
  )
}

export default CardList
