import React, { Fragment, memo } from 'react';

import { ConditionalComponentWrapper } from '@/components/ConditionalComponentWrapper';
import { checkIsArrayLast, filterNumber } from '@/utils';

import type { CardStateSetter } from '../utils';
import type { ExpireDatesState } from '../types';
import { useInputEventHandler } from './hooks/useInputEventHandler';
import { InputDivider } from './components/InputDivider';
import { CardInputWrapperPure } from './components/CardInputWrapper';

interface ExpireDateInputProps {
  expireDates: ExpireDatesState;
  createExpireDateSetter: CardStateSetter<string>;
}

function ExpireDateInput({ expireDates, createExpireDateSetter }: ExpireDateInputProps) {
  const { createInputBlurHandler, createInputChangeHandler } = useInputEventHandler();

  return (
    <CardInputWrapperPure header="만료일">
      <div className="input-box w-50">
        {expireDates.map((expireDate, i) => {
          const { key, value, placeholder, checkIsValid, checkIsAllowInput } = expireDate;

          const isLast = checkIsArrayLast(expireDates, i);
          const isValueValid = checkIsValid(value);

          return (
            <Fragment key={key}>
              <input
                className="input-basic"
                type="text"
                value={value ?? ''}
                placeholder={placeholder}
                onChange={createInputChangeHandler({
                  props: { setState: createExpireDateSetter(i) },
                  checkWhetherSetState: (e) => {
                    const filteredNumber = filterNumber(e.currentTarget.value);
                    return checkIsAllowInput(filteredNumber);
                  },
                  getNewValue: (e) => {
                    return filterNumber(e.currentTarget.value);
                  },
                })}
                onBlur={createInputBlurHandler({
                  props: { setState: createExpireDateSetter(i) },
                  checkWhetherSetState: (e) => {
                    const blurValue = e.currentTarget.value;
                    return !!blurValue && blurValue.length === 1;
                  },
                  getNewValue: (e) => {
                    const blurValue = e.currentTarget.value;
                    return blurValue.padStart(2, '0');
                  },
                })}
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

export const ExpireDateInputPure = memo(ExpireDateInput);
