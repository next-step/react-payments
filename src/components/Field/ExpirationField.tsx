import { Input, InputContainer } from '@components/Common';
import { nextSiblingInputFocus, renderTextDivider } from '@/utils';
import FieldContainer from './FieldContainer';

import { ChangeEvent, HTMLInputTypeAttribute, useEffect, useRef } from 'react';
import { useCardForm } from '@/context/CardFormContext';
import { LIMIT_INPUT_LENGTH, REGEX } from '@/constants';

type ExpirationFieldProps = {
  title: string;
  maxLength?: number;

  type?: HTMLInputTypeAttribute;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function ExpirationField({ title, maxLength, type = 'text', onChange }: ExpirationFieldProps) {
  const { month, year } = useCardForm();

  const fieldRef = useRef<HTMLDivElement | null>(null);
  const monthRef = useRef<HTMLInputElement | null>(null);
  const yearRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (month.length === LIMIT_INPUT_LENGTH.EXPIRATION) {
      yearRef.current?.focus();
    }
  }, [month]);

  useEffect(() => {
    if (year.length === LIMIT_INPUT_LENGTH.EXPIRATION) {
      nextSiblingInputFocus(fieldRef, 0);
    }
  }, [year]);

  return (
    <FieldContainer title={title} ref={fieldRef}>
      <InputContainer size="half">
        <Input
          type={type}
          ref={monthRef}
          name="month"
          placeholder="MM"
          pattern={REGEX.HTML_PATTERN.ONLY_NUMBER}
          maxLength={maxLength}
          value={month}
          onChange={onChange}
        />
        {renderTextDivider({ formerValue: month, divider: '/' })}
        <Input
          type={type}
          ref={yearRef}
          name="year"
          placeholder="YY"
          pattern={REGEX.HTML_PATTERN.ONLY_NUMBER}
          maxLength={maxLength}
          value={year}
          onChange={onChange}
        />
      </InputContainer>
    </FieldContainer>
  );
}

export default ExpirationField;
