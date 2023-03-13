import React, { ChangeEvent, FocusEvent, memo, useContext, useEffect } from 'react';

import { ConditionalComponentWrapper } from '@/components/ConditionalComponentWrapper';
import type { ExpireDatesState } from '@/stores/CardCreatorContext/CardCreatorStates';
import { ApiContext } from '@/stores/CardCreatorContext';
import { useSequentialFocusWithElements } from '@/hooks/useSequentialFocusWithElements';
import { filterNumber } from '@/utils';

import { InputDivider } from '../../components/InputDivider';
import { CardInfoInputElement } from '../../components/CardInfoInputElement';

const EXPIRE_DATE_ELEMENT_SEQUENCE_KEY = 'expireDate';

interface ExpireDateInputProps {
  expireDate: ExpireDatesState[number];
  index: number;
  needDividerRender: boolean;
}

export const ExpireDateInput = memo(({ expireDate, index, needDividerRender }: ExpireDateInputProps) => {
  const { value, placeholder, checkIsAllowInput } = expireDate;

  const apiContext = useContext(ApiContext);

  const { setElement, toTheNextElement } = useSequentialFocusWithElements();

  const isValueValid = expireDate.checkIsValid();

  useEffect(() => {
    toTheNextElement(EXPIRE_DATE_ELEMENT_SEQUENCE_KEY, index, isValueValid);
  }, [toTheNextElement, index, isValueValid]);

  const inputChangeEventProps = {
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

  const inputBlurEventProps = {
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
        ref={(el) => {
          setElement(EXPIRE_DATE_ELEMENT_SEQUENCE_KEY, index, el);
        }}
        onChangeProps={inputChangeEventProps}
        onBlurProps={inputBlurEventProps}
      />
      <ConditionalComponentWrapper isRender={needDividerRender}>
        <InputDivider isHide={!isValueValid}>/</InputDivider>
      </ConditionalComponentWrapper>
    </>
  );
});
