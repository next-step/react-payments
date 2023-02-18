import React from 'react';
import { useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';
import { EmptyCardButton } from '@/components/Button';
import { CardListContainer } from './CardList.style';

const CardList = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/card/create');
  };

  return (
    <CardListContainer>
      <EmptyCardButton onClick={handleClick} />
    </CardListContainer>
  );
};

export default CardList;
