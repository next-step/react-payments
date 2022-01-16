import React, { useRef } from 'react'
import Header from '../../components/Layout/Header'
import FormContextProvider from '../../context/Form/FormChangeContext'
import Card from './Card'
import CreateCardForm from './Form'
import Styled from './index.style'

export interface CardFormProps {
  cardNumber1: () => string
  cardNumber2: () => string
  cardNumber3: () => string
  cardNumber4: () => string
  expiredAt: () => string
  name?: () => string
  cvc: () => string
  password: () => string
}

const CardCreate = () => {
  const formRef = useRef<React.ElementRef<typeof CreateCardForm>>(null)

  const handleSubmit = () => {
    console.log(formRef.current?.cardNumber1())
  }
  return (
    <>
      <FormContextProvider>
        <Header title="카드추가" lintTo="/" />
        <Styled.CardCreateContainer>
          <Card formRef={formRef} />
          <CreateCardForm ref={formRef} />
          <button onClick={handleSubmit}>submit</button>
        </Styled.CardCreateContainer>
      </FormContextProvider>
    </>
  )
}

export default CardCreate
