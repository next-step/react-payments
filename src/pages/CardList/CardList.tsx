import React, { MouseEvent, useCallback, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Card } from '@/components/Card';
import { routes } from '@/routes';
import { CloseIcon } from '@/components/CloseIcon';

import { useCardListWithLocalStorage } from '../CardNickname/hooks/useCardListWithLocalStorage';
import { DeleteButtonWrapper } from './CardList.styled';

export function CardList() {
  const navigate = useNavigate();
  const { cardList, deleteCard } = useCardListWithLocalStorage();

  const sortCardListToDescendingOrderOfKey = useMemo(
    () => Object.entries(cardList).sort(sortDescendingOrderByKeys),
    [cardList]
  );

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
        <Card
          key={key}
          cardCompany={val?.cardCompany?.value}
          cardExpireDate={val?.expireDates?.map((ss: { value: string }) => ss.value)}
          cardNumbers={val?.cardNumbers}
          cardOwnerName={val?.cardOwners?.[0]?.value}
          cardNickname={val?.cardNickname?.value}
          onCardClick={createCardClickHandler(key)}
          additionalIcon={
            <DeleteButtonWrapper onClick={createCardDeleteButtonClickHandler(key)}>
              <CloseIcon />
            </DeleteButtonWrapper>
          }
        />
      ))}
    </div>
  );
}

function sortDescendingOrderByKeys([aKey]: [string, any], [bKey]: [string, any]) {
  if (aKey > bKey) return -1;
  if (aKey === bKey) return 0;
  return 1;
}
