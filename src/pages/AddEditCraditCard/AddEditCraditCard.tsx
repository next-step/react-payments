import React, { ChangeEvent, useState } from 'react'
import useAddCard from 'hooks/use-addCard'
import {
  CardCompanyCodeType,
  CardType,
  UpdateCardParams,
} from 'models/card.model'

import RegisterCardPage from 'pages/RegisterCardPage/RegisterCardPage'
import CompleteCardPage from 'pages/CompleteCardPage/CompleteCardPage'
import { Modal } from 'components/ui/Modal'
import { CardCompanyList } from 'components/CardCompanyList'
import './AddEditCraditCard'
import { INIT_CARD_VALUE } from 'constants/card'

type AddEditCraditCardProps = {
  onNavigate: () => void
  addCard: (card: CardType) => void
}

const AddEditCraditCard: React.FC<AddEditCraditCardProps> = ({
  onNavigate,
  addCard,
}) => {
  const { card, resetCard, updateCard } = useAddCard(INIT_CARD_VALUE)
  const [isOpenModal, setIsOpenModal] = useState(false)

  const completeCardRegistor = () => {
    addCard(card)
    onNavigate()
    resetCard(INIT_CARD_VALUE)
  }

  const changeValue = (params: UpdateCardParams) => {
    updateCard(params)
  }

  const { cardCompanyCode, cardNumber, password, pinCode, expireDate } = card
  const isCompleteRegister =
    cardNumber &&
    cardCompanyCode !== 'C000' &&
    password &&
    pinCode &&
    expireDate

  return (
    <main id='add-card-container'>
      {isCompleteRegister ? (
        <CompleteCardPage
          card={card}
          changeValue={changeValue}
          submit={completeCardRegistor}
        />
      ) : (
        <RegisterCardPage
          card={card}
          onNavigate={onNavigate}
          changeValue={changeValue}
        />
      )}

      {cardNumber && cardCompanyCode === 'C000' && isOpenModal && (
        <div className='modal-container'>
          <CardCompanyList onClick={changeValue} />
        </div>
      )}
    </main>
  )
}

export default AddEditCraditCard
