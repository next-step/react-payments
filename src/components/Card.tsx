import { MARK } from '../constant';

interface Card {
  cardNumber: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  ownerName: string;
  expiration: {
    month: string;
    year: string;
  };
}

export default function Card({ cardNumber, ownerName, expiration }: Card) {
  return (
    <div className="card-box">
      <div className="empty-card">
        <div className="card-top"></div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="flex h-14">
          <span className="card-text ml-8px mr-8px">{cardNumber.first}</span>
          <span className="card-text ml-8px mr-8px">{cardNumber.second}</span>
          <span className="card-text ml-8px mr-8px">{'*'.repeat(cardNumber.third.length)}</span>
          <span className="card-text ml-8px mr-8px">{'*'.repeat(cardNumber.fourth.length)}</span>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__info">
            <span className="card-text word-break-all">{ownerName}</span>
            <span className="card-text w-14 text-center">{`${expiration.month} ${MARK.slash} ${expiration.year}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
