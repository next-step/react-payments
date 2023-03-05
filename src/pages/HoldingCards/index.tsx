import { Link } from 'react-router-dom';

import { HoldingCard } from 'components/domain';

import { useCardContext } from 'contexts/CardContextProvider/hooks';

function HoldingCards() {
  const {
    state: { cards },
  } = useCardContext();

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">보유 카드</h2>
      </div>
      <Link to="new" className="card-box">
        <div className="empty-card">+</div>
      </Link>
      {cards.map((card) => (
        <HoldingCard key={card.id} card={card} />
      ))}
    </div>
  );
}

export default HoldingCards;
