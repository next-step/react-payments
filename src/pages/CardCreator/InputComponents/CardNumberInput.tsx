import React, { useRef } from 'react';

import { ConditionalComponentWrapper } from '@/components/ConditionalComponentWrapper';
import { checkIsArrayLast  } from '@/utils';
import useExtendedState from '@/hooks/useExtendedState';
import { useSequentialFocusWithElements } from '@/hooks/useSequentialFocusWithElements';

import type { CardNumbersState } from '../types';
import { useInputEventHandler } from './hooks/useInputEventHandler';
import { InputDivider } from './components/InputDivider';
import { CardInputWrapperPure } from './components/CardInputWrapper';

interface CardNumberInputProps {
  // prettier-ignore
  // eslint-disable-next-line
  cardNumbersStateBundle: ReturnType<typeof useExtendedState<CardNumbersState>>;
}

function CardNumberInput({ cardNumbersStateBundle }: CardNumberInputProps) {
  const [cardNumbers, setCardNumbers] = cardNumbersStateBundle;
  const cardNumberInputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const { createInputChangeHandler } = useInputEventHandler();
  const { toTheNextElement } = useSequentialFocusWithElements(cardNumberInputsRef);

  return (
    <CardInputWrapperPure header="카드 번호">
      <div className="input-box">
        {cardNumbers.map((inputState, i) => {
          const { key, type, value, checkIsValid } = inputState;
          const isLast = checkIsArrayLast(cardNumbers, i);
          const isOverFourNumber = checkIsValid(value);

          toTheNextElement(i, !isLast && isOverFourNumber)

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
    </CardInputWrapperPure>
  );
}

export { CardNumberInput };
