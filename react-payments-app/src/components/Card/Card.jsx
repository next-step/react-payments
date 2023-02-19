const Card = ({
  cardName,
  cardNumbers,
  cardOwner,
  cardExpirationDate,
  cardNickname,
  cardStatus,
}) => {
  return (
    <div id='card'>
      <div className='flex-column-center mb-10'>
        <div className='card-box'>
          <div className={cardStatus}>
            <div className='card-top'>
              <span className='card-text'>{cardName}</span>
            </div>
            <div className='card-middle'>
              <div className='small-card__chip'></div>
            </div>
            <div className='card-bottom'>
              <div className='card-bottom__number'>
                <span className='card-text'>
                  {/* TODO: 데이터가 없을 떈 대시(-)가 붙지 않도록 */}
                  {cardNumbers.map((fourDigits, idx) =>
                    idx === cardNumbers.length - 1
                      ? fourDigits
                      : fourDigits + '-'
                  )}
                </span>
              </div>
              <div className='card-bottom__info'>
                <span className='card-text'>{cardOwner}</span>
                <span className='card-text'>
                  {/* TODO: 데이터가 없을 떈 대시(/)가 붙지 않도록 */}
                  {cardExpirationDate.join('/')}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='card-nickname mt-10'>{cardNickname}</div>
      </div>
    </div>
  );
};
export default Card;
