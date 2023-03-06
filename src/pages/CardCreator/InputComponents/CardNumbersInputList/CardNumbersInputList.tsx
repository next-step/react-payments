import React, { memo, forwardRef, useImperativeHandle, ForwardedRef } from 'react';

import { checkIsArrayLast } from '@/utils';

import type { CardNumbersState, ErrorMessageType } from '../../types';
import { CardInputWrapperPure } from '../components/CardInputWrapper';
import { useErrorMessage } from '../hooks/useErrorMessage';
import { CardNumberInput } from './CardNumberInput';

interface CardNumbersInputListProps {
  cardNumbers: CardNumbersState;
}

export interface CardNumbersInputListRef {
  setErrorMessage: (messageType: ErrorMessageType) => void;
}

function CardNumbersInputList({ cardNumbers }: CardNumbersInputListProps, ref: ForwardedRef<CardNumbersInputListRef>) {
  const [errorMessage, setErrorMessage] = useErrorMessage({
    inValid: '카드 번호를 각각 4자리씩 입력해주세요.',
  });

  useImperativeHandle(ref, () => ({ setErrorMessage }));

  return (
    <CardInputWrapperPure header="카드 번호" errorMessage={errorMessage}>
      <div className="input-box">
        {cardNumbers.map((cardNumber, i) => {
          const isLast = checkIsArrayLast(cardNumbers, i);
          return <CardNumberInput key={cardNumber.key} needDividerRender={!isLast} cardNumber={cardNumber} index={i} />;
        })}
      </div>
    </CardInputWrapperPure>
  );
}

export const CardNumbersInputListPure = memo(forwardRef(CardNumbersInputList));
