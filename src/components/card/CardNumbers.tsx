import React from 'react';

interface CardNumbers {
  first: string;
  second: string;
  third: string;
  fourth: string;
}
const CardNumbers = ({ first, second, third, fourth }: CardNumbers) => {
  return (
    <div style={{ display: 'flex', gap: '5px' }}>
      <div>
        <span>{first}</span>
      </div>
      <div>
        <span>{second}</span>
      </div>
      <div>
        <span>{third?.replace(/[1-9]/gi, '*')}</span>
      </div>
      <div>
        <span>{fourth?.replace(/[1-9]/gi, '*')}</span>
      </div>
    </div>
  );
};

export default CardNumbers;
