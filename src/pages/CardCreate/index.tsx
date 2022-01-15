import React, { useRef } from 'react'
import Header from '../../components/Layout/Header'
import Card from './Card'
import CreateCardForm from './Form'
import Styled from './index.style'

export interface CardFormProps {
  cardNumber: () => string
  expiredAt: () => string
  name?: () => string
  cvc: () => string
  password: () => string
}

const CardCreate = () => {
  const formRef = useRef<React.ElementRef<typeof CreateCardForm>>(null)

  const handleSubmit = () => {
    console.log(formRef.current?.cardNumber())
  }
  return (
    <>
      <Header title="카드추가" lintTo="/" />
      <Styled.CardCreateContainer>
        <Card />
        <CreateCardForm ref={formRef} />
        <button onClick={handleSubmit}>submit</button>
      </Styled.CardCreateContainer>
    </>
  )
}

export default CardCreate
