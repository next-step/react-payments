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
      <Input type={type} name="month" maxLength={maxLength} value={month} placeholder="MM" onChange={onChange} />
      <Input type={type} name="year" maxLength={maxLength} value={year} placeholder="YY" onChange={onChange} />
    </FieldContainer>
  );
}

export default ExpirationField;
