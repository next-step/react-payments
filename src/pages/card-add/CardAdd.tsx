import { useState } from 'react'

import { Card } from '@/components/card'
import { CardForm } from '@/pages/card-add/card-form'

function CardAdd() {
  const [cardInfo, setCardInfo] = useState({
    cardNumber: { first: '', second: '', third: '', fourth: '' },
    name: '',
    expiratedYear: 0,
    expiratedMonth: 0,
  })

  return (
    <div className="root">
      <div className="app">
        <h2 className="page-title">&#60; 카드 추가</h2>
        <Card
          cardNumber={cardInfo.cardNumber}
          name={cardInfo.name}
          expiratedYear={cardInfo.expiratedYear}
          expiratedMonth={cardInfo.expiratedMonth}
        />
        {/* Todo: Composition Pattern으로 바꿔보자 */}
        <CardForm />
        <div className="button-box">
          <span className="button-text">다음</span>
        </div>
      </div>
    </div>
  )
}

export default CardAdd
