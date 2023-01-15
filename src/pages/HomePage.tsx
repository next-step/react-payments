import { Card } from '@/components';
import { useRouteDispatch } from '@/hooks';
import { useCardState } from '@/contexts/CardContext';

export default function HomePage() {
  const cardList = useCardState();
  const dispatch = useRouteDispatch();

  const handleConfirmation = () => {
    dispatch({ type: 'PUSH', route: '/confirmation' });
  };

  const handleAddCard = () => {
    dispatch({ type: 'PUSH', route: '/add-card' });
  };

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">보유 카드</h2>
      </div>
      <Card isAdd onClick={handleAddCard} />
      {cardList.map((card) => (
        <Card key={card.cardNumber} onClick={handleConfirmation} size="small" {...card} />
      ))}
    </div>
  );
}
