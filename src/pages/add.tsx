import { useState } from 'react'
import { CardData, PageProps } from '@common/constants'
import Card from '@components/card'
import CardForm from '@components/cardForm'

const AddPage = ({ setCards, setRoute }: PageProps) => {
  const [cardData, setCardData] = useState<CardData | null>(null)
  const handleBack = () => {
    setRoute({ route: 'LIST' })
  }
  const saveCard = () => {
    setCards(prev => {
      if (cardData) prev.add(cardData)
      return prev
    })
    setRoute({ route: 'ALIAS', payload: { cardData } })
  }

  return (
    <>
      <div className="page-container">
        <h2 className="page-title">
          <button className="button" onClick={handleBack}>
            &lt;
          </button>{' '}
          카드 추가
        </h2>
        <Card type="small" cardData={cardData} />
        <CardForm saveCard={saveCard} setCardData={setCardData} />
      </div>
    </>
  )
}
export default AddPage
