type Expiration = {
  month: string;
  year: string;
};

type CardNumber = {
  first: string;
  second: string;
  third: string;
  forth: string;
};

type CardProps = {
  owner?: string;
  cardCompany?: string;
  cardNumber?: CardNumber;
  expiration?: Expiration;
  cardNickname?: string;
  isEmpty?: boolean;
  isBig?: boolean;
};

function Card({ owner, cardCompany, cardNumber, expiration, cardNickname, isEmpty, isBig }: CardProps) {
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
              {cardNumber?.first} - {cardNumber?.second} - {cardNumber?.third} - {cardNumber?.forth}
            </span>
          </div>
          <div className="card-bottom__info">
            <span className={isBig ? 'card-text__big' : 'card-text'}>{owner ?? 'Name'}</span>
            <span className={isBig ? 'card-text__big' : 'card-text'}>
              {expiration?.month ?? 'MM'} / {expiration?.year ?? 'YY'}
            </span>
          </div>
        </div>
      </div>
      <span className="card-nickname mt-5">{cardNickname}</span>
    </div>
  );
}

export default Card;
