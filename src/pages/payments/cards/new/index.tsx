import { useRef } from 'react'

import { useFunnel } from '@/hooks/useFunnel'

import { formInitialValues } from '../const'
import { FormType } from '../type'
import { Step1 } from './components/Step1'
import { Form } from './contexts/FormContext'
import {
  checkCardholderName,
  checkCardNumber,
  checkCardPassword,
  checkExpirationDate,
  checkSecurityCode,
} from './service/validations'

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
          validate={(values) => {
            const errors: Record<keyof FormType, string> = {
              cardholderName: '',
              cardNumber1: '',
              cardNumber2: '',
              cardNumber3: '',
              cardNumber4: '',
              cardPassword1: '',
              cardPassword2: '',
              expirationDate: '',
              securityCode: '',
            }

            const [expirationMonth, expirationYear] = values.expirationDate.split('/')

            if (!checkExpirationDate(expirationMonth, expirationYear)) {
              errors.expirationDate = '월은 1이상 12이하 숫자를 입력해 주세요.'
            }

            if (!checkCardholderName(values.cardholderName)) {
              errors.cardholderName = '이름은 최대 30자리 까지 입력할 수 있습니다.'
            }

            if (!checkCardNumber(values.cardNumber1)) {
              errors.cardNumber1 = '카드번호은 4개의 숫자를 입력해 주세요.'
            }

            if (!checkCardNumber(values.cardNumber2)) {
              errors.cardNumber2 = '카드번호은 4개의 숫자를 입력해 주세요.'
            }

            if (!checkCardNumber(values.cardNumber3)) {
              errors.cardNumber3 = '카드번호은 4개의 숫자를 입력해 주세요.'
            }

            if (!checkCardNumber(values.cardNumber4)) {
              errors.cardNumber4 = '카드번호은 4개의 숫자를 입력해 주세요.'
            }

            if (!checkSecurityCode(values.securityCode)) {
              errors.securityCode = '보안코드은 3개의 숫자를 입력해 주세요.'
            }

            if (!checkCardPassword(values.cardPassword1)) {
              errors.cardPassword1 = '카드 비밀번호의 앞 2자리를 입력해 주세요.'
            }

            if (!checkCardPassword(values.cardPassword2)) {
              errors.cardPassword2 = '카드 비밀번호의 앞 2자리를 입력해 주세요.'
            }

            return errors
          }}
        >
          <Step1 />
        </Form>
      </Funnel.Step>
    </Funnel>
  )
}
