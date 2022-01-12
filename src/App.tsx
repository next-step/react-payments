import React from 'react'
import { FormInput } from './components/Form/FormInput'
import GlobalStyles from './GlobalStyles'
import Styled from './App.style'
import { CardProps } from './components/Card'

function App() {
  const card: CardProps = {
    cvc: '',
    number: '',
    owner: '',
    password: '',
    type: '공원',
    validDate: '',
  }

  return (
    <>
      <GlobalStyles />
      <Styled.Container>
        <FormInput
          label="카드번호"
          card={card}
          errorMessage="안뇽"
          maxLength={30}
        >
          <Styled.TestInput />
        </FormInput>
      </Styled.Container>
    </>
  )
}

export default App
