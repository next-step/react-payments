const Card = ({
  cardName,
  cardNumbers,
  cardOwner,
  cardExpirationDate,
  cardNickname,
  cardStatus,
}) => {
  // TODO: 카드UI 표시 더 자연스럽게 로직 수정
  const cardNumbersToDisplay = hideLastEightNumbers(cardNumbers);

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
                  {cardNumbersToDisplay[0] && cardNumbersToDisplay.join('-')}
                </span>
              </div>
              <div className='card-bottom__info'>
                <span className='card-text'>{cardOwner}</span>
                <span className='card-text'>
                  {cardExpirationDate[0] && cardExpirationDate.join('/')}
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

const hideLastEightNumbers = (cardNumbers) => {
  const copy = [...cardNumbers];

  const lastEightDigits = copy.slice(-2).map((digits) => digits && '****');
  copy[copy.length - 2] = lastEightDigits[0];
  copy[copy.length - 1] = lastEightDigits[1];

  return copy;
};
