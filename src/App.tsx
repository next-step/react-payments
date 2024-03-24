import { RouterProvider } from 'react-router-dom'

import { router } from './router'
import { PaymentsMachineContext } from './service/payments/payments.machine'

function App() {
  return (
    <PaymentsMachineContext.Provider>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </PaymentsMachineContext.Provider>
  )
}

export default App
