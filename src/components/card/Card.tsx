import { CardStateType } from '@/provider/CardInfoProvider';
import CardNumbers from './CardNumbers';
import CardBox from './CardBox';
import CardForm from './CardForm';

type CardProps = { status?: string } & CardStateType;

const Card = ({
  ownerName = 'NAME',
  month,
  year = '',
  cardNumbers,
  status = 'small',
}: CardProps) => {
  const displayMonth = month ? `${month} / ` : '';
  const expirationDate = `${displayMonth}${year}`;

  return (
    <CardBox>
      <CardForm status={status}>
        <div className="card-top"></div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>

        <div className="card-bottom">
          <span className="card-text">
            <CardNumbers {...cardNumbers} />
          </span>
          <div className="card-bottom__info">
            <span className="card-text">{ownerName}</span>
            <span className="card-text">{expirationDate || 'MM/YY'}</span>
          </div>
        </div>
      </CardForm>
    </CardBox>
  );
};

export default Card;
