import Card from '../components/Card';

const CardList = ({ cardInfo }) => (
  <div className="flex-column-center">
    <Card isRegistered={true} cardInfo={cardInfo} />
    <Card isRegistered={false} />
  </div>
);

export default CardList;
