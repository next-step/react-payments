import { Input } from '@components/Common';
import { expirationMonthFormatter, expirationYearFormatter } from '@/utils';
import FieldContainer from './FieldContainer';

import type { ChangeEvent, HTMLInputTypeAttribute } from 'react';

function ExpirationField({
  title,
  maxLength,
  value,
  type = 'text',
  onChange,
}: {
  title: string;
  maxLength?: number;
  value: {
    month: string;
    year: string;
  };
  type?: HTMLInputTypeAttribute;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  const { month, year } = value;

  return (
    <FieldContainer title={title}>
      <Input
        type={type}
        name="month"
        placeholder="MM"
        maxLength={maxLength}
        value={month}
        onChange={onChange}
        formatter={expirationMonthFormatter}
      />
      <Input
        type={type}
        name="year"
        placeholder="YY"
        // pattern="^(\d\d)$"
        maxLength={maxLength}
        value={year}
        onChange={onChange}
        formatter={expirationYearFormatter}
      />
    </FieldContainer>
  );
}

export default ExpirationField;
