import { Fragment, HTMLAttributes, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardItem } from '../../components/Card/CardItem';
import { useCards } from '../../hook/useCards';

const CardListPage = () => {
  const navigate = useNavigate();
  const { cards, remove: removeCard } = useCards();

  return (
    <div className="flex-column-center">
      <CardListTitle>보유 카드</CardListTitle>
      {cards.map((card) => (
        <div
          style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '2rem',
          }}
          key={card.id}
        >
          <CardItem card={card} />
          <span style={{ cursor: 'alias' }} onClick={() => navigate(`/edit?id=${card.id}`)}>
            {card.nickname}
          </span>
          <button style={{ cursor: 'pointer' }} onClick={() => removeCard(card.id)}>
            삭제
          </button>
        </div>
      ))}
      <AddCardButton onClick={() => navigate('/registration')} />
    </div>
  );
};

const CardListTitle = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex-center">
      <h2 className="page-title mb-10">{children}</h2>
    </div>
  );
};

const AddCardButton = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} style={{ cursor: 'pointer' }} className="card-box">
      <div className="empty-card">+</div>
    </div>
  );
};

export default CardListPage;
