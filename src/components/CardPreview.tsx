import React from 'react';
import { S } from '../styles/card';
import { CardStateType } from '../context/CardContext';

const CardPreview = ({ digits, expire, name }: CardStateType) => {
  return (
    <S.CardBox>
      <S.EmptyCard>
        <S.CardText />
        <S.CardMiddle>
          <S.SmallCardChip />
        </S.CardMiddle>
        <S.CardBottom>
          <S.CardText>
            {digits.digit1 && digits.digit1}
            {digits.digit2 && '-' + digits.digit2}
            {digits.digit3 && '-' + '*'.repeat(String(digits.digit3).length)}
            {digits.digit4 && '-' + '*'.repeat(String(digits.digit4).length)}
          </S.CardText>
          <S.CardBottomInfo>
            <S.CardText>{name || 'NAME'}</S.CardText>
            <S.CardText className="card-text">{expire || 'MM / YY'}</S.CardText>
          </S.CardBottomInfo>
        </S.CardBottom>
      </S.EmptyCard>
    </S.CardBox>
  );
};

export default CardPreview;
