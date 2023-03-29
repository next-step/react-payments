import React, { MouseEvent, useCallback, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Card, CloseIcon } from '@/components';
import { useFetchCardList } from '@/hooks';
import { routes } from '@/routes';

import { useFlushCardContextStore } from './hooks';
import { StyledDeleteButton } from './CardList.styled';

export function CardList() {
  const navigate = useNavigate();

  useFlushCardContextStore();

  const { cardList, deleteCard } = useFetchCardList();

  const sortCardListToDescendingOrderOfKey = useMemo(
    () => cardList && Object.entries(cardList).sort(sortDescendingOrderByKeys),
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
  console.log(sortCardListToDescendingOrderOfKey);
  return (
    <div className="app flex-column-center">
      <Link to={routes.cardCreator} className="card-box">
        <div className="empty-card">+</div>
      </Link>
      {sortCardListToDescendingOrderOfKey?.map(([key, val]) => (
        <Card
          key={key}
          cardCompany={val?.cardCompanies[0]?.value}
          cardExpireDate={val?.expireDates?.map((expireDate: { value: string }) => expireDate.value)}
          cardNumbers={val?.cardNumbers}
          cardOwnerName={val?.cardOwners?.[0]?.value}
          cardNickname={val?.cardNicknames[0]?.value}
          onCardClick={createCardClickHandler(key)}
          additionalIcon={
            <StyledDeleteButton onClick={createCardDeleteButtonClickHandler(key)}>
              <CloseIcon />
            </StyledDeleteButton>
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
