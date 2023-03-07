import React, { useState, useEffect } from 'react'
import { CardType } from 'models/card.model'

type ErrorDataType = {
  code: number
  message: string
}

const useCards = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<ErrorDataType | null>(null)
  const [cards, setCards] = useState<CardType[]>([])

  useEffect(() => {
    setLoading(true)
    setError(null)
    fetch(`http://localhost:3004/cards`)
      .then((res) => res.json())
      .then((data: CardType[]) => setCards(data ?? []))
      .catch((e) =>
        setError({
          code: 500,
          message: '데이터를 불러올 수 없습니다',
        }),
      )
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const addCard = (cardItem: CardType) => {
    setCards([...cards, { ...cardItem, id: cards.length + 1 + '' }])
  }

  return { loading, error, cards, addCard }
}

export default useCards
