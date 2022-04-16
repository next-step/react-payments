import { useNavigate } from 'react-router-dom'
import urlcat from 'urlcat'

import Card from '$components/common/Card'
import ROUTES from '$constants/routes'
import { useCardList } from '$contexts/CardListContext'

function CardList() {
  const navigate = useNavigate()
  const { cards } = useCardList()

  return cards.map((card) => (
    <Card
      key={card.number.join('')}
      onClick={() => navigate(urlcat(ROUTES.DETAIL, { id: card.id }))}
      type="small"
      alias={card.alias}
      cardNumber={card.number}
      holderName={card.holderName}
      expireMonth={card.expireDate.month}
      expireYear={card.expireDate.year}
      company={card.company}
    />
  ))
}

export default CardList
