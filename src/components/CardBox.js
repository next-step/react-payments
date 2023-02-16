import Span from "./Span";

export default function CardBox({ className }) {
  return (
    <div className="card-box">
      <div className={className}>
        <div className="card-top">
          {/* <Span className="card-text">클린카드</Span> */}
        </div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="card-bottom">
          {/* <div class="card-bottom__number">
            <Span className="card-text">1111 - 2222 - oooo - oooo</Span>
          </div> */}
          <div className="card-bottom__info">
            <Span className="card-text">NAME</Span>
            <Span className="card-text">MM / YY</Span>
          </div>
        </div>
      </div>
    </div>
  );
}
