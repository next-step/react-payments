import React from 'react';

import { padNumber } from './utils/utils';

interface CardProps {
  cardNumbers: {
    isHide: boolean;
    value?: number;
  }[];
  ownerName?: string;
  expireDates: (number | undefined)[];
}

// TODO: 보여지는 큰 카드는 스토리북 컴포넌트로 분리 가능.
// TODO: number를 padding해서 반환해주는 util함수 만들기
function Card({ cardNumbers, expireDates, ownerName }: CardProps) {
  return (
    <div className="empty-card">
      <div className="card-top" />
      <div className="card-middle">
        <div className="small-card__chip" />
      </div>
      <div className="card-bottom">
        <div className="card-bottom__number">
          {cardNumbers.map(({ isHide, value }, i) => {
            return (
              <span key={`card-number-${i}`} className="card-number-wrapper card-number-spacing">
                {value &&
                  String(value)
                    .split('')
                    .map((cardNum) => (isHide ? '*' : cardNum))}
              </span>
            );
          })}
        </div>
        <div className="card-bottom__info">
          <span className="card-text card-name-spacing">{ownerName || 'NAME'}</span>
          <span className="card-text">
            <span className="card-text card-expire-date">{padNumber(2, expireDates[0])}</span>
            <span className="card-text mx-5">/</span>
            <span className="card-text card-expire-date">{padNumber(2, expireDates[1])}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
