import useCards from 'hooks/use-cards'
import React from 'react'

export const CardListPage = () => {
  const [loading, error, cards] = useCards()
  if (loading) return <p>loading</p>
  if (error) return <p>error</p>

  return <div>CardListPage</div>
}
