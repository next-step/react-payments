import { CardData, CardType, SetRoute } from '@common/constants'
import EmptyCard from './emptyCard'
import NewCard from './newCard'
import NormalCard from './normalCard'

const Card = ({ type, cardData, setRoute }: { type: CardType; cardData: CardData | null; setRoute?: SetRoute }) => {
  if (type === 'new' && setRoute) return <NewCard setRoute={setRoute} />
  if (!cardData) return <EmptyCard />
  return <NormalCard type={type} cardData={cardData} />
}
export default Card
