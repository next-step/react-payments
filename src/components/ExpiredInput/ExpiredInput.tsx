import React, { useEffect, useRef, useState } from 'react';
import { onNumericKeyDownOnly } from '../../domain/payments/listeners';
import { isAllowedNumberKeys } from '../../util/inputKey';
import { replaceNumberOnly } from '../../util/number';

const MAX_LENGTH = 2;
type TExpiredInputChange = {
  onExpiredChange?: (expiredMonth: number, expiredYear: number) => void;
};

function ExpiredInput({ onExpiredChange }: TExpiredInputChange) {
  const [expiredMonth, setExpiredMonth] = useState<number>(1);
  const [expiredYear, setExpiredYear] = useState<number>(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (onExpiredChange) onExpiredChange(expiredMonth, expiredYear);
  }, [expiredMonth, expiredYear]);

  const expiredInputProperties = [
    {
      placeholder: 'MM',
      maxLength: MAX_LENGTH,
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        if (value < 1) {
          event.target.value = '1';
        } else if (value > 12) {
          event.target.value = '12';
        }
        setExpiredMonth(Number(event.target.value));
      },
    },
    {
      placeholder: 'YY',
      maxLength: MAX_LENGTH,
      onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        setExpiredYear(Number(event.target.value));
      },
    },
  ];

  return (
    <div className="input-container">
      <span className="input-title">만료일</span>
      <div className="input-box w-50">
        {expiredInputProperties.map((property, idx) => (
          <input
            key={property.placeholder}
            className="input-basic"
            type="text"
            ref={(el) => (inputRefs.current[idx] = el)}
            {...property}
            onKeyDown={onNumericKeyDownOnly}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              event.target.value = replaceNumberOnly(event.target.value);
              property.onChange(event);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ExpiredInput;
