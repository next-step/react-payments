import EmptyCard from '@/components/Common/EmptyCard';
import { useCardList } from '@/context/CardListContext';
import { Link } from 'react-router-dom';

function CardList() {
  const cardList = useCardList();

  return (
    <div>
      <div className="root">
        <div className="app flex-column-center">
          <div className="flex-center">
            <h2 className="page-title mb-10">보유 카드</h2>
          </div>
          {cardList.map(card => (
            <Link key={card.id} to={`/complete/${card.id}`}>
              Card
            </Link>
          ))}
          <Link to="/add">
            <EmptyCard />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardList;
