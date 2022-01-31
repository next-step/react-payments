import React from 'react';
import {
  CardNumber as TypeCardNumber,
  Company,
  ExpirationNumber,
} from '../../type';
import {
  CardBottom,
  CardBottomInfo,
  CardBottomNumber,
  CardBox,
  CardMiddle,
  CardText,
  CardTop,
  CardBasic,
  CardChip,
  CardNumber,
} from './styles';

interface CardProps {
  /**
   * 카드 타입: 추가, 별칭, 리스트, 빈 카드
   */
  type: 'add' | 'alias' | 'list' | 'empty';

  /**
   * 카드 사이즈
   */
  size: 'small' | 'big';

  /**
   * 총 16자리의 카드 넘버
   */
  cardNumber?: TypeCardNumber;

  /**
   * 카드 유효기간, 월(MM), 연(YY)
   */
  expirationNumber?: ExpirationNumber;

  /**
   * 카드 소유자
   */
  owner?: string;

  /**
   * 카드(제품) 이름
   */
  cardName?: string;

  /**
   * 카드 onClick event 설정
   */
  onClick?: () => void;

  /**
   * 카드 배경 색상 설정
   */
  company?: Company;

  alias?: string;
}

const Card = ({
  type,
  cardNumber,
  expirationNumber,
  owner,
  cardName,
  onClick,
  company,
  size,
  alias,
}: CardProps) => {
  const setSecurityText = (number: string) => {
    return number
      .split('')
      .map(() => '*')
      .join('');
  };

  return (
    <>
      <CardBox>
        <CardBasic size={size} color={company?.color} onClick={onClick}>
          {type === 'empty' ? (
            '+'
          ) : (
            <>
              <CardTop>
                <CardText size={size}>{company?.name}</CardText>
              </CardTop>
              <CardMiddle>
                <CardChip size={size}></CardChip>
              </CardMiddle>
              <CardBottom>
                <CardBottomNumber>
                  <CardNumber size={size}>
                    {cardNumber && cardNumber[0]}
                  </CardNumber>
                  <CardNumber size={size}>
                    {cardNumber && cardNumber[1]}
                  </CardNumber>
                  <CardNumber size={size}>
                    {cardNumber && setSecurityText(cardNumber[2])}
                  </CardNumber>
                  <CardNumber size={size}>
                    {cardNumber && setSecurityText(cardNumber[3])}
                  </CardNumber>
                </CardBottomNumber>
                <CardBottomInfo>
                  <CardText size={size}>{owner || 'NAME'}</CardText>
                  <CardText size={size}>
                    {(expirationNumber && expirationNumber[0]) || 'MM'}
                    &nbsp;/&nbsp;
                    {(expirationNumber && expirationNumber[1]) || 'YY'}
                  </CardText>
                </CardBottomInfo>
              </CardBottom>
            </>
          )}
        </CardBasic>
      </CardBox>
    </>
  );
};

export default Card;
