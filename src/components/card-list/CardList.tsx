import { Link } from 'react-router-dom';

import CardBox from '../CardBox';
import Card from '../Card';

import { useCardsContext } from '../hooks/useCardsContext';

export default function CardList() {
  const { cards } = useCardsContext();

  return (
    <div className="root">
      <div className="app flex-column-center">
        <div className="flex-center">
          <h1 className="page-title mb-10">보유 카드</h1>
        </div>
        <Link to="/add" className="button-basic">
          {cards.map((card, index) => (
            <CardBox key={index}>
              <Card
                variant="small"
                cardNumber={card.cardNumber}
                ownerName={card.ownerName}
                expirationDate={card.expirationDate}
              />
            </CardBox>
          ))}
          <CardBox>
            <p>+</p>
          </CardBox>
        </Link>
      </div>
    </div>
  );
}
