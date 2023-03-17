import { Input, InputContainer } from '@components/Common';
import { expirationMonthFormatter, nextSiblingInputFocus, renderTextDivider, textOnlyFormatter } from '@/utils';
import FieldContainer from './FieldContainer';

import { ChangeEvent, HTMLInputTypeAttribute, useEffect, useRef } from 'react';
import { useCardForm } from '@/context/CardFormContext';
import { LIMIT_INPUT_LENGTH } from '@/constants';

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
          maxLength={maxLength}
          value={month}
          onChange={onChange}
          formatter={expirationMonthFormatter}
        />
        {renderTextDivider({ formerValue: month, divider: '/' })}
        <Input
          type={type}
          ref={yearRef}
          name="year"
          placeholder="YY"
          maxLength={maxLength}
          value={year}
          onChange={onChange}
          formatter={textOnlyFormatter}
        />
      </InputContainer>
    </FieldContainer>
  );
}

export default ExpirationField;
