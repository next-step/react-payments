import FieldContainer from './FieldContainer';
import { Input, InputContainer } from '../Common';
import { ChangeEvent } from 'react';

type Props = {
  title: string;
  value: { password1: string; password2: string };
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function PasswordField({ title, value, onChange }: Props) {
  return (
    <FieldContainer title={title}>
      <div className="flex w-1/2 gap-2">
        <InputContainer size="quarter">
          <Input
            type="password"
            name="password1"
            pattern="[0-9]*"
            maxLength={1}
            value={value.password1}
            onChange={onChange}
          />
        </InputContainer>
        <InputContainer size="quarter">
          <Input
            type="password"
            name="password2"
            pattern="[0-9]*"
            maxLength={1}
            value={value.password2}
            onChange={onChange}
          />
        </InputContainer>
        <InputContainer size="quarter" disabled>
          <Input type="password" maxLength={1} value="*" disabled />
        </InputContainer>
        <InputContainer size="quarter" disabled>
          <Input type="password" maxLength={1} value="*" disabled />
        </InputContainer>
      </div>
    </FieldContainer>
  );
}

export default PasswordField;
