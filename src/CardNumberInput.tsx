import React, { useRef } from 'react';

import type { CardNumbersState } from '@/types/types';
import { filterNumber, updateArray, updateObject } from '@/utils/utils';

interface CardNumberInputProps {
  cardNumbersStateBundle: [CardNumbersState, React.Dispatch<React.SetStateAction<CardNumbersState>>];
}

function CardNumberInput({ cardNumbersStateBundle }: CardNumberInputProps) {
  const [cardNumbers, setCardNumbers] = cardNumbersStateBundle;
  const cardNumberInputsRef = useRef<(HTMLInputElement | null)[]>([]);

  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        {cardNumbers.map(({ key, type, value }, i) => {
          const isNotLast = i < cardNumbers.length - 1;
          const isOverThousand = value && value > 1000;
          const dashComponentClassName = isOverThousand && isNotLast ? 'dash' : 'dash hide';

          if (isNotLast && isOverThousand) {
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
                  const numberValue = filterNumber(e.currentTarget.value);
                  const fourString = Math.floor(numberValue / 1000);
                  setCardNumbers((prev) => {
                    const inputNumber = fourString || undefined;
                    if (prev[i].value === inputNumber) {
                      return prev;
                    }

                    return updateArray(prev, i, updateObject(prev[i], 'value', inputNumber));
                  });
                }}
              />
              {isNotLast && <div className={`text-black ${dashComponentClassName}`}>-</div>}
            </>
          );
        })}
      </div>
    </div>
  );
}

export { CardNumberInput };
