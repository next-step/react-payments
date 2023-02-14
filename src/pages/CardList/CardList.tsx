import { Link } from 'react-router-dom';

export default function CardList() {
  return (
    <div>
      <div className="root">
        <div className="app flex-column-center">
          <div className="flex-center">
            <h2 className="page-title mb-10">보유 카드</h2>
          </div>

          <div className="card-box">
            <div className="empty-card">
              <Link className="w-25 text-center" to="/card-add">
                +
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
