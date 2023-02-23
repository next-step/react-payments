import { Link } from 'react-router-dom'

import { PageTitle } from '@/components/layouts'

function CardList() {
  return (
    <div className="root">
      <div className="app flex-column-center">
        <div className="flex-center">
          <PageTitle addtionalClassName="mb-10" title="보유 카드" hasBackButton={false} />
        </div>
        <div className="card-box">
          <div className="small-card">
            <div className="card-top">
              <span className="card-text">클린카드</span>
            </div>
            <div className="card-middle">
              <div className="small-card__chip" />
            </div>
            <div className="card-bottom">
              <div className="card-bottom__number">
                <span className="card-text">1111 - 2222 - oooo - oooo</span>
              </div>
              <div className="card-bottom__info">
                <span className="card-text">YUJO</span>
                <span className="card-text">12 / 23</span>
              </div>
            </div>
          </div>
        </div>
        <span className="card-nickname">법인카드</span>
        <Link to="/card-add" style={{ textDecoration: 'none' }}>
          <div className="card-box">
            <div className="empty-card">+</div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default CardList
