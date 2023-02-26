import React from 'react';

// 도메인이 되는 타입들
interface CardProps {
  cardNumbers: {
    isHide: boolean;
    value?: string;
  }[];
  ownerName?: string;
  expireDates: (string | undefined)[];
}

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
            <span className="card-text card-expire-date">{expireDates[0]?.padStart(2, '0')}</span>
            <span className="card-text mx-5">/</span>
            <span className="card-text card-expire-date">{expireDates[1]?.padStart(2, '0')}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
