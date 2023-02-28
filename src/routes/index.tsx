import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CardAdd from './CardAdd'
import CardAddComplete from './CardAddComplete'
import CardList from './CardList'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<CardList />} />
      <Route path='/card-add' element={<CardAdd />} />
      <Route path='/card-add-complete' element={<CardAddComplete />} />
    </Routes>
  )
}

export default App
