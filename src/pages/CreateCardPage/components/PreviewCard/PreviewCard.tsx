import { Card } from '@/components/Card';
import styled from '@emotion/styled';
import React from 'react';
import { useCardFieldContext } from '../CardFieldContext';

const PreviewCard = () => {
  const data = useCardFieldContext();
  if (!data) return null;

  const { cardNumber, expirationMonth, expirationYear, ownerName } = data;
  const cardName = '신한카드';
  const cardColor = 'primary';

  return (
    <PreviewCardContainer>
      <Card
        size="big"
        cardNumber={cardNumber}
        expirationMonth={expirationMonth}
        expirationYear={expirationYear}
        ownerName={ownerName}
        cardName={cardName}
        cardColor={cardColor}
      />
    </PreviewCardContainer>
  );
};

export default React.memo(PreviewCard);

const PreviewCardContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  margin-bottom: 40px;
`;
