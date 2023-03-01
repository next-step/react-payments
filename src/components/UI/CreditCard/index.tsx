import { memo } from 'react';

import { CardData, CardKey } from '@/types';

import Card from './style';
type Props = {
  cardInfo?: Pick<
    CardData,
    CardKey.CARD_NUMBERS | CardKey.EXPIRE_DATE | CardKey.OWNER_NAME
  >;
  size?: 'large' | 'small';
  onClick?: () => void;
};

export const DefaultCardInfo: Props['cardInfo'] = {
  CARD_NUMBERS: {
    1: '',
    2: '',
    3: '',
    4: '',
  },
  OWNER_NAME: '',
  EXPIRE_DATE: { month: '', year: '' },
};

const CreditCard = ({ size = 'large', cardInfo = DefaultCardInfo }: Props) => {
  return (
    <Card size={size}>
      <Card.NumberBox>
        {cardInfo?.CARD_NUMBERS &&
          Object.values(cardInfo?.CARD_NUMBERS ?? [])?.map((v, i) => (
            <Card.Number key={i}>{i < 2 ? v : '****'}</Card.Number>
          ))}
      </Card.NumberBox>
      <Card.BottomBox>
        <Card.Name>{cardInfo.OWNER_NAME}</Card.Name>
        <div>
          <span>{cardInfo?.EXPIRE_DATE?.month}</span>/
          <span>{cardInfo?.EXPIRE_DATE?.year}</span>
        </div>
      </Card.BottomBox>
    </Card>
  );
};

export default memo(CreditCard);
