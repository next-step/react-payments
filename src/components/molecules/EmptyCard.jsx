import Chip from '../atoms/Chip';
import Text from '../atoms/Text';

function EmptyCard(props) {
  const { mode } = props;

  return (
    <div className="empty-card">
      {mode === 'add' ? (
        <>
          <div className="card-top" />
          <div className="card-middle">
            <Chip size="small" />
          </div>
          <div className="card-bottom">
            <div className="card-bottom__info">
              <Text className="card-text" text="NAME" />
              <Text className="card-text" text="MM / YY" />
            </div>
          </div>
        </>
      ) : (
        '+'
      )}
    </div>
  );
}

export default EmptyCard;
