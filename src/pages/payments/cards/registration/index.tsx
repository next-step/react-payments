import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Form } from '@/hooks/form/formContext'
import { PAYMENT_STATE, PaymentsMachineContext } from '@/service/payments/payments.machine'

import { Step1 } from '../../../../features/payments/Step1'
import { Step2 } from '../../../../features/payments/Step2/Step2'
import { Step1Validate, step2Validate } from '../../../../service/payments/validations'

export const AddingCard = () => {
  const navigate = useNavigate()
  const paymentsMachine = PaymentsMachineContext.useSelector((state) => state)

  const paymentActorRef = PaymentsMachineContext.useActorRef()
  const step2ConditionList: ReadonlyArray<(typeof PAYMENT_STATE)[keyof typeof PAYMENT_STATE]> = [
    PAYMENT_STATE.CARD_NICKNAME_REGISTRATION,
    PAYMENT_STATE.CARD_NICKNAME_SUBMITTING,
  ]

  useEffect(() => {
    if (
      paymentsMachine.value === PAYMENT_STATE.CARD_REGISTRATION_COMPLETE ||
      paymentsMachine.value === PAYMENT_STATE.CARD_EDITING_COMPLETE
    ) {
      navigate('/payments/cards')
    }
  }, [paymentsMachine.value, navigate])

  if (paymentsMachine.value === PAYMENT_STATE.CARD_REGISTRATION_START) {
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

  if (step2ConditionList.includes(paymentsMachine.value)) {
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

  if (paymentsMachine.matches(PAYMENT_STATE.CARD_EDIT)) {
    return (
      <Form
        initialValues={paymentsMachine.context.cardAdditionalInfo}
        validate={step2Validate}
        onSubmit={(values) => {
          paymentActorRef.send({ type: 'EDIT_NICKNAME', value: values.nickName })
        }}
      >
        <Step2 />
      </Form>
    )
  }

  return null
}
