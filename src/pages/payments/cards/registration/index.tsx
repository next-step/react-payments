import { Form } from '@/hooks/form/formContext'
import { PaymentsMachineContext } from '@/service/payments/payments.machine'

import { Step1 } from './components/Step1'
import { Step2 } from './components/Step2/Step2'
import { Step1Validate, step2Validate } from './service/validations'

export const AddingCard = () => {
  const paymentsMachine = PaymentsMachineContext.useSelector((state) => state)

  const paymentActorRef = PaymentsMachineContext.useActorRef()

  if (paymentsMachine.value === 'card-registration-start') {
    return (
      <Form
        initialValues={paymentsMachine.context.registration}
        onSubmit={(values) => paymentActorRef.send({ type: 'SUBMIT', value: values })}
        validate={Step1Validate}
      >
        <Step1 />
      </Form>
    )
  }

  if (['card-registration-complete', 'card-nickname-submitting'].includes(paymentsMachine.value)) {
    return (
      <Form
        initialValues={paymentsMachine.context.cardAdditionalInfo}
        validate={step2Validate}
        onSubmit={(values) => paymentActorRef.send({ type: 'POST_NICKNAME', value: values })}
      >
        {paymentsMachine.value}
        <Step2 />
      </Form>
    )
  }

  if (paymentsMachine.value === 'card-list') {
    return <div>card list</div>
  }
}
