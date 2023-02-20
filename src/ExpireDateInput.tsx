import React from 'react';

import useExtendedState from './hooks/useExtendedState';
import { ExpireDatesState } from './types/types';
import { checkIsArrayLast, filterNumber, updateArray, updateObject } from './utils/utils';

interface ExpireDateInputProps {
  // prettier-ignore
  // eslint-disable-next-line
  expireDatesStateBundle: ReturnType<typeof useExtendedState<ExpireDatesState>>;
}

function ExpireDateInput({
  expireDatesStateBundle,
}: ExpireDateInputProps) {
  const [expireDates, setExpireDates] = expireDatesStateBundle;
  return (
    <div className="input-container">
      <span className="input-title">만료일</span>
      <div className="input-box w-50">
        {expireDates.map(({ key, value, placeholder, checkIsValid, checkIsAllowInput }, i) => {
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
                onChange={(e) => {
                  const inputVal = filterNumber(e.currentTarget.value);
                  if (!checkIsAllowInput(inputVal)) {
                    return;
                  }

                  setExpireDates(
                    (prevExpireDates) =>
                      updateArray(prevExpireDates, i, updateObject(prevExpireDates[i], 'value', inputVal || undefined)),
                    {
                      stateRefreshValidator: (prevExpireDates) => {
                        const prevValue = prevExpireDates[i].value;
                        return prevValue !== inputVal;
                      },
                    }
                  );
                }}
                onBlur={(e) => {
                  const blurValue = e.currentTarget.value;
                  if (blurValue && blurValue.length !== 0) {
                    if (blurValue.length === 1) {
                      const paddedValue = blurValue.padStart(2, '0');
                      setExpireDates(
                        (prevExpireDates) =>
                          updateArray(prevExpireDates, i, updateObject(prevExpireDates[i], 'value', paddedValue)),
                        {
                          stateRefreshValidator: (prevExpireDates) => {
                            const prevValue = prevExpireDates[i].value;
                            return prevValue !== paddedValue;
                          },
                        }
                      );
                      e.currentTarget.value = paddedValue;
                    }
                  }
                }}
              />
              {!isLast && isValueValid && <div className="text-black">/</div>}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default ExpireDateInput;
