import { useMachine } from '@xstate/react'
import { useRef } from 'react'
import { setup } from 'xstate'

import { Form } from '@/hooks/form/formContext'

import { formInitialValues } from '../const'
import { FormType } from '../type'
import { Step1 } from './components/Step1'
import { Step1Validate } from './service/validations'

const paymentsMachine = setup({}).createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAcCGBPAtmAdgF1gGU8xlkwAnAOgGNUKIBaCsKAS1jwtTzYHscjTvTwBiQgFUAQgFkAkgBUA2gAYAuohR9YbXgM0gAHogBMAZgDsVEwBYTADgCMjgJwmVFi3ZMAaEOkR7EwBfUL8cPgg4AzQsXAJiUnIKGO1dfhwDYwRGG0cqIIA2SwBWGxUbEpMLexK-AJySqhKVVsczR3sLFRNHFTKwkFjsfCISMkpaeiYWdk5uPUFhCjxUnUWsxEKqRwszQtsSlzKLXpt7esCQ4L9h+LGkyboGZlYOLh4Mxho+TGQAGzAJDW6X0SCMiDMQWsKg6Jjq-iuoVCQA */
  id: 'payments',
  initial: 'card-registration-start',
  states: {
    'card-registration-start': {
      on: {
        NEXT: {
          target: 'card-registration-complete',
        },
      },
    },
    'card-registration-complete': {
      on: {
        PREV: {
          target: 'card-registration-start',
        },
      },
    },
  },
})

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
