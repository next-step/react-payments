import React from 'react';
import { useNavigate } from 'react-router-dom';

import { EmptyCardButton } from '@/components/buttons';
import { CardListContainer } from './CardList.style';
import { ROUTE } from '@/constants/route';

const CardList = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTE.CARD_CREATE);
  };

  return (
    <CardListContainer>
      <EmptyCardButton onClick={handleClick} />
    </CardListContainer>
  );
};

export default CardList;
