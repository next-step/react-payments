import React from 'react';
import './card.css';

import { replaceStringChunkWithToken } from '../../util';
import { cardIssuers, type issuers } from '../../constants/CardIssuers';

export interface Props {
  issuer: issuers;
  number: [string, string, string, string];
  owner: string;
  expiration: {
    month: string;
    year: string;
  };
}

function Card({ issuer, number, owner, expiration: { month, year } }: Props) {
  const { name, color } = issuer
    ? cardIssuers[issuer]
    : { name: '', color: '#e5e5e5' };
  return (
    <div className="empty-card" style={{ backgroundColor: color }}>
      <div className="card-top">{name}</div>
      <div className="card-middle">
        <div className="small-card__chip"></div>
      </div>
      <div className="card-bottom">
        <div className="card-bottom__number">
          {replaceStringChunkWithToken(number, [2, 3], '*').map((number, i) => (
            <input key={`number:${i}`} readOnly value={number} />
          ))}
        </div>
        <div className="card-bottom__info">
          <div className="card-info owner">
            <input readOnly value={owner} />
          </div>
          <div className="card-info expiration">
            <input readOnly value={month} />
            /
            <input readOnly value={year} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
