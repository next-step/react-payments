import React from 'react';
import { Link } from 'react-router-dom';

import { Card } from '@/components/Card';
import { routes } from '@/routes';
import { CardInfoProvider } from '@/stores/CardCreatorContext';

import { useCardListWithLocalStorage } from '../CardNickname/hooks/useCardListWithLocalStorage';

function CardList() {
  const { cardList } = useCardListWithLocalStorage();

  return (
    <div className="app flex-column-center">
      <Link to={routes.cardCreator} className="card-box">
        <div className="empty-card">+</div>
      </Link>
      {Object.entries(cardList).map(([key, val]) => (
        <CardInfoProvider key={key} value={val}>
          <Card cardId={key} />
        </CardInfoProvider>
      ))}
    </div>
  );
}

export { CardList };
