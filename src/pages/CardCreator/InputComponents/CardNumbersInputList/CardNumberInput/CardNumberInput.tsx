import React, { ChangeEvent, memo } from 'react';

import { ConditionalComponentWrapper } from '@/components/ConditionalComponentWrapper';
import type { CardNumbersState } from '@/stores/CardCreatorContext/CardCreatorStates';
import { useCardContextApiSelector } from '@/stores/CardCreatorContext';
import { filterNumber } from '@/utils';

import { InputDivider } from '../../components/InputDivider';
import { CardInfoInputElement } from '../../components/CardInfoInputElement';

interface CardNumberProps {
  cardNumber: CardNumbersState[number];
  index: number;
  needDividerRender: boolean;
}

export const CardNumberInput = memo(({ cardNumber, index, needDividerRender }: CardNumberProps) => {
  const { type, value, checkIsAllowInput, setRef } = cardNumber;

  const cardStoreApiContext = useCardContextApiSelector();

  const isOverFourNumber = cardNumber.checkIsValid();

  // prop 변화에 따라 새롭게 만들어져야하는 객체 = memo를 둠으로서 오히려 메모리와 성능에 손해를 줄 수 있음.
  const changeProps = {
    props: {
      setState: (newVal: string) => {
        cardStoreApiContext?.dispatch({ type: 'cardNumbers', payload: { index, value: newVal } });
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
        ref={setRef?.bind(cardNumber)}
        onChangeProps={changeProps}
      />
      <ConditionalComponentWrapper isRender={needDividerRender}>
        <InputDivider hiding={!isOverFourNumber} className="dash">
          -
        </InputDivider>
      </ConditionalComponentWrapper>
    </>
  );
});
