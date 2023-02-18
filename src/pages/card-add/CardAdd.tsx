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
        <CardForm>
          <CardForm.CardNumber />
          <CardForm.CardExpiredDate />
          <CardForm.CardOwner />
          <CardForm.CardSecurityCode />
          <CardForm.CardPassword />
        </CardForm>
        <NextButtonBox />
      </div>
    </div>
  )
}

export default CardAdd
