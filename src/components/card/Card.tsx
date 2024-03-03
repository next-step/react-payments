import { FC } from 'react';
import * as S from './Card.style.ts';
import ICard from '../../interface/ICard.ts';
import { CardSizeType } from './Card.type.ts';

interface Props {
  onClick?: () => void;
  size: CardSizeType;
}
const Card: FC<Props & ICard> = ({ onClick, size, name, ownerName, year, month, number }) => {
  return (
    <S.Container onClick={onClick} size={size}>
      <S.Title>{name}</S.Title>
      <S.Chip size={size} />
      <S.CardBottomLayout>
        <S.Number>{number}</S.Number>
        <S.CardBottom>
          {ownerName}
          <span>
            {month}/{year}
          </span>
        </S.CardBottom>
      </S.CardBottomLayout>
    </S.Container>
  );
};

export default Card;
