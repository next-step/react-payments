import FieldContainer from './FieldContainer';
import { Input } from '@components/Common';

import type { Width } from '@components/Common/Input';
import type { ChangeEvent } from 'react';

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
    <FieldContainer title={title} textLength={`${value?.length}/${maxLength}`}>
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
