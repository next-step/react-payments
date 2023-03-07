import { useContext } from 'react'

import { CardStateContext } from '@/contexts/card'
import { getCardExpiredDateDisplay, getCardNumbersDisplay } from '@/domain'

const BasicCardPart = () => {
  const {
    cardNumbers: { first, second, third, fourth },
    owner,
    expiredYear,
    expiredMonth,
  } = useContext(CardStateContext)

  return (
    <>
      <div className="card-top" />
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
    </>
  )
}

export default BasicCardPart
