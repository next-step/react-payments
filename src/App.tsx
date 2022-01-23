import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import AddPage from '$pages/AddPage'
import CompletePage from '$pages/CompletePage'
import ListPage from '$pages/ListPage'
import NotFoundPage from '$pages/NotFoundPage'
import '$styles/index.scss'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/add/complete" element={<CompletePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App
