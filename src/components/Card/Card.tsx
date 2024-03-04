import type { Card as CardProps } from '../../types';

interface Props extends CardProps {
  size?: 'small' | 'big';
}

const Card = ({
  brand,
  numbers,
  owner,
  expirationMonth,
  expirationYear,
  size = 'small',
}: Props) => {
  const isEmpty = !numbers || !owner || !expirationMonth || !expirationYear;

  const cardNumbers = numbers
    ?.map((number, index) => {
      if (index > 1) return number.replace(/\d/g, '*');
      return number;
    })
    .join(' ');

  return (
    <div className='card-box'>
      <div className={isEmpty ? 'empty-card' : `${size}-card`}>
        <div className='card-top'>
          <span className='card-text'>{brand}</span>
        </div>
        <div className='card-middle'>
          <div className={`${size}-card__chip`}></div>
        </div>
        <div className='card-bottom'>
          <div className='card-bottom__number'>
            <span className='card-text'>{cardNumbers}</span>
          </div>
          <div className='card-bottom__info'>
            <span className='card-text'>{owner || 'NAME'}</span>
            <span className='card-text'>
              {expirationMonth || 'MM'} / {expirationYear || 'YY'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
