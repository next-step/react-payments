import { Input, InputContainer } from '@components/Common';
import { expirationMonthFormatter, textOnlyFormatter } from '@/utils';
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
      <InputContainer size="half">
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
          maxLength={maxLength}
          value={year}
          onChange={onChange}
          formatter={textOnlyFormatter}
        />
      </InputContainer>
    </FieldContainer>
  );
}

export default ExpirationField;
