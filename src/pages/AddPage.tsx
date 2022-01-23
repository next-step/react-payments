import { useCallback, useEffect, useState } from 'react'
import { Card as CardType } from 'src/types/card'

import AddPageHeader from '$components/add/AddPageHeader'
import AddPageNextButton from '$components/add/AddPageNextButton'
import CardCompanyModal, { COMPANY_LIST } from '$components/add/CardCompanyModal'
import CardCvcInput from '$components/add/CardCvcInput'
import CardExpireDateInput from '$components/add/CardExpireDateInput'
import CardHolderNameInput from '$components/add/CardHolderNameInput'
import CardNumberInput from '$components/add/CardNumberInput'
import CardPasswordInput from '$components/add/CardPasswordInput'
import Card from '$components/common/Card'
import PageLayout from '$components/common/PageLayout'

function AddPage() {
  const [cardNumber, setCardNumber] = useState<CardType['number']>(['', '', '', ''])
  const [cardExpireDate, setCardExpireDate] = useState<CardType['expireDate']>({ month: '', year: '' })
  const [cardHolderName, setCardHolderName] = useState<CardType['holderName']>('')
  const [cardCvc, setCardCvc] = useState<CardType['cvc']>('')
  const [cardPassword, setCardPassword] = useState<CardType['password']>(['', ''])
  const [cardCompany, setCardCompany] = useState<CardType['company']>({ name: '', color: '' })
  const [isModalOpen, setModalOpen] = useState(false)
  const [isReadyToCreate, setReadyToCreate] = useState(false)

  const closeModal = useCallback(() => {
    setModalOpen(false)
  }, [])

  useEffect(() => {
    cardNumber[0].length === 4 &&
      cardNumber[1].length === 4 &&
      setCardCompany(COMPANY_LIST[Number(cardNumber[0] + cardNumber[1]) % 7])
  }, [cardNumber])

  useEffect(() => {
    setReadyToCreate(
      cardNumber.join('').length === 16 &&
        cardExpireDate.month.length === 2 &&
        cardExpireDate.year.length === 2 &&
        cardCvc.length === 3 &&
        cardPassword.join('').length === 2,
    )
  }, [cardCvc.length, cardExpireDate.month.length, cardExpireDate.year.length, cardNumber, cardPassword])

  return (
    <PageLayout>
      <AddPageHeader />
      <Card
        type="small"
        cardNumber={cardNumber}
        holderName={cardHolderName}
        expireMonth={cardExpireDate.month}
        expireYear={cardExpireDate.year}
        company={cardCompany}
      />
      <CardNumberInput cardNumber={cardNumber} setCardNumber={setCardNumber} />
      <CardExpireDateInput cardExpireDate={cardExpireDate} setCardExpireDate={setCardExpireDate} />
      <CardHolderNameInput cardHolderName={cardHolderName} setCardHolderName={setCardHolderName} />
      <CardCvcInput cardCvc={cardCvc} setCardCvc={setCardCvc} />
      <CardPasswordInput cardPassword={cardPassword} setCardPassword={setCardPassword} />
      <AddPageNextButton disabled={!isReadyToCreate} />
      {isModalOpen && <CardCompanyModal setCardCompany={setCardCompany} closeModal={closeModal} />}
    </PageLayout>
  )
}

export default AddPage
