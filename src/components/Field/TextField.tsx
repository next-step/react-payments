import { ChangeEvent } from 'react';
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
  onChange,
}: {
  title: string;
  placeholder?: string;
  maxLength?: number;
  value?: string;
  name: string;
  width?: Width;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <FieldContainer title={title}>
      <Input
        name={name}
        placeholder={placeholder}
        maxLength={maxLength}
        width={width}
        value={value}
        onChange={onChange}
      />
    </FieldContainer>
  );
}

export default TextField;
