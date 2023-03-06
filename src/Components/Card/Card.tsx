import React from 'react';
import './card.css';

import { replaceStringChunkWithToken } from '../../util';

export interface Props {
  company: string;
  number: [string, string, string, string];
  owner: string;
  expiration: {
    month: string;
    year: string;
  };
}

function Card({ company, number, owner, expiration: { month, year } }: Props) {
  return (
    <div className="empty-card">
      <div className="card-top">{company}</div>
      <div className="card-middle">
        <div className="small-card__chip"></div>
      </div>
      <div className="card-bottom">
        <div className="card-bottom__number">
          {replaceStringChunkWithToken(number, [2, 3], '*').join(' ')}
        </div>
        <div className="card-bottom__info">
          <span className="card-text">{owner}</span>
          <span className="card-text">
            {month} / {year}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
