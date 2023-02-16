import React, { ChangeEvent } from 'react';
import { Input } from '../Common';
import FieldContainer from './FieldContainer';

type CardNumber = {
  first: string;
  second: string;
  third: string;
  forth: string;
};

function CardNumberField({
  title,
  value,
  onChange,
}: {
  title: string;
  value: CardNumber;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <FieldContainer title={title}>
      <div className="input-box flex-center">
        <Input type="text" minLength={0} maxLength={4} value={value.first} name={'first'} onChange={onChange} />
        -
        <Input type="text" minLength={0} maxLength={4} value={value.second} name={'second'} onChange={onChange} />
        -
        <Input type="password" minLength={0} maxLength={4} value={value.third} name={'third'} onChange={onChange} />
        -
        <Input type="password" minLength={0} maxLength={4} value={value.forth} name={'forth'} onChange={onChange} />
      </div>
    </FieldContainer>
  );
}

export default CardNumberField;
