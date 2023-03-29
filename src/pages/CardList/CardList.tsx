import React, { MouseEvent, useCallback, useMemo, useState } from 'react';

import { Card, CloseIcon } from '@/components';
import { useFetchCardList } from '@/hooks';

import { useFlushCardContextStore } from './hooks';
import { EmptyCard } from './EmptyCard';
import { CardModal, TCardModalDTO } from './CardModal';
import { StyledDeleteButton, StyledCardListContainer } from './CardList.styled';

export function CardList() {
  useFlushCardContextStore();

  const [selectedCard, setSelectedCard] = useState<TCardModalDTO | null>();

  const { cardList, deleteCard } = useFetchCardList();

  const sortCardListToDescendingOrderOfKey = useMemo(
    () => cardList && Object.entries(cardList).sort(sortDescendingOrderByKeys),
    [cardList]
  );

  const createCardClickHandler = useCallback(
    (key: string) => () => {
      if (!cardList) return;
      setSelectedCard({ id: key, card: cardList[key] });
    },
    [cardList]
  );

  const createCardDeleteButtonClickHandler = useCallback(
    (key: string) => (e: MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      deleteCard(key);
    },
    [deleteCard]
  );

  return (
    <StyledCardListContainer>
      <EmptyCard />
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
      <CardModal cardInfo={selectedCard} onModalHide={() => setSelectedCard(null)} />
    </StyledCardListContainer>
  );
}

function sortDescendingOrderByKeys([aKey]: [string, any], [bKey]: [string, any]) {
  if (aKey > bKey) return -1;
  if (aKey === bKey) return 0;
  return 1;
}
