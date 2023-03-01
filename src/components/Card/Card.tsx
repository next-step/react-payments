import { masking } from '../../utils';

interface CardProps {
  data: {
    alias?: string;
    num1?: string;
    num2?: string;
    num3?: string;
    num4?: string;
    expiry?: string;
    holder: string;
  };
}

const Card = ({ data }: CardProps) => {
  const { alias, holder, expiry, num1, num2, num3, num4 } = data;

  const formatCardNumber = () =>
    [num1, num2, masking(num3), masking(num4)]
      .filter((lang) => lang !== '')
      .join('-');

  return (
    <div className="card-box">
      <div className="small-card">
        <div className="card-top">
          <span className="card-text">{alias}</span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip" />
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">{formatCardNumber()}</span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text">{holder}</span>
            <span className="card-text">{expiry}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
