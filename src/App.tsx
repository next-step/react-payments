import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import ROUTES from '$constants/routes'
import CardListContextProvider from '$contexts/CardListContext'
import AddPage from '$pages/AddPage'
import DetailPage from '$pages/DetailPage'
import ListPage from '$pages/ListPage'
import NotFoundPage from '$pages/NotFoundPage'

import '$styles/index.scss'

function App() {
  return (
    <CardListContextProvider>
      <Router>
        <Routes>
          <Route path={ROUTES.LIST} element={<ListPage />} />
          <Route path={ROUTES.ADD} element={<AddPage />} />
          <Route path={ROUTES.DETAIL} element={<DetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </CardListContextProvider>
  )
}

export default App
