import React, { useRef } from 'react';

import type { CardNumbersState } from '@/types/types';
import { checkIsArrayLast, filterNumber, updateArray, updateObject } from '@/utils/utils';
import useExtendedState from './hooks/useExtendedState';

interface CardNumberInputProps {
  // prettier-ignore
// eslint-disable-next-line
  cardNumbersStateBundle: ReturnType<typeof useExtendedState<CardNumbersState>>;
}

function CardNumberInput({ cardNumbersStateBundle }: CardNumberInputProps) {
  const [cardNumbers, setCardNumbers] = cardNumbersStateBundle;
  const cardNumberInputsRef = useRef<(HTMLInputElement | null)[]>([]);

  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        {cardNumbers.map(({ key, type, value }, i) => {
          const isLast = checkIsArrayLast(cardNumbers, i);
          const isOverThousand = value && value.length > 4;
          const dashComponentClassName = isOverThousand && !isLast ? 'dash' : 'dash hide';

          if (!isLast && isOverThousand) {
            if (document.activeElement === cardNumberInputsRef.current[i]) {
              cardNumberInputsRef.current[i + 1]?.focus();
            }
          }

          return (
            <>
              <input
                key={key}
                type={type ?? 'text'}
                value={value ?? ''}
                className="input-basic text-black"
                ref={(inputRef) => {
                  cardNumberInputsRef.current[i] = inputRef;
                }}
                onChange={(e) => {
                  const numberString = filterNumber(e.currentTarget.value);
                  const fourString = numberString.substring(0, 4);
                  setCardNumbers((prev) => {
                    return updateArray(prev, i, updateObject(prev[i], 'value', fourString));
                  }, {
                    stateRefreshValidator: (prev) => {
                      return prev[i].value !== fourString
                    }
                  });
                }}
              />
              {!isLast && <div className={`text-black ${dashComponentClassName}`}>-</div>}
            </>
          );
        })}
      </div>
    </div>
  );
}

export { CardNumberInput };
