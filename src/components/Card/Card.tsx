import React from 'react';
import {
  addCardNumberDashes,
  addSeparator,
  replaceCardNumberToO,
} from '@/utils/formatter';
import {
  CardBottom,
  CardChip,
  CardContainer,
  CardMiddle,
  CardTop,
  CardText,
  CardBottomNumber,
  CardBottomInfo,
  CardName,
} from './Card.style';
import { CardField } from '@/types';
import { Colors } from '@/styles/colors';

type CardProps = {
  size: 'small' | 'big';

  card: Omit<CardField, 'cardPassword' | 'cvc' | 'cardCompany'> & {
    cardName: string;
    cardColor: Colors;
  };
};

const Card = ({ size, card }: CardProps) => {
  const {
    cardNumber,
    ownerName,
    expirationMonth,
    expirationYear,
    cardColor,
    cardName,
  } = card;

  return (
    <CardContainer cardColor={cardColor} size={size}>
      <CardTop>{cardName && <CardName>{cardName}</CardName>}</CardTop>
      <CardMiddle>
        <CardChip size={size} />
      </CardMiddle>
      <CardBottom>
        <CardBottomNumber>
          <CardText size={size}>
            {replaceCardNumberToO(addCardNumberDashes(cardNumber))}
          </CardText>
        </CardBottomNumber>
        <CardBottomInfo>
          <CardText size={size}>{ownerName}</CardText>
          <CardText size={size}>
            {addSeparator(expirationMonth + expirationYear)}
          </CardText>
        </CardBottomInfo>
      </CardBottom>
    </CardContainer>
  );
};

export default React.memo(Card);
