import { PAYMENT_STEPS } from '@/pages/PaymentPage'
import { useStep } from './useStep'

export const usePaymentStep = () => useStep(PAYMENT_STEPS)
