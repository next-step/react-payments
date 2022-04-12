import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import ROUTES from '$constants/routes'
import CardFormContextProvider from '$contexts/CardFormContext'
import AddPage from '$pages/AddPage'
import CompletePage from '$pages/CompletePage'
import ListPage from '$pages/ListPage'
import NotFoundPage from '$pages/NotFoundPage'

import '$styles/index.scss'

function App() {
  return (
    <CardFormContextProvider>
      <Router>
        <Routes>
          <Route path={ROUTES.LIST} element={<ListPage />} />
          <Route path={ROUTES.ADD} element={<AddPage />} />
          <Route path={ROUTES.DETAIL} element={<CompletePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </CardFormContextProvider>
  )
}

export default App
