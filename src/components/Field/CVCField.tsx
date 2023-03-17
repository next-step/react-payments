import FieldContainer from './FieldContainer';
import { Input, InputContainer } from '../Common';

import { ChangeEvent, HTMLInputTypeAttribute, useEffect, useRef } from 'react';
import { useCardForm } from '@/context/CardFormContext';
import { LIMIT_INPUT_LENGTH, REGEX } from '@/constants';
import { nextSiblingInputFocus } from '@/utils';
import { useCardFormValidator } from '@/context/CardFormValidator';

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
  const {
    isValidCVCdForm: { isValid, msg },
  } = useCardFormValidator();

  const fieldRef = useRef<HTMLDivElement | null>(null);
  const cvcRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (cvc.length === LIMIT_INPUT_LENGTH.CVC) {
      nextSiblingInputFocus(fieldRef, 0);
    }
  }, [cvc]);

  return (
    <FieldContainer title={title} ref={fieldRef} msg={msg}>
      <InputContainer size="quarter" error={!isValid}>
        <Input
          type={type}
          ref={cvcRef}
          name={name}
          pattern={REGEX.HTML_PATTERN.ONLY_NUMBER}
          value={cvc}
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={onChange}
          error={!isValid}
        />
      </InputContainer>
    </FieldContainer>
  );
}

export default CVCField;
