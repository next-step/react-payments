import React from 'react';
import { S } from '../styles/card';

interface ICardProps {
  digit1: string;
  digit2: string;
  digit3: string;
  digit4: string;
  name: string;
  expire: string;
}

interface IProps {
  data: ICardProps;
}

const CardPreview = ({ data }: IProps) => {
  return (
    <S.CardBox>
      <S.EmptyCard>
        <S.CardText />
        <S.CardMiddle>
          <S.SmallCardChip />
        </S.CardMiddle>
        <S.CardBottom>
          <S.CardText>
            {data.digit1 && data.digit1}
            {data.digit2 && '-' + data.digit2}
            {data.digit3 && '-' + '*'.repeat(data.digit3.length)}
            {data.digit4 && '-' + '*'.repeat(data.digit4.length)}
          </S.CardText>
          <S.CardBottomInfo>
            <S.CardText>{data.name || 'NAME'}</S.CardText>
            <S.CardText className="card-text">
              {data.expire || 'MM / YY'}
            </S.CardText>
          </S.CardBottomInfo>
        </S.CardBottom>
      </S.EmptyCard>
    </S.CardBox>
  );
};

export default CardPreview;
