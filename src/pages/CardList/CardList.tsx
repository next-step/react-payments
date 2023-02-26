import { Link } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';

export default function CardList() {
  return (
    <div>
      <div className="root">
        <div className="app flex-column">
          <div className="flex-center">
            <h2 className="page-title mb-10">보유 카드</h2>
          </div>
          <div className="card-box">
            <div className="empty-card">
              <Link className="w-25 text-center" to={ROUTES.CARD.ADD}>
                +
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
