import { Fragment, HTMLAttributes, ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardItem } from '../../components/Card/CardItem';
import { retrieveCards } from '../../service/card';
import { Card } from '../../types';

const sortByCreatedAt = (cards: Card[]) => {
  return [...cards].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
};

const CardListPage = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    setCards(retrieveCards());
  }, []);

  return (
    <div className="flex-column-center">
      <CardListTitle>보유 카드</CardListTitle>
      {sortByCreatedAt(cards).map((card) => (
        <Fragment key={card.id}>
          <CardItem card={card} />
          <span>{card.nickname}</span>
        </Fragment>
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
