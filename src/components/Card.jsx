import styled from 'styled-components';

const DefaultCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 208px;
  height: 130px;
  margin: 10px auto;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.5s;
  }
  .card-top {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .card-middle {
    width: 100%;
    height: 100%;
    margin-left: 30px;
    display: flex;
    align-items: center;
  }

  .card-bottom {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .card-bottom__number {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .card-bottom__info {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  &.small-card {
    .card-text__small {
      margin: 0 16px;
      font-size: 14px;
      line-height: 16px;
      vertical-align: middle;
      font-weight: 400;
    }
    .small-card__chip {
      width: 40px;
      height: 26px;
      left: 95px;
      top: 122px;
      background: #cbba64;
      border-radius: 4px;
    }
  }
  &.big-card {
    width: 290px;
    height: 180px;
    .card-text__big {
      margin: 0 16px;
      font-size: 18px;
      line-height: 20px;
    }
    .big-card__chip {
      width: 55.04px;
      height: 35.77px;
      background: #cbba64;
      border-radius: 4px;
      font-size: 24px;
    }
  }
`;

const Card = ({ cardInfo, size = 'small', onClick }) => (
  <DefaultCard
    className={`${size}-card`}
    style={{ backgroundColor: cardInfo.backgroundColor }}
    onClick={onClick}
    data-number={cardInfo.number}
  >
    <div className="card-top">
      <span className={`card-text__${size}`}>{cardInfo.company}</span>
    </div>
    <div className="card-middle">
      <div className={`${size}-card__chip`}></div>
    </div>
    <div className="card-bottom">
      <div className="card-bottom__number">
        <span className={`card-text__${size}`}>{cardInfo.number}</span>
      </div>
      <div className="card-bottom__info">
        <span className={`card-text__${size}`}>{cardInfo.owner}</span>
        <span className={`card-text__${size}`}>{cardInfo.expiry}</span>
      </div>
    </div>
  </DefaultCard>
);

export default Card;
