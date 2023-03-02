import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '../components/Card';
import { PaymentsContext } from '../context/PaymentsContext';

const CardAdd = () => {
  const navigate = useNavigate();
  const { cardList } = useContext(PaymentsContext);

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">보유 카드</h2>
      </div>
      <span className="card-nickname">법인카드</span>
      <div className="card-box" onClick={() => navigate('/')}>
        <div className="empty-card">+</div>
      </div>
      {cardList
        .sort((a, b) => b.id.getTime() - a.id.getTime())
        .map((card) => (
          <Card key={card.id.getDate()} data={card} />
        ))}
    </div>
  );
};

export default CardAdd;
