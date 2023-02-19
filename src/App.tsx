import { MobileTemplate } from 'components/MobileTemplate/MobileTemplate'
import useAddCard from 'hooks/use-addCard'
import { AddCardPage } from 'pages/AddCardPage/AddCardPage'
import { CardListPage } from 'pages/CardListPage/CardListPage'
import React, { useState } from 'react'
import './App.css'

function App() {
  const [card, setCard] = useAddCard()
  const [isAddCard, setIsAddCard] = useState(false)
  return <MobileTemplate>{card && isAddCard ? <AddCardPage /> : <CardListPage />}</MobileTemplate>
}

export default App
