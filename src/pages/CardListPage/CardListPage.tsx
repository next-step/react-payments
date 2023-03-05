import React from 'react';
import { Header } from '@/components/Header';
import { useNavigate } from 'react-router-dom';
import { useCardList } from '@/store';
import { ROUTE } from '@/constants';
import { EmptyCardButton } from '@/components';
import CardItem from './components/CardItem/CardItem';
import styled from '@emotion/styled';

const CardListPage = () => {
  const navigate = useNavigate();
  const cardList = useCardList();

  const handleClick = () => {
    navigate(ROUTE.CARD_CREATE);
  };
  return (
    <>
      <Header title="보유 카드" />
      <CardListContainer>
        <li>
          <EmptyCardButton onClick={handleClick} />
        </li>
        {cardList.map((card) => (
          <CardItem key={card.id} card={card} />
        ))}
      </CardListContainer>
    </>
  );
};

export default CardListPage;

const CardListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0;
  padding: 20px 0;
  li {
    margin: 10px 0;
  }
`;
