import React, { useState } from 'react'
import './App.css'
import CardList from './pages/CardList.tsx'
import AddCard from './pages/AddCard/index.tsx'

export type PAGE_TYPE = '카드목록' | '카드추가'

function App() {
  const [page, setPage] = useState<PAGE_TYPE>('카드목록')

  return (
    <div className="App">
      {page === '카드목록' && <CardList setPage={setPage} />}
      {page === '카드추가' && <AddCard setPage={setPage} />}
    </div>
  )
}

export default App
