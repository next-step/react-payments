import React, { ForwardedRef, forwardRef, Fragment, memo, useImperativeHandle } from 'react';

import { ConditionalComponentWrapper } from '@/components/ConditionalComponentWrapper';
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
          const { key, value, placeholder, checkIsValid, checkIsAllowInput } = expireDate;

          const isLast = checkIsArrayLast(expireDates, i);
          const isValueValid = checkIsValid(value);

          return (
            <Fragment key={key}>
              <CardInfoInputElement
                className="input-basic"
                type="text"
                value={value ?? ''}
                placeholder={placeholder}
                onChangeProps={{
                  props: { setState: createExpireDateSetter(i) },
                  checkWhetherSetState: (e) => {
                    const filteredNumber = filterNumber(e.currentTarget.value);
                    return checkIsAllowInput(filteredNumber);
                  },
                  getNewValue: (e) => {
                    return filterNumber(e.currentTarget.value);
                  },
                }}
                onBlurProps={{
                  props: { setState: createExpireDateSetter(i) },
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
              <ConditionalComponentWrapper isRender={!isLast}>
                <InputDivider isHide={!isValueValid}>/</InputDivider>
              </ConditionalComponentWrapper>
            </Fragment>
          );
        })}
      </div>
    </CardInputWrapperPure>
  );
}

export const ExpireDateInputPure = memo(forwardRef(ExpireDateInput));
