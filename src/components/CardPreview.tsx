import React from 'react';
import { S } from '../styles/card';
import { CardInfoType } from '../type/card';

interface ICardPreview extends CardInfoType {
  onClick?: () => void;
  isCursor?: boolean;
}

const CardPreview = ({
  digits,
  expire,
  name,
  company,
  color,
  onClick,
  isCursor,
}: ICardPreview) => {
  return (
    <S.CardBox onClick={onClick} isCursor={isCursor || false}>
      <S.EmptyCard backgroundColor={color}>
        <S.CardTop>{company && company}</S.CardTop>
        <S.CardMiddle>
          <S.SmallCardChip />
        </S.CardMiddle>
        <S.CardBottom>
          <S.CardNumInfo>
            <S.CardNumber>{digits.digit1 && digits.digit1}</S.CardNumber>
            <S.CardNumber>{digits.digit2 && digits.digit2}</S.CardNumber>
            <S.CardNumber>
              {digits.digit3 && '*'.repeat(String(digits.digit3).length)}
            </S.CardNumber>
            <S.CardNumber>
              {digits.digit4 && '*'.repeat(String(digits.digit4).length)}
            </S.CardNumber>
          </S.CardNumInfo>
          <S.CardBottomInfo>
            <S.CardText>{name || 'NAME'}</S.CardText>
            <S.CardText>{expire || 'MM / YY'}</S.CardText>
          </S.CardBottomInfo>
        </S.CardBottom>
      </S.EmptyCard>
    </S.CardBox>
  );
};

export default CardPreview;
