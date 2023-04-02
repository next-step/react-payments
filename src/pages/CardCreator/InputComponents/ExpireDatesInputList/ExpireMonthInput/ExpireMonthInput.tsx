import React, { ChangeEvent, FocusEvent, memo } from 'react';

import { ConditionalComponentWrapper } from '@/components';
import { useCardContextApis, ExpireMonthInputElement } from '@/contexts/CardContext';
import { filterNumber, isNil } from '@/utils';

import { InputDivider, CardInfoInputElement } from '../../components';

interface ExpireMonthInputProps {
  expireDate: ExpireMonthInputElement;
  index: number;
  needDividerRender: boolean;
}

export const ExpireMonthInput = memo(function ExpireMonthInput({
  expireDate,
  index,
  needDividerRender,
}: ExpireMonthInputProps) {
  const { value, setRef, errorMessage } = expireDate;
  const isError = !!errorMessage;

  const cardContextApis = useCardContextApis();

  const changeEventProps = {
    props: {
      setState: (value: string) => {
        cardContextApis?.dispatch({ type: 'expireDates', payload: { index, value } });
      },
    },
    checkWhetherSetState: (e: ChangeEvent<HTMLInputElement>) => {
      const filteredNumber = filterNumber(e.currentTarget.value);
      if (isNil(filteredNumber) || filteredNumber.length === 0) return true;

      const isInputLengthValid = filteredNumber.length <= 2;
      const numberedInput = Number(filteredNumber);
      const isMinNumberValid = numberedInput >= 0;
      const isMaxNumberValid = numberedInput <= 12;
      return isInputLengthValid && isMinNumberValid && isMaxNumberValid;
    },
    getNewValue: (e: ChangeEvent<HTMLInputElement>) => {
      return filterNumber(e.currentTarget.value);
    },
  };

  const blurEventProps = {
    props: {
      setState: (value: string) => {
        cardContextApis?.dispatch({ type: 'expireDates', payload: { index, value } });
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

  const handleExpireMonthInputFocus = () => {
    cardContextApis?.dispatch({ type: 'expireDates', payload: { index, value: value || '' } });
  };

  return (
    <>
      <CardInfoInputElement
        className="input-basic"
        type="text"
        value={value ?? ''}
        placeholder="월"
        ref={setRef.bind(expireDate)}
        changeEventProps={changeEventProps}
        blurEventProps={blurEventProps}
        error={{ isError }}
        onFocus={handleExpireMonthInputFocus}
      />
      <ConditionalComponentWrapper isRender={needDividerRender}>
        <InputDivider hiding={isError}>/</InputDivider>
      </ConditionalComponentWrapper>
    </>
  );
});
