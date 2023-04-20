import { useContext } from 'react'

import { EmptyCard } from '@/components/card'
import { CardStateContext } from '@/contexts/card'
import { getCardExpiredDateDisplay, getCardNumbersDisplay } from '@/domain'

const PreviewCard = () => {
  const {
    cardNumbers: { first, second, third, fourth },
    owner,
    expiredYear,
    expiredMonth,
    cardType: { name },
  } = useContext(CardStateContext)

  return (
    <EmptyCard>
      <div className="card-top">
        <p className="font-sm">{name}</p>
      </div>
      <div className="card-middle">
        <div className="small-card__chip" />
        <div className="card-number">
          <span>{getCardNumbersDisplay({ first, second, third, fourth })}</span>
        </div>
      </div>
      <div className="card-bottom">
        <div className="card-bottom__info">
          <span className="card-text">{owner}</span>
          <span className="card-text">{getCardExpiredDateDisplay({ expiredMonth, expiredYear })}</span>
        </div>
      </div>
    </EmptyCard>
  )
}

export default PreviewCard
