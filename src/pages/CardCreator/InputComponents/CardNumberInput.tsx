import React, { useRef, memo, Fragment } from 'react';

import { ConditionalComponentWrapper } from '@/components/ConditionalComponentWrapper';
import { useSequentialFocusWithElements } from '@/hooks/useSequentialFocusWithElements';
import { checkIsArrayLast, filterNumber } from '@/utils';

import type { CardStateSetter } from '../utils';
import type { CardNumbersState } from '../types';
import { useInputEventHandler } from './hooks/useInputEventHandler';
import { InputDivider } from './components/InputDivider';
import { CardInputWrapperPure } from './components/CardInputWrapper';

interface CardNumberInputProps {
  cardNumbers: CardNumbersState;
  createCardNumberSetter: CardStateSetter<string>;
}

function CardNumberInput({ cardNumbers, createCardNumberSetter }: CardNumberInputProps) {
  const cardNumberInputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const { createInputChangeHandler } = useInputEventHandler();
  const { toTheNextElement } = useSequentialFocusWithElements(cardNumberInputsRef);

  return (
    <CardInputWrapperPure header="카드 번호">
      <div className="input-box">
        {cardNumbers.map((inputState, i) => {
          const { key, type, value, checkIsValid, checkIsAllowInput } = inputState;
          const isLast = checkIsArrayLast(cardNumbers, i);
          const isOverFourNumber = checkIsValid(value);

          toTheNextElement(i, !isLast && isOverFourNumber);

          return (
            <Fragment key={key}>
              <input
                type={type ?? 'text'}
                value={value ?? ''}
                className="input-basic text-black"
                ref={(inputRef) => {
                  cardNumberInputsRef.current[i] = inputRef;
                }}
                onChange={createInputChangeHandler({
                  props: { setState: createCardNumberSetter(i) },
                  checkWhetherSetState: (e) => {
                    const filteredNumber = filterNumber(e.currentTarget.value);
                    return checkIsAllowInput(filteredNumber);
                  },
                  getNewValue: (e) => {
                    return filterNumber(e.currentTarget.value);
                  },
                })}
              />
              <ConditionalComponentWrapper isRender={!isLast}>
                <InputDivider isHide={!isOverFourNumber} className="dash">
                  -
                </InputDivider>
              </ConditionalComponentWrapper>
            </Fragment>
          );
        })}
      </div>
    </CardInputWrapperPure>
  );
}

export const CardNumberInputPure = memo(CardNumberInput);
