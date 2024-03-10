import CardNumbers from './parts/CardNumbers';
import CardBox from './parts/CardBox';
import CardForm from './parts/CardForm';
import CardTitle from './parts/CardTitle';
import { CardStateType } from '@/domain/type';

import CardText from './parts/CardText';
import Chip from './parts/Chip';
import CardBottom from './parts/CardBottom';

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
          <CardText status={status}>타이틀</CardText>
        </CardTitle>
        <div className="card-middle">
          <Chip status={status} />
        </div>
        <CardBottom>
          <CardNumbers status={status} {...cardNumbers} />
          <div className="card-bottom__info">
            <CardText status={status}>{ownerName}</CardText>
            <CardText status={status}>{expirationDate || 'MM/YY'}</CardText>
          </div>
        </CardBottom>
      </CardForm>
    </CardBox>
  );
};

export default Card;
