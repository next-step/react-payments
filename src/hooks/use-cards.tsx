import React, { useState, useEffect } from 'react'
import { Card } from 'models/card.model'

const useCards = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<{ code: number; message: string } | null>(null)
  const [cards, setCards] = useState<Card[]>([])

  useEffect(() => {
    setLoading(true)
    setError(null)
    fetch(`http://localhost:3004/cards`)
      .then((res) => res.json())
      .then((data) => setCards(data))
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

  return [loading, error, cards]
}

export default useCards
