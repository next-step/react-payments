import { Link } from 'react-router-dom';
import '../styles/index.css';

const CompleteAddCard = () => {
  return (
    <div>
      <h2>카드 등록</h2>
      <div className="root">
        <div className="app content-align">
          <h2 className="page-title text-center">카드등록이 완료되었습니다.</h2>
          <div className="card-box mb-10">
            <div className="big-card">
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
          <div>
            <input type="text" className="favorite-card" />
          </div>
          <div className="button-box">
            <Link to="/" className="link-button">
              확인
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteAddCard;
