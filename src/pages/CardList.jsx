import Card from '../components/Card';

const CardList = ({ cardList }) => (
  <div className="flex-column-center">
    {cardList.map((cardInfo) => (
      <Card isRegistered={true} cardInfo={cardInfo} key={cardInfo.number} />
    ))}
    <Card isRegistered={false} />
  </div>
);

export default CardList;
