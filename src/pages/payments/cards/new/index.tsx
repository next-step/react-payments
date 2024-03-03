import { useFunnel } from '@/hooks/useFunnel'

import { formInitialValues } from '../const'
import { Step1 } from './components/Step1'
import { Form } from './contexts/FormContext'
import { checkCardholderName, checkCardNumber, checkExpirationDate } from './service/validations'

export const AddingCard = () => {
  const { Funnel, changeStep } = useFunnel<'a' | 'b'>('a')

  return (
    <Form
      initialValues={formInitialValues}
      onSubmit={(values) => null}
      validate={(values) => {
        const errors = {
          cardholderName: '',
          cardNumber1: '',
          cardNumber2: '',
          cardNumber3: '',
          cardNumber4: '',
          cardPassword: '',
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
