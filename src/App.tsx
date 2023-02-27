import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { CardProvider } from '@/providers/card'
import routes from '@/routes'

const router = createBrowserRouter(routes)

function App() {
  return (
    <div className="root">
      <CardProvider>
        <RouterProvider router={router} />
      </CardProvider>
    </div>
  )
}

export default App
