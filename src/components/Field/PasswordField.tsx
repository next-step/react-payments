import FieldContainer from './FieldContainer';
import { Input } from '../Common';
import { ChangeEvent } from 'react';

type Props = {
  title: string;
  value: { password1: string; password2: string };
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
function PasswordField({ title, value, onChange }: Props) {
  return (
    <FieldContainer title={title}>
      <Input
        className="w-15"
        type="password"
        name="password1"
        maxLength={1}
        value={value.password1}
        onChange={onChange}
      />
      <Input
        className="w-15"
        type="password"
        name="password2"
        maxLength={1}
        value={value.password2}
        onChange={onChange}
      />
      <Input className="w-15" type="password" maxLength={1} value="*" disabled />
      <Input className="w-15" type="password" maxLength={1} value="*" disabled />
    </FieldContainer>
  );
}

export default PasswordField;
