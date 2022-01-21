import React, { useRef, useState } from 'react'
import { CardType } from '../../components/Form'
import Header from '../../components/Layout/Header'
import FormContextProvider from '../../context/Form/FormChangeContext'
import CreateCard from './Card'
import CreateCardForm from './Form'
import Styled from './index.style'
import CardCreateModal from './Modal'

export interface CardFormProps {
  cardNumber1: () => string
  cardNumber2: () => string
  cardNumber3: () => string
  cardNumber4: () => string
  expiredAtMonth: () => string
  expiredAtYear: () => string
  owner: () => string
  cvc: () => string
  password1: () => string
  password2: () => string
}

const CardCreate = () => {
  const formRef = useRef<React.ElementRef<typeof CreateCardForm>>(null)
  const [isModalOpen, setModalIsOpen] = useState(false)
  const [cardType, setCardType] = useState<CardType>()

  return (
    <>
      <FormContextProvider>
        <Header title="카드추가" lintTo="/" />
        <Styled.CardCreateContainer>
          <CreateCard
            formRef={formRef}
            cardType={cardType}
            setCardType={setCardType}
            setModalIsOpen={setModalIsOpen}
          />
          <CreateCardForm ref={formRef} />
          <CardCreateModal
            isOpen={isModalOpen}
            setIsOpen={setModalIsOpen}
            setCardType={setCardType}
          />
        </Styled.CardCreateContainer>
      </FormContextProvider>
    </>
  )
}

export default CardCreate
