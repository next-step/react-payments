import { Link, useNavigate } from 'react-router-dom';

import CardBox from '../CardBox';
import Card from '../Card';

import { useCardsContext } from '../hooks/useCardsContext';

export default function CardList() {
  const { cards } = useCardsContext();

  const navigate = useNavigate();

  const handleClickEdit = () => {
    navigate('/add/complete');
  };

  const handleClickAdd = () => {
    navigate('/add');
  };

  return (
    <div className="root">
      <div className="app flex-column-center">
        <div className="flex-center">
          <h1 className="page-title mb-10">보유 카드</h1>
        </div>
        {cards.reverse().map((card, index) => (
          <CardBox key={index} onClick={handleClickEdit}>
            <Card
              variant="small"
              cardNumber={card.cardNumber}
              ownerName={card.ownerName}
              expirationDate={card.expirationDate}
            />
          </CardBox>
        ))}
        <CardBox onClick={handleClickAdd}>
          <p>+</p>
        </CardBox>
      </div>
    </div>
  );
}
