import React, { useRef } from 'react'
import Header from '../../components/Layout/Header'
import FormContextProvider from '../../context/Form/FormChangeContext'
import CreateCard from './Card'
import CreateCardForm from './Form'
import Styled from './index.style'

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

  return (
    <>
      <FormContextProvider>
        <Header title="카드추가" lintTo="/" />
        <Styled.CardCreateContainer>
          <CreateCard formRef={formRef} />
          <CreateCardForm ref={formRef} />
        </Styled.CardCreateContainer>
      </FormContextProvider>
    </>
  )
}

export default CardCreate
