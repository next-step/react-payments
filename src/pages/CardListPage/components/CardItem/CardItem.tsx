import { Card } from '@/components';
import { CardInfo } from '@/types';
import styled from '@emotion/styled';
import React, { useMemo } from 'react';

const CardItem = (card: CardInfo) => {
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

  return (
    <StyledCardItem>
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
