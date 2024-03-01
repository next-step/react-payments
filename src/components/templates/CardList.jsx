import Title from '../atoms/Title';
import CardItem from '../molecules/CardItem';
import EmptyCard from '../molecules/EmptyCard';

function CardList() {
  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <Title extraClassName="mb-10" title="보유 카드" />
      </div>
      <CardItem />
      <div className="card-box">
        <EmptyCard mode="list" />
      </div>
    </div>
  );
}

export default CardList;
