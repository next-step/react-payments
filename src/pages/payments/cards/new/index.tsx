import { useRef } from 'react'

import { Form } from '@/hooks/form/formContext'
import { useFunnel } from '@/hooks/useFunnel'

import { formInitialValues } from '../const'
import { FormType } from '../type'
import { Step1 } from './components/Step1'
import { Step1Validate } from './service/validations'

export const AddingCard = () => {
  const { Funnel, changeStep } = useFunnel<'add-card' | 'complete-card'>('add-card')

  const stepValue = useRef<{ step1: FormType }>({ step1: formInitialValues })

  return (
    <Funnel>
      <Funnel.Step name="add-card">
        <Form
          initialValues={stepValue.current.step1}
          onSubmit={(values) => {
            stepValue.current.step1 = values

            changeStep('complete-card')
          }}
          validate={Step1Validate}
        >
          <Step1 />
        </Form>
      </Funnel.Step>

      <Funnel.Step name="complete-card">
        <button onClick={() => changeStep('add-card')}> 이전</button>
        <div>등록 완료 페이지 입니다.</div>
      </Funnel.Step>
    </Funnel>
  )
}
