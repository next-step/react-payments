import FieldContainer from './FieldContainer';
import { Input, InputContainer } from '../Common';
import { ChangeEvent } from 'react';
import { Password } from '@/types';
import { LIMIT_INPUT_LENGTH, REGEX } from '@/constants';

type PasswordFieldProps = {
  title: string;
  value: Password;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function PasswordField({ title, value, onChange }: PasswordFieldProps) {
  return (
    <FieldContainer title={title}>
      <div className="flex w-1/2 gap-2">
        <InputContainer size="quarter">
          <Input
            type="password"
            name="password1"
            pattern={REGEX.HTML_PATTERN.PASSWORD}
            maxLength={LIMIT_INPUT_LENGTH.PASSWORD}
            value={value.password1}
            onChange={onChange}
          />
        </InputContainer>
        <InputContainer size="quarter">
          <Input
            type="password"
            name="password2"
            pattern={REGEX.HTML_PATTERN.PASSWORD}
            maxLength={LIMIT_INPUT_LENGTH.PASSWORD}
            value={value.password2}
            onChange={onChange}
          />
        </InputContainer>
        <InputContainer size="quarter" disabled>
          <Input type="password" pattern={REGEX.HTML_PATTERN.PASSWORD} value="*" disabled />
        </InputContainer>
        <InputContainer size="quarter" disabled>
          <Input type="password" pattern={REGEX.HTML_PATTERN.PASSWORD} value="*" disabled />
        </InputContainer>
      </div>
    </FieldContainer>
  );
}

export default PasswordField;
