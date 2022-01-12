import React from 'react'
import './App.css'
import { FormInput } from './components/Form/FormInput'

function App() {
  return (
    <div className="container">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <Card key={'카드다 카드!'} validDate="" number="" owner="" type="" />
        <Card key={'카드다 카드!'} validDate="" number="" owner="" type="" />
      </header> */}
      <FormInput label="카드번호" type="string" />
    </div>
  )
}

export default App
