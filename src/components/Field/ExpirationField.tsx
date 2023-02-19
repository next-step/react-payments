import React, { ChangeEvent, HTMLInputTypeAttribute } from 'react';
import FieldContainer from './FieldContainer';
import Input from '../Common/Input';

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
        pattern="0[0-9]{1}"
        value={month}
        onChange={onChange}
      />
      <Input
        type={type}
        name="year"
        placeholder="YY"
        pattern="^(\d\d)$"
        maxLength={maxLength}
        value={year}
        onChange={onChange}
      />
    </FieldContainer>
  );
}

export default ExpirationField;
