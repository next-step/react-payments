import React, { useRef } from 'react';

import { checkIsArrayLast  } from '@/utils';
import useExtendedState from '@/hooks/useExtendedState';

import type { CardNumbersState } from '../types';
import { useInputEventHandler } from './hooks/useInputEventHandler';

interface CardNumberInputProps {
  // prettier-ignore
  // eslint-disable-next-line
  cardNumbersStateBundle: ReturnType<typeof useExtendedState<CardNumbersState>>;
}

function CardNumberInput({ cardNumbersStateBundle }: CardNumberInputProps) {
  const [cardNumbers, setCardNumbers] = cardNumbersStateBundle;
  const cardNumberInputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const { createInputChangeHandler } = useInputEventHandler();

  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        {cardNumbers.map((inputState, i) => {
          const { key, type, value, checkIsValid } = inputState;
          // FIXME: 로직과 UI가 완전히 혼재되어 있다 = 재사용성이 전혀 없다. 분리하는 것이 좋을 것 같다.
          const isLast = checkIsArrayLast(cardNumbers, i);
          const isOverFourNumber = checkIsValid(value);
          const dashComponentClassName = isOverFourNumber && !isLast ? 'dash' : 'dash hide';

          if (!isLast && isOverFourNumber) {
            // FIXME: 마지막 카드 번호를 입력했을 때, 그 다음 다른 input으로 가게 하려면 어떻게 해야 할까?
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
                onChange={createInputChangeHandler({ state: inputState, i, setState: setCardNumbers})}
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
