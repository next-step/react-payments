export interface ICardInfo {
  title: string;
  bgColor: string;
  creditNumber: string;
  customerName: string;
  expirationDate: string;
  alias?: string;
}

const Card = (props: ICardInfo) => {
  const { title, bgColor, creditNumber, customerName, expirationDate, alias } =
    props;
  const creditNumberList = creditNumber?.split('-');
  const expirationDateValid = expirationDate?.split('/').length === 2;
  return (
    <div className="card-container">
      <div className="card" style={{ backgroundColor: bgColor }}>
        <div className="card-title">{title}</div>
        <div className="card-ic-chip" />
        <div className="card-credit-number">
          {creditNumberList?.length === 4 &&
            creditNumberList?.map((creditNum, index) => (
              <div
                key={creditNum + index.toString()}
                className="card-credit-number-item"
              >
                {index < 2 ? creditNum : creditNum.replace(/\d/g, '*')}
              </div>
            ))}
        </div>
        <div className="card-bottom">
          <div className="card-customer-name">{customerName}</div>
          <div className="card-expiration-date">
            {expirationDateValid && expirationDate}
          </div>
        </div>
      </div>
      {alias && <div className="card-alias">{alias}</div>}
    </div>
  );
};

Card.defaultProps = {
  alias: '',
};

export default Card;
