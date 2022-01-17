import { useState } from 'react'
import { Card as CardType } from 'src/types/card'

import CardExpireDateInput from '$components/add/CardExpireDateInput'
import CardNumberInput from '$components/add/CardNumberInput'
import Card from '$components/common/Card'
import PageLayout from '$components/common/PageLayout'

function AddPage() {
  const [cardNumber, setCardNumber] = useState<CardType['number']>(['', '', '', ''])
  const [cardExpireDate, setCardExpireDate] = useState<CardType['expireDate']>({ month: '', year: '' })

  return (
    <PageLayout>
      <Card
        type="small"
        cardNumber={cardNumber}
        holderName=""
        expireMonth={cardExpireDate.month}
        expireYear={cardExpireDate.year}
        company={{ name: '', color: '' }}
      />
      <CardNumberInput cardNumber={cardNumber} setCardNumber={setCardNumber} />
      <CardExpireDateInput cardExpireDate={cardExpireDate} setCardExpireDate={setCardExpireDate} />
    </PageLayout>
  )
}

export default AddPage
