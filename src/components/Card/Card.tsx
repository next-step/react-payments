import { masking } from '../../utils';

export type CardNumber = [string?, string?, string?, string?];

export interface CardProps {
  bank?: string;
  cardNumber?: CardNumber;
  expiry?: string;
  holder: string;
}

const formatCardNumber = (cardNumber?: CardNumber) =>
  cardNumber
    ?.map((num, index) => {
      if (index === 2 || index === 3) {
        return masking(num);
      }
      return num;
    })
    .filter(Boolean)
    .join('-');

const Card = ({ bank, holder, expiry, cardNumber }: CardProps) => {
  return (
    <div className="card-box">
      <div className="small-card">
        <div className="card-top">
          <span className="card-text">{bank}</span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip" />
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">{formatCardNumber(cardNumber)}</span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text">{holder}</span>
            <span className="card-text">{expiry}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
