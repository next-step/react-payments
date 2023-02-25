import { Link } from 'react-router-dom';

import { PATH } from '../utils/path_constants';

import '../styles/index.css';

const CardList = () => {
  return (
    <div>
      <h2>보유카드</h2>
      <div className="root">
        <div className="app">
          <h2 className="page-title mb-10">보유 카드 </h2>
          <div className="card-box mb-10">
            <div className="small-card">
              <div className="card-top" />
              <div className="card-middle">
                <div className="small-card__chip" />
              </div>
              <div className="card-bottom">
                <div className="card-bottom__info">
                  <span className="card-text">NAME</span>
                  <span className="card-text">MM / YY</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card-box mb-10">
            <div className="empty-card">
              <div className="card-top" />
              <div className="card-middle">
                <div className="small-card__chip" />
              </div>
              <div className="card-bottom">
                <div className="card-bottom__info">
                  <span className="card-text">NAME</span>
                  <span className="card-text">MM / YY</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card-box">
            <div className="empty-card">
              <Link to={PATH.ADD_CARD} className="link-button">
                +
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardList;
