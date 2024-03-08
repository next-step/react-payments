import { createBrowserRouter } from 'react-router-dom'

import { Home } from './pages/home/Home'
import { CardsPage } from './pages/payments/cards'
import { AddingCard } from './pages/payments/cards/registration'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/payments/cards/new',
    element: <AddingCard />,
  },
  {
    path: '/payments/cards',
    element: <CardsPage />,
  },
])
