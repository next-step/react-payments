const Card = () => {
  return (
    <div class="card-box">
      <div class="empty-card">
        <div class="card-top"></div>
        <div class="card-middle">
          <div class="small-card__chip"></div>
        </div>
        <div class="card-bottom">
          <div class="card-bottom__info">
            <span class="card-text">NAME</span>
            <span class="card-text">MM / YY</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
