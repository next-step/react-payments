import { useMachine } from '@xstate/react'
import { useRef } from 'react'

import { Form } from '@/hooks/form/formContext'
import { paymentsMachine } from '@/service/paymentMachine'

import { formInitialValues } from '../const'
import { FormType } from '../type'
import { Step1 } from './components/Step1'
import { Step1Validate } from './service/validations'

export const AddingCard = () => {
  const [state, send, service] = useMachine(paymentsMachine)

  const stepValue = useRef<{ step1: FormType }>({ step1: formInitialValues })

  if (state.value === 'card-registration-start') {
    return (
      <Form
        initialValues={stepValue.current.step1}
        onSubmit={(values) => {
          stepValue.current.step1 = values

          send({
            type: 'NEXT',
          })
        }}
        validate={Step1Validate}
      >
        <Step1 />
      </Form>
    )
  }

  return (
    <>
      <button onClick={() => send({ type: 'PREV' })}> 이전</button>
      <div>등록 완료 페이지 입니다.</div>
    </>
  )
}
