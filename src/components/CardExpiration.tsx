import { ChangeEvent, useRef, useEffect } from 'react';
import { CARD } from '../utils/cardConstants';
import { showSlash } from '../utils/insertWording';

type ExpirationNumber = {
  month: string;
  year: string;
};
type ExpirationNumberInputProps = {
  expiration: ExpirationNumber;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
const CardExpiration = ({ expiration, onChange }: ExpirationNumberInputProps) => {
  const { month, year } = expiration;
  const yearInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (month.length === CARD.EXPIRATION_LENGTH) {
      yearInputRef.current?.focus();
    }
  }, [month]);

  return (
    <div className="input-container">
      <span className="input-title">만료일</span>
      <div className="input-box w-50">
        <input
          className="input-basic"
          type="text"
          placeholder="MM"
          value={month}
          name="month"
          onChange={onChange}
          maxLength={CARD.EXPIRATION_LENGTH}
        />
        {showSlash(month, CARD.EXPIRATION_LENGTH)}
        <input
          ref={yearInputRef}
          className="input-basic"
          type="text"
          name="year"
          placeholder="YY"
          onChange={onChange}
          value={year}
          maxLength={CARD.EXPIRATION_LENGTH}
        />
      </div>
    </div>
  );
};

export default CardExpiration;
