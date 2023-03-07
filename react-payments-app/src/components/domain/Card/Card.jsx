import { useLocation } from 'react-router-dom';

import { useCard } from '../../../store/CardContext';
import { cardCompanies } from '../../../server/cardCompanies';

const Card = ({
  cardName,
  cardNumbers,
  cardOwner,
  cardExpirationDate,
  cardNickname,
  onClick,
}) => {
  const { cardInfo } = useCard();
  const location = useLocation();
  const currentLocation = location.pathname.split('/').slice(-1).shift();
  const id = cardInfo.cardCompanyId;

  //TODO: 회사 선택 유무에 따라 className 변경
  // TODO: 회사에 따라 className 변경

  const getCardUI = ({ id, currentLocation }) => {
    if (id) {
      return 'small-card';
    }
    if (currentLocation === 'completed') {
      return 'big-card';
    }
    return 'empty-card';
  };

  return (
    <>
      <button id='card' onClick={onClick}>
        <div className='flex-column-center'>
          <div className='card-box'>
            <div className={getCardUI({ id, currentLocation })}>
              <div className='card-top'>
                <span className='card-text'>{cardName}</span>
              </div>
              <div className='card-middle'>
                <div className='small-card__chip'></div>
              </div>
              <div className='card-bottom'>
                <div className='card-bottom__number'>
                  <span className='card-text'>{cardNumbers}</span>
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
        </div>
      </button>
      <p>{cardNickname}</p>
    </>
  );
};
export default Card;
