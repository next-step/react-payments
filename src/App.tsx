import useAddCard from 'hooks/use-addCard'
import { AddCardPage } from 'pages/AddCardPage/AddCardPage'
import { CardListPage } from 'pages/CardListPage/CardListPage'
import React, { useState } from 'react'
import './App.css'

function App() {
  const [card, setCard] = useAddCard()
  const [isAddCard, setIsAddCard] = useState(false)
  return card && isAddCard ? <AddCardPage /> : <CardListPage />
}

export default App
