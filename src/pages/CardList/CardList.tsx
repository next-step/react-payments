import React, { MouseEvent, useCallback, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Card } from '@/components/Card';
import { routes } from '@/routes';
import { CardInfoProvider } from '@/stores/CardCreatorContext';
import { CloseIcon } from '@/components/CloseIcon';

import { useCardListWithLocalStorage } from '../CardNickname/hooks/useCardListWithLocalStorage';
import { DeleteButtonWrapper } from './CardList.styled';

function CardList() {
  const navigate = useNavigate();
  const { cardList, deleteCard } = useCardListWithLocalStorage();

  const sortCardListToDescendingOrderOfKey = useMemo(() => {
    return Object.entries(cardList).sort(([aKey], [bKey]) => {
      if (aKey > bKey) return -1;
      if (aKey === bKey) return 0;
      return 1;
    });
  }, [cardList]);

  const createCardClickHandler = useCallback(
    (key: string) => () => {
      navigate(routes.createCardNickname(key));
    },
    [navigate]
  );

  const createCardDeleteButtonClickHandler = useCallback(
    (key: string) => (e: MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      deleteCard(key);
    },
    [deleteCard]
  );

  return (
    <div className="app flex-column-center">
      <Link to={routes.cardCreator} className="card-box">
        <div className="empty-card">+</div>
      </Link>
      {sortCardListToDescendingOrderOfKey.map(([key, val]) => (
        <CardInfoProvider key={key} value={val}>
          <Card
            onCardClick={createCardClickHandler(key)}
            additionalIcon={
              <DeleteButtonWrapper onClick={createCardDeleteButtonClickHandler(key)}>
                <CloseIcon />
              </DeleteButtonWrapper>
            }
          />
        </CardInfoProvider>
      ))}
    </div>
  );
}

export { CardList };
