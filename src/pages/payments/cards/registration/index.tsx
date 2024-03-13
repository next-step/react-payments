import { useMachine } from '@xstate/react'

import { Form } from '@/hooks/form/formContext'
import { paymentsMachine } from '@/service/payments'

import { Step1 } from './components/Step1'
import { Step1Validate } from './service/validations'

export const AddingCard = () => {
  const [state, send, service] = useMachine(paymentsMachine)

  if (state.value === 'card-registration-start') {
    return (
      <Form
        initialValues={state.context.registration}
        onSubmit={(values) => send({ type: 'SUBMIT', value: values })}
        validate={Step1Validate}
      >
        <Step1 />
      </Form>
    )
  }

  if (state.value === 'card-registration-complete') {
    return (
      <>
        <button onClick={() => send({ type: 'PREV' })}> 이전</button>
        <div>등록 완료 페이지 입니다.</div>
      </>
    )
  }
}
