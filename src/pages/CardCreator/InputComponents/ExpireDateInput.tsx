import React, { ForwardedRef, forwardRef, Fragment, memo, useImperativeHandle, useState } from 'react';

import { ConditionalComponentWrapper } from '@/components/ConditionalComponentWrapper';
import { useSequentialFocusWithElements } from '@/hooks/useSequentialFocusWithElements';
import { checkIsArrayLast, filterNumber } from '@/utils';

import type { CardStateSetter } from '../utils';
import type { ExpireDatesState, ErrorMessageType } from '../types';
import { InputDivider } from './components/InputDivider';
import { CardInputWrapperPure } from './components/CardInputWrapper';
import { useErrorMessage } from './hooks/useErrorMessage';
import { CardInfoInputElement } from './components/CardInfoInputElement';

interface ExpireDateInputProps {
  expireDates: ExpireDatesState;
  createExpireDateSetter: CardStateSetter<string>;
}

export interface ExpireDateInputRef {
  setErrorMessage: (messageType: ErrorMessageType) => void;
}

function ExpireDateInput(
  { expireDates, createExpireDateSetter }: ExpireDateInputProps,
  ref: ForwardedRef<ExpireDateInputRef>
) {
  const [errorMessage, setErrorMessage] = useErrorMessage({
    inValid: 'MM/YY 형태로 만료일을 입력해주세요.',
  });
  useImperativeHandle(ref, () => ({ setErrorMessage }));

  return (
    <CardInputWrapperPure header="만료일" errorMessage={errorMessage}>
      <div className="input-box w-50">
        {expireDates.map((expireDate, i) => {
          const isLast = checkIsArrayLast(expireDates, i);
          return <ExpireDate key={expireDate.key} expireDate={expireDate} index={i} needDividerRender={!isLast} />;
        })}
      </div>
    </CardInputWrapperPure>
  );
}

const EXPIRE_DATE_ELEMENT_SEQUENCE_KEY = 'expireDate';

interface ExpireDateProps {
  expireDate: ExpireDatesState[number];
  index: number;
  needDividerRender: boolean;
}

function ExpireDate({ expireDate, index, needDividerRender }: ExpireDateProps) {
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

export const ExpireDateInputPure = memo(forwardRef(ExpireDateInput));
