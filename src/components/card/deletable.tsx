import { CardData, CardType } from '@/common/constants'
import { useCardList } from '@/contexts/cardList'
import Card from '.'

const DeletableCard = ({
  cardData,
  type,
  ...props
}: {
  cardData: CardData
  type: CardType
  [key: string]: any
}) => {
  const { setCards } = useCardList()

  const handleDelete = () => {
    setCards(prev => prev.filter(card => card !== cardData))
  }

  return (
    <div className="deletable">
      <Card type={type} cardData={cardData} {...props} />
      <button type="button" className="button" onClick={handleDelete}>
        삭제
      </button>
    </div>
  )
}

export default DeletableCard
