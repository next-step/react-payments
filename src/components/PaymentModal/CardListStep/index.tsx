import { Card } from '@/components'
import { usePaymentStep } from '@/pages/hooks'
import { CardNumber, MM, YY } from '@/components/common/Card/types'
import React, { useContext } from 'react'
import { PaymentContext } from '@/contexts/PaymentContext/PaymentProvider'
import { css } from '@emotion/css'

export const CardListStep = () => {
  const [, setStep] = usePaymentStep()
  const { cardList } = useContext(PaymentContext)

  return (
    <div>
      <div
        className={`root ${css`
          height: ${cardList.length > 2 ? 'auto' : '700px'};
        `}`}>
        <div className="app flex-column-center">
          <div className="flex-center">
            <h2 className="page-title mb-10">보유 카드</h2>
          </div>
          {cardList.map((card, index) => (
            <React.Fragment key={`${card.name}.${index}`}>
              <Card.Small
                name={card.name}
                number={card.number as CardNumber[]}
                owner={card.owner}
                expiry={card.expiry as [MM, YY]}
              />
              <span className="card-nickname">{card.name}</span>
            </React.Fragment>
          ))}
          <Card.New onClick={() => setStep('add card')} />
        </div>
      </div>
    </div>
  )
}
