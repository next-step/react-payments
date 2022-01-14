import { Route, Routes } from 'react-router-dom'
import CardList from './pages/CardList'
import CreateCard from './pages/CreateCard'
import SubmitCard from './pages/SubmitCard'

function App() {
  return (
    <Routes>
      <Route path="/" element={<CardList />} />
      <Route path="/create" element={<CreateCard />} />
      <Route path="/submit" element={<SubmitCard />} />
    </Routes>
  )
}

export default App
