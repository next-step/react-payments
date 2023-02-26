import React from 'react';

import { ConditionalComponentWrapper } from '@/components/ConditionalComponentWrapper';
import { checkIsArrayLast } from '@/utils';

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
          const { key, value, placeholder, checkIsValid } = expireDate;

          const isLast = checkIsArrayLast(expireDates, i);
          const isValueValid = checkIsValid(value);

          return (
            <>
              <input
                key={key}
                className="input-basic"
                type="text"
                value={value ?? ''}
                placeholder={placeholder}
                onChange={createInputChangeHandler({ state: expireDate, setState: createExpireDateSetter(i) })}
                onBlur={createInputBlurHandler({
                  props: { state: expireDate, setState: createExpireDateSetter(i) },
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
                <InputDivider isHide={!isLast && isValueValid}>/</InputDivider>
              </ConditionalComponentWrapper>
            </>
          );
        })}
      </div>
    </CardInputWrapperPure>
  );
}

export { ExpireDateInput };
