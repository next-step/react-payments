import { useRef } from 'react'

import { useFunnel } from '@/hooks/useFunnel'

import { formInitialValues } from '../const'
import { FormType } from '../type'
import { Step1 } from './components/Step1'
import { Form } from './contexts/FormContext'
import { Step1Validate } from './service/validations'

export const AddingCard = () => {
  const { Funnel, changeStep } = useFunnel<'a' | 'b'>('a')

  const stepValue = useRef<{ step1: FormType }>({ step1: formInitialValues })

  return (
    <Funnel>
      <Funnel.Step name="a">
        <Form
          initialValues={stepValue.current.step1}
          onSubmit={(values) => {
            stepValue.current.step1 = values

            changeStep('b')
          }}
          validate={Step1Validate}
        >
          <Step1 />
        </Form>
      </Funnel.Step>

      <Funnel.Step name="b">
        <button onClick={() => changeStep('a')}> 이전</button>
        <div>등록 완료 페이지 입니다.</div>
      </Funnel.Step>
    </Funnel>
  )
}
