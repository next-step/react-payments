import { ChangeEvent } from 'react';

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
          maxLength={2}
        />
        {month && <span>/</span>}
        <input
          className="input-basic"
          type="text"
          name="year"
          placeholder="YY"
          onChange={onChange}
          value={year}
          maxLength={2}
        />
      </div>
    </div>
  );
};

export default CardExpiration;
