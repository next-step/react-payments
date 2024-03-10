import { createBrowserRouter, Navigate } from 'react-router-dom'
import { PaymentPage } from '@/pages/PaymentPage.tsx'
import { PATH } from '@/constants/path'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={PATH.PAYMENT} />
  },
  {
    path: PATH.PAYMENT,
    element: <PaymentPage />
  }
])
