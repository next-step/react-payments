import React from 'react';
import {
  CardBottom,
  CardBottomInfo,
  CardBottomNumber,
  CardBox,
  CardMiddle,
  CardText,
  CardTop,
  SmallCard,
  SmallCardChip,
} from './card.style';

interface CardProps {
  cardName: string;
  expiredMonth: string;
  expiredYear: string;
  cardNumber: string;
  userName: string;
}

const Card: React.VFC<CardProps> = ({
  cardName,
  expiredMonth,
  expiredYear,
  cardNumber,
  userName,
}) => {
  const isEmptyCard = () => {
    return !userName || !expiredMonth || !expiredYear;
  };
  const getUserName = () => {
    return !!userName ? userName : 'NAME';
  };
  const getExpiredDate = () => {
    const month = !!expiredMonth ? expiredMonth : 'MM';
    const year = !!expiredYear ? expiredYear : 'YY';
    return `${month} / ${year}`;
  };

  return (
    <CardBox>
      <SmallCard isEmpty={isEmptyCard()}>
        <CardTop>{!!cardName && <CardText>{cardName}</CardText>}</CardTop>
        <CardMiddle>
          <SmallCardChip />
        </CardMiddle>
        <CardBottom>
          {!!cardNumber && (
            <CardBottomNumber>
              <CardText>{cardNumber}</CardText>
            </CardBottomNumber>
          )}
          <CardBottomInfo>
            <CardText>{getUserName()}</CardText>
            <CardText>{getExpiredDate()}</CardText>
          </CardBottomInfo>
        </CardBottom>
      </SmallCard>
    </CardBox>
  );
};

export default Card;
