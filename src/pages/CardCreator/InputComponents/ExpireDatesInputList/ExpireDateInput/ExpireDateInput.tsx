import React, { ChangeEvent, FocusEvent, memo } from 'react';

import { ConditionalComponentWrapper } from '@/components';
import { useGetErrorMessage } from '@/hooks';
import { ExpireDatesState, useCardContextApiSelector } from '@/stores/CardContext';
import { useErrorContextApiSelector } from '@/stores/ErrorContext';
import { filterNumber } from '@/utils';

import { InputDivider, CardInfoInputElement } from '../../components';

interface ExpireDateInputProps {
  expireDate: ExpireDatesState[number];
  index: number;
  needDividerRender: boolean;
}

export const ExpireDateInput = memo(({ expireDate, index, needDividerRender }: ExpireDateInputProps) => {
  const { key, value, placeholder, checkIsAllowInput, setRef } = expireDate;

  const cardContextApis = useCardContextApiSelector();
  const errorContextApis = useErrorContextApiSelector();

  const changeEventProps = {
    props: {
      setState: (value: string) => cardContextApis?.dispatch({ type: 'expireDates', payload: { index, value } }),
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
      setState: (value: string) => cardContextApis?.dispatch({ type: 'expireDates', payload: { index, value } }),
      eventCallback: () => {
        if (!expireDate.checkIsValid())
          errorContextApis?.dispatch({ type: expireDate.key, message: expireDate.getInvalidMessage() });
        else errorContextApis?.dispatch({});
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

  const errorMessage = useGetErrorMessage(expireDate);
  const error = {
    isError: !!errorMessage,
    message: errorMessage,
  };

  const isValueValid = expireDate.checkIsValid();

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
        error={error}
      />
      <ConditionalComponentWrapper isRender={needDividerRender}>
        <InputDivider hiding={!isValueValid}>/</InputDivider>
      </ConditionalComponentWrapper>
    </>
  );
});
