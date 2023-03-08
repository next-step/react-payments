import React, { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Card } from '@/components/Card';
import { routes } from '@/routes';
import { CardInfoProvider } from '@/stores/CardCreatorContext';

import { useCardListWithLocalStorage } from '../CardNickname/hooks/useCardListWithLocalStorage';

function CardList() {
  const navigate = useNavigate();
  const { cardList } = useCardListWithLocalStorage();

  const sortCardListToDescendingOrderOfKey = useMemo(() => {
    return Object.entries(cardList).sort(([aKey], [bKey]) => {
      if (aKey > bKey) return -1;
      if (aKey === bKey) return 0;
      return 1;
    });
  }, [cardList]);

  return (
    <div className="app flex-column-center">
      <Link to={routes.cardCreator} className="card-box">
        <div className="empty-card">+</div>
      </Link>
      {sortCardListToDescendingOrderOfKey.map(([key, val]) => (
        <CardInfoProvider key={key} value={val}>
          <Card
            onCardClick={() => {
              navigate(routes.createCardNickname(key));
            }}
          />
        </CardInfoProvider>
      ))}
    </div>
  );
}

export { CardList };
