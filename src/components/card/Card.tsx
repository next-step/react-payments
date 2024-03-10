import CardNumbers from './CardNumbers';
import CardBox from './CardBox';
import CardForm from './CardForm';
import CardTitle from './CardTitle';
import { CardStateType } from '@/domain/type';

import CardText from './CardText';
import Chip from './Chip';

interface CardProps extends CardStateType {
  status?: 'small' | 'big' | 'empty';
  onClick?: () => void;
}

const Card = ({
  ownerName = 'NAME',
  month,
  year = '',
  cardNumbers,
  status = 'small',
  onClick,
}: CardProps) => {
  const displayMonth = month ? `${month} / ` : '';
  const expirationDate = `${displayMonth}${year}`;

  return (
    <CardBox onClick={onClick}>
      <CardForm status={status}>
        <CardTitle>
          <CardText status={status}>123123</CardText>
        </CardTitle>
        <div className="card-middle">
          <Chip status={status} />
        </div>
        <div className="card-bottom">
          <CardText status={status}>
            <CardNumbers {...cardNumbers} />
          </CardText>
          <div className="card-bottom__info">
            <CardText status={status}>{ownerName}</CardText>
            <CardText status={status}>{expirationDate || 'MM/YY'}</CardText>
          </div>
        </div>
      </CardForm>
    </CardBox>
  );
};

export default Card;
