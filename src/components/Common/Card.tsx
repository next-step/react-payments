import { CardNumber, Expiration } from '@/types';
import { renderTextDivider } from '@/utils';

type CardProps = {
  cardNumber: CardNumber;
  expiration: Expiration;
  cardOwner?: string;
  cardCompany?: string;
  cardNickname?: string;
  isBig?: boolean;
};

function Card({ cardOwner, cardCompany, cardNumber, expiration, cardNickname, isBig }: CardProps) {
  return (
    <div className="card-box">
      <div className="flex-column-center card-box">
        <div className={isBig ? 'big-card' : 'small-card'}>
          <div className="card-top">
            <span className="card-text">{cardCompany}</span>
          </div>
          <div className="card-middle">
            <div className={isBig ? 'big-card__chip' : 'small-card__chip'}></div>
          </div>
          <div className="card-bottom">
            <div className="card-bottom__number">
              <span className="card-text">
                {cardNumber.cardNumber1} {cardNumber.cardNumber2} {cardNumber.cardNumber3} {cardNumber.cardNumber4}
              </span>
            </div>
            <div className="card-bottom__info">
              <span className={isBig ? 'card-text__big' : 'card-text'}>{cardOwner ?? 'Name'}</span>
              <span className={isBig ? 'card-text__big' : 'card-text'}>
                {expiration?.month ?? 'MM'}
                {renderTextDivider({
                  formerValue: expiration.month,
                  latterValue: expiration.year,
                  divider: '/',
                })}
                {expiration?.year ?? 'YY'}
              </span>
            </div>
          </div>
        </div>
        <span className="card-nickname mt-5">{cardNickname}</span>
      </div>
    </div>
  );
}

export default Card;
