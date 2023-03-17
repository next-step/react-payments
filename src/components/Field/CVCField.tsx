import FieldContainer from './FieldContainer';
import { Input, InputContainer } from '../Common';

import { ChangeEvent, HTMLInputTypeAttribute, useEffect, useRef } from 'react';
import { useCardForm } from '@/context/CardFormContext';
import { LIMIT_INPUT_LENGTH } from '@/constants';
import { nextSiblingInputFocus } from '@/utils';

type CVCFieldProps = {
  title: string;
  placeholder?: string;
  maxLength?: number;
  name: string;
  type?: HTMLInputTypeAttribute;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function CVCField({ title, placeholder, maxLength, name, type = 'text', onChange }: CVCFieldProps) {
  const { cvc } = useCardForm();

  const fieldRef = useRef<HTMLDivElement | null>(null);
  const cvcRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (cvc.length === LIMIT_INPUT_LENGTH.CVC) {
      nextSiblingInputFocus(fieldRef, 0);
    }
  }, [cvc]);

  return (
    <FieldContainer ref={fieldRef} title={title}>
      <InputContainer size="quarter">
        <Input
          type={type}
          ref={cvcRef}
          name={name}
          pattern="[0-9]*"
          value={cvc}
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={onChange}
        />
      </InputContainer>
    </FieldContainer>
  );
}

export default CVCField;
