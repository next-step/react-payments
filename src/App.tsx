import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Modal } from '@/components/modal'
import { CardProvider, CardListProvider, ModalProvider } from '@/providers'
import routes from '@/routes'

const router = createBrowserRouter(routes)

function App() {
  return (
    <div className="root">
      <ModalProvider>
        <CardListProvider>
          <CardProvider>
            <RouterProvider router={router} />
            <Modal />
          </CardProvider>
        </CardListProvider>
      </ModalProvider>
    </div>
  )
}

export default App
