import React from 'react';
import { Card } from '@/components';
import useCard from '@/store/hooks/useCard';
import styled from '@emotion/styled';

type PreviewCompleteCardProps = {
  title: string;
  cardId: number;
};
const PreviewCompleteCard = ({ title, cardId }: PreviewCompleteCardProps) => {
  const {
    cardNumber,
    expirationMonth,
    expirationYear,
    ownerName,
    cardCompany,
  } = useCard(cardId);

  return (
    <section>
      <PreviewTitle>{title}</PreviewTitle>
      <Card
        card={{
          cardNumber,
          expirationMonth,
          expirationYear,
          ownerName,
          cardCompany,
        }}
        size="big"
      />
    </section>
  );
};

export default PreviewCompleteCard;

const PreviewTitle = styled.h1`
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  margin-top: 130px;
  margin-bottom: 24px;
  text-align: center;
`;
