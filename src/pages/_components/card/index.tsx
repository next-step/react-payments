import { CARD_BRANDS } from '@/constants/card';
import * as styles from './index.css';

export type BrandName = (typeof CARD_BRANDS)[number]['name'];

interface CardProps {
  size?: 'small' | 'large';
  brand: BrandName | 'UNKNOWN';
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
  brand,
  cardNumber,
  owner,
  expirationDate,
}: CardProps) => {
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
  return (
    <div className={styles.cardBox[size]}>
      <div className={styles.cardColor[brand]}>
        <div className={styles.brand}>{brand || ' '}</div>
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
