import React, { forwardRef, useCallback, useState } from 'react';
import { TCardComponentProps } from '../../domain/payments/types';
import { leaveOnlyNumbers } from '../../util/number';
import { InputContainer } from '../InputContainer';
import { CARD_INPUT } from '../../constants';
import useForwardedRef from '../../hooks/useForwardedRef';

const { MONTH, YEAR } = CARD_INPUT.EXPIRED;
const MONTH_CHARACTERS = {
  INVALID_MONTH: '00',
  MIN_MONTH: '01',
  MAX_MONTH: '12',
};

const isFulfilled = (month: string, year: string) => {
  return month.length === MONTH.LENGTH && year.length === YEAR.LENGTH;
};

function ExpiredInput(
  { onChange, onFulfill, prevRef, nextRef, caption }: TCardComponentProps,
  forwardedRef: React.ForwardedRef<HTMLInputElement | HTMLButtonElement>
) {
  const [expiredMonth, setExpiredMonth] = useState('');
  const [expiredYear, setExpiredYear] = useState('');

  const {
    refs: [monthRef, yearRef],
  } = useForwardedRef({ forwardedRef, length: [MONTH, YEAR].length });

  // TODO: 큰 거 나중에...😫
  const expiredInputProperties = [
    {
      ref: monthRef,
      placeholder: 'MM',
      maxLength: MONTH.LENGTH,
      onChange: useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
          const value = leaveOnlyNumbers(event.target.value);
          event.target.value = value;
          const parsedValue = parseInt(value, 10);
          if (value === '') {
            setExpiredMonth(value);
            prevRef?.current?.focus();
            return;
          } else if (isNaN(parsedValue)) {
            return;
          } else if (value === MONTH_CHARACTERS.INVALID_MONTH) {
            setExpiredMonth(MONTH_CHARACTERS.MIN_MONTH);
          } else if (parsedValue > parseInt(MONTH_CHARACTERS.MAX_MONTH, 10)) {
            setExpiredMonth(MONTH_CHARACTERS.MAX_MONTH);
          } else {
            setExpiredMonth(value);
          }

          if (value.length === MONTH.LENGTH && yearRef) {
            yearRef?.current?.focus();
          }

          onChange?.([value, expiredYear]);
          if (isFulfilled(value, expiredYear)) {
            onFulfill?.([value, expiredYear]);
            nextRef?.current?.focus();
            return;
          }
        },
        [monthRef, expiredMonth]
      ),
      value: expiredMonth,
    },
    {
      ref: yearRef,
      placeholder: 'YY',
      maxLength: YEAR.LENGTH,
      onChange: useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
          const value = leaveOnlyNumbers(event.target.value);
          event.target.value = value;
          setExpiredYear(value);
          onChange?.([expiredMonth, value]);

          if (value === '') {
            monthRef?.current?.focus();
          }

          if (isFulfilled(expiredMonth, value)) {
            onFulfill?.([expiredMonth, value]);
            nextRef?.current?.focus();
            return;
          }

          if (value.length === YEAR.LENGTH) {
            (event.target.previousSibling as HTMLInputElement)?.focus();
          }
        },
        [yearRef, expiredYear]
      ),
      value: expiredYear,
    },
  ];

  return (
    <InputContainer title="만료 월/연도" width={50} caption={caption}>
      {expiredInputProperties.map((expiredInput) => (
        <input
          required
          key={expiredInput.placeholder}
          className="input-basic"
          type="text"
          ref={expiredInput.ref}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            expiredInput.onChange(event);
          }}
          maxLength={expiredInput.maxLength}
          value={expiredInput.value}
        />
      ))}
    </InputContainer>
  );
}

const ForwardedExpiredInput = forwardRef(ExpiredInput);
ForwardedExpiredInput.displayName = 'ExpiredInput';

export default ForwardedExpiredInput;
