import CardText from './CardText';

type CardNumbersProps = {
  status: 'big' | 'small' | 'empty';
  cardNumber: string;
};

const CardNumbers = ({ status, cardNumber }: CardNumbersProps) => (
  <div className="card-bottom__number">
    <CardText status={status}>{cardNumber}</CardText>
  </div>
);

export default CardNumbers;
