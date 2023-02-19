import React from 'react'
import useAddCard from 'hooks/use-addCard'

type AddCardPageProps = {
  onNavigate: () => void
}

export const AddCardPage: React.FC<AddCardPageProps> = ({ onNavigate }) => {
  const [card, setCard] = useAddCard()
  return <div>AddCardPage</div>
}
