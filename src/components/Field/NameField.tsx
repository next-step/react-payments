import FieldContainer from './FieldContainer';
import { Input, InputContainer } from '@components/Common';

import type { InputProps } from '@components/Common/Input';

interface NameFieldProps extends InputProps {
  value?: string;
}

function NameField({ title, placeholder, maxLength, value, name, kind, onChange }: NameFieldProps) {
  return (
    <FieldContainer title={title} textLength={`${value?.length}/${maxLength}`}>
      <InputContainer size="full">
        <Input
          name={name}
          kind={kind}
          placeholder={placeholder}
          maxLength={maxLength}
          value={value}
          onChange={onChange}
        />
      </InputContainer>
    </FieldContainer>
  );
}

export default NameField;
