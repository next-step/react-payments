import { memo } from 'react';

import { CardData, CardKey } from '@/types';

import * as Card from './style';
import { type CardVariants } from './style';

type Props = {
  cardInfo?: Pick<
    CardData,
    | CardKey.CARD_NUMBERS
    | CardKey.EXPIRE_DATE
    | CardKey.OWNER_NAME
    | CardKey.CARD_COMPANY
  >;
  size?: 'large' | 'small';
  onClick?: () => void;
} & CardVariants;

export const DefaultCardInfo: Props['cardInfo'] = {
  CARD_NUMBERS: {
    1: '',
    2: '',
    3: '',
    4: '',
  },
  OWNER_NAME: {
    val: '',
  },
  EXPIRE_DATE: { month: '', year: '' },
  CARD_COMPANY: {
    val: 'pc',
  },
};

const CreditCard = ({
  size = 'large',
  cardInfo = DefaultCardInfo,
  ...props
}: Props) => {
  return (
    <Card.CardRoot size={size} {...props} variant={cardInfo?.CARD_COMPANY?.val}>
      <Card.NumberBox>
        {cardInfo?.CARD_NUMBERS &&
          Object.values(cardInfo?.CARD_NUMBERS ?? [])?.map((v, i) => (
            <Card.Number key={i}>{i < 2 ? v : '****'}</Card.Number>
          ))}
      </Card.NumberBox>
      <Card.BottomBox>
        <Card.Name>{cardInfo?.OWNER_NAME?.val}</Card.Name>
        <div>
          <span>{cardInfo?.EXPIRE_DATE?.month}</span>/
          <span>{cardInfo?.EXPIRE_DATE?.year}</span>
        </div>
      </Card.BottomBox>
    </Card.CardRoot>
  );
};

export default memo(CreditCard);
