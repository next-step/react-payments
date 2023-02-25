import '../styles/index.css';

type CardNumber = [string, string, string, string];
type ExpirationNumber = {
  month: string;
  year: string;
};

type CardBoxProps = {
  cardNumbers: CardNumber;
  expiration: ExpirationNumber;
  cardHolderName: string;
};

const CardBox = ({ cardNumbers, expiration, cardHolderName }: CardBoxProps) => {
  const [num1, num2, num3, num4] = cardNumbers;
  const secretNum3 = num3.replace(/[1-9]/gi, '*');
  const secretNum4 = num4.replace(/[1-9]/gi, '*');

  const { month, year } = expiration;
  return (
    <div className="card-box">
      <div className="empty-card">
        <div className="card-top card-num">
          <span className="card-num">{num1}</span>
          {num1 && <span>-</span>}
          <span className="card-num">{num2}</span>
          {num2 && <span>-</span>}
          <span className="card-num">{secretNum3}</span>
          {secretNum3 && <span>-</span>}
          <span className="card-num">{secretNum4}</span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip" />
        </div>
        <div className="card-bottom">
          <div className="card-bottom__info">
            <span className="card-text">{cardHolderName}</span>
            <span className="card-text">
              {month} {month && <span>/</span>} {year}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBox;
