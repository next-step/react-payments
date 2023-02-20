export interface CardInfo {
  title: string;
  bgColor: string;
  creditNumber: string;
  customerName: string;
  expirationDate: string;
}

interface CardProps {
  empty: boolean;
  cardInfo: Partial<CardInfo>;
  alias: string;
  newCardClick: () => void;
}

const Card = (props: Partial<CardProps>) => {
  const { empty, cardInfo, alias, newCardClick } = props;
  const creditNumberList = cardInfo?.creditNumber?.split('-');
  const expirationDateValid = cardInfo?.expirationDate?.split('/').length === 2;
  return (
    <div className="card-container">
      {empty ? (
        <div className="card" onClick={newCardClick}>
          <div className="new-card">+</div>
        </div>
      ) : (
        <div className="card" style={{ backgroundColor: cardInfo?.bgColor }}>
          <div className="card-title">{cardInfo?.title}</div>
          <div className="card-ic-chip" />
          <div className="card-credit-number">
            {creditNumberList?.length === 4 &&
              creditNumberList?.map((creditNumber, index) => (
                <div
                  key={creditNumber + index.toString()}
                  className="card-credit-number-item"
                >
                  {index < 2 ? creditNumber : creditNumber.replace(/\d/g, '*')}
                </div>
              ))}
          </div>
          <div className="card-bottom">
            <div className="card-customer-name">{cardInfo?.customerName}</div>
            <div className="card-expiration-date">
              {expirationDateValid && cardInfo?.expirationDate}
            </div>
          </div>
        </div>
      )}
      {alias && <div className="card-alias">{alias}</div>}
    </div>
  );
};

Card.defaultProps = {
  empty: false,
  cardInfo: {
    title: '',
    bgColor: '',
    customerName: 'NAME',
    expirationDate: 'MM/YY',
    creditNumber: '',
  },
  alias: '',
  newCardClick: () => {},
};

export default Card;
