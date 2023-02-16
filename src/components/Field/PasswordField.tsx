import React from 'react';
import FieldContainer from './FieldContainer';
import { Input } from '../Common';

function PasswordField({ title }: { title: string }) {
  return (
    <FieldContainer title={title}>
      <Input className="w-15" type="password" maxLength={1} />
      <Input className="w-15" type="password" maxLength={1} />
      <Input className="w-15" type="password" maxLength={1} />
      <Input className="w-15" type="password" maxLength={1} />
    </FieldContainer>
  );
}

export default PasswordField;
