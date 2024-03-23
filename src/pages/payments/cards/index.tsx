import { Button } from '@/components/Button'
import { Card } from '@/features/payments/Card'
import { usePaymentCardList } from '@/service/payments/usePaymentCardList'

export const CardsPage = () => {
  const { getCardList, editCard, createCard } = usePaymentCardList()

  return (
    <div>
      <div>
        {getCardList({ sortType: 'asc' }).map((card, i) => {
          const cardNumbers = [
            card.cardNumber1,
            card.cardNumber2,
            card.cardNumber3,
            card.cardNumber4,
          ].join('')

          return (
            <div key={card.id}>
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
        <Button style={{ fontSize: '30px' }} onClick={() => createCard()}>
          +
        </Button>
      </Card>
    </div>
  )
}
