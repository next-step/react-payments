import Card from '$components/common/Card'
import { useCardForm } from '$contexts/CardFormContext'

function CardPreview() {
  const { cardForm } = useCardForm()

  return (
    <Card
      type="small"
      cardNumber={cardForm.number}
      holderName={cardForm.holderName}
      expireMonth={cardForm.expireDate.month}
      expireYear={cardForm.expireDate.year}
      company={cardForm.company}
    />
  )
}

export default CardPreview
