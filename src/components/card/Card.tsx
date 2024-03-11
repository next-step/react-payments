import { FC } from 'react';
import * as S from './Card.style.ts';
import { CardSizeType, CardType } from './Card.type.ts';

interface Props {
  onClick?: () => void;
  size: CardSizeType;
}
const Card: FC<Props & CardType> = ({
  onClick,
  size,
  ownerName,
  expireYear,
  expireMonth,
  number,
  name,
}) => {
  return (
    <S.Container onClick={onClick} size={size}>
      <S.Title>{name}</S.Title>
      <S.Chip size={size} />
      <S.CardBottomLayout>
        <S.Number>{number}</S.Number>
        <S.CardBottom>
          {ownerName}
          <span>
            {expireMonth}/{expireYear}
          </span>
        </S.CardBottom>
      </S.CardBottomLayout>
    </S.Container>
  );
};

export default Card;
