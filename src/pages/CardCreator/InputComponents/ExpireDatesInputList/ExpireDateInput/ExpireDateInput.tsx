import React, { memo, useContext, useEffect } from 'react';

import { ConditionalComponentWrapper } from '@/components/ConditionalComponentWrapper';
import type { ExpireDatesState } from '@/pages/CardCreator/types';
import { ApiContext } from '@/stores/cardCreator';
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
  const { value, placeholder, checkIsValid, checkIsAllowInput } = expireDate;

  const apiContext = useContext(ApiContext);

  const { setElement, toTheNextElement } = useSequentialFocusWithElements();

  const isValueValid = checkIsValid(value);
  useEffect(() => {
    toTheNextElement(EXPIRE_DATE_ELEMENT_SEQUENCE_KEY, index, isValueValid);
  }, [toTheNextElement, index, isValueValid]);

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
        onChangeProps={{
          props: {
            setState: (value: string) => apiContext?.dispatch({ type: 'expireDates', payload: { index, value } }),
          },
          checkWhetherSetState: (e) => {
            const filteredNumber = filterNumber(e.currentTarget.value);
            return checkIsAllowInput(filteredNumber);
          },
          getNewValue: (e) => {
            return filterNumber(e.currentTarget.value);
          },
        }}
        onBlurProps={{
          props: {
            setState: (value: string) => apiContext?.dispatch({ type: 'expireDates', payload: { index, value } }),
          },
          checkWhetherSetState: (e) => {
            const blurValue = e.currentTarget.value;
            return !!blurValue && blurValue.length === 1;
          },
          getNewValue: (e) => {
            const blurValue = e.currentTarget.value;
            return blurValue.padStart(2, '0');
          },
        }}
      />
      <ConditionalComponentWrapper isRender={needDividerRender}>
        <InputDivider isHide={!isValueValid}>/</InputDivider>
      </ConditionalComponentWrapper>
    </>
  );
});
