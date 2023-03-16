import React, { memo, forwardRef, useImperativeHandle, ForwardedRef } from 'react';

import { checkIsArrayLast } from '@/utils';
import type { CardNumbersState } from '@/stores/CardContext';

import { CardInputWrapperPure } from '../components';
import { useErrorContext } from '../hooks';
import { CardNumberInput } from './CardNumberInput';

export interface CardNumbersInputListRefs {
  checkIsEveryInputValid: () => boolean;
}

interface CardNumbersInputListProps {
  cardNumbers?: CardNumbersState;
}

function CardNumbersInputList({ cardNumbers }: CardNumbersInputListProps, ref: ForwardedRef<CardNumbersInputListRefs>) {
  const errorMessage = useErrorContext(
    {
      inValid: '카드 번호를 각각 4자리씩 입력해주세요.',
    },
    [{ errorType: 'cardNumbers', messageType: 'inValid' }]
  );

  useImperativeHandle(ref, () => ({
    checkIsEveryInputValid: () => {
      return !!cardNumbers?.every((cardNumber, i) => {
        const isValid = cardNumber.checkIsValid();

        if (!isValid) return isValid;

        if (!checkIsArrayLast(cardNumbers, i)) {
          cardNumbers?.[i + 1].ref?.focus();
        }

        return isValid;
      });
    },
  }));

  return (
    <CardInputWrapperPure header="카드 번호" errorMessage={errorMessage}>
      <div className="input-box">
        {cardNumbers?.map((cardNumber, i) => {
          const isLast = checkIsArrayLast(cardNumbers, i);
          return <CardNumberInput key={cardNumber.key} needDividerRender={!isLast} cardNumber={cardNumber} index={i} />;
        })}
      </div>
    </CardInputWrapperPure>
  );
}

export const CardNumbersInputListPure = memo(forwardRef(CardNumbersInputList));
