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
} from './Card.style';
import { CardField } from '@/types';
import { Colors, colors } from '@/styles/colors';

type CardProps = {
  size: 'small' | 'big';
  cardColor: Colors;
  cardName?: string;
} & Omit<CardField, 'cardPassword' | 'cvc'>;

const Card = ({
  size,
  cardNumber,
  expirationMonth,
  expirationYear,
  cardName,
  cardColor,
  ownerName,
}: CardProps) => {
  return (
    <CardContainer cardColor={colors[cardColor]} size={size}>
      <CardTop>
        {cardName && <CardText size={size}>{cardName}</CardText>}
      </CardTop>
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
