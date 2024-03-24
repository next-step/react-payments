import { PaymentsLayout } from '../Layout'
import { Card } from './Components/Card'
import { CardholderName } from './Components/CardholderName'
import { CardNumber } from './Components/CardNumber'
import { CardPassword } from './Components/CardPassword'
import { ExpirationDate } from './Components/ExpirationDate'
import { Next } from './Components/Next'
import { SecurityCode } from './Components/SecurityCode'

export const Step1 = () => {
  return (
    <PaymentsLayout title="카드 추가">
      <Card />

      <CardNumber />

      <ExpirationDate />

      <CardholderName />

      <SecurityCode />

      <CardPassword />

      <Next />
    </PaymentsLayout>
  )
}
