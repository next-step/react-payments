import { AddCardStep, CardListStep, CompletedAddCardStep } from '@/components'
import { usePaymentStep } from './hooks'
import { PaymentProvider } from '@/contexts/PaymentContext/PaymentProvider'

export const PaymentPage = () => {
  const [Stepper] = usePaymentStep()

  return (
    <PaymentProvider>
      <Stepper>
        <Stepper.Step name="card list">
          <CardListStep />
        </Stepper.Step>
        <Stepper.Step name="add card">
          <AddCardStep />
        </Stepper.Step>
        <Stepper.Step name="completed add card">
          <CompletedAddCardStep />
        </Stepper.Step>
      </Stepper>
    </PaymentProvider>
  )
}
