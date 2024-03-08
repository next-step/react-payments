import Chip from '../atoms/Chip';
import Text from '../atoms/Text';
import { CARD_SEPARATOR } from '../../constants/constraints';

function CardPreview(props) {
  const { card, size } = props;

  return (
    <div className={`${size}-card`}>
      <div className="card-top">
        <Text
          className={`card-text${size === 'big' ? '__big' : ''}`}
          text="클린카드"
        />
      </div>
      <div className="card-middle">
        <Chip size={size} />
      </div>
      <div className="card-bottom">
        <div className="card-bottom__number">
          <Text
            className={`card-text${size === 'big' ? '__big' : ''}`}
            text={card?.cardNumber.join(CARD_SEPARATOR)}
          />
        </div>
        <div className="card-bottom__info">
          <Text
            className={`card-text${size === 'big' ? '__big' : ''}`}
            text={card?.user || 'NAME'}
          />
          <Text
            className={`card-text${size === 'big' ? '__big' : ''}`}
            text={`${card?.expiration.mm || 'MM'} / ${card?.expiration.yy || 'YY'}`}
          />
        </div>
      </div>
    </div>
  );
}

export default CardPreview;
