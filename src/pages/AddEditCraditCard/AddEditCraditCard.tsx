import React from 'react'
import useCardItem from 'hooks/useCardItem'
import { CardType, CardTypeKeys } from 'models/card.model'
import { RegisterCard } from 'organisms/RegisterCard'
import { CompleteRegisterCard } from 'organisms/CompleteRegisterCard'
import { CardCompanyList } from 'components/molecules/CardCompanyList'
import { INIT_CARD_VALUE } from 'constants/card'
import { Modal } from 'components/atoms/Modal'
import './AddEditCraditCard.css'

type AddEditCraditCardProps = {
  onNavigate: () => void
  addCard: (card: CardType) => void
}

const AddEditCraditCard: React.FC<AddEditCraditCardProps> = ({
  onNavigate,
  addCard,
}) => {
  const { card, resetCard, updateCard, validator } =
    useCardItem(INIT_CARD_VALUE)

  const completeCardRegistor = () => {
    addCard(card)
    onNavigate()
    resetCard(INIT_CARD_VALUE)
  }

  const changeValue = (value: string, name: CardTypeKeys) => {
    updateCard(value, name)
  }

  const isCompleteRegister =
    validator.cardNumber &&
    validator.cardCompanyCode &&
    validator.password &&
    validator.pinCode &&
    validator.expireDate

  return (
    <>
      <main id='add-card-container'>
        {isCompleteRegister ? (
          <CompleteRegisterCard
            card={card}
            changeValue={changeValue}
            submit={completeCardRegistor}
          />
        ) : (
          <RegisterCard
            card={card}
            onNavigate={onNavigate}
            changeValue={changeValue}
          />
        )}

        <Modal isOpen={validator.cardNumber && !validator.cardCompanyCode}>
          <CardCompanyList onClick={changeValue} />
        </Modal>
      </main>
    </>
  )
}

export default AddEditCraditCard
