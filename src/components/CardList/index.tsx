import { Card } from 'components';

function CardList() {
  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">보유 카드</h2>
      </div>
      <div className="card-box">
        <Card />
      </div>
      <span className="card-nickname">법인카드</span>
      <div className="card-box">
        <div className="empty-card">+</div>
      </div>
    </div>
  );
}

export default CardList;
