import { isShowHyphen, maskingNumber } from '@/domain/Card';
import { CardNumber } from '@/types/Card';

type CardBoxProps = {
  cardNumber: CardNumber;
};

export default function CardBox({ cardNumber }: CardBoxProps) {
  const { num1, num2, num3, num4 } = cardNumber;

  return (
    <div className="card-box">
      <div className="empty-card">
        <div className="card-top" />
        <div className="card-middle">
          <div className="small-card__chip" />
        </div>
        <div className="card-number">
          <span className="card-number">{num1}</span>
          {isShowHyphen(num1, num2) && <span>-</span>}

          <span className="card-number">{num2}</span>
          {isShowHyphen(num2, num3) && <span>-</span>}

          <span className="card-number">{maskingNumber(num3)}</span>
          {isShowHyphen(num3, num4) && <span>-</span>}

          <span className="card-number">{maskingNumber(num4)}</span>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__info">
            <span className="card-text">NAME</span>
            <span className="card-text">MM / YY</span>
          </div>
        </div>
      </div>
    </div>
  );
}
