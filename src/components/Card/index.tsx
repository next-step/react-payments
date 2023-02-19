import Dash from 'components/Dash';
import Masking from 'components/Masking';

import { MAX_LENGTH } from 'constants/card';
import type { CardCompany, ExpiredDate, CardNumber } from 'types/card';

interface CardProps {
  company: CardCompany;
  name: string;
  cardNumber: CardNumber;
  expiredDate: ExpiredDate;
}

function Card({ company, name, cardNumber, expiredDate }: CardProps) {
  const { num1, num2, num3, num4 } = cardNumber;
  const { year, month } = expiredDate;

  return (
    <div className="card-box">
      <div className="small-card">
        <div className="card-top">
          <span className="card-text">{company}</span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-number">{num1}</span>
            <Dash visible={num1.length === MAX_LENGTH.CARD_NUMBER} width={4} height={1} />
            <span className="card-number">{num2}</span>
            <Dash visible={num2.length === MAX_LENGTH.CARD_NUMBER} width={4} height={1} />
            <Masking count={num3.length} />
            <Dash visible={num3.length === MAX_LENGTH.CARD_NUMBER} width={4} height={1} />
            <Masking count={num4.length} />
          </div>
          <div className="card-bottom__info">
            <span className="card-text">{name}</span>
            <span className="card-text">
              {month} / {year}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
