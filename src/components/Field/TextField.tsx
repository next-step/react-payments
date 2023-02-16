import React, { HTMLInputTypeAttribute } from 'react';
import FieldContainer from './FieldContainer';
import { Input } from '../Common';
import { Width } from '../Common/Input';

function TextField({
  title,
  placeholder,
  maxLength,
  value,
  name,
  width = 'w-100',
  type = 'text',
}: {
  title: string;
  placeholder?: string;
  maxLength?: number;
  value: string;
  name: string;
  width?: Width;
  type?: HTMLInputTypeAttribute;
}) {
  return (
    <FieldContainer title={title} subTitle={`${value}/${maxLength}`}>
      <Input type={type} name={name} placeholder={placeholder} maxLength={maxLength} width={width} />
    </FieldContainer>
  );
}

export default TextField;
