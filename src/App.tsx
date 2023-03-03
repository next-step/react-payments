import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { CardProvider, CardListProvider } from '@/providers'
import routes from '@/routes'

const router = createBrowserRouter(routes)

function App() {
  return (
    <div className="root">
      <CardListProvider>
        <CardProvider>
          <RouterProvider router={router} />
        </CardProvider>
      </CardListProvider>
    </div>
  )
}

export default App
