import { useEffect, useState } from 'react';
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
  const [cardUI, setCardUI] = useState('empty-card');
  const location = useLocation();
  const currentLocation = location.pathname.split('/').slice(-1).shift();

  //TODO: 회사 선택 유무에 따라 className 변경
  // TODO: 회사에 따라 className 변경

  useEffect(() => {
    const id = cardInfo.cardCompanyId;

    if (id) {
      setCardUI('small-card');
    }
    if (currentLocation === 'completed') {
      setCardUI('big-card');
    }
  }, []);

  return (
    <>
      <div id='card' onClick={onClick}>
        <div className='flex-column-center'>
          <div className='card-box'>
            <div className={cardUI}>
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
      </div>
      <p>{cardNickname}</p>
    </>
  );
};
export default Card;
