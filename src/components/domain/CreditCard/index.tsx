import { memo } from 'react';

import Card from './style';

type Props = {
  cardInfo: {
    CARD_NUMBERS: {
      1: string;
      2: string;
      3: string;
      4: string;
    };
    OWNER_NAME: string;
    EXPIRE_DATE: { month: string; year: string };
  };
  size?: 'large' | 'small';
};

const CreditCard = ({ size = 'large', ...props }: Props) => {
  return (
    <Card size={size}>
      <Card.NumberBox>
        {Object.values(props.cardInfo.CARD_NUMBERS).map((v, i) => (
          <Card.Number key={i}>{i < 2 ? v : '****'}</Card.Number>
        ))}
      </Card.NumberBox>
      <Card.BottomBox>
        <Card.Name>{props.cardInfo.OWNER_NAME}</Card.Name>
        <div>
          <span>{props.cardInfo.EXPIRE_DATE.month}</span>/
          <span>{props.cardInfo.EXPIRE_DATE.year}</span>
        </div>
      </Card.BottomBox>
    </Card>
  );
};

export default memo(CreditCard);
