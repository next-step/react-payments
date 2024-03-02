import type { Card as CardProps } from '../../types';

interface Props extends CardProps {}

const Card = ({
  brand,
  numbers,
  owner = 'NAME',
  expirationMonth = 'MM',
  expirationYear = 'YY',
}: Props) => {
  const isEmpty =
    !brand || !numbers || !owner || !expirationMonth || !expirationYear;

  return (
    <div className='card-box mb-10'>
      <div className={isEmpty ? 'empty-card' : 'small-card'}>
        <div className='card-top'>
          <span className='card-text'>{brand}</span>
        </div>
        <div className='card-middle'>
          <div className='small-card__chip'></div>
        </div>
        <div className='card-bottom'>
          <div className='card-bottom__number'>
            <span className='card-text'>{numbers?.join(' - ')}</span>
          </div>
          <div className='card-bottom__info'>
            <span className='card-text'>{owner}</span>
            <span className='card-text'>
              {expirationMonth} / {expirationYear}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
