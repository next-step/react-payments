import { createBrowserRouter } from 'react-router-dom'

import { Home } from './pages/home/Home'
import { AddingCard } from './pages/payments/cards'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/payments/cards',
    element: <AddingCard />,
  },
])
