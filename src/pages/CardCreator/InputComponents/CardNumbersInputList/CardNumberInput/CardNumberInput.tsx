import React, { memo, useContext } from 'react';

import { ConditionalComponentWrapper } from '@/components/ConditionalComponentWrapper';
import { CardNumbersState } from '@/pages/CardCreator/types';
import { ApiContext } from '@/stores/cardCreator';
import { useSequentialFocusWithElements } from '@/hooks/useSequentialFocusWithElements';
import { filterNumber } from '@/utils';

import { InputDivider } from '../../components/InputDivider';
import { CardInfoInputElement } from '../../components/CardInfoInputElement';

const CARD_NUMBER_INPUT_REF_KEY = 'cardNumber';

interface CardNumberProps {
  cardNumber: CardNumbersState[number];
  index: number;
  needDividerRender: boolean;
}

// CardNumber 4개중의 하나의 input을 담당한다.
export const CardNumberInput = memo(({ cardNumber, index, needDividerRender }: CardNumberProps) => {
  const { type, value, checkIsValid, checkIsAllowInput } = cardNumber;

  const apiContext = useContext(ApiContext);

  const isOverFourNumber = checkIsValid(value);

  const { setElement, toTheNextElement } = useSequentialFocusWithElements();
  toTheNextElement(CARD_NUMBER_INPUT_REF_KEY, index, isOverFourNumber);

  return (
    <>
      <CardInfoInputElement
        type={type ?? 'text'}
        value={value ?? ''}
        className="input-basic text-black"
        ref={(el) => {
          setElement(CARD_NUMBER_INPUT_REF_KEY, index, el);
        }}
        // TODO: 프로젝트 전체에서 익명함수와 템플릿 리터럴을 최대한 줄이도록 하기 -> 렌더링때마다 새로운 객체가 생성되기 때문에, 최적화에 어려움이 있음.
        onChangeProps={{
          props: {
            setState: (newVal: string) => {
              apiContext?.dispatch({ type: 'cardNumbers', payload: { index, value: newVal } });
            },
          },
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
    </>
  );
});
