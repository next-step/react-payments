import { Input, InputContainer } from '@components/Common';
import { expirationMonthFormatter, textOnlyFormatter } from '@/utils';
import FieldContainer from './FieldContainer';

import type { ChangeEvent, HTMLInputTypeAttribute } from 'react';

type ExpirationFieldProps = {
  title: string;
  maxLength?: number;
  cvc: {
    month: string;
    year: string;
  };
  type?: HTMLInputTypeAttribute;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function ExpirationField({ title, maxLength, cvc, type = 'text', onChange }: ExpirationFieldProps) {
  const { month, year } = cvc;

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
