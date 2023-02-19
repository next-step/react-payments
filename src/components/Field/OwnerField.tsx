import { ChangeEvent } from 'react';
import FieldContainer from './FieldContainer';
import { Input } from '../Common';
import { Width } from '../Common/Input';
import { MAX_INPUT_LENGTH } from '@/constants';

function OwnerField({
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
    <FieldContainer title={title} textLength={`${value?.length}/${MAX_INPUT_LENGTH.OWNER_NAME}`}>
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

export default OwnerField;
