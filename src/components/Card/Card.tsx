import CardCreditNumber from './CardCreditNumber';

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

  return (
    <div className="card-container">
      <div className="card" style={{ backgroundColor: bgColor }}>
        <div className="card-title">{title}</div>
        <div className="card-ic-chip" />
        <CardCreditNumber creditNumber={creditNumber} />
        <div className="card-bottom">
          <div className="card-customer-name">{customerName}</div>
          <div className="card-expiration-date">{expirationDate}</div>
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
