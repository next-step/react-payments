import React, { useRef } from 'react';

import { ConditionalComponentWrapper } from '@/components/ConditionalComponentWrapper';
import { checkIsArrayLast  } from '@/utils';
import useExtendedState from '@/hooks/useExtendedState';

import type { CardNumbersState } from '../types';
import { useInputEventHandler } from './hooks/useInputEventHandler';
import { InputDivider } from './InputDivider';

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
          const isLast = checkIsArrayLast(cardNumbers, i);
          const isOverFourNumber = checkIsValid(value);

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
              <ConditionalComponentWrapper isRender={!isLast} >
                <InputDivider isHide={isOverFourNumber && !isLast} className="dash" >-</InputDivider>
              </ConditionalComponentWrapper>
            </>
          );
        })}
      </div>
    </div>
  );
}

export { CardNumberInput };
