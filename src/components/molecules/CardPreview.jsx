import Chip from '../atoms/Chip';
import Text from '../atoms/Text';

function CardPreview(props) {
  const { size, name, expiration } = props;

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
            text="1111 - 2222 - oooo - 0000"
          />
        </div>
        <div className="card-bottom__info">
          <Text
            className={`card-text${size === 'big' ? '__big' : ''}`}
            text={name || 'NAME'}
          />
          <Text
            className={`card-text${size === 'big' ? '__big' : ''}`}
            text={expiration || 'MM / YY'}
          />
        </div>
      </div>
    </div>
  );
}

export default CardPreview;
