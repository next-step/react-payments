import { Card } from '@/components';
import { useRouter } from '@/hooks';
import { SecureCardState, useCardState } from '@/contexts/CardContext';

const CardList = () => {
  const { push } = useRouter();
  const cardList = useCardState();

  const handleAddCard = () => push('/add-card');

  const handleConfirmation = (card: SecureCardState) => push('/confirmation', { card });

  return (
    <>
      <Card isAdd onClick={handleAddCard} />
      {cardList.map(({ cardSecurityCode, cardPassword, ...card }) => (
        <Card
          key={card.cardNumber}
          onClick={() => handleConfirmation(card)}
          size="small"
          {...card}
        />
      ))}
    </>
  );
};

export default CardList;
