import { PAYMENT_STEPS } from '@/constants'
import { useStep } from '@/hooks'
import { useLocation, useNavigate } from 'react-router-dom'

export const usePaymentStep = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return useStep(PAYMENT_STEPS, location, navigate)
}
