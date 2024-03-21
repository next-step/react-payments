import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Form } from '@/hooks/form/formContext'
import { PaymentsMachineContext } from '@/service/payments/payments.machine'

import { Step1 } from '../../../../features/payments/Step1'
import { Step2 } from '../../../../features/payments/Step2/Step2'
import { Step1Validate, step2Validate } from '../../../../service/payments/validations'

export const AddingCard = () => {
  const navigate = useNavigate()
  const paymentsMachine = PaymentsMachineContext.useSelector((state) => state)

  const paymentActorRef = PaymentsMachineContext.useActorRef()

  useEffect(() => {
    if (paymentsMachine.value === 'card-list') {
      navigate('/payments/cards')
    }
  }, [paymentsMachine.value, navigate])

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
        <Step2 />
      </Form>
    )
  }

  return null
}
