const Card = ({
  cardName,
  cardNumbers,
  userName,
  expirationDate,
  cardNickname,
  cardStatus,
}) => {
  return (
    <div>
      <div className="flex-column-center ">
        <div class="card-box">
          <div class={cardStatus}>
            <div class="card-top">
              <span class="card-text">{cardName}</span>
            </div>
            <div class="card-middle">
              <div class="small-card__chip"></div>
            </div>
            <div class="card-bottom">
              <div class="card-bottom__number">
                <span class="card-text">{cardNumbers}</span>
              </div>
              <div class="card-bottom__info">
                <span class="card-text">{userName}</span>
                <span class="card-text">{expirationDate}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="card-nickname">{cardNickname}</div>
      </div>
    </div>
  );
};
export default Card;
