import React, { ChangeEvent, memo } from 'react';

import { ConditionalComponentWrapper } from '@/components';
import { CardNumbersState, useCardContextApiSelector } from '@/stores/CardContext';
import { useErrorContextApiSelector, useErrorSelector } from '@/stores/ErrorContext';
import { filterNumber } from '@/utils';

import { InputDivider, CardInfoInputElement } from '../../components';

interface CardNumberProps {
  cardNumber: CardNumbersState[number];
  index: number;
  needDividerRender: boolean;
}

export const CardNumberInput = memo(({ cardNumber, index, needDividerRender }: CardNumberProps) => {
  const { key, type, value, checkIsAllowInput, setRef } = cardNumber;

  const cardContextApis = useCardContextApiSelector();
  const errorContextApis = useErrorContextApiSelector();

  // prop 변화에 따라 새롭게 만들어져야하는 객체 = memo를 둠으로서 오히려 메모리와 성능에 손해를 줄 수 있음.
  const changeEventProps = {
    props: {
      setState: (newVal: string) => {
        cardContextApis?.dispatch({ type: 'cardNumbers', payload: { index, value: newVal } });
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

  const blurEventProps = {
    props: {
      eventCallback: () => {
        if (!cardNumber.checkIsValid())
          errorContextApis?.dispatch({ type: cardNumber.key, message: cardNumber.getInvalidMessage() });
        else errorContextApis?.dispatch({});
      },
    },
  };

  const errorStore = useErrorSelector();
  const error = { isError: errorStore.type === key };

  const isOverFourNumber = cardNumber.checkIsValid();

  return (
    <>
      <CardInfoInputElement
        type={type ?? 'text'}
        value={value ?? ''}
        className="input-basic text-black"
        ref={setRef?.bind(cardNumber)}
        changeEventProps={changeEventProps}
        blurEventProps={blurEventProps}
        error={error}
      />
      <ConditionalComponentWrapper isRender={needDividerRender}>
        <InputDivider hiding={!isOverFourNumber} className="dash">
          -
        </InputDivider>
      </ConditionalComponentWrapper>
    </>
  );
});
