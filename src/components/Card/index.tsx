function Card() {
  return (
    <div className="small-card">
      <div className="card-top">
        <span className="card-text">클린카드</span>
      </div>
      <div className="card-middle">
        <div className="small-card__chip"></div>
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
  );
}

export default Card;
