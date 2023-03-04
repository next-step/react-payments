import CardCreditNumber from './CardCreditNumber';

export interface ICardInfo {
  title: string;
  bgColor: string;
  creditNumber: string;
  customerName: string;
  expirationDate: string;
  alias?: string;
  onClick?: () => void;
}

const Card = (props: ICardInfo) => {
  const {
    title,
    bgColor,
    creditNumber,
    customerName,
    expirationDate,
    alias,
    onClick,
  } = props;

  const onCardClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <div className="card-container" onClick={onCardClick}>
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
  onClick: () => {},
};

export default Card;
