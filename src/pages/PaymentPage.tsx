import { AddCardStep, CardListStep, CompletedAddCardStep } from '@/components'
import { PAYMENT_STEPS } from '@/constants'
import { useStep } from '@/hooks'

export const PaymentPage = () => {
  const [Stepper, setStep] = useStep(PAYMENT_STEPS)

  return (
    <Stepper>
      <button type="button" onClick={() => setStep('add card')}>
        Add Card
      </button>
      <button type="button" onClick={() => setStep('completed add card')}>
        Completed add card
      </button>
      <button type="button" onClick={() => setStep('card list')}>
        Card list
      </button>
      <Stepper.Step name="add card">
        <AddCardStep />
      </Stepper.Step>
      <Stepper.Step name="completed add card">
        <CompletedAddCardStep />
      </Stepper.Step>
      <Stepper.Step name="card list">
        <CardListStep />
      </Stepper.Step>
    </Stepper>
  )
}
