import React from 'react'
import { FormInput } from './components/Form/FormInput'
import GlobalStyles from './GlobalStyles'
import Styled from './App.style'

function App() {
  return (
    <>
      <GlobalStyles />
      <Styled.Container>
        <FormInput label="카드번호" type="string" />
      </Styled.Container>
    </>
  )
}

export default App
