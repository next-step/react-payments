import './card.css';
//
import { memo, useEffect, useState } from 'react';
//
import { 카드_기본번호, 카드_테마 } from '@/constants';
//
import type { 카드_테마_타입 } from 'literal';
import type { CardProps } from './Card.types';

const Card = ({ size = 'small', theme = '기본', isEmpty = false, ...props }: CardProps) => {
  const {
    cardTitle,
    cardNumber = '',
    cardOwner = 'NAME',
    cardMonth = 'MM',
    cardYear = 'YY',
  } = props;
  const [cardTheme, setCardTheme] = useState<카드_테마_타입>(카드_테마[theme]);

  useEffect(() => {
    const parsed = cardNumber.replace('-', '');
    if (parsed.length < 8) return;

    const cardCompany = 카드_기본번호[parsed.substring(0, 8)];
    if (!cardCompany) return;

    setCardTheme(cardCompany);
  }, [cardNumber]);

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
    <div className={`card-box ${cardTheme}`.trim()}>
      <div className={`${size}-card`}>
        <div className="card-top">
          <span className="card-text" data-testid="card-title">
            {cardTitle || theme !== '기본' ? theme : ''}
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
            <span className="card-text">
              {cardMonth} / {cardYear}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Card);
