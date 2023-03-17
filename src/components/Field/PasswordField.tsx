import FieldContainer from './FieldContainer';
import { Input, InputContainer } from '../Common';
import { ChangeEvent, useEffect, useRef } from 'react';
import { LIMIT_INPUT_LENGTH, REGEX } from '@/constants';
import { useCardForm } from '@/context/CardFormContext';

type PasswordFieldProps = {
  title: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function PasswordField({ title, onChange }: PasswordFieldProps) {
  const { password1, password2 } = useCardForm();

  const password1Ref = useRef<HTMLInputElement | null>(null);
  const password2Ref = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (password1.length === LIMIT_INPUT_LENGTH.PASSWORD) {
      password2Ref.current?.focus();
    }
  }, [password1]);

  return (
    <FieldContainer title={title}>
      <div className="flex w-1/2 gap-2">
        <InputContainer size="quarter">
          <Input
            type="password"
            ref={password1Ref}
            name="password1"
            pattern={REGEX.HTML_PATTERN.PASSWORD}
            maxLength={LIMIT_INPUT_LENGTH.PASSWORD}
            value={password1}
            onChange={onChange}
          />
        </InputContainer>
        <InputContainer size="quarter">
          <Input
            type="password"
            ref={password2Ref}
            name="password2"
            pattern={REGEX.HTML_PATTERN.PASSWORD}
            maxLength={LIMIT_INPUT_LENGTH.PASSWORD}
            value={password2}
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
