import { Button } from '@/components/Button'
import { Card } from '@/features/payments/Card'
import { PaymentsMachineContext } from '@/service/payments/payments.machine'
import { usePaymentCardList } from '@/service/payments/usePaymentCardList'

export const CardsPage = () => {
  const { getCardList, editCard, createCard, deleteCard } = usePaymentCardList()
  const paymentsMachine = PaymentsMachineContext.useSelector((state) => state)

  return (
    <div>
      <div key={paymentsMachine.value}>
        {getCardList({ sortType: 'asc' }).map((card) => {
          const cardNumbers = [
            card.cardNumber1,
            card.cardNumber2,
            card.cardNumber3,
            card.cardNumber4,
          ].join('')

          return (
            <div key={card.id} style={{ position: 'relative' }}>
              <Button
                type="button"
                onClick={() => deleteCard(card.id)}
                style={{ position: 'absolute', top: '-13px', right: '-13px' }}
              >
                ❌
              </Button>

              <Card backgroundColor="orange" onClick={() => editCard(card)}>
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
                    <Card.CardExpirationDate expirationDate={card.expirationDate} />
                    <Card.CardHolderName name={card.cardholderName} />
                  </div>
                </div>
              </Card>

              <span style={{ display: 'flex', justifyContent: 'center' }}>
                {card.nickName || 'master'}
              </span>
            </div>
          )
        })}
      </div>

      <Card
        backgroundColor="#E5E5E5"
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Button style={{ fontSize: '30px' }} onClick={() => createCard()} type="button">
          +
        </Button>
      </Card>
    </div>
  )
}
