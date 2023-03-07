import React, { memo } from 'react';

import { checkIsArrayLast } from '@/utils';
import { useSelectCardNumbers } from '@/stores/CardCreatorContext';

import { CardInputWrapperPure } from '../components/CardInputWrapper';
import { CardNumberInput } from './CardNumberInput';
import { useErrorContext } from '../hooks/useErrorContext';

interface CardNumbersInputListProps {}

function CardNumbersInputList(_: CardNumbersInputListProps) {
  const cardNumbers = useSelectCardNumbers();

  const errorMessage = useErrorContext(
    {
      inValid: '카드 번호를 각각 4자리씩 입력해주세요.',
    },
    [{ errorType: 'cardNumbers', messageType: 'inValid' }]
  );

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

export const CardNumbersInputListPure = memo(CardNumbersInputList);
