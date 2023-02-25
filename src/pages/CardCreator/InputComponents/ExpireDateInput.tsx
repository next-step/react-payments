import React from 'react';

import useExtendedState from '@/hooks/useExtendedState';
import { checkIsArrayLast  } from '@/utils';

import { ExpireDatesState } from '../types';
import { useInputEventHandler } from './hooks/useInputEventHandler';

interface ExpireDateInputProps {
  // prettier-ignore
  // eslint-disable-next-line
  expireDatesStateBundle: ReturnType<typeof useExtendedState<ExpireDatesState>>;
}

function ExpireDateInput({
  expireDatesStateBundle,
}: ExpireDateInputProps) {
  const [expireDates, setExpireDates] = expireDatesStateBundle;
  const { createInputBlurHandler, createInputChangeHandler } = useInputEventHandler();

  return (
    <div className="input-container">
      <span className="input-title">만료일</span>
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
                onChange={createInputChangeHandler({ state: expireDate, i, setState: setExpireDates })}
                onBlur={createInputBlurHandler({
                  props: { state: expireDate, i, setState: setExpireDates },
                  checkWhetherSetState: (e) => {
                    const blurValue = e.currentTarget.value;
                    return !!blurValue && blurValue.length === 1;
                  },
                  getNewValue: (e) => {
                    const blurValue = e.currentTarget.value;
                    return blurValue.padStart(2, '0');
                  }
                })}
              />
              {/* TODO: 이것도 하나의 component로 뺄 수 있다. */}
              {!isLast && isValueValid && <div className="text-black">/</div>}
            </>
          );
        })}
      </div>
    </div>
  );
}

export { ExpireDateInput };
