import { createContext, useContext } from 'react'

import { useFunnel } from '@/hooks/useFunnel'

import { Step1 } from './components/Step1'
import { Form } from './contexts/FormContext'
import { checkExpirationDate } from './service/validations'

export const AddingCard = () => {
  const { Funnel, changeStep } = useFunnel<'a' | 'b'>('a')

  return (
    <Form
      initialValues={{
        cardNumber: '',
        expirationDate: '',
        cardholderName: '',
        securityCode: '',
        cardPassword: '',
      }}
      onSubmit={(values) => null}
      validate={(values) => {
        const errors = {
          cardholderName: '',
          cardNumber: '',
          cardPassword: '',
          expirationDate: '',
          securityCode: '',
        }

        const [expirationMonth, expirationYear] = values.expirationDate.split('/')

        if (!checkExpirationDate(expirationMonth, expirationYear)) {
          errors.expirationDate = '월은 1이상 12이하 숫자를 입력해 주세요.'
        }

        return errors
      }}
    >
      <Funnel>
        <Funnel.Step name="a">
          <Step1 onNext={() => changeStep('b')} />
        </Funnel.Step>
      </Funnel>
    </Form>
  )
}
