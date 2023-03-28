import React, { ChangeEvent, FocusEvent, memo } from 'react';

import { useCardApiContext, ExpireDateInputElement } from '@/stores/CardContext';
import { filterNumber, isNil } from '@/utils';

import { CardInfoInputElement } from '../../components';

interface ExpireYearInputProps {
  expireDate: ExpireDateInputElement;
  index: number;
}

export const ExpireYearInput = memo(function ExpireYearInput({ expireDate, index }: ExpireYearInputProps) {
  const { value, setRef, isValidate } = expireDate;
  const isError = !isNil(value) && !isValidate;

  const cardContextApis = useCardApiContext();

  const changeEventProps = {
    props: {
      setState: (value: string) => {
        const isValidate = checkYearIsValidate(value);
        cardContextApis?.dispatch({ type: 'expireDates', payload: { index, value, isValidate } });
      },
    },
    checkWhetherSetState: (e: ChangeEvent<HTMLInputElement>) => {
      const filteredNumber = filterNumber(e.currentTarget.value);
      return !filteredNumber || filteredNumber.length <= 2;
    },
    getNewValue: (e: ChangeEvent<HTMLInputElement>) => {
      return filterNumber(e.currentTarget.value);
    },
  };

  const blurEventProps = {
    props: {
      setState: (value: string) => {
        const isValidate = checkYearIsValidate(value);
        cardContextApis?.dispatch({ type: 'expireDates', payload: { index, value, isValidate } });
      },
    },
    checkWhetherSetState: (e: FocusEvent<HTMLInputElement>) => {
      const blurValue = e.currentTarget.value;
      return !!blurValue && blurValue.length === 1;
    },
    getNewValue: (e: FocusEvent<HTMLInputElement>) => {
      const blurValue = e.currentTarget.value;
      return blurValue.padStart(2, '0');
    },
  };

  return (
    <CardInfoInputElement
      className="input-basic"
      type="text"
      value={value ?? ''}
      placeholder="년도"
      ref={setRef.bind(expireDate)}
      changeEventProps={changeEventProps}
      blurEventProps={blurEventProps}
      error={{ isError }}
    />
  );
});

function checkYearIsValidate(value: string) {
  return !!value && value.length <= 2;
}
