import React, { useState } from 'react';

import { ConditionalComponentWrapper } from '@/components/ConditionalComponentWrapper';
import type { ExpireDatesState } from '@/pages/CardCreator/types';
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

export function ExpireDateInput({ expireDate, index, needDividerRender }: ExpireDateInputProps) {
  const [expireDateState, setExpireDateState] = useState(expireDate);
  const { value, placeholder, checkIsValid, checkIsAllowInput } = expireDateState;

  const { setElement, toTheNextElement } = useSequentialFocusWithElements();

  const isValueValid = checkIsValid(value);
  toTheNextElement(EXPIRE_DATE_ELEMENT_SEQUENCE_KEY, index, isValueValid);

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
          props: { setState: (value: string) => setExpireDateState((prev) => ({ ...prev, value })) },
          checkWhetherSetState: (e) => {
            const filteredNumber = filterNumber(e.currentTarget.value);
            return checkIsAllowInput(filteredNumber);
          },
          getNewValue: (e) => {
            return filterNumber(e.currentTarget.value);
          },
        }}
        onBlurProps={{
          props: { setState: (value: string) => setExpireDateState((prev) => ({ ...prev, value })) },
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
}
