import { Card } from '@/components';
import { ROUTE } from '@/constants';
import { CardInfo } from '@/types';
import styled from '@emotion/styled';
import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

const CardItem = (card: CardInfo) => {
  const navigate = useNavigate();
  const {
    cardNumber,
    expirationMonth,
    expirationYear,
    ownerName,
    cardCompany,
    cardNickName,
  } = card;

  const cardInfo = useMemo(() => {
    return {
      cardNumber,
      expirationMonth,
      expirationYear,
      ownerName,
      cardCompany,
    };
  }, [cardNumber, expirationMonth, expirationYear, ownerName, cardCompany]);

  const handleClick = () => {
    navigate(ROUTE.CARD_CREATE + `/${card.id}`);
  };

  return (
    <StyledCardItem onClick={handleClick}>
      <Card card={cardInfo} size="small" />
      <NickName>{cardNickName}</NickName>
    </StyledCardItem>
  );
};

export default React.memo(CardItem);
const NickName = styled.p`
  font-weight: 700;
`;

const StyledCardItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
