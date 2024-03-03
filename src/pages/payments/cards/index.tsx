import { Card } from './components/Card'
import { CardholderName } from './components/CardholderName'
import { CardNumber } from './components/CardNumber'
import { CardPassword } from './components/CardPassword'
import { ExpirationDate } from './components/ExpirationDate'
import { PaymentsLayout } from './components/Layout'
import { Next } from './components/Next'
import { SecurityCode } from './components/SecurityCode'

export const AddingCard = () => {
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
