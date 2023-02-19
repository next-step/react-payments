import { MobileTemplate } from 'components/MobileTemplate/MobileTemplate'
import { AddCardPage } from 'pages/AddCardPage/AddCardPage'
import { CardListPage } from 'pages/CardListPage/CardListPage'
import React, { useState } from 'react'
import './App.css'

function App() {
  const [isAddCard, setIsAddCard] = useState(false)

  const toggleIsAddCard = (isAdd: boolean) => {
    setIsAddCard(isAdd)
  }
  return (
    <MobileTemplate>
      {isAddCard ? (
        <AddCardPage onNavigate={() => toggleIsAddCard(false)} />
      ) : (
        <CardListPage onClickAddCard={() => toggleIsAddCard(true)} />
      )}
    </MobileTemplate>
  )
}

export default App
