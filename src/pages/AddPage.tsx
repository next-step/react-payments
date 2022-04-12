import { useCallback, useState } from 'react'

import AddPageHeader from '$components/add/AddPageHeader'
import AddPageNextButton from '$components/add/AddPageNextButton'
import CardCompanyModal from '$components/add/CardCompanyModal'
import CardCvcInput from '$components/add/CardCvcInput'
import CardExpireDateInput from '$components/add/CardExpireDateInput'
import CardHolderNameInput from '$components/add/CardHolderNameInput'
import CardNumberInput from '$components/add/CardNumberInput'
import CardPasswordInput from '$components/add/CardPasswordInput'
import CardPreview from '$components/add/CardPreview'
import PageLayout from '$components/common/PageLayout'
import { useCardForm } from '$contexts/CardFormContext'

function AddPage() {
  const { cardForm, setNumber, setExpireDate, setHolderName, setPassword, setCvc, setCompany } = useCardForm()
  const [isModalOpen, setModalOpen] = useState(false)

  const closeModal = useCallback(() => {
    setModalOpen(false)
  }, [])

  return (
    <PageLayout>
      <AddPageHeader />
      <CardPreview />
      <CardNumberInput cardNumber={cardForm.number} setCardNumber={setNumber} />
      <CardExpireDateInput cardExpireDate={cardForm.expireDate} setCardExpireDate={setExpireDate} />
      <CardHolderNameInput cardHolderName={cardForm.holderName} setCardHolderName={setHolderName} />
      <CardCvcInput cardCvc={cardForm.cvc} setCardCvc={setCvc} />
      <CardPasswordInput cardPassword={cardForm.password} setCardPassword={setPassword} />
      <AddPageNextButton />
      {isModalOpen && <CardCompanyModal setCardCompany={setCompany} closeModal={closeModal} />}
    </PageLayout>
  )
}

export default AddPage
