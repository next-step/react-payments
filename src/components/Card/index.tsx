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
  /**
   * 카드사
   */
  cardCompany: string;
  /**
   * 유효기간 (월)
   */
  expiredMonth: string;
  /**
   * 유효기간 (년)
   */
  expiredYear: string;
  /**
   * 카드번호
   */
  cardNumber: string;
  /**
   * 카드 소유자 이름
   */
  userName: string;
}

/**
 * SmallCard에 isEmpty 속성 포함
 */
export const Card: React.VFC<CardProps> = ({
  cardCompany,
  expiredMonth,
  expiredYear,
  cardNumber,
  userName,
}) => {
  const isEmptyCard = () => {
    const hasUserName = userName.length > 0;
    const hasExpiredDate = expiredMonth.length > 0 || expiredYear.length > 0;
    const hasCardNum = cardNumber.length > 3;
    return !(hasUserName || hasExpiredDate || hasCardNum);
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
        <CardTop>{!!cardCompany && <CardText>{cardCompany}</CardText>}</CardTop>
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
