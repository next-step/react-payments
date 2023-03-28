import React, { ChangeEvent, HTMLInputTypeAttribute, memo } from 'react';

import { ConditionalComponentWrapper } from '@/components';
import { CardNumberInputElement, useCardApiContext } from '@/stores/CardContext';
import { filterNumber } from '@/utils';

import { InputDivider, CardInfoInputElement } from '../../components';

interface CardNumberProps {
  type?: HTMLInputTypeAttribute;
  cardNumber: CardNumberInputElement;
  index: number;
  needDividerRender: boolean;
}

export const CardNumberInput = memo(({ type = 'text', cardNumber, index, needDividerRender }: CardNumberProps) => {
  const { value, setRef, errorMessage } = cardNumber;
  const isError = !!errorMessage;

  const cardContextApis = useCardApiContext();

  // prop 변화에 따라 새롭게 만들어져야하는 객체 = memo를 둠으로서 오히려 메모리와 성능에 손해를 줄 수 있음.
  const changeEventProps = {
    props: {
      setState: (value: string) => {
        // setState하기 전에 value를 스스로 판단해 isValidate의 값을 수정한다.
        cardContextApis?.dispatch({ type: 'cardNumbers', payload: { index, value } });
      },
    },
    checkWhetherSetState: (e: ChangeEvent<HTMLInputElement>) => {
      const filteredNumber = filterNumber(e.currentTarget.value);
      return !filteredNumber || filteredNumber.length <= 4;
    },
    getNewValue: (e: ChangeEvent<HTMLInputElement>) => {
      return filterNumber(e.currentTarget.value);
    },
  };

  return (
    <>
      <CardInfoInputElement
        type={type}
        value={value ?? ''}
        className="input-basic text-black"
        ref={setRef.bind(cardNumber)}
        changeEventProps={changeEventProps}
        error={{ isError }}
      />
      <ConditionalComponentWrapper isRender={needDividerRender}>
        <InputDivider hiding={!isError} className="dash">
          -
        </InputDivider>
      </ConditionalComponentWrapper>
    </>
  );
});
