import { createBrowserRouter } from 'react-router-dom'

import { Home } from './pages/home/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
])
