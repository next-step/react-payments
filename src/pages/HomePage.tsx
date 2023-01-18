import { Card } from '@/components';
import { useRouter } from '@/hooks';
import { SecureCardState, useCardState } from '@/contexts/CardContext';

export default function HomePage() {
  const { push } = useRouter();
  const cardList = useCardState();

  const handleConfirmation = (card: SecureCardState) => {
    push('/confirmation', { card });
  };

  const handleAddCard = () => {
    push('/add-card');
  };

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">보유 카드</h2>
      </div>
      <Card isAdd onClick={handleAddCard} />
      {cardList.map(({ cardSecurityCode, cardPassword, ...card }) => (
        <Card
          key={card.cardNumber}
          onClick={() => handleConfirmation(card)}
          size="small"
          {...card}
        />
      ))}
    </div>
  );
}
