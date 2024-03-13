import type { CardInfo } from '../../types';

interface Props extends CardInfo {
  size?: 'small' | 'big';
}

const Card = ({ brand, numbers, owner, expiration, size = 'small' }: Props) => {
  const cardNumbers = Object.values(numbers)
    .map((number, index) => {
      if (index > 1) return number.replace(/\d/g, '*');
      return number;
    })
    .join(' ');

  return (
    <div className='card-box'>
      <div className={`${size}-card`}>
        <div className='card-top'>
          <span className='card-text'>{brand}</span>
        </div>
        <div className='card-middle'>
          <div className={`${size}-card__chip`} />
        </div>
        <div className='card-bottom'>
          <div className='card-bottom__number'>
            <span className='card-text'>{cardNumbers}</span>
          </div>
          <div className='card-bottom__info'>
            <span className='card-text'>{owner || 'NAME'}</span>
            <span className='card-text'>
              {expiration.month || 'MM'} / {expiration.year || 'YY'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
