import './card.css';
//
import { memo } from 'react';
//
import { 카드_테마 } from '../../constants';
//
import type { CardProps } from './Card.types';

const Card = ({
  size = 'small',
  theme = 'base-theme',
  isEmpty = false,
  cardTitle,
  cardNumber = '',
  cardOwner = 'NAME',
  cardExpiration = 'MM / YY',
}: CardProps) => {
  if (isEmpty) {
    return (
      <div className="card-box">
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
  }

  return (
    <div className={`card-box ${theme}`.trim()}>
      <div className={`${size}-card`}>
        <div className="card-top">
          <span className="card-text" data-testid="card-title">
            {cardTitle || 카드_테마[theme]}
          </span>
        </div>
        <div className="card-middle">
          <div className={`${size}-card__chip`}></div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">{cardNumber}</span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text">{cardOwner}</span>
            <span className="card-text">{cardExpiration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Card);
