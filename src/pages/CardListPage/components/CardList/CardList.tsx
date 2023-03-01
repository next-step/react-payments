import React from 'react';
import { useNavigate } from 'react-router-dom';

import { EmptyCardButton } from '@/components/buttons';
import { CardListContainer } from './CardList.style';
import { ROUTE } from '@/constants';
import { useCardList } from '@/store';
import CardItem from '../CardItem/CardItem';

const CardList = () => {
  const navigate = useNavigate();
  const cardList = useCardList();

  const handleClick = () => {
    navigate(ROUTE.CARD_CREATE);
  };

  return (
    <CardListContainer>
      <li>
        <EmptyCardButton onClick={handleClick} />
      </li>
      {cardList.map((card) => (
        <CardItem key={card.id} {...card} />
      ))}
    </CardListContainer>
  );
};

export default CardList;
