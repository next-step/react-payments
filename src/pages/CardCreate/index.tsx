import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CardType } from '../../components/Form'
import Header from '../../components/Layout/Header'
import { useCardDispatch } from '../../context/Card/hooks'
import CardFormContextProvider from '../../context/Form/CardFormContext'
import { useCardFormState } from '../../context/Form/hooks'
import { useValidateCardForm } from '../../hooks/Card/useValidateCardForm'
import { uuidv4 } from '../../utils/crypto'
import CreateCard from './Card'
import CreateCardForm from './Form'
import Styled from './index.style'
import CardCreateModal from './Modal'

const CardCreate = () => {
  const formRef = useRef<React.ElementRef<typeof CreateCardForm>>(null)
  const { error, validateCardForm } = useValidateCardForm({ formRef })
  const [isModalOpen, setModalIsOpen] = useState(false)
  const [cardType, setCardType] = useState<CardType>()

  return (
    <>
      <CardFormContextProvider formRef={formRef}>
        <Header title="카드추가" linkTo="/" />
        <Styled.CardCreateContainer>
          <CreateCard
            cardType={cardType}
            setCardType={setCardType}
            setModalIsOpen={setModalIsOpen}
          />
          <CreateCardForm ref={formRef} error={error} />
          <Styled.ButtonContaienr>
            <SubmitButton
              validateCardForm={validateCardForm}
              cardType={cardType}
            />
          </Styled.ButtonContaienr>
          <CardCreateModal
            isOpen={isModalOpen}
            setIsOpen={setModalIsOpen}
            setCardType={setCardType}
          />
        </Styled.CardCreateContainer>
      </CardFormContextProvider>
    </>
  )
}

const SubmitButton = ({
  validateCardForm,
  cardType,
}: CardSubmitButtonProps) => {
  const { cardExpire, cardNumber, owner } = useCardFormState()
  const cardDispatch = useCardDispatch()
  const navigate = useNavigate()

  const onSubmit = () => {
    const isValidCardForm = validateCardForm()

    if (isValidCardForm) {
      const id = crypto.randomUUID ? crypto.randomUUID() : uuidv4()

      cardDispatch({
        type: 'ADD',
        payload: {
          id,
          card: {
            number1: cardNumber.cardNumber1,
            number2: cardNumber.cardNumber2,
            number3: cardNumber.cardNumber3,
            number4: cardNumber.cardNumber4,
            year: cardExpire.expireAtYear,
            month: cardExpire.expireAtMonth,
            owner,
            type: cardType,
          },
        },
      })

      navigate('/submit')
    }
  }

  return (
    <Styled.CreateCardButton onClick={onSubmit}>다음</Styled.CreateCardButton>
  )
}

export default CardCreate

export interface CardErrorStateProps {
  isCardNumberError: boolean | undefined
  isCardExpireDateError: boolean | undefined
  isCardCvcError: boolean | undefined
  isCardPasswordError: boolean | undefined
}

interface CardSubmitButtonProps {
  validateCardForm: () => boolean
  cardType: CardType | undefined
}
