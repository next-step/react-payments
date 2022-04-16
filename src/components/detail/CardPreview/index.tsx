import { useParams } from 'react-router-dom'

import Card from '$components/common/Card'
import { useCardList } from '$contexts/CardListContext'

function CardPreview() {
  const { id } = useParams()
  const { getCard } = useCardList()

  const card = getCard(id || '')

  if (!card) {
    return null
  }

  return (
    <Card
      type="small"
      alias={card.alias}
      cardNumber={card.number}
      holderName={card.holderName}
      expireMonth={card.expireDate.month}
      expireYear={card.expireDate.year}
      company={card.company}
    />
  )
}

export default CardPreview
