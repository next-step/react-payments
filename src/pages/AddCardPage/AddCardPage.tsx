import React from 'react'
import useAddCard from 'hooks/use-addCard'
import { Header } from 'components/ui/Header'
import { AiOutlineLeft } from 'react-icons/ai'

type AddCardPageProps = {
  onNavigate: () => void
}

export const AddCardPage: React.FC<AddCardPageProps> = ({ onNavigate }) => {
  const [card, setCard] = useAddCard()
  return (
    <>
      <Header title='카드 추가' icon={<AiOutlineLeft />} onClickIcon={onNavigate} />

      <div>AddCardPage</div>
    </>
  )
}
