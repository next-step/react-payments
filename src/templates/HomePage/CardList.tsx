import { Card } from '@/components';
import { 카드_확인_페이지 } from '@/constants';
import { useCardStore, useRouter } from '@/hooks';
import { SecureCardState } from 'literal';

const CardList = () => {
  const { push } = useRouter();
  const { getCardList } = useCardStore();

  const cardList = getCardList();

  const handleAddCard = () => push('/add-card');

  const handleConfirmation = (card: SecureCardState) => push(카드_확인_페이지, { card });

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
