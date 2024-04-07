import { type CardBrand, type CardStateType } from '@/domain/type';
import CardBox from './parts/CardBox';
import CardForm from './parts/CardForm';
import CardNumbers from './parts/CardNumbers';
import CardTitle from './parts/CardTitle';

import CardBottom from './parts/CardBottom';
import CardText from './parts/CardText';
import Chip from './parts/Chip';

type CardProps = {
  status?: 'small' | 'big' | 'empty';
  onClick?: () => void;
  cardBrandName: string;
} & CardStateType &
  CardBrand;

const REGEX = /[1-9]/gi;

export const Card = ({
  ownerName = 'NAME',
  month,
  year = '',
  cardNumbers,
  status = 'empty',
  color,
  cardBrandName,
  onClick,
}: CardProps) => {
  const cardNumber = `${cardNumbers?.first ?? ''} ${cardNumbers?.second ?? ''} ${cardNumbers?.third?.replace(REGEX, '*') ?? ''} ${cardNumbers?.fourth?.replace(REGEX, '*') ?? ''}`;

  const displayMonth = month ? `${month} / ` : '';
  const expirationDate = `${displayMonth}${year}`;

  return (
    <CardBox onClick={onClick}>
      <CardForm status={status} style={{ backgroundColor: color }}>
        <CardTitle>
          <CardText status={status}>{cardBrandName}</CardText>
        </CardTitle>
        <div className="card-middle">
          <Chip status={status} />
        </div>
        <CardBottom>
          <CardNumbers status={status} cardNumber={cardNumber} />
          <div className="card-bottom__info">
            <CardText status={status}>{ownerName}</CardText>
            <CardText status={status}>{expirationDate || 'MM/YY'}</CardText>
          </div>
        </CardBottom>
      </CardForm>
    </CardBox>
  );
};
