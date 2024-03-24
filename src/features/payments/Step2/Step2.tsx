import { Input } from '@/components/Input'
import { Card } from '@/features/payments/Card'
import { useFormContext } from '@/hooks/form/formContext'
import { PaymentsMachineContext } from '@/service/payments/payments.machine'
import { CardAdditionalInitialValues } from '@/service/payments/payments.type'

import { PaymentsLayout } from '../Layout'

export const Step2 = () => {
  const { getFieldProps, errors, touched } = useFormContext<CardAdditionalInitialValues>()
  const paymentsMachine = PaymentsMachineContext.useSelector((state) => state)

  const cardNumbers = [
    paymentsMachine.context.registration.cardNumber1,
    paymentsMachine.context.registration.cardNumber2,
    paymentsMachine.context.registration.cardNumber3,
    paymentsMachine.context.registration.cardNumber4,
  ].join('')

  return (
    <PaymentsLayout back={false}>
      <div className="flex-center">
        <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
      </div>

      <Card backgroundColor="orange">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Card.CardCompany name="Master" />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Card.CardChip />
          </div>

          <div>
            <Card.CarNumber creditCardNumber={cardNumbers} revealCount={8} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Card.CardExpirationDate
              expirationDate={paymentsMachine.context.registration.expirationDate}
            />
            <Card.CardHolderName name={paymentsMachine.context.registration.cardholderName} />
          </div>
        </div>
      </Card>

      <div className="input-container flex-center w-100" style={{ flexDirection: 'column' }}>
        <Input
          style={{
            border: 'none',
            outline: 'none',
            borderBottom: '1px solid #383838',
            backgroundColor: 'transparent',
            borderRadius: '0',
          }}
          type="text"
          placeholder="카드 별칭 (선택)"
          {...getFieldProps('nickName')}
        />
        {touched.nickName && errors.nickName && <span>{errors.nickName}</span>}
      </div>

      <div className="button-box mt-50">
        <button type="submit" className="button-text">
          다음
        </button>
      </div>
    </PaymentsLayout>
  )
}
