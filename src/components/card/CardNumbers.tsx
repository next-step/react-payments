import { CardNumbersType } from '@/domain/type';

const REGEX = /[1-9]/gi;

const CardNumbers = ({ first = '', second = '', third = '', fourth = '' }: CardNumbersType) => {
  return (
    <div style={{ display: 'flex', gap: '5px' }}>
      <div>
        <span>{first}</span>
      </div>
      <div>
        <span>{second}</span>
      </div>
      <div>
        <span>{third.replace(REGEX, '*')}</span>
      </div>
      <div>
        <span>{fourth.replace(REGEX, '*')}</span>
      </div>
    </div>
  );
};

export default CardNumbers;
