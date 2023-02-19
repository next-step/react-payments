import { renderTextDivider } from '@/utils';

type Expiration = {
  month: string;
  year: string;
};

type CardNumber = {
  cardNumber1: string;
  cardNumber2: string;
  cardNumber3: string;
  cardNumber4: string;
};

type CardProps = {
  cardOwner?: string;
  cardCompany?: string;
  cardNumber?: CardNumber;
  expiration?: Expiration;
  cardNickname?: string;
  isEmpty?: boolean;
  isBig?: boolean;
};

function Card({ cardOwner, cardCompany, cardNumber, expiration, cardNickname, isEmpty, isBig }: CardProps) {
  if (isEmpty) {
    return (
      <div className="card-box">
        <div className="empty-card">+</div>
      </div>
    );
  }

  return (
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
              {cardNumber?.cardNumber1} {cardNumber?.cardNumber2} {cardNumber?.cardNumber3} {cardNumber?.cardNumber4}
            </span>
          </div>
          <div className="card-bottom__info">
            <span className={isBig ? 'card-text__big' : 'card-text'}>{cardOwner ?? 'Name'}</span>
            <span className={isBig ? 'card-text__big' : 'card-text'}>
              {expiration?.month ?? 'MM'}
              {renderTextDivider({
                formerValue: expiration?.month ?? '',
                latterValue: expiration?.year ?? '',
                divider: '/',
              })}
              {expiration?.year ?? 'YY'}
            </span>
          </div>
        </div>
      </div>
      <span className="card-nickname mt-5">{cardNickname}</span>
    </div>
  );
}

export default Card;
