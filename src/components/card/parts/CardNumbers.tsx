import { type CardNumbersType } from '@/domain/type';
import CardText from './CardText';

const REGEX = /[1-9]/gi;
type CardNumbersProps = {
  status: 'big' | 'small' | 'empty';
} & CardNumbersType;
const CardNumbers = ({
  status,
  first = '',
  second = '',
  third = '',
  fourth = '',
}: CardNumbersProps) => (
  <div className="card-bottom__number">
    <CardText
      status={status}
    >{`${first} ${second} ${third.replace(REGEX, '*')} ${fourth.replace(REGEX, '*')}`}</CardText>
  </div>
);

export default CardNumbers;
