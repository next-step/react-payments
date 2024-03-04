import { useEffect, useState } from 'react';
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
    if (firstNum === '9') {
      setCardBrand('UNKNOWN');
      return;
    }
    const brand = `BRAND${firstNum}` as CardBrand;
    setCardBrand(brand);
  }, [firstCardNumber]);

  return (
    <div className={styles.cardBox[size]}>
      <div className={styles.cardColor[cardBrand]}>
        <div className={styles.brand}>{cardBrand || ' '}</div>
        <Chip size={size} />
        <div style={{ textAlign: 'center' }}>{fullCardNumber}</div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 'auto',
          }}
        >
          <span>{owner || 'NAME'}</span>
          <span>{fullExpirationDate || 'MM / YY'}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
