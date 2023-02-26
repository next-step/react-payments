import React, { useRef, memo, Fragment, forwardRef, useImperativeHandle, ForwardedRef } from 'react';

import { ConditionalComponentWrapper } from '@/components/ConditionalComponentWrapper';
import { useSequentialFocusWithElements } from '@/hooks/useSequentialFocusWithElements';
import { checkIsArrayLast, filterNumber } from '@/utils';

import type { CardStateSetter } from '../utils';
import type { CardNumbersState, ErrorMessageType } from '../types';
import { useInputEventHandler } from './hooks/useInputEventHandler';
import { InputDivider } from './components/InputDivider';
import { CardInputWrapperPure } from './components/CardInputWrapper';
import { useErrorMessage } from './hooks/useErrorMessage';

interface CardNumberInputProps {
  cardNumbers: CardNumbersState;
  createCardNumberSetter: CardStateSetter<string>;
}

export interface CardNumberInputRef {
  setErrorMessage: (messageType: ErrorMessageType) => void;
}

function CardNumberInput(
  { cardNumbers, createCardNumberSetter }: CardNumberInputProps,
  ref: ForwardedRef<CardNumberInputRef>
) {
  const [errorMessage, setErrorMessage] = useErrorMessage({
    inValid: '카드 번호를 각각 4자리씩 입력해주세요.',
  });
  const cardNumberInputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const { createInputChangeHandler } = useInputEventHandler();
  const { toTheNextElement } = useSequentialFocusWithElements(cardNumberInputsRef);

  useImperativeHandle(ref, () => ({ setErrorMessage }));

  return (
    <CardInputWrapperPure header="카드 번호" errorMessage={errorMessage}>
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

export const CardNumberInputPure = memo(forwardRef(CardNumberInput));
