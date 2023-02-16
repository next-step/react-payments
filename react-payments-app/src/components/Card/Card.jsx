const Card = ({
  cardName,
  cardNumbers,
  userName,
  expirationDate,
  cardNickname,
  cardStatus,
}) => {
  return (
    <div id="card">
      <div className="flex-column-center mb-10">
        <div className="card-box">
          <div className={cardStatus}>
            <div className="card-top">
              <span className="card-text">{cardName}</span>
            </div>
            <div className="card-middle">
              <div className="small-card__chip"></div>
            </div>
            <div className="card-bottom">
              <div className="card-bottom__number">
                <span className="card-text">{cardNumbers}</span>
              </div>
              <div className="card-bottom__info">
                <span className="card-text">{userName}</span>
                <span className="card-text">{expirationDate}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="card-nickname mt-10">{cardNickname}</div>
      </div>
    </div>
  );
};
export default Card;
