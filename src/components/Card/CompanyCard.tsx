import React from 'react';
import { CardField } from '@/types';
import { CARD_COMPANIES } from '@/constants';
import Card from './Card';

type CardProps = {
  size: 'small' | 'big';
  card: Omit<CardField, 'cardPassword' | 'cvc'>;
};

const CompanyCard = ({ size, card }: CardProps) => {
  const {
    cardNumber,
    ownerName,
    expirationMonth,
    expirationYear,
    cardCompany,
  } = card;

  const cardName = cardCompany ? CARD_COMPANIES[cardCompany].name : '';
  const cardColor = cardCompany ? CARD_COMPANIES[cardCompany].color : 'gray1';

  return (
    <Card
      card={{
        cardNumber,
        ownerName,
        expirationMonth,
        expirationYear,
        cardName,
        cardColor,
      }}
      size={size}
    />
  );
};

export default React.memo(CompanyCard);
