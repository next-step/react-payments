import { Link } from 'react-router-dom'

import { EmptyCard, SmallCard } from '@/components/card'
import { PageTitle } from '@/components/layouts'
import { getCardNumbersDisplay, getCardExpiredDateDisplay } from '@/domain'
import { useCardList } from '@/pages/CardList/hooks'

function CardList() {
  const { cardList, onClickCard } = useCardList()

  return (
    <div className="root">
      <div className="app text-center">
        <PageTitle addtionalClassName="mb-10" title="보유 카드" />
        {cardList?.map((card) => {
          const { cardNumbers, owner, name, nickname, expiredMonth, expiredYear, cardType } = card
          return (
            <div key={card.nickname} onClick={() => onClickCard(card)}>
              <SmallCard
                cardName={name}
                cardNumbers={getCardNumbersDisplay(cardNumbers)}
                cardOwner={owner}
                cardExpiredDate={getCardExpiredDateDisplay({ expiredMonth, expiredYear })}
                cardType={cardType}
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
