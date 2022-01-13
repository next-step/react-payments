const EmptyCard = () => (
  <div className="card-box">
    <div className="empty-card">
      <div className="card-top" />
      <div className="card-middle">
        <div className="card-middle__chip" />
      </div>
      <div className="card-bottom">
        <div className="card-bottom__info">
          <span className="card-text">NAME</span>
          <span className="card-text">MM / YY</span>
        </div>
      </div>
    </div>
  </div>
)

export default EmptyCard
