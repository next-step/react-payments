import { CardNumbersType } from '@/domain/type';
import CardText from './CardText';

const REGEX = /[1-9]/gi;
interface CardNumbersProps extends CardNumbersType {
  status: 'big' | 'small' | 'empty';
}
const CardNumbers = ({
  status,
  first = '',
  second = '',
  third = '',
  fourth = '',
}: CardNumbersProps) => {
  return (
    <div className="card-bottom__number">
      <CardText
        status={status}
      >{`${first} ${second} ${third.replace(REGEX, '*')} ${fourth.replace(REGEX, '*')}`}</CardText>
    </div>
  );
};

export default CardNumbers;
