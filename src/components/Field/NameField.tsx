import FieldContainer from './FieldContainer';
import { Input } from '@components/Common';

import type { InputProps } from '@components/Common/Input';

interface NameFieldProps extends InputProps {
  value?: string;
}

function NameField({ title, placeholder, maxLength, value, name, width = 'w-100', kind, onChange }: NameFieldProps) {
  return (
    <FieldContainer title={title} textLength={`${value?.length}/${maxLength}`}>
      <Input
        name={name}
        kind={kind}
        placeholder={placeholder}
        maxLength={maxLength}
        width={width}
        value={value}
        onChange={onChange}
      />
    </FieldContainer>
  );
}

export default NameField;
