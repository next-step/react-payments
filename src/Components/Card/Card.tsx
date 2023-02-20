import React from 'react';
import './card.css';

export interface Props {
  company: string;
  number: string;
  owner: string;
  expiration: {
    month: string;
    year: string;
  };
}

function Card(props: Props) {
  const {
    company,
    number,
    owner,
    expiration: { month, year },
  } = props;

  return (
    <div className="empty-card">
      <div className="card-top">{company}</div>
      <div className="card-middle">
        <div className="small-card__chip"></div>
      </div>
      <div className="card-bottom">
        <div className="card-bottom__number">
          {replaceDigitsWithDot(splitCardNumber(number), 2).join(' ')}
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

const splitCardNumber = (number: string): string[] => {
  let digits = '';
  const splittedNumberArr: string[] = [];
  for (let i = 0; i < number.length; i++) {
    if (i > 0 && i % 4 === 0) {
      splittedNumberArr.push(digits);
      digits = '';
    }
    digits += number[i];
  }
  splittedNumberArr.push(digits);
  return splittedNumberArr;
};

const replaceDigitsWithDot = (
  numberArr: string[],
  numberOfDigitsChunkToReplace: number
): string[] => {
  const replacedNumberArr: string[] = [];
  for (let i = 0; i < numberArr.length; i++) {
    if (i < numberArr.length - numberOfDigitsChunkToReplace)
      replacedNumberArr.push(numberArr[i]);
    else replacedNumberArr.push('····');
  }
  return replacedNumberArr;
};

export default Card;
