import React from 'react';
import { useNavigate } from 'react-router-dom';

import { EmptyCardButton } from '@/components/buttons';
import { CardListContainer } from './CardList.style';
import { ROUTE } from '@/constants';
import { useCardList } from '@/store';
import { Card } from '@/components';

const CardList = () => {
  const navigate = useNavigate();
  const cardList = useCardList();

  const handleClick = () => {
    navigate(ROUTE.CARD_CREATE);
  };

  return (
    <CardListContainer>
      <EmptyCardButton onClick={handleClick} />
      {cardList.map((card) => (
        <Card key={card.id} card={card} size="small" />
      ))}
    </CardListContainer>
  );
};

export default CardList;
