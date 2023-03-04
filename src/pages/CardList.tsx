import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Card } from '../components';
import { CreditCard, PaymentsContext } from '../context/PaymentsContext';

const CardAdd = () => {
  const navigate = useNavigate();
  const { cardList, removeCard } = useContext(PaymentsContext);

  const goToCardAddPage = () => {
    navigate('/');
  };

  const handleEditAlias = (card: CreditCard) => {
    navigate('/card-added', { state: card });
  };

  return (
    <section className="app flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">보유 카드</h2>
      </div>
      <span className="card-nickname">법인카드</span>
      <Button onClick={goToCardAddPage}>
        <div className="empty-card">+</div>
      </Button>
      {cardList
        .sort((a, b) => b.id.getTime() - a.id.getTime())
        .map((card) => (
          <div key={card.id.getDate()}>
            <Button onClick={() => handleEditAlias(card)}>
              <Card {...card} />
            </Button>
            <div className="holding-card">
              <span className="card-alias">{card.alias}</span>
              <Button onClick={() => removeCard(card.id)}>삭제</Button>
            </div>
          </div>
        ))}
    </section>
  );
};

export default CardAdd;
