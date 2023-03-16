import React, { ChangeEvent, FocusEvent, memo } from 'react';

import { ConditionalComponentWrapper } from '@/components';
import type { ExpireDatesState } from '@/stores/CardCreatorContext/CardCreatorStates';
import { useCardContextApiSelector } from '@/stores/CardCreatorContext';
import { filterNumber } from '@/utils';

import { InputDivider } from '../../components/InputDivider';
import { CardInfoInputElement } from '../../components/CardInfoInputElement';

interface ExpireDateInputProps {
  expireDate: ExpireDatesState[number];
  index: number;
  needDividerRender: boolean;
}

export const ExpireDateInput = memo(({ expireDate, index, needDividerRender }: ExpireDateInputProps) => {
  const { value, placeholder, checkIsAllowInput, setRef } = expireDate;

  const apiContext = useCardContextApiSelector();

  const isValueValid = expireDate.checkIsValid();

  const changeEventProps = {
    props: {
      setState: (value: string) => apiContext?.dispatch({ type: 'expireDates', payload: { index, value } }),
    },
    checkWhetherSetState: (e: ChangeEvent<HTMLInputElement>) => {
      const filteredNumber = filterNumber(e.currentTarget.value);
      return checkIsAllowInput(filteredNumber);
    },
    getNewValue: (e: ChangeEvent<HTMLInputElement>) => {
      return filterNumber(e.currentTarget.value);
    },
  };

  const blurEventProps = {
    props: {
      setState: (value: string) => apiContext?.dispatch({ type: 'expireDates', payload: { index, value } }),
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
    <>
      <CardInfoInputElement
        className="input-basic"
        type="text"
        value={value ?? ''}
        placeholder={placeholder}
        ref={setRef?.bind(expireDate)}
        changeEventProps={changeEventProps}
        blurEventProps={blurEventProps}
      />
      <ConditionalComponentWrapper isRender={needDividerRender}>
        <InputDivider hiding={!isValueValid}>/</InputDivider>
      </ConditionalComponentWrapper>
    </>
  );
});
