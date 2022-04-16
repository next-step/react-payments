import CardCvcInput from '$components/add/CardCvcInput'
import CardExpireDateInput from '$components/add/CardExpireDateInput'
import CardHolderNameInput from '$components/add/CardHolderNameInput'
import CardNumberInput from '$components/add/CardNumberInput'
import CardPasswordInput from '$components/add/CardPasswordInput'
import { useCardForm } from '$contexts/CardFormContext'

function CardForm() {
  const { cardForm, setNumber, setExpireDate, setHolderName, setPassword, setCvc } = useCardForm()

  return (
    <>
      <CardNumberInput cardNumber={cardForm.number} setCardNumber={setNumber} />
      <CardExpireDateInput cardExpireDate={cardForm.expireDate} setCardExpireDate={setExpireDate} />
      <CardHolderNameInput cardHolderName={cardForm.holderName} setCardHolderName={setHolderName} />
      <CardCvcInput cardCvc={cardForm.cvc} setCardCvc={setCvc} />
      <CardPasswordInput cardPassword={cardForm.password} setCardPassword={setPassword} />
    </>
  )
}

export default CardForm
