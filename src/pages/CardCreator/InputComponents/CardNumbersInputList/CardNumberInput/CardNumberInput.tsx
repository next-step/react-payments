import React, { ChangeEvent, memo, useContext, useEffect, useMemo } from 'react';

import { ConditionalComponentWrapper } from '@/components/ConditionalComponentWrapper';
import { CardNumbersState } from '@/pages/CardCreator/types';
import { ApiContext } from '@/stores/CardCreatorContext';
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

  useEffect(() => {
    toTheNextElement(CARD_NUMBER_INPUT_REF_KEY, index, isOverFourNumber);
  }, [toTheNextElement, index, isOverFourNumber]);

  // prop 변화에 따라 새롭게 만들어져야하는 객체 = memo를 둠으로서 오히려 메모리와 성능에 손해를 줄 수 있음.
  const changeProps = {
    props: {
      setState: (newVal: string) => {
        apiContext?.dispatch({ type: 'cardNumbers', payload: { index, value: newVal } });
      },
    },
    checkWhetherSetState: (e: ChangeEvent<HTMLInputElement>) => {
      const filteredNumber = filterNumber(e.currentTarget.value);
      return checkIsAllowInput(filteredNumber);
    },
    getNewValue: (e: ChangeEvent<HTMLInputElement>) => {
      return filterNumber(e.currentTarget.value);
    },
  };

  return (
    <>
      <CardInfoInputElement
        type={type ?? 'text'}
        value={value ?? ''}
        className="input-basic text-black"
        ref={(el) => {
          setElement(CARD_NUMBER_INPUT_REF_KEY, index, el);
        }}
        onChangeProps={changeProps}
      />
      <ConditionalComponentWrapper isRender={needDividerRender}>
        <InputDivider isHide={!isOverFourNumber} className="dash">
          -
        </InputDivider>
      </ConditionalComponentWrapper>
    </>
  );
});
