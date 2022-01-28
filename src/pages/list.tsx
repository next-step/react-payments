import { CardData } from '@/common/constants'
import Card from '@/components/card'
import DeletableCard from '@/components/card/deletable'
import { useCardList } from '@/contexts/cardList'
import { useRouter } from '@/contexts/route'

const ListPage = () => {
  const { setRoute } = useRouter()
  const { cards, setEditingCard } = useCardList()

  const handleClickCard = (card: CardData) => () => {
    setEditingCard(card)
    setRoute('ALIAS')
  }

  return (
    <div className="page-container flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">보유 카드</h2>
      </div>
      {cards.map((card, i) => (
        <DeletableCard key={i} type="small" cardData={card} onClick={handleClickCard(card)} />
      ))}
      <Card type="new" cardData={null} />
    </div>
  )
}

export default ListPage
