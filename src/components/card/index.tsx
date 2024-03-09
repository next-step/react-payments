import { useEffect, useState } from 'react';
import { cn } from '@/utils';
import * as styles from './index.css';

import type { CardBrand } from '@/types/card';

interface CardProps {
  size?: 'small' | 'large';
  cardNumber: [string, string, string, string];
  owner: string;
  expirationDate: {
    month: string;
    year: string;
  };
}
const Chip = ({ size }: Required<Pick<CardProps, 'size'>>) => (
  <div className={styles.chip[size]} />
);

const Card = ({
  size = 'small',
  cardNumber,
  owner,
  expirationDate,
}: CardProps) => {
  const firstCardNumber = cardNumber[0];
  const [cardBrand, setCardBrand] = useState<CardBrand | 'UNKNOWN'>('UNKNOWN');
  const fullCardNumber = cardNumber
    // .filter(Boolean)
    .map((part, index) => {
      if (index === 0 || index === 1) {
        return part;
      }
      return part.replace(/\d/g, 'o');
    })
    .join(' - ');
  const fullExpirationDate =
    expirationDate.month && expirationDate.year
      ? `${expirationDate.month}/${expirationDate.year}`
      : '';

  useEffect(() => {
    if (!firstCardNumber) {
      return;
    }
    const firstNum = firstCardNumber[0];
    if (firstNum === '9' || firstNum === '0') {
      setCardBrand('UNKNOWN');
      return;
    }
    const brand = `BRAND${firstNum}` as CardBrand;
    setCardBrand(brand);
  }, [firstCardNumber]);
  const className = cn([styles.cardBox[size], styles.cardColor[cardBrand]]);

  return (
    <div className={className}>
      <span className={styles.brand}>{cardBrand || ' '}</span>
      <Chip size={size} />
      <span style={{ textAlign: 'center' }}>{fullCardNumber}</span>
      <span
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          // marginTop: 'auto',
        }}
      >
        <span>{owner || 'NAME'}</span>
        <span>{fullExpirationDate || 'MM / YY'}</span>
      </span>
    </div>
  );
};

export default Card;
