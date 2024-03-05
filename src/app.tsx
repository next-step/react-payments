import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { CardListPage } from '@/domains/card-list/page'
import { CardRegisterPage } from '@/domains/card-register/page'

const router = createBrowserRouter([
  {
    index: true,
    element: <Navigate to="/card-list" />,
  },
  {
    path: '/card-list',
    element: <CardListPage />,
  },
  {
    path: '/card-register',
    element: <CardRegisterPage />,
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
