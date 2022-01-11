import React from 'react'
import logo from './logo.svg'
import './App.css'
import Card from './components/Card/Card'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Card key={'카드다 카드!'} expireData="" number="" owner="" type="" />
      </header>
    </div>
  )
}

export default App
