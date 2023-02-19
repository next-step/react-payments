import React, { ChangeEvent, useState } from 'react'
import useAddCard from 'hooks/use-addCard'

import { CardCompanyCodeType, CardType } from 'models/card.model'

import RegisterCardPage from 'pages/RegisterCardPage/RegisterCardPage'
import CompleteCardPage from 'pages/CompleteCardPage/CompleteCardPage'
import { Modal } from 'components/ui/Modal'
import { CardCompanyList } from 'components/CardCompanyList'
import './AddCardPage'

type AddCardPageProps = {
  onNavigate: () => void
}

export const AddCardPage: React.FC<AddCardPageProps> = ({ onNavigate }) => {
  const [card, setCard] = useState<CardType>({
    cardNumber: '',
    expireDate: '',
    cardOwner: '',
    pinCode: '',
    password: '',
    cardNickname: '',
    cardCompanyCode: 'C000',
  })
  const [isOpenModal, setIsOpenModal] = useState(false)

  const changeValue = (e: ChangeEvent, key: keyof CardType) => {
    const { value } = e.target as HTMLInputElement
    setIsOpenModal(true)
    setCard({
      ...card,
      [key]: value,
    })
  }

  const clickCardCompany = (value: CardCompanyCodeType) => {
    setCard({
      ...card,
      cardCompanyCode: value,
    })
    setIsOpenModal(false)
  }

  const initCard = () => {
    onNavigate()
    setCard({
      cardNumber: '',
      expireDate: '',
      cardOwner: '',
      pinCode: '',
      password: '',
      cardNickname: '',
      cardCompanyCode: 'C000',
    })
  }

  const { cardCompanyCode, cardOwner, cardNickname, cardNumber, password, pinCode, expireDate } =
    card
  const isCompleteRegister =
    cardNumber && cardCompanyCode !== 'C000' && password && pinCode && expireDate

  return (
    <main id='add-card-container'>
      {isCompleteRegister ? (
        <CompleteCardPage card={card} changeValue={changeValue} initCard={initCard} />
      ) : (
        <RegisterCardPage card={card} onNavigate={onNavigate} changeValue={changeValue} />
      )}

      {cardNumber && cardCompanyCode === 'C000' && isOpenModal && (
        <div className='modal-container'>
          <CardCompanyList onClick={clickCardCompany} />
        </div>
      )}
    </main>
  )
}
