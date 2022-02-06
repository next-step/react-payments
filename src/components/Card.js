const Card = (props) => {
  const { type = 'small', card } = props;
  const {
    cardNumbers = ['', '', '', ''],
    expirationMonth = '',
    expirationYear = '',
    cardHolder = '',
    companyName = '',
    color = '',
    nickName = '',
  } = card;

  const mask = (val) => val.replace(/\s/g, '').replace(/\S/g, 'o');
  const cardTextType = type === 'big' ? 'card-text__big' : 'card-text';
  return (
    <>
      <div className="card-box">
        <div
          className={`${type}-card`}
          style={color ? { backgroundColor: color } : null}
        >
          <div className="card-top">
            <span className={cardTextType}>{companyName}</span>
          </div>
          <div className="card-middle">
            <div
              className={`${type === 'big' ? 'big' : 'small'}-card__chip`}
            ></div>
          </div>
          <div className="card-bottom">
            <div className="card-bottom__number">
              <span className={cardTextType}>
                {cardNumbers[0]} {cardNumbers[0] ? '- ' : null}
                {cardNumbers[1]} {cardNumbers[1] ? '- ' : null}
                {mask(cardNumbers[2])} {cardNumbers[2] ? '- ' : null}
                {mask(cardNumbers[3])}
              </span>
            </div>
            <div className="card-bottom__info">
              <span className={cardTextType + ' input-cardholder'}>
                {cardHolder}
              </span>
              <span className={cardTextType}>
                {expirationMonth} {expirationMonth ? ' / ' : ''}{' '}
                {expirationYear}
              </span>
            </div>
          </div>
        </div>
      </div>
      {nickName ? <span className="card-nickname flex">{nickName}</span> : null}
    </>
  );
};

export default Card;
