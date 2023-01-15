import './card.css';
//
import { memo } from 'react';
//
import { 카드_테마 } from '../../constants';
//
import type { CardProps } from './Card.types';

const Card = ({
  isAdd = false,
  isEmpty = false,
  size = 'small',
  theme = 'base-theme',
  cardTitle,
  cardNumber = '',
  cardOwner = 'NAME',
  cardExpiration = 'MM / YY',
  ...props
}: CardProps) => {
  if (isAdd) return <AddCard {...props} />;

  if (isEmpty) return <EmptyCard {...props} />;

  return (
    <div className={`card-box ${theme}`.trim()} {...props}>
      <div className={`${size}-card`}>
        <div className="card-top">
          <span className={`card-text${size === 'big' ? '__big' : ''}`} data-testid="card-title">
            {cardTitle || 카드_테마[theme]}
          </span>
        </div>
        <div className="card-middle">
          <div className={`${size}-card__chip`}></div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className={`card-text${size === 'big' ? '__big' : ''}`}>{cardNumber}</span>
          </div>
          <div className="card-bottom__info">
            <span className={`card-text${size === 'big' ? '__big' : ''}`}>{cardOwner}</span>
            <span className={`card-text${size === 'big' ? '__big' : ''}`}>{cardExpiration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const AddCard = (props: CardProps) => (
  <div className="card-box" {...props}>
    <div className="empty-card">+</div>
  </div>
);

const EmptyCard = (props: CardProps) => (
  <div className="card-box" {...props}>
    <div className="empty-card">
      <div className="card-top" data-testid="card-top"></div>
      <div className="card-middle">
        <div className="small-card__chip"></div>
      </div>
      <div className="card-bottom">
        <div className="card-bottom__info">
          <span className="card-text">NAME</span>
          <span className="card-text">MM / YY</span>
        </div>
      </div>
    </div>
  </div>
);

export default memo(Card);
