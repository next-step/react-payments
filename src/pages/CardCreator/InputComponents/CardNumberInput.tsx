import React, { memo, Fragment, forwardRef, useImperativeHandle, ForwardedRef, useState, useRef } from 'react';

import { ConditionalComponentWrapper } from '@/components/ConditionalComponentWrapper';
import { useSequentialFocusWithElements } from '@/hooks/useSequentialFocusWithElements';
import { checkIsArrayLast, filterNumber } from '@/utils';

import type { CardStateSetter } from '../utils';
import type { CardNumbersState, ErrorMessageType } from '../types';
import { InputDivider } from './components/InputDivider';
import { CardInputWrapperPure } from './components/CardInputWrapper';
import { useErrorMessage } from './hooks/useErrorMessage';
import { CardInfoInputElement } from './components/CardInfoInputElement';

const CARD_NUMBER_INPUT_REF_KEY = 'cardNumber';

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

  useImperativeHandle(ref, () => ({ setErrorMessage }));

  return (
    <CardInputWrapperPure header="카드 번호" errorMessage={errorMessage}>
      <div className="input-box">
        {cardNumbers.map((cardNumber, i) => {
          const isLast = checkIsArrayLast(cardNumbers, i);
          return <CardNumber key={cardNumber.key} needDividerRender={!isLast} cardNumber={cardNumber} index={i} />;
        })}
      </div>
    </CardInputWrapperPure>
  );
}

interface CardNumberProps {
  cardNumber: CardNumbersState[number];
  index: number;
  needDividerRender: boolean;
}

// CardNumber 4개중의 하나의 input을 담당한다.
function CardNumber({ cardNumber, index, needDividerRender }: CardNumberProps) {
  // 이 컴포넌트만의 state를 가지면, 이곳만 렌더가 갱신된다.
  const [cardNumberState, setCardNumberState] = useState(cardNumber);
  const { key, type, value, checkIsValid, checkIsAllowInput } = cardNumberState;
  const isOverFourNumber = checkIsValid(value);

  const { setElement, toTheNextElement } = useSequentialFocusWithElements();

  toTheNextElement(CARD_NUMBER_INPUT_REF_KEY, index, isOverFourNumber);

  return (
    <Fragment key={key}>
      <CardInfoInputElement
        type={type ?? 'text'}
        value={value ?? ''}
        className="input-basic text-black"
        ref={(el) => {
          setElement(CARD_NUMBER_INPUT_REF_KEY, index, el);
        }}
        // TODO: 프로젝트 전체에서 익명함수와 템플릿 리터럴을 최대한 줄이도록 하기 -> 렌더링때마다 새로운 객체가 생성되기 때문에, 최적화에 어려움이 있음.
        onChangeProps={{
          props: { setState: (newVal: string) => setCardNumberState((prev) => ({ ...prev, value: newVal })) },
          checkWhetherSetState: (e) => {
            const filteredNumber = filterNumber(e.currentTarget.value);
            return checkIsAllowInput(filteredNumber);
          },
          getNewValue: (e) => {
            return filterNumber(e.currentTarget.value);
          },
        }}
      />
      <ConditionalComponentWrapper isRender={needDividerRender}>
        <InputDivider isHide={!isOverFourNumber} className="dash">
          -
        </InputDivider>
      </ConditionalComponentWrapper>
    </Fragment>
  );
}

export const CardNumberInputPure = memo(forwardRef(CardNumberInput));
