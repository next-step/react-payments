import { CardCompany, ExpiredDate, SerialNumber } from 'types/card';

interface CardProps {
  company: CardCompany;
  name: string;
  serialNumber: SerialNumber;
  expiredDate: ExpiredDate;
}

function Card({ company, name, serialNumber, expiredDate }: CardProps) {
  const { num1, num2, num3, num4 } = serialNumber;
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
            <span className="card-text">
              {num1} - {num2} - {num3} - {num4}
            </span>
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
