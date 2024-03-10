import Text from '../atoms/Text';
import CardPreview from './CardPreview';

function CardItem(props) {
  const { cardInfo = [] } = props;

  return (
    <>
      {cardInfo.map((card) => (
        <>
          <div className="card-box">
            <CardPreview
              key={card.id}
              size="small"
              name={card.name}
              expiration={card.expiration}
            />
          </div>
          <Text className="card-nickname" text={card.nickname} />
        </>
      ))}
    </>
  );
}

export default CardItem;
