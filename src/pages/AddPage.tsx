import { useState } from 'react'
import { Card as CardType } from 'src/types/card'

import CardCvcInput from '$components/add/CardCvcInput'
import CardExpireDateInput from '$components/add/CardExpireDateInput'
import CardHolderNameInput from '$components/add/CardHolderNameInput'
import CardNumberInput from '$components/add/CardNumberInput'
import Card from '$components/common/Card'
import PageLayout from '$components/common/PageLayout'

function AddPage() {
  const [cardNumber, setCardNumber] = useState<CardType['number']>(['', '', '', ''])
  const [cardExpireDate, setCardExpireDate] = useState<CardType['expireDate']>({ month: '', year: '' })
  const [cardHolderName, setCardHolderName] = useState<CardType['holderName']>('')
  const [cardCvc, setCardCvc] = useState<CardType['cvc']>('')

  console.log({
    cardNumber,
    cardExpireDate,
    cardHolderName,
    cardCvc,
  })

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
      <CardHolderNameInput cardHolderName={cardHolderName} setCardHolderName={setCardHolderName} />
      <CardCvcInput cardCvc={cardCvc} setCardCvc={setCardCvc} />
    </PageLayout>
  )
}

export default AddPage
