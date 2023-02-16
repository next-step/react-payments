import React from 'react';
import { Input } from '../Common';
import FieldContainer from './FieldContainer';

function CardNumberField({ title }: { title: string }) {
  return (
    <FieldContainer title={title}>
      <div className="input-box flex-center">
        <Input type="text" minLength={0} maxLength={4} />
        -
        <Input type="password" minLength={0} maxLength={4} />
        -
        <Input type="password" minLength={0} maxLength={4} />
        -
        <Input type="text" minLength={0} maxLength={4} />
      </div>
    </FieldContainer>
  );
}

export default CardNumberField;
