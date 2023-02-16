import { Card } from '@/components/Common';
import { Link } from 'react-router-dom';

function CardList() {
  return (
    <div>
      <div className="root">
        <div className="app flex-column-center">
          <div className="flex-center">
            <h2 className="page-title mb-10">보유 카드</h2>
          </div>
          <Card isBig />
          <Link to="/add">
            <Card isEmpty />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardList;
