import FieldContainer from './FieldContainer';
import { Input, InputContainer } from '../Common';

import type { ChangeEvent, HTMLInputTypeAttribute } from 'react';

type CVCFieldProps = {
  title: string;
  placeholder?: string;
  maxLength?: number;
  value: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function CVCField({ title, placeholder, maxLength, value, name, type = 'text', onChange }: CVCFieldProps) {
  return (
    <FieldContainer title={title}>
      <InputContainer size="quarter">
        <Input
          type={type}
          name={name}
          pattern="[0-9]*"
          value={value}
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={onChange}
        />
      </InputContainer>
    </FieldContainer>
  );
}

export default CVCField;
