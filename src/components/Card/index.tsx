import React from 'react';
import {
  CardBottom,
  CardBottomInfo,
  CardBottomNumber,
  CardBox,
  CardMiddle,
  CardText,
  CardTop,
  EmptyCard,
  SmallCardChip,
  CardNumber,
} from './styles';

interface CardProps {
  type: 'add' | 'alias' | 'list';
  cardNumber: string[];
  expirationNumber: string[];
  owner?: string;
  cardName?: string;
  onClick?: () => void;
}

const index = ({
  type,
  cardNumber,
  expirationNumber,
  owner,
  cardName,
  onClick,
}: CardProps) => {
  const setSecurityText = (number: string) => {
    return number
      .split('')
      .map(() => '*')
      .join('');
  };

  return (
    <>
      <CardBox onClick={onClick}>
        <EmptyCard>
          <CardTop>
            <CardText>{cardName}</CardText>
          </CardTop>
          <CardMiddle>
            <SmallCardChip></SmallCardChip>
          </CardMiddle>
          <CardBottom>
            <CardBottomNumber>
              <CardNumber>{cardNumber[0]}</CardNumber>
              <CardNumber>{cardNumber[1]}</CardNumber>
              <CardNumber>{setSecurityText(cardNumber[2])}</CardNumber>
              <CardNumber>{setSecurityText(cardNumber[3])}</CardNumber>
            </CardBottomNumber>
            <CardBottomInfo>
              <CardText>{owner || 'NAME'}</CardText>
              <CardText>
                {expirationNumber[0] || 'MM'}
                &nbsp;/&nbsp;
                {expirationNumber[1] || 'YY'}
              </CardText>
            </CardBottomInfo>
          </CardBottom>
        </EmptyCard>
      </CardBox>
      {type === 'list' && <span>법인카드</span>}
    </>
  );
};

export default index;
