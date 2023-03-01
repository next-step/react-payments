import { Link } from 'react-router-dom';

import { HoldingCard } from 'components/domain';

import { useCardState } from 'contexts/CardContextProvider/hooks';

import { CardType } from 'types/card';

function HoldingCards() {
  const { cards } = useCardState();

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">보유 카드</h2>
      </div>
      <Link to="new" className="card-box">
        <div className="empty-card">+</div>
      </Link>
      {cards.map((card) => (
        <HoldingCard key={cardNumberToString(card)} card={card} />
      ))}
    </div>
  );
}

const cardNumberToString = (card: CardType) => Object.values(card.cardNumber).toString();

export default HoldingCards;
