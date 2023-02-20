import Button from './Common/Button';

const Card = ({ isRegistered, cardInfo }) => (
  <>
    <div className="card-box">
      {!isRegistered && (
        <Button to="/regist" children="+" className="empty-card button-box" />
      )}
      {isRegistered && (
        <div
          className="small-card"
          style={{ backgroundColor: cardInfo.backgroundColor }}
        >
          <div className="card-top">
            <span className="card-text">{cardInfo.company}</span>
          </div>
          <div className="card-middle">
            <div className="small-card__chip"></div>
          </div>
          <div className="card-bottom">
            <div className="card-bottom__number">
              <span className="card-text">{cardInfo.number}</span>
            </div>
            <div className="card-bottom__info">
              <span className="card-text">{cardInfo.owner}</span>
              <span className="card-text">{cardInfo.expiry}</span>
            </div>
          </div>
        </div>
      )}
    </div>
    {isRegistered && <span className="card-nickname">{cardInfo.nickname}</span>}
  </>
);

export default Card;
