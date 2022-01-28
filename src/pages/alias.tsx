import { SyntheticEvent, useRef } from 'react'
import Card from '@/components/card'
import { useCardList } from '@/contexts/cardList'
import { useRouter } from '@/contexts/route'

const AliasPage = () => {
  const { setRoute } = useRouter()
  const { editingCard, setEditingCard, setCards } = useCardList()
  const inputRef = useRef<HTMLInputElement>(null)

  const patchCard = (e: SyntheticEvent) => {
    e.preventDefault()
    if (!editingCard) return
    setCards(prev => {
      const prevIndex = prev.indexOf(editingCard)
      const newCard = { ...editingCard }
      newCard.alias = (inputRef.current && inputRef.current.value) || newCard.cardName
      if (prevIndex > -1) {
        const next = [...prev]
        next.splice(prevIndex, 1, newCard)
        return next
      }
      return [newCard, ...prev]
    })
    setEditingCard(null)
    setRoute('LIST')
  }

  return (
    <div className="page-container flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
      </div>
      <Card type="big" cardData={editingCard} />
      <form onSubmit={patchCard}>
        <div className="input-container flex-center w-100">
          <input
            ref={inputRef}
            className="input-underline w-75"
            type="text"
            placeholder="카드 별칭"
            defaultValue={editingCard?.alias}
            maxLength={10}
            size={10}
          />
        </div>
        <div className="button-box mt-50">
          <button type="submit" className="button">
            다음
          </button>
        </div>
      </form>
    </div>
  )
}

export default AliasPage
