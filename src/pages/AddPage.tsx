import { useState } from 'react'
import { Card as CardType } from 'src/types/card'

import CardNumberInput from '$components/add/CardNumberInput'
import Card from '$components/common/Card'
import PageLayout from '$components/common/PageLayout'

function AddPage() {
  const [cardNumber, setCardNumber] = useState<CardType['number']>(['', '', '', ''])

  return (
    <PageLayout>
      <Card
        type="small"
        cardNumber={cardNumber}
        holderName=""
        expireMonth=""
        expireYear=""
        company={{ name: '', color: '' }}
      />
      <CardNumberInput cardNumber={cardNumber} setCardNumber={setCardNumber} />
    </PageLayout>
  )
}

export default AddPage
