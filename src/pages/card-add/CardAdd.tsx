import { useState } from 'react'

import { Card } from '@/components/card'
import { NextButtonBox, PageTitle } from '@/components/layouts'
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
        <PageTitle title="카드 추가" />
        <Card {...cardInfo} />
        {/* Todo: Composition Pattern으로 바꿔보자 */}
        <CardForm />
        <NextButtonBox />
      </div>
    </div>
  )
}

export default CardAdd
