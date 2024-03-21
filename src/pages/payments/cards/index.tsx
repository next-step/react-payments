import { Card } from '@/features/payments/Card'
import { usePaymentCardList } from '@/service/payments/usePaymentCardList'

export const CardsPage = () => {
  const { getCardList } = usePaymentCardList()

  return (
    <div>
      {getCardList({ sortType: 'asc' }).map((card) => {
        const cardNumbers = [
          card.cardNumber1,
          card.cardNumber2,
          card.cardNumber3,
          card.cardNumber4,
        ].join('')

        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
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
  )
}
