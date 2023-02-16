import React, { ChangeEvent, HTMLInputTypeAttribute } from 'react';
import FieldContainer from './FieldContainer';
import { Input } from '../Common';

function CVCField({
  title,
  placeholder,
  maxLength,
  value,
  name,
  type = 'text',
  onChange,
}: {
  title: string;
  placeholder?: string;
  maxLength?: number;
  value: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <FieldContainer title={title}>
      <Input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChange}
      />
    </FieldContainer>
  );
}

export default CVCField;
