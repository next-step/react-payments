import React, { ChangeEvent, memo, useMemo } from 'react';

import { useCardContextApiSelector, CardOwnersState } from '@/stores/CardContext';

import { CardInputWrapperPure, CardInfoInputElement } from '../components';
import { useErrorContext } from '../hooks';

interface CardOwnerInputProps {
  cardOwners?: CardOwnersState;
}

function CardOwnerInput({ cardOwners }: CardOwnerInputProps) {
  const cardOwner = useMemo(() => cardOwners?.[0], [cardOwners]);

  const cardContextApis = useCardContextApiSelector();

  const errorMessage = useErrorContext(
    {
      inValid: '소유주 이름을 입력해주세요.',
    },
    [{ errorType: 'cardOwners', messageType: 'inValid' }]
  );

  const changeEventProps = {
    props: {
      setState: (value: string) => cardContextApis?.dispatch({ type: 'cardOwners', payload: { index: 0, value } }),
    },
    checkWhetherSetState: (e: ChangeEvent<HTMLInputElement>) => {
      return !!cardOwner?.checkIsAllowInput?.(e.currentTarget.value);
    },
    getNewValue: (e: ChangeEvent<HTMLInputElement>) => {
      return e.currentTarget.value;
    },
  };

  const inputHeader = useMemo(
    () => ['카드 소유자 이름(선택)', `${cardOwner?.value?.length || 0} / 30`],
    [cardOwner?.value]
  );

  return (
    <CardInputWrapperPure header={inputHeader} errorMessage={errorMessage}>
      <CardInfoInputElement
        type="text"
        className="input-basic"
        value={cardOwner?.value ?? ''}
        placeholder={cardOwner?.placeholder}
        ref={cardOwner?.setRef?.bind(cardOwner)}
        changeEventProps={changeEventProps}
      />
    </CardInputWrapperPure>
  );
}

export const CardOwnerInputPure = memo(CardOwnerInput);
